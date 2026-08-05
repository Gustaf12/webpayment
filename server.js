<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Payment Gustaf Hosting</title>
  <link rel="icon" type="image/png" href="https://files.catbox.moe/2wqr9x.jpg" />
  <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Press+Start+2P&family=Outfit:wght@300;500;700&display=swap" />
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" />
  <link rel="stylesheet" href="/css/style.css" />
</head>
<body>
  <!-- LOADER -->
  <div class="loader" id="loader">
    <div class="welcome-title">Selamat Datang</div>
    <div class="spinner"></div>
    <div class="welcome-text">LOADING ...</div>
  </div>

  <!-- ABOUT PAGE -->
  <div class="page active" id="about">
    <div class="pixel-corner pixel-corner-tl"></div>
    <div class="pixel-corner pixel-corner-tr"></div>
    <div class="pixel-corner pixel-corner-bl"></div>
    <div class="pixel-corner pixel-corner-br"></div>
    <h1>PAYMENT GUSTAF HOSTING</h1>
    <div class="typing-animation">Pembayaran mudah, cepat, dan aman!</div>
    <p class="subtitle">Harap sertakan bukti transfer</p>
    <a href="#" class="btn" onclick="showPayment()">Cek Payment</a>

    <div class="social-links-container">
      <h2>Kontak Gustaf Hosting</h2>
      <div class="social-icons">
        <a href="https://wa.me/62895392249321" target="_blank" aria-label="WhatsApp"><i class="fab fa-whatsapp"></i></a>
        <a href="https://t.me/adhityagustaf22" target="_blank" aria-label="Telegram"><i class="fab fa-telegram-plane"></i></a>
        <a href="https://github.com/your_github_id" target="_blank" aria-label="GitHub"><i class="fab fa-github"></i></a>
        <a href="https://instagram.com/gustaf.lr" target="_blank" aria-label="Instagram"><i class="fab fa-instagram"></i></a>
        <a href="https://tiktok.com/@adhityagustafmahendra" target="_blank" aria-label="TikTok"><i class="fab fa-tiktok"></i></a>
      </div>
    </div>
  </div>

  <!-- PAYMENT PAGE -->
  <div class="page" id="payment">
    <div class="pixel-corner pixel-corner-tl"></div>
    <div class="pixel-corner pixel-corner-tr"></div>
    <div class="pixel-corner pixel-corner-bl"></div>
    <div class="pixel-corner pixel-corner-br"></div>
    <h1>Payment tersedia</h1>
    <p class="subtitle">Transfer sesuai nominal &amp; kirim bukti ke WhatsApp</p>

    <div class="qr-frame" onclick="zoomQR()">
      <img id="qrisImage" src="https://cdn.phototourl.com/member/2026-08-05-52e461e8-1db0-4b9a-9657-bd4dc5db96fd.jpg" alt="QRIS All Pay" />
    </div>
    <p class="subtitle" style="font-size:0.7rem;">SCAN QRIS DI ATAS UNTUK ALL PAY</p>

    <div class="payment-info">
      <details>
        <summary><i class="fas fa-wallet" style="color:#1e8cbe;"></i> DANA</summary>
        <p><strong id="danaNumber">0895392249321</strong></p>
      </details>
      <details>
        <summary><i class="fas fa-credit-card" style="color:#00a651;"></i> GOPAY</summary>
        <p><strong id="gopayNumber">0895392249321</strong></p>
      </details>
      <details>
        <summary><i class="fas fa-qrcode" style="color:#7c3aed;"></i> QRIS</summary>
        <p><strong>Scan QR di atas</strong></p>
      </details>
      <details>
        <summary><i class="fas fa-mobile-alt" style="color:#7c3aed;"></i> OVO</summary>
        <p><strong id="ovoNumber">tidak ada</strong></p>
      </details>
      <details>
        <summary><i class="fas fa-university" style="color:#0d47a1;"></i> SeaBank</summary>
        <p><strong id="seabankNumber">9016123456789012 (a/n GustafHosting)</strong></p>
      </details>
      <details>
        <summary><i class="fas fa-building-columns" style="color:#c62828;"></i> Mandiri</summary>
        <p><strong id="mandiriNumber">131-00-1234567-8 (a/n GustafHosting)</strong></p>
      </details>
      <details>
        <summary><i class="fas fa-landmark" style="color:#1565c0;"></i> BCA</summary>
        <p><strong id="bcaNumber">0123456789 (a/n GustafHosting)</strong></p>
      </details>
    </div>

    <a href="#" class="btn" onclick="showConfirmPayment()">Konfirmasi Pembayaran</a>
    <div style="margin: 8px 0;">
      <a href="https://wa.me/62895392249321" target="_blank" class="btn btn-secondary">WhatsApp GustafHosting</a>
    </div>
    <a href="#" class="btn" onclick="showAbout()">Back</a>
  </div>

  <!-- CONFIRM PAYMENT FORM -->
  <div class="page" id="confirmPayment">
    <div class="pixel-corner pixel-corner-tl"></div>
    <div class="pixel-corner pixel-corner-tr"></div>
    <div class="pixel-corner pixel-corner-bl"></div>
    <div class="pixel-corner pixel-corner-br"></div>
    <h2>Formulir Konfirmasi</h2>
    <form id="paymentConfirmForm">
      <div class="form-group">
        <label for="fullName">Nama Lengkap <span style="color:red;">*</span></label>
        <input type="text" id="fullName" placeholder="Masukkan nama Anda" required />
      </div>
      <div class="form-group">
        <label for="paymentMethod">Transfer Via <span style="color:red;">*</span></label>
        <select id="paymentMethod" required>
          <option value="">Pilih Metode</option>
          <option value="DANA">DANA</option>
          <option value="GOPAY">GOPAY</option>
          <option value="QRIS">QRIS</option>
          <option value="OVO">OVO</option>
          <option value="SeaBank">SeaBank</option>
          <option value="Mandiri">Mandiri</option>
          <option value="BCA">BCA</option>
        </select>
      </div>
      <div class="form-group">
        <label for="productPurchased">Produk Dibeli <span style="color:red;">*</span></label>
        <input type="text" id="productPurchased" placeholder="Contoh: Hosting, Domain, VPS" required />
      </div>
      <div class="form-group">
        <label for="screenshot">Upload Bukti Transfer <span style="color:red;">*</span></label>
        <input type="file" id="screenshot" accept="image/*" onchange="previewScreenshot(event)" required />
        <img id="screenshotPreview" src="#" alt="Preview" />
      </div>
      <button type="submit" class="btn btn-success" id="submitBtn">
        <span id="btnText">Kirim Konfirmasi</span>
        <span class="form-loading" id="btnLoading"><i class="fas fa-spinner"></i></span>
      </button>
    </form>
    <a href="#" class="btn" onclick="showPayment()">Kembali</a>
  </div>

  <!-- RECEIPT PAGE -->
  <div class="page" id="receipt">
    <div class="pixel-corner pixel-corner-tl"></div>
    <div class="pixel-corner pixel-corner-tr"></div>
    <div class="pixel-corner pixel-corner-bl"></div>
    <div class="pixel-corner pixel-corner-br"></div>
    <h2 id="receiptTitle">✅ Struk Pembayaran</h2>
    <div class="receipt-details" id="receiptContent">
      <p><strong>Tanggal:</strong> <span id="receiptDate"></span></p>
      <p><strong>Waktu:</strong> <span id="receiptTime"></span></p>
      <p><strong>Nomor Transaksi:</strong> <span id="transactionId"></span></p>
      <div class="trx-copy-container">
        <span id="trxCopyText" onclick="copyTransactionId()" title="Klik untuk salin"></span>
        <button class="btn btn-copy" onclick="copyTransactionId()"><i class="fas fa-copy"></i> Salin</button>
      </div>
      <hr style="border-top:2px dashed var(--black); margin:12px 0;" />
      <p><strong>Nama Pembeli:</strong> <span id="receiptName"></span></p>
      <p><strong>Metode:</strong> <span id="receiptMethod"></span></p>
      <p><strong>Produk:</strong> <span id="receiptProduct"></span></p>
      <hr style="border-top:2px dashed var(--black); margin:12px 0;" />
      <p><strong>Status:</strong> <span id="paymentStatus" class="status-pending">⏳ Menunggu Konfirmasi</span></p>
    </div>
    <p class="receipt-footer" id="receiptFooter">Terima kasih, konfirmasi akan segera diproses oleh tim kami.</p>
    <button class="btn btn-secondary" onclick="downloadReceipt()"><i class="fas fa-download"></i> Download Struk</button>
    <div style="margin: 8px 0;">
      <button class="btn btn-telegram" id="sendTelegramBtn" onclick="sendToTelegram()">
        <i class="fab fa-telegram-plane"></i> Kirim ke Telegram
      </button>
      <span class="telegram-status" id="telegramStatus">🔴 Belum dikirim</span>
    </div>
    <div style="margin: 8px 0;">
      <button class="btn btn-confirm" id="confirmStatusBtn" onclick="checkConfirmationStatus()">
        <i class="fas fa-sync-alt"></i> Cek Status Konfirmasi
      </button>
    </div>
    <a href="#" class="btn" onclick="goToHome()">Kembali ke Beranda</a>
  </div>

  <!-- QR OVERLAY -->
  <div class="overlay" id="qrOverlay" onclick="closeZoom(event)">
    <div class="overlay-content">
      <img id="zoomedQR" src="" alt="QRIS zoom" />
      <button id="downloadQRBtn" class="btn btn-secondary"><i class="fas fa-download"></i> Download QRIS</button>
    </div>
  </div>

  <!-- MESSAGE BOX -->
  <div class="message-box" id="messageBox">
    <h3 id="messageTitle"></h3>
    <p id="messageText"></p>
    <button class="btn" onclick="hideMessageBox()">OK</button>
  </div>

  <script src="https://cdnjs.cloudflare.com/ajax/libs/html2canvas/1.4.1/html2canvas.min.js"></script>
  <script>
    // ===== BACKEND API =====
    const API_BASE = '';

    async function getConfig() {
      const res = await fetch('/api/config');
      return res.json();
    }

    async function sendConfirmationToBackend(data) {
      const res = await fetch('/api/send-confirmation', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });
      return res.json();
    }

    async function checkTransactionStatus(trxId) {
      const res = await fetch(`/api/transaction/${trxId}`);
      return res.json();
    }

    // ===== VARIABLES =====
    let isTelegramSent = false;
    let checkInterval = null;
    let isConfirmed = false;

    // ===== COPY ID =====
    function copyTransactionId() {
      const trxId = document.getElementById('transactionId').textContent;
      if (trxId && trxId !== '') {
        navigator.clipboard.writeText(trxId).then(() => {
          showMessageBox('✅ Tersalin!', `ID Transaksi ${trxId} telah disalin.`);
        }).catch(() => {
          const textarea = document.createElement('textarea');
          textarea.value = trxId;
          document.body.appendChild(textarea);
          textarea.select();
          document.execCommand('copy');
          document.body.removeChild(textarea);
          showMessageBox('✅ Tersalin!', `ID Transaksi ${trxId} telah disalin.`);
        });
      }
    }

    // ===== CEK STATUS =====
    async function checkConfirmationStatus() {
      const statusEl = document.getElementById('paymentStatus');
      const transactionId = document.getElementById('transactionId').textContent;
      
      if (!transactionId || transactionId === '') {
        showMessageBox('⚠️ Peringatan', 'Tidak ada transaksi yang sedang diproses.');
        return false;
      }

      try {
        const result = await checkTransactionStatus(transactionId);
        
        if (result.confirmed || result.autoConfirm) {
          statusEl.textContent = '✅ Telah Dikonfirmasi!';
          statusEl.className = 'status-confirmed';
          isConfirmed = true;
          if (checkInterval) {
            clearInterval(checkInterval);
            checkInterval = null;
          }
          saveReceiptState();
          showMessageBox('✅ Terkonfirmasi!', `Transaksi ${transactionId} telah dikonfirmasi.`);
          return true;
        } else {
          showMessageBox('ℹ️ Info', `Transaksi ${transactionId} masih menunggu konfirmasi.`);
          return false;
        }
      } catch (error) {
        console.error('Error cek status:', error);
        showMessageBox('❌ Gagal!', 'Gagal mengecek status konfirmasi.');
        return false;
      }
    }

    // ===== AUTO CHECK =====
    function startAutoCheck() {
      if (checkInterval) {
        clearInterval(checkInterval);
      }
      
      checkInterval = setInterval(async () => {
        const statusEl = document.getElementById('paymentStatus');
        const transactionId = document.getElementById('transactionId').textContent;
        
        if (!transactionId || transactionId === '' || isConfirmed) {
          if (checkInterval) {
            clearInterval(checkInterval);
            checkInterval = null;
          }
          return;
        }

        try {
          const result = await checkTransactionStatus(transactionId);
          
          if (result.confirmed || result.autoConfirm) {
            statusEl.textContent = '✅ Telah Dikonfirmasi!';
            statusEl.className = 'status-confirmed';
            isConfirmed = true;
            if (checkInterval) {
              clearInterval(checkInterval);
              checkInterval = null;
            }
            saveReceiptState();
          }
        } catch (error) {
          console.error('Auto-check error:', error);
        }
      }, 3000);
    }

    // ===== SEND TO TELEGRAM =====
    async function sendToTelegram() {
      const statusEl = document.getElementById('telegramStatus');
      const btnEl = document.getElementById('sendTelegramBtn');
      
      const transactionId = document.getElementById('transactionId').textContent;
      const name = document.getElementById('receiptName').textContent;
      const method = document.getElementById('receiptMethod').textContent;
      const product = document.getElementById('receiptProduct').textContent;
      const date = document.getElementById('receiptDate').textContent;
      const time = document.getElementById('receiptTime').textContent;

      if (!name || name === '') {
        showMessageBox('⚠️ Peringatan', 'Silakan lakukan konfirmasi pembayaran terlebih dahulu!');
        return;
      }

      if (isTelegramSent) {
        showMessageBox('ℹ️ Info', 'Konfirmasi sudah terkirim ke Telegram sebelumnya.');
        return;
      }

      btnEl.disabled = true;
      btnEl.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Mengirim...';
      statusEl.textContent = '⏳ Mengirim...';
      statusEl.className = 'telegram-status loading';

      try {
        const result = await sendConfirmationToBackend({
          name, method, product, transactionId, date, time
        });

        if (result.success) {
          isTelegramSent = true;
          statusEl.textContent = '✅ Terkirim!';
          statusEl.className = 'telegram-status success';
          showMessageBox('✅ Berhasil!', 'Konfirmasi pembayaran berhasil dikirim ke bot Telegram.');
        } else {
          throw new Error(result.error || 'Gagal kirim');
        }
      } catch (error) {
        console.error('❌ Error:', error);
        statusEl.textContent = '❌ Gagal kirim';
        statusEl.className = 'telegram-status error';
        showMessageBox('❌ Gagal!', `Gagal mengirim ke Telegram:\n${error.message}`);
      } finally {
        btnEl.disabled = false;
        btnEl.innerHTML = '<i class="fab fa-telegram-plane"></i> Kirim ke Telegram';
      }
    }

    // ===== LOAD CONFIG =====
    async function loadPaymentConfig() {
      try {
        const config = await getConfig();
        
        if (config.payment && config.payment.methods) {
          const methods = config.payment.methods;
          document.getElementById('danaNumber').textContent = methods.DANA || '0895392249321';
          document.getElementById('gopayNumber').textContent = methods.GOPAY || '0895392249321';
          document.getElementById('ovoNumber').textContent = methods.OVO || 'tidak ada';
          document.getElementById('seabankNumber').textContent = methods.SeaBank || '9016123456789012 (a/n GustafHosting)';
          document.getElementById('mandiriNumber').textContent = methods.Mandiri || '131-00-1234567-8 (a/n GustafHosting)';
          document.getElementById('bcaNumber').textContent = methods.BCA || '0123456789 (a/n GustafHosting)';
          
          if (methods.QRIS && methods.QRIS !== 'tidak ada') {
            document.getElementById('qrisImage').src = methods.QRIS;
          }
        }
        
        if (config.receipt) {
          document.getElementById('receiptTitle').textContent = config.receipt.title || '✅ Struk Pembayaran';
          document.getElementById('receiptFooter').textContent = config.receipt.footer || 'Terima kasih, konfirmasi akan segera diproses oleh tim kami.';
        }
      } catch (error) {
        console.error('Error loading config:', error);
      }
    }

    // ===== PAGE NAVIGATION =====
    function hideAllPages() {
      document.querySelectorAll('.page').forEach(p => {
        p.classList.remove('active');
        p.style.display = 'none';
      });
    }

    function showPage(id) {
      hideAllPages();
      const el = document.getElementById(id);
      el.style.display = 'block';
      void el.offsetWidth;
      el.classList.add('active');
    }

    function showPayment() { 
      if (checkInterval) {
        clearInterval(checkInterval);
        checkInterval = null;
      }
      showPage('payment'); 
    }
    
    function showAbout() { 
      if (checkInterval) {
        clearInterval(checkInterval);
        checkInterval = null;
      }
      isConfirmed = false;
      showPage('about'); 
    }
    
    function showConfirmPayment() { 
      if (checkInterval) {
        clearInterval(checkInterval);
        checkInterval = null;
      }
      showPage('confirmPayment'); 
    }
    
    function showReceipt() { 
      showPage('receipt');
      const trxId = document.getElementById('transactionId').textContent;
      document.getElementById('trxCopyText').textContent = trxId;
      
      if (!isConfirmed) {
        startAutoCheck();
      }
    }

    function goToHome() {
      if (checkInterval) {
        clearInterval(checkInterval);
        checkInterval = null;
      }
      sessionStorage.removeItem('receiptState');
      isConfirmed = false;
      showAbout();
    }

    // ===== QR ZOOM =====
    function zoomQR() {
      const qr = document.getElementById('qrisImage');
      const zoomed = document.getElementById('zoomedQR');
      zoomed.src = qr.src;
      document.getElementById('qrOverlay').classList.add('active');
    }
    function closeZoom(e) {
      if (e.target === e.currentTarget) {
        document.getElementById('qrOverlay').classList.remove('active');
      }
    }
    document.getElementById('downloadQRBtn').addEventListener('click', (e) => {
      e.stopPropagation();
      const link = document.createElement('a');
      link.href = document.getElementById('zoomedQR').src;
      link.download = 'QRIS_GustafHosting.jpg';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    });

    // ===== PREVIEW SCREENSHOT =====
    function previewScreenshot(e) {
      const preview = document.getElementById('screenshotPreview');
      if (e.target.files.length) {
        preview.src = URL.createObjectURL(e.target.files[0]);
        preview.style.display = 'block';
      } else {
        preview.src = '#';
        preview.style.display = 'none';
      }
    }

    // ===== MESSAGE BOX =====
    function showMessageBox(title, msg) {
      document.getElementById('messageTitle').innerText = title;
      document.getElementById('messageText').innerText = msg;
      document.getElementById('messageBox').classList.add('show');
    }
    function hideMessageBox() {
      document.getElementById('messageBox').classList.remove('show');
    }

    // ===== SAVE STATE =====
    function saveReceiptState() {
      const state = {
        transactionId: document.getElementById('transactionId').textContent,
        name: document.getElementById('receiptName').textContent,
        method: document.getElementById('receiptMethod').textContent,
        product: document.getElementById('receiptProduct').textContent,
        date: document.getElementById('receiptDate').textContent,
        time: document.getElementById('receiptTime').textContent,
        status: document.getElementById('paymentStatus').textContent,
        isTelegramSent: isTelegramSent,
        isConfirmed: isConfirmed
      };
      sessionStorage.setItem('receiptState', JSON.stringify(state));
    }

    function loadReceiptState() {
      const saved = sessionStorage.getItem('receiptState');
      if (saved) {
        try {
          const state = JSON.parse(saved);
          if (state.transactionId && state.transactionId !== '') {
            if (state.isConfirmed === true) {
              sessionStorage.removeItem('receiptState');
              return false;
            }
            
            document.getElementById('transactionId').innerText = state.transactionId;
            document.getElementById('receiptName').innerText = state.name;
            document.getElementById('receiptMethod').innerText = state.method;
            document.getElementById('receiptProduct').innerText = state.product;
            document.getElementById('receiptDate').innerText = state.date;
            document.getElementById('receiptTime').innerText = state.time;
            
            const statusEl = document.getElementById('paymentStatus');
            statusEl.textContent = state.status;
            if (state.status.includes('Dikonfirmasi')) {
              statusEl.className = 'status-confirmed';
              isConfirmed = true;
            } else {
              statusEl.className = 'status-pending';
              isConfirmed = false;
            }
            
            isTelegramSent = state.isTelegramSent || false;
            if (isTelegramSent) {
              document.getElementById('telegramStatus').textContent = '✅ Terkirim!';
              document.getElementById('telegramStatus').className = 'telegram-status success';
            }
            
            document.getElementById('trxCopyText').textContent = state.transactionId;
            
            showReceipt();
            
            if (!isConfirmed) {
              startAutoCheck();
            }
            
            return true;
          }
        } catch (e) {
          console.error('Error loading state:', e);
        }
      }
      return false;
    }

    // ===== FORM SUBMIT =====
    document.getElementById('paymentConfirmForm').addEventListener('submit', function(e) {
      e.preventDefault();
      
      const name = document.getElementById('fullName').value.trim();
      const method = document.getElementById('paymentMethod').value;
      const product = document.getElementById('productPurchased').value.trim();
      const fileInput = document.getElementById('screenshot');
      const file = fileInput.files[0];

      if (!name) {
        showMessageBox('Peringatan!', 'Silakan isi Nama Lengkap.');
        document.getElementById('fullName').focus();
        return;
      }
      if (!method) {
        showMessageBox('Peringatan!', 'Silakan pilih Metode Pembayaran.');
        document.getElementById('paymentMethod').focus();
        return;
      }
      if (!product) {
        showMessageBox('Peringatan!', 'Silakan isi Produk yang Dibeli.');
        document.getElementById('productPurchased').focus();
        return;
      }
      if (!file) {
        showMessageBox('Peringatan!', 'Silakan upload Bukti Transfer.');
        document.getElementById('screenshot').focus();
        return;
      }

      const btn = document.getElementById('submitBtn');
      const btnText = document.getElementById('btnText');
      const btnLoading = document.getElementById('btnLoading');
      btnText.textContent = 'Memproses...';
      btnLoading.style.display = 'inline-block';
      btn.disabled = true;

      setTimeout(() => {
        const now = new Date();
        document.getElementById('receiptDate').innerText = now.toLocaleDateString('id-ID', {
          day: '2-digit',
          month: 'long',
          year: 'numeric'
        });
        document.getElementById('receiptTime').innerText = now.toLocaleTimeString('id-ID', { 
          hour: '2-digit', 
          minute: '2-digit', 
          second: '2-digit' 
        });
        const transactionId = 'TRX' + Date.now().toString().slice(-10) + 
          Math.floor(Math.random()*1000).toString().padStart(3,'0');
        document.getElementById('transactionId').innerText = transactionId;
        document.getElementById('receiptName').innerText = name;
        document.getElementById('receiptMethod').innerText = method;
        document.getElementById('receiptProduct').innerText = product;
        
        const statusEl = document.getElementById('paymentStatus');
        statusEl.textContent = '⏳ Menunggu Konfirmasi';
        statusEl.className = 'status-pending';
        isConfirmed = false;

        isTelegramSent = false;
        const telegramStatus = document.getElementById('telegramStatus');
        telegramStatus.textContent = '🔴 Belum dikirim';
        telegramStatus.className = 'telegram-status';

        saveReceiptState();
        showReceipt();

        document.getElementById('fullName').value = '';
        document.getElementById('paymentMethod').value = '';
        document.getElementById('productPurchased').value = '';

        btnText.textContent = 'Kirim Konfirmasi';
        btnLoading.style.display = 'none';
        btn.disabled = false;

        showMessageBox('✅ Berhasil!', 'Konfirmasi pembayaran Anda telah diterima.\n\nKlik "Kirim ke Telegram" untuk kirim ke bot.');
      }, 1500);
    });

    // ===== DOWNLOAD RECEIPT =====
    function downloadReceipt() {
      const receiptNode = document.getElementById('receiptContent');
      const btn = document.querySelector('#receipt .btn-secondary');
      const originalText = btn.innerHTML;
      btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Mengunduh...';
      btn.disabled = true;

      html2canvas(receiptNode, { 
        scale: 2, 
        useCORS: true, 
        logging: false,
        backgroundColor: '#ffffff'
      })
      .then(canvas => {
        const link = document.createElement('a');
        link.href = canvas.toDataURL('image/png');
        link.download = 'Struk_Pembayaran_Gustafhosting.png';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        showMessageBox('✅ Berhasil!', 'Struk pembayaran telah diunduh.');
      })
      .catch(() => {
        showMessageBox('❌ Gagal!', 'Tidak dapat mengunduh struk. Coba lagi.');
      })
      .finally(() => {
        btn.innerHTML = originalText;
        btn.disabled = false;
      });
    }

    // ===== PIXEL BURST =====
    document.querySelectorAll('.btn, .qr-frame, details, .social-icons a').forEach(el => {
      el.addEventListener('click', function(e) {
        if (this.tagName === 'DETAILS' && e.target.tagName !== 'SUMMARY') return;
        if (this.tagName === 'INPUT' && this.type === 'file') return;
        const rect = this.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const burst = document.createElement('div');
        burst.className = 'pixel-burst';
        burst.style.left = x + 'px';
        burst.style.top = y + 'px';
        this.appendChild(burst);
        requestAnimationFrame(() => {
          burst.style.transform = `scale(3)`;
          burst.style.opacity = '0';
        });
        burst.addEventListener('transitionend', () => burst.remove());
      });
    });

    // ===== INIT =====
    window.addEventListener('load', () => {
      const loader = document.getElementById('loader');
      
      loadPaymentConfig();
      
      const hasReceipt = loadReceiptState();
      
      setTimeout(() => {
        loader.classList.add('hidden');
        if (!hasReceipt) {
          showAbout();
        }
      }, 1600);
    });

    window.addEventListener('beforeunload', function() {
      const trxId = document.getElementById('transactionId').textContent;
      if (trxId && trxId !== '' && !isConfirmed) {
        saveReceiptState();
      }
    });

    console.log('✅ Payment Gustaf Hosting siap!');
    console.log('📌 Auto-check setiap 3 detik');
  </script>
</body>
</html>
