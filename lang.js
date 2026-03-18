// ============================================================
// lang.js — English / Setswana Translation System
// Pension Verification System
//
// HOW TO USE:
//   1. Add data-lang="KEY" to any HTML element you want translated
//   2. Add the KEY to both 'en' and 'ts' objects below
//   3. Call initLang() at the bottom of every page's <body>
// ============================================================

const translations = {

  en: {
    // ── GLOBAL / NAV ──
    "site-title":       "Pension Verification System",
    "user-greeting":    "👤 Mr. Kgosi",
    "nav-dashboard":    "Dashboard",
    "nav-verify":       "Verify Identity",
    "nav-collect":      "Collect Pension",
    "nav-history":      "Payment History",
    "nav-help":         "Help & Support",
    "lang-en":          "English",
    "lang-ts":          "Setswana",
    "btn-back":         "← Back",
    "footer-text":      "Pension Verification System © 2025 — Government of Botswana",

    // ── WELCOME SCREEN ──
    "welcome-title":    "Welcome / Dumela",
    "app-subtitle":     "Government of Botswana",
    "btn-login":        "Login",
    "btn-register":     "Register",
    "help-link":        "❓ Help / Assistance",

    // ── LOGIN SCREEN ──
    "login-title":      "🔐 Login",
    "login-subtitle":   "Simple & secure login",
    "login-info":       "ℹ️ Enter your ID Number and PIN to continue.",
    "label-id":         "🪪 ID Number (Omang)",
    "id-placeholder":   "e.g. 123456789",
    "id-hint":          "Enter the number on your Omang card",
    "label-pin":        "🔑 PIN",
    "pin-placeholder":  "Enter your PIN",
    "forgot-pin":       "Forgot PIN?",
    "btn-login-submit": "Login →",
    "no-account":       "Don't have an account?",
    "register-link":    "Register here",

    // ── DASHBOARD ──
    "dash-welcome":     "Welcome back, Mr. Kgosi 👋",
    "dash-subtitle":    "Your pension payment is ready. Please verify your identity to collect it.",
    "badge-verified":   "✅ Identity Verified",
    "card-next-pay":    "Next Payment",
    "card-id-status":   "Identity Status",
    "card-last-pay":    "Last Payment",
    "card-verified":    "Verified",
    "card-received":    "✅ Received",
    "dash-cta-title":   "What would you like to do?",
    "btn-verify":       "🪪 Verify Identity",
    "btn-collect":      "💰 Collect Pension",
    "dash-help-info":   "📞 Need help? Call 0800-PENSION anytime Monday–Friday 8am–5pm.",

    // ── VERIFY IDENTITY ──
    "verify-title":     "🪪 Choose Your Verification Method",
    "verify-info":      "ℹ️ Please choose how you want to prove who you are. You only need to use one method.",
    "method-face":      "Face Scan",
    "method-face-sub":  "Look at the camera — Front, Left, Right",
    "method-voice":     "Voice Print",
    "method-voice-sub": "Repeat a short phrase aloud",
    "method-fp":        "Fingerprint",
    "method-fp-sub":    "Place your thumb on the scanner",
    "method-omang":     "Or Scan Your Omang (ID Card)",
    "method-omang-sub": "Take a photo of your Omang identity card to verify your details.",
    "btn-scan-omang":   "📷 Scan Omang Card",

    // ── FACE SCAN ──
    "face-title":       "📷 Face Scan",
    "face-info":        "ℹ️ Make sure you are in a well-lit area and look directly at the camera.",
    "face-step1":       "Step 1 of 3 — Look Straight (Front)",
    "face-step2":       "Step 2 of 3 — Turn Left",
    "face-step3":       "Step 3 of 3 — Turn Right",
    "face-cam-front":   "Position your face in the oval",
    "face-cam-left":    "Now slowly turn your face to the LEFT",
    "face-cam-right":   "Now slowly turn your face to the RIGHT",
    "face-front":       "Front",
    "face-left":        "Left",
    "face-right":       "Right",
    "btn-capture":      "📷 Capture",

    // ── VOICE ──
    "voice-title":      "🎙️ Voice Verification",
    "voice-info":       "ℹ️ Speak clearly in a quiet place. Press the microphone and repeat the phrase.",
    "voice-repeat":     "Repeat this phrase aloud:",
    "voice-phrase":     "\"My name is Kgosi and I am collecting my pension today.\"",
    "voice-hint":       "Speak slowly and clearly — just like you would to a person",
    "mic-label-idle":   "Press the microphone to start recording",
    "mic-label-rec":    "Recording… speak now",
    "btn-try-again":    "🔄 Try Again",

    // ── FINGERPRINT ──
    "fp-title":         "🖐️ Fingerprint Scan",
    "fp-info":          "ℹ️ Place your right thumb firmly on the scanner and hold still for 3 seconds.",
    "fp-card-title":    "Scan Your Finger",
    "fp-card-sub":      "Press the button below to start the fingerprint scanner.",
    "fp-waiting":       "Waiting for finger…",
    "fp-scanning":      "Scanning… hold still",
    "fp-matched":       "✅ Fingerprint matched!",
    "btn-start-fp":     "🖐️ Start Fingerprint Scan",
    "btn-continue":     "Continue →",

    // ── COLLECT PENSION ──
    "collect-title":    "💰 Collect Your Pension",
    "collect-ready":    "✅ Identity verified. Your pension of P 1,250.00 is ready.",
    "collect-bank-h":   "🏦 Bank Transfer",
    "collect-bank-p":   "Your payment will be sent directly to your bank account.",
    "collect-bank-acct":"Account ending:",
    "collect-bank-name":"Bank:",
    "collect-bank-amt": "Amount:",
    "btn-confirm-bank": "✅ Confirm Bank Transfer",
    "collect-mob-h":    "📱 Mobile Money",
    "collect-mob-p":    "Receive your pension to your mobile money wallet (e.g. Orange Money, MyZaka).",
    "label-mobile":     "📱 Mobile Number",
    "btn-confirm-mob":  "✅ Confirm Mobile Transfer",
    "collect-cash-h":   "💵 Cash Pickup",
    "collect-cash-p":   "Collect your cash in person at your nearest office. Bring your Omang card.",
    "btn-find-office":  "📍 Find Nearest Office",

    // ── PAYMENT HISTORY ──
    "history-title":    "📋 Your Past Payments",
    "history-total":    "Total received (2025):",
    "history-count":    "Payments:",
    "col-date":         "Date",
    "col-amount":       "Amount",
    "col-method":       "Method",
    "col-status":       "Status",
    "col-details":      "Details",
    "status-paid":      "✅ Paid",
    "link-view":        "View",

    // ── HELP ──
    "help-title":       "❓ Help & Support",
    "help-info":        "ℹ️ We are here to help you. Choose a support option below.",
    "help-call-h":      "📞 Call Support",
    "help-call-p":      "Speak to a real person. Available Monday–Friday, 8am–5pm.",
    "btn-call-now":     "📞 Call Now",
    "help-chat-h":      "💬 Chat Assistant",
    "help-chat-p":      "Type your question and our assistant will help you right away.",
    "chat-placeholder": "Type your question here…",
    "btn-send":         "Send",
    "help-office-h":    "📍 Find Your Nearest Office",
    "help-office-p":    "Visit us in person. Bring your Omang card. Open Monday–Friday, 8am–4:30pm.",
    "btn-back-dash":    "← Back to Dashboard",
    "office-gabs":      "Gaborone",
    "office-francis":   "Francistown",
    "office-maun":      "Maun",
  },

  // ============================================================
  // SETSWANA TRANSLATIONS
  // ============================================================
  ts: {
    // ── GLOBAL / NAV ──
    "site-title":       "Thulaganyo ya Phenshene",
    "user-greeting":    "👤 Rra Kgosi",
    "nav-dashboard":    "Lephata la Gae",
    "nav-verify":       "Tlhomamisa Boitshepo",
    "nav-collect":      "Amogela Phenshene",
    "nav-history":      "Histori ya Dituelo",
    "nav-help":         "Thuso le Tshegetso",
    "lang-en":          "Sekgoa",
    "lang-ts":          "Setswana",
    "btn-back":         "← Boela Morago",
    "footer-text":      "Thulaganyo ya Phenshene © 2025 — Puso ya Botswana",

    // ── WELCOME SCREEN ──
    "welcome-title":    "Dumelang / Welcome",
    "app-subtitle":     "Puso ya Botswana",
    "btn-login":        "Tsena",
    "btn-register":     "Ingodise",
    "help-link":        "❓ Thuso / Assistance",

    // ── LOGIN SCREEN ──
    "login-title":      "🔐 Tsena",
    "login-subtitle":   "Tsena ka bophofo le thaetso",
    "login-info":       "ℹ️ Tsenya Nomoro ya ID le PIN ya gago go tswelela.",
    "label-id":         "🪪 Nomoro ya ID (Omang)",
    "id-placeholder":   "sekai 123456789",
    "id-hint":          "Tsenya nomoro e e leng mo karateng ya gago ya Omang",
    "label-pin":        "🔑 PIN",
    "pin-placeholder":  "Tsenya PIN ya gago",
    "forgot-pin":       "O lebetse PIN?",
    "btn-login-submit": "Tsena →",
    "no-account":       "Ga o na akhaonto?",
    "register-link":    "Ingodise fano",

    // ── DASHBOARD ──
    "dash-welcome":     "Re a go amogela, Rra Kgosi 👋",
    "dash-subtitle":    "Phenshene ya gago e a letela. Tlhomamisa boitshepo jwa gago go e amogela.",
    "badge-verified":   "✅ Boitshepo bo Tlhomamisitswe",
    "card-next-pay":    "Tuelo e e Tlang",
    "card-id-status":   "Maemo a Boitshepo",
    "card-last-pay":    "Tuelo ya go Feta",
    "card-verified":    "Go Tlhomamisitswe",
    "card-received":    "✅ E Amogetse",
    "dash-cta-title":   "O batla go dira eng?",
    "btn-verify":       "🪪 Tlhomamisa Boitshepo",
    "btn-collect":      "💰 Amogela Phenshene",
    "dash-help-info":   "📞 O tlhoka thuso? Bidisetsa 0800-PENSION Mosopulogo–Laboprotshwane 8:00–17:00.",

    // ── VERIFY IDENTITY ──
    "verify-title":     "🪪 Tlhopha Mokgwa wa go Tlhomamisa",
    "verify-info":      "ℹ️ Tlhopha mokgwa o o tshwanetseng. O tlhoka go dirisa fela mongwe.",
    "method-face":      "Papadi ya Sefatlhego",
    "method-face-sub":  "Leba kamera — Pele, Molemeng, Mojeng",
    "method-voice":     "Lentswe la Gago",
    "method-voice-sub": "Bua polelo e khutshwane",
    "method-fp":        "Monwana wa Gago",
    "method-fp-sub":    "Baya monwana wa gago mo skaneng",
    "method-omang":     "Kgotsa Skane Omang ya Gago",
    "method-omang-sub": "Tsaya setshwantsho sa karata ya gago ya Omang go tlhomamisa.",
    "btn-scan-omang":   "📷 Skane Karata ya Omang",

    // ── FACE SCAN ──
    "face-title":       "📷 Papadi ya Sefatlhego",
    "face-info":        "ℹ️ Netefatsa gore o mo lefelong le le khibiduang. Leba kamera ka tshwanelo.",
    "face-step1":       "Kgato 1 ya 3 — Leba Pele (Fa Pele)",
    "face-step2":       "Kgato 2 ya 3 — Retologela Molemeng",
    "face-step3":       "Kgato 3 ya 3 — Retologela Mojeng",
    "face-cam-front":   "Baya sefatlhego sa gago mo sephiring",
    "face-cam-left":    "Retologela MOLEMENG ka bonolo",
    "face-cam-right":   "Retologela MOJENG ka bonolo",
    "face-front":       "Fa Pele",
    "face-left":        "Molemeng",
    "face-right":       "Mojeng",
    "btn-capture":      "📷 Tsaya Setshwantsho",

    // ── VOICE ──
    "voice-title":      "🎙️ Tlhomamiso ya Lentswe",
    "voice-info":       "ℹ️ Bua ka bonako mo lefelong le le didimetseng. Tobetsa maikoropisi o bue polelo.",
    "voice-repeat":     "Bua polelo e fa e leng:",
    "voice-phrase":     "\"Leina la me ke Kgosi mme ke amogela phenshene ya me gompieno.\"",
    "voice-hint":       "Bua ka bonako le ka tlhalogano — jaaka o bua le motho",
    "mic-label-idle":   "Tobetsa maikoropisi go simolola go rekota",
    "mic-label-rec":    "E a rekota… bua jaanong",
    "btn-try-again":    "🔄 Leka Gape",

    // ── FINGERPRINT ──
    "fp-title":         "🖐️ Skane ya Monwana",
    "fp-info":          "ℹ️ Baya kgama ya monwana wa gago wa go ja mo skaneng o didimale.",
    "fp-card-title":    "Skane Monwana wa Gago",
    "fp-card-sub":      "Tobetsa konopo e e kwa tlase go simolola skane ya monwana.",
    "fp-waiting":       "E letela monwana…",
    "fp-scanning":      "E a skana… didimala",
    "fp-matched":       "✅ Monwana o Tlhomamisitswe!",
    "btn-start-fp":     "🖐️ Simolola Skane ya Monwana",
    "btn-continue":     "Tswelela →",

    // ── COLLECT PENSION ──
    "collect-title":    "💰 Amogela Phenshene ya Gago",
    "collect-ready":    "✅ Boitshepo bo tlhomamisitswe. Phenshene ya gago ya P 1,250.00 e a letela.",
    "collect-bank-h":   "🏦 Poso ya Banka",
    "collect-bank-p":   "Tuelo ya gago e tla romelelwa kwa akhaontong ya gago ya banka.",
    "collect-bank-acct":"Akhaonto e e felang ka:",
    "collect-bank-name":"Banka:",
      "collect-bank-amt": "Tšhelete:",
    "btn-confirm-bank": "✅ Netefatsa Poso ya Banka",
    "collect-mob-h":    "📱 Madi a Megala",
    "collect-mob-p":    "Amogela phenshene mo letlotleng la madi a megala (sekai Orange Money, MyZaka).",
    "label-mobile":     "📱 Nomoro ya Mogala",
    "btn-confirm-mob":  "✅ Netefatsa Poso ya Mogala",
    "collect-cash-h":   "💵 Nka Tšhelete Ka Bogosi",
    "collect-cash-p":   "Nka tšhelete ka le gona kwa ofising e e gaufi. Tlisa karata ya gago ya Omang.",
    "btn-find-office":  "📍 Batlha Ofisi e e Gaufi",

    // ── PAYMENT HISTORY ──
    "history-title":    "📋 Dituelo tsa Gago tse di Fetileng",
    "history-total":    "Kakaretso e e amogetsweng (2025):",
    "history-count":    "Dituelo:",
    "col-date":         "Letlha",
    "col-amount":       "Tšhelete",
    "col-method":       "Mokgwa",
    "col-status":       "Maemo",
    "col-details":      "Dintlha",
    "status-paid":      "✅ E Duelwa",
    "link-view":        "Bona",

    // ── HELP ──
    "help-title":       "❓ Thuso le Tshegetso",
    "help-info":        "ℹ️ Re gona go go thusa. Tlhopha mokgwa wa thuso o o kwa tlase.",
    "help-call-h":      "📞 Bidisetsa Thuso",
    "help-call-p":      "Bua le motho yo o nnang teng. O gona Mosopulogo–Laboprotshwane, 8:00–17:00.",
    "btn-call-now":     "📞 Bidisetsa Jaanong",
    "help-chat-h":      "💬 Motlhankedi wa go Bua",
    "help-chat-p":      "Kwala potso ya gago mme motlhankedi wa rona o go thuse ka bonako.",
    "chat-placeholder": "Kwala potso ya gago fano…",
    "btn-send":         "Romela",
    "help-office-h":    "📍 Batlha Ofisi e e Gaufi",
    "help-office-p":    "Re etele ka le gona. Tlisa karata ya Omang. Bulegilwe Mosopulogo–Laboprotshwane, 8:00–16:30.",
    "btn-back-dash":    "← Boela Lephating la Gae",
    "office-gabs":      "Gaborone",
    "office-francis":   "Francistown",
    "office-maun":      "Maun",
  }
};

// ============================================================
// ENGINE — runs on every page
// ============================================================

function setLang(lang) {
  // Save choice so it persists across all pages
  localStorage.setItem('pvs-lang', lang);

  const dict = translations[lang];
  if (!dict) return;

  // Swap all elements with data-lang attribute
  document.querySelectorAll('[data-lang]').forEach(el => {
    const key = el.getAttribute('data-lang');
    if (dict[key] !== undefined) {
      // Use innerHTML for elements that may contain HTML (e.g. <strong>)
      if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
        el.placeholder = dict[key];
      } else {
        el.innerHTML = dict[key];
      }
    }
  });

  // Update active state on language buttons
  document.querySelectorAll('.lang-bar button').forEach(btn => {
    btn.classList.toggle('active', btn.getAttribute('data-lang-btn') === lang);
  });

  // Store current lang on <html> for CSS hooks if needed
  document.documentElement.setAttribute('lang', lang === 'ts' ? 'tn' : 'en');
}

function initLang() {
  // Read saved preference, default to English
  const saved = localStorage.getItem('pvs-lang') || 'en';
  setLang(saved);
}
