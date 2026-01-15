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

/* ---------- Shared Renderers ---------- */
function renderCardsInto(el, items) {
    if (!el) return;
    el.innerHTML = items.map(t => `
    <article class="card">
      <a href="article.html?id=${t.id}"><img src="${t.img}" alt="${t.kicker}"></a>
      <div class="body">
        <div class="row">
          <span class="kicker">${t.kicker}</span>
          <span class="muted">${t.read || ""}</span>
        </div>
        <h4><a href="article.html?id=${t.id}">${t.title}</a></h4>
        <div class="tags">${(t.tags || []).slice(0, 2).map(x => `<span class="tag">${x}</span>`).join("")}</div>
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

// Community Page Tab Switching
if (page === "community.html") {
    const tabBtns = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');

    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const targetTab = btn.dataset.tab;

            // Remove active class from all
            tabBtns.forEach(b => b.classList.remove('active'));
            tabContents.forEach(c => c.classList.remove('active'));

            // Add active class to clicked
            btn.classList.add('active');
            document.getElementById(`${targetTab}-content`).classList.add('active');
        });
    });

    // Render Discord channels
    renderCardsInto(document.getElementById("disc-channels"), DISCORD_CHANNELS);

    // Render Services
    renderCardsInto(document.getElementById("svc-list"), SERVICES);
}

// Education Page - sudah include webinar
if (page === "education.html") {
    renderCardsInto(document.getElementById("edu-sharia"), EDU.sharia);
    renderCardsInto(document.getElementById("edu-blockchain"), EDU.blockchain);
    renderCardsInto(document.getElementById("edu-crypto"), EDU.crypto);

    // Webinar sections
    renderCardsInto(document.getElementById("wb-upcoming"), webinarS.upcoming);
    renderCardsInto(document.getElementById("wb-past"), webinarS.past);

    // Search functionality
    document.getElementById("edu-q")?.addEventListener("input", (e) => {
        const q = e.target.value.trim().toLowerCase();
        const filter = arr => arr.filter(t => (t.title + " " + t.kicker + " " + (t.tags || []).join(" ")).toLowerCase().includes(q));

        renderCardsInto(document.getElementById("edu-sharia"), q ? filter(EDU.sharia) : EDU.sharia);
        renderCardsInto(document.getElementById("edu-blockchain"), q ? filter(EDU.blockchain) : EDU.blockchain);
        renderCardsInto(document.getElementById("edu-crypto"), q ? filter(EDU.crypto) : EDU.crypto);
        renderCardsInto(document.getElementById("wb-upcoming"), q ? filter(webinarS.upcoming) : webinarS.upcoming);
        renderCardsInto(document.getElementById("wb-past"), q ? filter(webinarS.past) : webinarS.past);
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

// Article Page
if (page === "article.html") {
    const urlParams = new URLSearchParams(window.location.search);
    const articleId = urlParams.get('id');

    // Gabungkan semua data artikel
    const allArticles = [
        ...trending,
        ...EDU.sharia,
        ...EDU.blockchain,
        ...EDU.crypto,
        ...RESEARCH_DATA.fatwa,
        ...RESEARCH_DATA.tech,
        ...RESEARCH_DATA.market,
        ...DISCORD_CHANNELS,
        ...SERVICES,
        ...webinarS.upcoming,
        ...webinarS.past
    ];

    const article = allArticles.find(a => a.id === articleId);

    if (article) {
        document.getElementById('articleKicker').textContent = article.kicker || '';
        document.getElementById('articleTitle').textContent = article.title;
        document.getElementById('articleRead').textContent = article.read || '';
        document.getElementById('articleImage').src = article.img;
        document.getElementById('articleImage').alt = article.title;
        document.getElementById('articleBody').innerHTML = article.content || '<p>Konten artikel sedang dalam proses pengembangan.</p>';

        // Render tags
        const tagsEl = document.getElementById('articleTags');
        if (article.tags && article.tags.length > 0) {
            tagsEl.innerHTML = article.tags.map(tag => `<span class="tag">${tag}</span>`).join('');
        }

        // Update page title
        document.title = `${article.title} - CryptoSharia News`;
    } else {
        document.getElementById('articleContent').innerHTML = '<p>Artikel tidak ditemukan.</p>';
    }
}
