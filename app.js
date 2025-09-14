/* ---------- Shared Utilities ---------- */
function setYearAndClock() {
  const d = new Date();
  const opts = { hour: "2-digit", minute: "2-digit" };
  const clock = document.getElementById("clock");
  if (clock) clock.textContent = new Intl.DateTimeFormat("id-ID", opts).format(d);
  const year = document.getElementById("year");
  if (year) year.textContent = d.getFullYear();
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

/* ---------- Edukasi Data ---------- */
const EDU = {
  sharia: [
    { title: "Akad dalam Aset Digital: Bai', Ijarah, Syirkah", kicker: "Sharia", img: "https://media.canva.com/v2/image-resize/format:PNG/height:309/quality:100/uri:ifs%3A%2F%2FM%2F466ee22c-e7c7-4eb0-aa65-d3cb52b3b00c/watermark:F/width:550?csig=AAAAAAAAAAAAAAAAAAAAAJEvSeu6GJ9J2ze-I8Qj-Oc-FNdJRh7ujpvhuQh0YD44&exp=1757841066&osig=AAAAAAAAAAAAAAAAAAAAAHdxskIQsAQfee1riNNheHPVRxlkZ5ZUeL6noVN_Pvvu&signer=media-rpc&x-canva-quality=thumbnail_large", read: "9 menit", tags: ["Akad", "Muamalah"], href: "#" },
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

/* ---------- Discord Data ---------- */
const DISCORD_CHANNELS = [
  { title: "Signal Coin (Spot Only)", kicker: "Signal", img: "https://images.unsplash.com/photo-1518779578390-8029a9a86c63?q=80&w=1200&auto=format&fit=crop", read: "Realtime", tags: ["No Margin", "Risk Note"], href: "#join" },
  { title: "Diskusi Trader Harian", kicker: "Diskusi", img: "https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=1200&auto=format&fit=crop", read: "24/7", tags: ["Teknis", "Fundamental"], href: "#join" },
  { title: "Arbitrage (CEX-CEX)", kicker: "Arbitrage", img: "https://images.unsplash.com/photo-1504691342899-9d7eea6fc43f?q=80&w=1200&auto=format&fit=crop", read: "Opportunistic", tags: ["Spot", "Fee Aware"], href: "#join" },
  { title: "Airdrop & Testnet", kicker: "Airdrop", img: "https://images.unsplash.com/photo-1556761175-4b46a572b786?q=80&w=1200&auto=format&fit=crop", read: "Kurasi", tags: ["Guide", "No Scam"], href: "#join" },
];

/* ---------- Konsultan Data ---------- */
const SERVICES = [
  { title: "Verifikasi Project (Sharia Review)", kicker: "Layanan", img: "https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=1200&auto=format&fit=crop", read: "3-7 hari", tags: ["Akad", "Tokenomics"], href: "#request" },
  { title: "Sharia Compliance Audit", kicker: "Audit", img: "https://images.unsplash.com/photo-1532074205216-d0e1f4b87368?q=80&w=1200&auto=format&fit=crop", read: "7-14 hari", tags: ["Dokumen", "Rekomendasi"], href: "#request" },
  { title: "Advisor Crypto & Blockchain", kicker: "Advisory", img: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=1200&auto=format&fit=crop", read: "Retainer", tags: ["Strategy", "Governance"], href: "#request" },
];

/* ---------- Webminar Data ---------- */
const WEBMINARS = {
  upcoming: [
    { title: "Zakat Kripto: Nishab & Waktu Pembayaran", kicker: "Upcoming · 28 Sep 2025", img: "https://images.unsplash.com/photo-1554224154-22fee17c0e58?q=80&w=1200&auto=format&fit=crop", read: "90 menit", tags: ["Zakat","Portfolio"], href: "#daftar" },
    { title: "Staking Halal? Ijarah vs Lending", kicker: "Upcoming · 05 Okt 2025", img: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=1200&auto=format&fit=crop", read: "75 menit", tags: ["Staking","Fatwa"], href: "#daftar" },
  ],
  past: [
    { title: "Audit Exchange: No-Margin, No-Futures", kicker: "Selesai · 20 Agu 2025", img: "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=1200&auto=format&fit=crop", read: "Replay", tags: ["Exchange","Compliance"], href: "#rekaman" },
    { title: "RWA: Kepemilikan Riil & Resiko", kicker: "Selesai · 30 Jul 2025", img: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1200&auto=format&fit=crop", read: "Replay", tags: ["RWA","Legal"], href: "#rekaman" },
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

  // Search on home
  document.getElementById("q")?.addEventListener("input", (e) => {
    const q = e.target.value.trim().toLowerCase();
    const data = q
      ? trending.filter(t => (t.title + " " + t.kicker + " " + (t.tags||[]).join(" ")).toLowerCase().includes(q))
      : trending;
    renderCardsInto(document.getElementById("trending"), data);
  });

  // Arrow key control
  document.getElementById("carousel")?.addEventListener("keydown", (e) => {
    if (e.key === "ArrowLeft") document.getElementById("prev")?.click();
    if (e.key === "ArrowRight") document.getElementById("next")?.click();
  });
}

if (page === "edukasi.html") {
  renderCardsInto(document.getElementById("edu-sharia"), EDU.sharia);
  renderCardsInto(document.getElementById("edu-blockchain"), EDU.blockchain);
  renderCardsInto(document.getElementById("edu-crypto"), EDU.crypto);

  document.getElementById("edu-q")?.addEventListener("input", (e) => {
    const q = e.target.value.trim().toLowerCase();
    const filter = arr => arr.filter(t => (t.title + " " + t.kicker + " " + (t.tags||[]).join(" ")).toLowerCase().includes(q));
    renderCardsInto(document.getElementById("edu-sharia"), q ? filter(EDU.sharia) : EDU.sharia);
    renderCardsInto(document.getElementById("edu-blockchain"), q ? filter(EDU.blockchain) : EDU.blockchain);
    renderCardsInto(document.getElementById("edu-crypto"), q ? filter(EDU.crypto) : EDU.crypto);
  });
}

if (page === "discord.html") {
  renderCardsInto(document.getElementById("disc-channels"), DISCORD_CHANNELS);
  document.getElementById("disc-q")?.addEventListener("input", (e) => {
    const q = e.target.value.trim().toLowerCase();
    const data = q
      ? DISCORD_CHANNELS.filter(t => (t.title + " " + t.kicker + " " + (t.tags||[]).join(" ")).toLowerCase().includes(q))
      : DISCORD_CHANNELS;
    renderCardsInto(document.getElementById("disc-channels"), data);
  });
}

if (page === "konsultan.html") {
  renderCardsInto(document.getElementById("svc-list"), SERVICES);

  // Dummy submit (tanpa backend, hanya feedback UI)
  document.getElementById("consult-form")?.addEventListener("submit", (e) => {
    e.preventDefault();
    const status = document.getElementById("consult-status");
    status.textContent = "Terima kasih! Form terkirim. Kami akan menghubungi Anda via email.";
    setTimeout(() => { status.textContent = ""; e.target.reset(); }, 5000);
  });
}

if (page === "webminar.html") {
  renderCardsInto(document.getElementById("wb-upcoming"), WEBMINARS.upcoming);
  renderCardsInto(document.getElementById("wb-past"), WEBMINARS.past);

  document.getElementById("wb-q")?.addEventListener("input", (e) => {
    const q = e.target.value.trim().toLowerCase();
    const filt = arr => arr.filter(t => (t.title + " " + t.kicker + " " + (t.tags||[]).join(" ")).toLowerCase().includes(q));
    renderCardsInto(document.getElementById("wb-upcoming"), q ? filt(WEBMINARS.upcoming) : WEBMINARS.upcoming);
    renderCardsInto(document.getElementById("wb-past"), q ? filt(WEBMINARS.past) : WEBMINARS.past);
  });
}
