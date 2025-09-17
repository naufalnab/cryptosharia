/* ---------- Shared Utilities ---------- */
function setYearAndClock() {
  const d = new Date();
  const year = document.getElementById("year");
  if (year) year.textContent = d.getFullYear();
  const clock = document.getElementById("clock");
  if (clock && window.matchMedia("(min-width:901px)").matches) {
    const opts = { hour: "2-digit", minute: "2-digit" };
    clock.textContent = new Intl.DateTimeFormat("id-ID", opts).format(d);
  }
}
setYearAndClock();
setInterval(setYearAndClock, 15000);

// Active menu
(function () {
  const file = (location.pathname.split("/").pop() || "index.html").toLowerCase();
  document.querySelectorAll(".menu a").forEach(a => {
    if (a.dataset.page && a.dataset.page.toLowerCase() === file) a.classList.add("active");
  });
})();

/* ---------- Home (index.html) Data ---------- */
const headlines = [
  { title: "Dewan Syariah: Pedoman Zakat Aset Kripto Diluncurkan di ASEAN", kicker: "Syariah & Regulasi", meta: "13 Sep 2025 · 5 menit baca", img: "https://fintechnews.sg/wp-content/uploads/2024/04/Crypto-Adoption-in-South-East-Asia.jpg", href: "#" },
  { title: "Layer-2 Halal? Audit Akad pada Jaringan Pembayaran Non-Riba", kicker: "Riset & Fatwa", meta: "12 Sep 2025 · 7 menit baca", img: "https://iq.wiki/cdn-cgi/image/width=1920,quality=70/https://ipfs.everipedia.org/ipfs/QmWgqc857PeLsFPDd65enjbKq7rVSnuLGTDYAgfJ7P5RdY", href: "#" },
  { title: "Exchange Bebas Margin? Studi Perbandingan Model Spot vs Derivatif", kicker: "Teknologi & Pasar", meta: "10 Sep 2025 · 6 menit baca", img: "https://images.unsplash.com/photo-1738806399423-52dd345d2232?q=80&w=2067&auto=format&fit=crop", href: "#" },
];

const breaking = [
  { text: "Majelis X merilis draf fatwa aset digital – publik diminta beri masukan", href: "#" },
  { text: "Jaringan Y hentikan layanan pinjaman berbunga, fokus ke spot", href: "#" },
  { text: "Stablecoin emas syariah terbitkan laporan cadangan independen", href: "#" },
  { text: "Bursa Z menambahkan filter 'no-margin, no-futures'", href: "#" },
];

const trending = [
  { title: "Panduan Menilai Kehalalan Proyek Crypto: Akad, Riba, Gharar", kicker: "Panduan Praktis", img: "https://wp.coinvestasi.com/wp-content/uploads/2021/11/Tiga-Alasan-Crypto-Haram-Menurut-MUI-1024x576.jpg", read: "8 menit", tags: ["Fiqh Muamalah", "Spot Only", "No Lending"], href: "#" },
  { title: "Apakah Staking = Ijarah? Membongkar Analogi & Konsekuensinya", kicker: "Opini Ulama", img: "https://reku.id/_next/image?url=https%3A%2F%2Fapi-blog.reku.id%2Fwp-content%2Fuploads%2F2024%2F07%2Fapa-itu-staking-crypto.webp&w=3840&q=75", read: "6 menit", tags: ["Staking", "Ijarah", "Kaidah"], href: "#" },
  { title: "Checklist Syariah untuk Exchange: Dari KYC hingga Mekanisme Market", kicker: "Audit", img: "https://www.neugroup.com/wp-content/uploads/2022/07/kyc-small.jpeg", read: "9 menit", tags: ["Exchange", "Audit", "Tanpa Margin"], href: "#" },
  { title: "Zakat Kripto: Metode Penilaian, Nishab, dan Waktu Pembayaran", kicker: "Zakat", img: "https://tunaizakat.my/wp-content/uploads/2024/05/MicrosoftTeams-image-37.webp", read: "7 menit", tags: ["Zakat", "Portofolio", "Fiqh"], href: "#" },
  { title: "Token Beragun Aset (RWA): Bagaimana Menilai Kepemilikan Riil?", kicker: "Riset RWA", img: "https://blog.pintu.co.id/wp-content/uploads/2023/12/rwa-crypto.jpg", read: "10 menit", tags: ["RWA", "Due Diligence"], href: "#" },
  { title: "NFT sebagai Bukti Kepemilikan: Antara Milkiyah dan Hak Guna", kicker: "Hukum & Teknologi", img: "https://blog.pintu.co.id/wp-content/uploads/2023/09/nft-adalah.jpg", read: "6 menit", tags: ["NFT", "Hak"], href: "#" },
];

/* ---------- Education Data ---------- */
const EDU = {
  sharia: [
    { title: "Akad dalam Aset Digital: Bai', Ijarah, Syirkah", kicker: "Sharia", img: "https://media.canva.com/v2/image-resize/format:PNG/height:309/quality:100/uri:ifs%3A%2F%2FM%2F466ee22c-e7c7-4eb0-aa65-d3cb52b3b00c/watermark:F/width:550?csig=AAAAAAAAAAAAAAAAAAAAAI6YZDAeIX2jlMSh91EbIcN56o5L7MJPPsZdBWYLL356&exp=1758118266&osig=AAAAAAAAAAAAAAAAAAAAAAoiLNmGNxjx3-nNXLWly9jE2wbyw-ZY9vI9IDWi1t2W&signer=media-rpc&x-canva-quality=thumbnail_large", read: "9 menit", tags: ["Akad", "Muamalah"], href: "#" },
    { title: "Riba & Gharar: Cara Audit Tokenomics", kicker: "Sharia", img: "https://ischain.id/wp-content/uploads/2022/11/ANTARA-RIBA-GHARAR-1.jpg", read: "7 menit", tags: ["Riba", "Gharar"], href: "#" },
  ],
  blockchain: [
    { title: "Cara Kerja Konsensus: PoW vs PoS (Non-Riba)", kicker: "Blockchain", img: "https://i0.wp.com/zenledger.io/wp-content/uploads/2023/03/61b6f0f7644b7e1eec43423e_Proof-Of-Stake-Vs-Proof-Of-Work.jpg?w=1200&ssl=1", read: "8 menit", tags: ["Consensus", "Security"], href: "#" },
    { title: "Layer-2 101: Rollup, Validium, & Biaya", kicker: "Blockchain", img: "https://blog.sagipl.com/wp-content/uploads/2024/10/L-2-Ethereum-Network.jpg", read: "6 menit", tags: ["L2", "Scalability"], href: "#" },
  ],
  crypto: [
    { title: "Spot-Only Strategy untuk Pemula", kicker: "Crypto", img: "https://academy-public.coinmarketcap.com/optimized-uploads/9f8083bc994a46b5a18dc6f1464b03fb.png", read: "6 menit", tags: ["Spot", "Manajemen Risiko"], href: "#" },
    { title: "Staking & Delegasi: Analogi Ijarah", kicker: "Crypto", img: "https://cdn.prod.website-files.com/624b08d53d7ac65cf7c11d91/67aa7ae20e2601bd622d3586_Crypto%20Staking%20Explained_%20How%20It%20Works%2C%20Types%2C%20Benefits%20%26%20Risks%202.jpg", read: "7 menit", tags: ["Staking", "Validator"], href: "#" },
  ],
};

/* ---------- Research Data ---------- */
const RESEARCH_DATA = {
  fatwa: [
    { title: "Analisis Fatwa MUI vs Global tentang Aset Kripto", kicker: "Fatwa & Fiqh", img: "https://i.ytimg.com/vi/g_KQb77MSy4/maxresdefault.jpg", read: "12 menit", tags: ["Fatwa", "Komparasi"], href: "#" },
    { title: "Kaidah Fiqh dalam Smart Contract: Studi Akad Syirkah", kicker: "Fatwa & Fiqh", img: "https://pixelplex.io/wp-content/uploads/2023/08/smart-contract-use-cases-main-1600.jpg", read: "15 menit", tags: ["Fiqh", "Smart Contract"], href: "#" },
  ],
  tech: [
    { title: "Mekanisme Liquid Staking: Potensi Riba & Solusinya", kicker: "Teknologi & Protokol", img: "https://cdn.prod.website-files.com/67cafd5252963054f086f1fd/67cafd5352963054f086f575_Liquid_Staking.jpg", read: "11 menit", tags: ["Staking", "Riba"], href: "#" },
    { title: "Struktur Token RWA (Real World Asset) yang Sesuai Syariah", kicker: "Teknologi & Protokol", img: "https://blog.digitalexchange.id/wp-content/uploads/2025/07/WhatsApp-Image-2025-07-22-at-09.56.42_b2e38694-980x560.jpg", read: "14 menit", tags: ["RWA", "Akad"], href: "#" },
  ],
  market: [
     { title: "Studi Kasus: Screening Saham Syariah vs Screening Token Kripto", kicker: "Studi Kasus Pasar", img: "https://academy-public.coinmarketcap.com/optimized-uploads/5b1f39cbcc8644a9bec3ab74cdadceda.png", read: "10 menit", tags: ["Screening", "Metodologi"], href: "#" },
     { title: "Analisis Risiko Gharar pada Protokol DeFi Otomatis", kicker: "Studi Kasus Pasar", img: "https://www.debutinfotech.com/_next/image?url=https%3A%2F%2Fblogs.debutinfotech.com%2Fwp-content%2Fuploads%2F2024%2F08%2FTop-DeFi-Protocols.jpg&w=1920&q=85", read: "13 menit", tags: ["DeFi", "Gharar"], href: "#" },
  ]
};

/* ---------- Discord Data ---------- */
const DISCORD_CHANNELS = [
  { title: "Signal Coin (Spot Only)", kicker: "Signal", img: "https://th.bing.com/th/id/OIG4.eS1qx1oyXZaXIfjQeGPX?w=1792&h=1024&rs=1&pid=ImgDetMain&o=7&rm=3", read: "Realtime", tags: ["No Margin", "Risk Note"], href: "#join" },
  { title: "Diskusi Trader Harian", kicker: "Diskusi", img: "https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=1200&auto=format&fit=crop", read: "24/7", tags: ["Teknis", "Fundamental"], href: "#join" },
  { title: "Arbitrage (CEX-CEX)", kicker: "Arbitrage", img: "https://pintu-academy.pintukripto.com/wp-content/uploads/2023/08/image-40.png", read: "Opportunistic", tags: ["Spot", "Fee Aware"], href: "#join" },
  { title: "Airdrop & Testnet", kicker: "Airdrop", img: "https://blog.pintu.co.id/wp-content/uploads/2024/02/aridrop-crypto-gaming.jpg", read: "Kurasi", tags: ["Guide", "No Scam"], href: "#join" },
];

/* ---------- Consultant Data ---------- */
const SERVICES = [
  { title: "Project Verification(Sharia Review)", kicker: "Layanan", img: "https://th.bing.com/th/id/OIG2.53.9WANjt0JUxXkcKMNo?w=1792&h=1024&rs=1&pid=ImgDetMain&o=7&rm=3", read: "3-7 hari", tags: ["Akad", "Tokenomics"], href: "#request" },
  { title: "Sharia Compliance Audit", kicker: "Audit", img: "https://th.bing.com/th/id/OIG2.YWEPhUULwt416CbXTqSz?pid=ImgGn", read: "7-14 hari", tags: ["Dokumen", "Rekomendasi"], href: "#request" },
  { title: "Advisor Crypto & Blockchain", kicker: "Advisory", img: "https://th.bing.com/th/id/OIG2.99dlkpEzZSI9Sz0Avt3X?pid=ImgGn", read: "Retainer", tags: ["Strategy", "Governance"], href: "#request" },
];

/* ---------- webinar Data ---------- */
const webinarS = {
  upcoming: [
    { title: "Zakat Kripto: Nishab & Waktu Pembayaran", kicker: "Upcoming · 28 Sep 2025", img: "https://th.bing.com/th/id/OIG1.Z7GlZNmvOic4SXqsc.nI?w=1792&h=1024&rs=1&pid=ImgDetMain&o=7&rm=3", read: "90 menit", tags: ["Zakat", "Portfolio"], href: "#daftar" },
    { title: "Staking Halal? Ijarah vs Lending", kicker: "Upcoming · 05 Okt 2025", img: "https://th.bing.com/th/id/OIG2.sTf6U0R6AMaQX0eu_u2H?w=1792&h=1024&rs=1&pid=ImgDetMain&o=7&rm=3", read: "75 menit", tags: ["Staking", "Fatwa"], href: "#daftar" },
  ],
  past: [
    { title: "Audit Exchange: No-Margin, No-Futures", kicker: "Selesai · 20 Agu 2025", img: "https://th.bing.com/th/id/OIG2.S9dbei6TAnBE1QBBFU2d?w=1792&h=1024&rs=1&pid=ImgDetMain&o=7&rm=3", read: "Replay", tags: ["Exchange", "Compliance"], href: "#rekaman" },
    { title: "RWA: Kepemilikan Riil & Resiko", kicker: "Selesai · 30 Jul 2025", img: "https://th.bing.com/th/id/OIG1.H8e3IQ5fT2GNgcnoIvYu?w=1792&h=1024&rs=1&pid=ImgDetMain&o=7&rm=3", read: "Replay", tags: ["RWA", "Legal"], href: "#rekaman" },
  ],
};

/* ---------- Shared Renderers ---------- */
function renderCardsInto(el, items) {
  if (!el) return;
  el.innerHTML = items.map(t => `
    <article class="card">
      <a href="${t.href}"><img src="${t.img}" alt="${t.kicker}"></a>
      <div class="body">
        <div class="row">
          <span class="kicker">${t.kicker}</span>
          <span class="muted">${t.read || ""}</span>
        </div>
        <h4><a href="${t.href}">${t.title}</a></h4>
        <div class="tags">${(t.tags || []).map(x => `<span class="tag">${x}</span>`).join("")}</div>
      </div>
    </article>
  `).join("");
}

/* ---------- Page Routers ---------- */
const page = (location.pathname.split("/").pop() || "index.html").toLowerCase();

if (page === "index.html" || page === "") {
  // Carousel
  const slidesEl = document.getElementById("slides");
  const dotsEl = document.getElementById("dots");
  const carousel = document.getElementById("carousel");
  let idx = 0, timer;

  function renderSlides() {
    if (!slidesEl) return;
    slidesEl.innerHTML = headlines.map((h, i) => `
      <article class="slide" aria-roledescription="slide" aria-label="${i + 1} dari ${headlines.length}">
        <img src="${h.img}" alt="${h.kicker}: ${h.title}">
        <div class="slide-content">
          <span class="badge">${h.kicker}</span>
          <h2><a href="${h.href}">${h.title}</a></h2>
          <div class="meta">${h.meta}</div>
        </div>
      </article>
    `).join("");
    if (dotsEl) {
      dotsEl.innerHTML = headlines.map((_, i) =>
        `<button class="dot" aria-label="Ke slide ${i + 1}" aria-current="${i === idx}"></button>`).join("");
    }
    updateSlide(0);
  }
  function updateSlide(delta) {
    if (!slidesEl || !dotsEl) return;
    idx = (idx + delta + headlines.length) % headlines.length;
    slidesEl.style.transform = `translateX(-${idx * 100}%)`;
    [...dotsEl.children].forEach((d, i) => d.setAttribute("aria-current", i === idx));
  }
  function autoplay() { clearInterval(timer); timer = setInterval(() => updateSlide(1), 5200); }
  renderSlides();
  
  const slidesEl2 = document.getElementById("slides");
  if (slidesEl2) {
    slidesEl2.addEventListener("pointerdown", (e) => {
      if (window.matchMedia("(min-width: 901px)").matches) {
        isDown = true;
        startX = e.clientX;
      }
    });

    window.addEventListener("pointerup", (e) => {
      if (!isDown) return;
      isDown = false;
      const dx = e.clientX - startX;
      if (Math.abs(dx) > 40) {
        updateSlide(dx < 0 ? 1 : -1);
        autoplay();
      }
    });
  }

  document.getElementById("prev")?.addEventListener("click", () => { updateSlide(-1); autoplay(); });
  document.getElementById("next")?.addEventListener("click", () => { updateSlide(1); autoplay(); });
  dotsEl?.addEventListener("click", (e) => {
    if (e.target.classList.contains("dot")) { idx = [...dotsEl.children].indexOf(e.target); updateSlide(0); autoplay(); }
  });
  carousel?.addEventListener("mouseenter", () => clearInterval(timer));
  carousel?.addEventListener("mouseleave", autoplay);
  let startX = 0, isDown = false;
  document.getElementById("slides")?.addEventListener("pointerdown", (e) => { isDown = true; startX = e.clientX; });
  window.addEventListener("pointerup", (e) => {
    if (!isDown) return; isDown = false;
    const dx = e.clientX - startX;
    if (Math.abs(dx) > 40) { updateSlide(dx < 0 ? 1 : -1); autoplay(); }
  });

  // Breaking + Trending
  const track = document.getElementById("tickerTrack");
  if (track) {
    const html = breaking.map(i => `<span class="item">• <a href="${i.href}">${i.text}</a></span>`).join("  ");
    track.innerHTML = html + html;
  }
  renderCardsInto(document.getElementById("trending"), trending);
  autoplay();

  document.getElementById("q")?.addEventListener("input", (e) => {
    const q = e.target.value.trim().toLowerCase();
    const data = q
      ? trending.filter(t => (t.title + " " + t.kicker + " " + (t.tags || []).join(" ")).toLowerCase().includes(q))
      : trending;
    renderCardsInto(document.getElementById("trending"), data);
  });

  document.getElementById("carousel")?.addEventListener("keydown", (e) => {
    if (e.key === "ArrowLeft") document.getElementById("prev")?.click();
    if (e.key === "ArrowRight") document.getElementById("next")?.click();
  });
}

if (page === "education.html") {
  renderCardsInto(document.getElementById("edu-sharia"), EDU.sharia);
  renderCardsInto(document.getElementById("edu-blockchain"), EDU.blockchain);
  renderCardsInto(document.getElementById("edu-crypto"), EDU.crypto);

  document.getElementById("edu-q")?.addEventListener("input", (e) => {
    const q = e.target.value.trim().toLowerCase();
    const filter = arr => arr.filter(t => (t.title + " " + t.kicker + " " + (t.tags || []).join(" ")).toLowerCase().includes(q));
    renderCardsInto(document.getElementById("edu-sharia"), q ? filter(EDU.sharia) : EDU.sharia);
    renderCardsInto(document.getElementById("edu-blockchain"), q ? filter(EDU.blockchain) : EDU.blockchain);
    renderCardsInto(document.getElementById("edu-crypto"), q ? filter(EDU.crypto) : EDU.crypto);
  });
}

if (page === "research.html") {
  renderCardsInto(document.getElementById("res-fatwa"), RESEARCH_DATA.fatwa);
  renderCardsInto(document.getElementById("res-tech"), RESEARCH_DATA.tech);
  renderCardsInto(document.getElementById("res-market"), RESEARCH_DATA.market);

  document.getElementById("res-q")?.addEventListener("input", (e) => {
    const q = e.target.value.trim().toLowerCase();
    const filter = arr => arr.filter(t => (t.title + " " + t.kicker + " " + (t.tags || []).join(" ")).toLowerCase().includes(q));
    renderCardsInto(document.getElementById("res-fatwa"), q ? filter(RESEARCH_DATA.fatwa) : RESEARCH_DATA.fatwa);
    renderCardsInto(document.getElementById("res-tech"), q ? filter(RESEARCH_DATA.tech) : RESEARCH_DATA.tech);
    renderCardsInto(document.getElementById("res-market"), q ? filter(RESEARCH_DATA.market) : RESEARCH_DATA.market);
  });
}

if (page === "discord.html") {
  renderCardsInto(document.getElementById("disc-channels"), DISCORD_CHANNELS);
  document.getElementById("disc-q")?.addEventListener("input", (e) => {
    const q = e.target.value.trim().toLowerCase();
    const data = q
      ? DISCORD_CHANNELS.filter(t => (t.title + " " + t.kicker + " " + (t.tags || []).join(" ")).toLowerCase().includes(q))
      : DISCORD_CHANNELS;
    renderCardsInto(document.getElementById("disc-channels"), data);
  });
}

if (page === "consultant.html") {
  renderCardsInto(document.getElementById("svc-list"), SERVICES);

  document.getElementById("consult-form")?.addEventListener("submit", (e) => {
    e.preventDefault();
    const status = document.getElementById("consult-status");
    status.textContent = "Terima kasih! Form terkirim. Kami akan menghubungi Anda via email.";
    setTimeout(() => { status.textContent = ""; e.target.reset(); }, 5000);
  });
}

if (page === "webinar.html") {
  renderCardsInto(document.getElementById("wb-upcoming"), webinarS.upcoming);
  renderCardsInto(document.getElementById("wb-past"), webinarS.past);

  document.getElementById("wb-q")?.addEventListener("input", (e) => {
    const q = e.target.value.trim().toLowerCase();
    const filt = arr => arr.filter(t => (t.title + " " + t.kicker + " " + (t.tags || []).join(" ")).toLowerCase().includes(q));
    renderCardsInto(document.getElementById("wb-upcoming"), q ? filt(webinarS.upcoming) : webinarS.upcoming);
    renderCardsInto(document.getElementById("wb-past"), q ? filt(webinarS.past) : webinarS.past);
  });
}

(function () {
  const file = (location.pathname.split("/").pop() || "index.html").toLowerCase();
  document.querySelectorAll(".bottom-nav .tab").forEach(a => {
    const isActive = a.dataset.page && a.dataset.page.toLowerCase() === file;
    a.classList.toggle("active", isActive);
    a.setAttribute("aria-current", isActive ? "page" : "false");
  });

  const supportsEnv = CSS && CSS.supports && CSS.supports('padding-bottom: env(safe-area-inset-bottom)');
  if (!supportsEnv) {
    document.documentElement.style.setProperty('--safe-bottom', '0px');
  }
  
  const inputs = document.querySelectorAll('input, textarea');
  inputs.forEach(el => {
    el.addEventListener('focus', () => document.body.classList.add('kb-open'));
    el.addEventListener('blur', () => document.body.classList.remove('kb-open'));
  });
})();

(function () {
  const btn = document.getElementById('toTop');
  if (!btn) return;
  const onScroll = () => {
    const y = window.scrollY || document.documentElement.scrollTop;
    btn.classList.toggle('show', y > 600);
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
  btn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
})();

/* ===== Theme Toggle Functionality ===== */
(function () {
  const toggle = document.getElementById('darkModeToggle');
  const body = document.body;
  const storageKey = 'theme-preference';

  // Fungsi untuk menerapkan tema berdasarkan input ('light' atau 'dark')
  const applyTheme = (theme) => {
    // Menambahkan/menghapus class 'light-mode' pada body
    body.classList.toggle('light-mode', theme === 'light');
    
    // Sinkronisasi status checkbox dengan tema yang aktif
    if (toggle) {
      // 'checked' berarti toggle "On", yang kita set sebagai dark mode
      toggle.checked = theme === 'dark';
    }
  };

  // Baca preferensi tema dari localStorage saat halaman dimuat
  const savedTheme = localStorage.getItem(storageKey);

  // Tambahkan event listener jika toggle ada di halaman ini
  if (toggle) {
    toggle.addEventListener('change', () => {
      // Jika dicentang (checked), tema baru adalah 'dark'. Jika tidak, 'light'.
      const newTheme = toggle.checked ? 'dark' : 'light';
      // Simpan preferensi baru ke localStorage
      localStorage.setItem(storageKey, newTheme);
      // Terapkan tema baru
      applyTheme(newTheme);
    });
  }

  // Terapkan tema yang tersimpan saat pertama kali membuka halaman
  // Jika tidak ada preferensi, gunakan 'dark' sebagai default
  applyTheme(savedTheme || 'dark');
})();