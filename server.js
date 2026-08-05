const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');
const multer = require('multer');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// ===== MIDDLEWARE =====
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

// ===== MULTER SETUP =====
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    const dir = './public/uploads';
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
    cb(null, dir);
  },
  filename: function (req, file, cb) {
    cb(null, 'bukti_' + Date.now() + path.extname(file.originalname));
  }
});
const upload = multer({
  storage: storage,
  limits: { fileSize: 10 * 1024 * 1024 }
});

// ===== CONFIG =====
const CONFIG_PATH = path.join(__dirname, 'data', 'config.json');

function readConfig() {
  try {
    if (!fs.existsSync(CONFIG_PATH)) {
      const defaultConfig = {
        telegram: {
          token: '7833520558:AAHO8cBmbsxQpJwZFTFNWCAL15n8lIzV8xQ',
          chatId: '6349562246'
        },
        payment: {
          autoConfirm: false,
          methods: {
            DANA: '0895392249321',
            GOPAY: '0895392249321',
            QRIS: 'https://cdn.phototourl.com/member/2026-08-05-52e461e8-1db0-4b9a-9657-bd4dc5db96fd.jpg',
            OVO: 'tidak ada',
            SeaBank: '9016123456789012',
            Mandiri: '131-00-1234567-8',
            BCA: '0123456789'
          }
        },
        receipt: {
          title: 'Struk Pembayaran Gustaf Hosting',
          footer: 'Terima kasih, konfirmasi akan segera diproses oleh tim kami.'
        }
      };
      if (!fs.existsSync('./data')) {
        fs.mkdirSync('./data', { recursive: true });
      }
      fs.writeFileSync(CONFIG_PATH, JSON.stringify(defaultConfig, null, 2));
      return defaultConfig;
    }
    return JSON.parse(fs.readFileSync(CONFIG_PATH, 'utf8'));
  } catch (error) {
    console.error('Error reading config:', error);
    return {};
  }
}

function saveConfig(config) {
  fs.writeFileSync(CONFIG_PATH, JSON.stringify(config, null, 2));
}

// ===== AUTH =====
const ADMIN_USERNAME = process.env.ADMIN_USERNAME || 'gustaf1922';
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || '123';

app.post('/api/login', (req, res) => {
  const { username, password } = req.body;
  if (username === ADMIN_USERNAME && password === ADMIN_PASSWORD) {
    res.json({ success: true });
  } else {
    res.status(401).json({ success: false, error: 'Username atau password salah!' });
  }
});

// ===== API ROUTES =====

app.get('/api/config', (req, res) => {
  const config = readConfig();
  res.json(config);
});

app.post('/api/config', (req, res) => {
  const config = readConfig();
  const newConfig = req.body;
  if (newConfig.telegram) {
    config.telegram = { ...config.telegram, ...newConfig.telegram };
  }
  if (newConfig.payment) {
    config.payment = { ...config.payment, ...newConfig.payment };
  }
  if (newConfig.receipt) {
    config.receipt = { ...config.receipt, ...newConfig.receipt };
  }
  saveConfig(config);
  res.json({ success: true, config });
});

app.post('/api/payment/method', (req, res) => {
  const config = readConfig();
  const { method, value } = req.body;
  if (config.payment.methods[method] !== undefined) {
    config.payment.methods[method] = value;
    saveConfig(config);
    res.json({ success: true, config });
  } else {
    res.status(400).json({ error: 'Method not found' });
  }
});

app.post('/api/upload/qris', upload.single('qris'), (req, res) => {
  if (!req.file) {
    return res.status(400).json({ error: 'No file uploaded' });
  }
  const config = readConfig();
  const filename = '/uploads/' + req.file.filename;
  config.payment.methods.QRIS = filename;
  saveConfig(config);
  res.json({ success: true, filename: filename, url: filename });
});

app.post('/api/payment/auto-confirm', (req, res) => {
  const config = readConfig();
  config.payment.autoConfirm = req.body.enabled;
  saveConfig(config);
  res.json({ success: true, autoConfirm: config.payment.autoConfirm });
});

app.get('/api/transaction/:trxId', async (req, res) => {
  try {
    const config = readConfig();
    const { trxId } = req.params;
    const axios = require('axios');
    const response = await axios.get(`https://api.telegram.org/bot${config.telegram.token}/getUpdates`);
    let isConfirmed = false;
    if (response.data && response.data.ok) {
      for (const update of response.data.result || []) {
        if (update.message && update.message.text) {
          const text = update.message.text;
          if (text.includes('/konfirmasi') && text.includes(trxId)) {
            isConfirmed = true;
            break;
          }
        }
      }
    }
    res.json({
      transactionId: trxId,
      confirmed: isConfirmed,
      autoConfirm: config.payment.autoConfirm
    });
  } catch (error) {
    res.status(500).json({ error: 'Gagal cek status' });
  }
});

app.post('/api/send-confirmation', upload.single('screenshot'), async (req, res) => {
  try {
    const config = readConfig();
    const { name, method, product, transactionId, date, time } = req.body;
    const axios = require('axios');
    const FormData = require('form-data');

    const message = `🆕 *KONFIRMASI PEMBAYARAN BARU* 🆕\n\n` +
      `📋 *Detail Transaksi*\n` +
      `━━━━━━━━━━━━━━━━━━━━\n` +
      `🆔 ID Transaksi: \`${transactionId}\`\n` +
      `📅 Tanggal: ${date}\n` +
      `⏰ Waktu: ${time}\n\n` +
      `👤 *Data Pembeli*\n` +
      `━━━━━━━━━━━━━━━━━━━━\n` +
      `📛 Nama: ${name}\n` +
      `🏦 Metode: ${method}\n` +
      `🛍️ Produk: ${product}\n\n` +
      `📌 Status: ${config.payment.autoConfirm ? '✅ Otomatis Dikonfirmasi' : '⏳ Menunggu Verifikasi'}\n\n` +
      `🤖 *Konfirmasi:* /konfirmasi ${transactionId}`;

    await axios.post(`https://api.telegram.org/bot${config.telegram.token}/sendMessage`, {
      chat_id: config.telegram.chatId,
      text: message,
      parse_mode: 'Markdown'
    });

    if (req.file) {
      const formData = new FormData();
      formData.append('chat_id', config.telegram.chatId);
      formData.append('photo', fs.createReadStream(req.file.path));
      formData.append('caption', `📸 Bukti Transfer\n🆔 ${transactionId}\n👤 ${name}`);

      await axios.post(`https://api.telegram.org/bot${config.telegram.token}/sendPhoto`, formData, {
        headers: formData.getHeaders()
      });
    }

    res.json({ success: true });
  } catch (error) {
    console.error('Error sending to Telegram:', error);
    res.status(500).json({ error: 'Gagal kirim ke Telegram' });
  }
});

// ===== PAGES =====
app.get('/dashboard', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'dashboard.html'));
});

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// ===== START SERVER =====
app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
  console.log(`📊 Dashboard: http://localhost:${PORT}/dashboard`);
  console.log(`🔑 Login: gustaf1922 / 123`);
});