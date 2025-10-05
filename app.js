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
  { 
    id: "panduan-kehalalan-crypto",
    title: "Panduan Menilai Kehalalan Proyek Crypto: Akad, Riba, Gharar", 
    kicker: "Panduan Praktis", 
    img: "https://wp.coinvestasi.com/wp-content/uploads/2021/11/Tiga-Alasan-Crypto-Haram-Menurut-MUI-1024x576.jpg", 
    read: "8 menit", 
    tags: ["Fiqh Muamalah", "Spot Only", "No Lending"],
    content: `
      <p>Dalam dunia cryptocurrency yang semakin berkembang, umat Muslim memerlukan panduan praktis untuk menilai kehalalan sebuah proyek crypto. Artikel ini akan membahas tiga pilar utama dalam penilaian syariah: Akad, Riba, dan Gharar.</p>

      <h3>1. Memahami Akad dalam Proyek Crypto</h3>
      <p>Akad adalah kontrak atau perjanjian yang mendasari suatu transaksi. Dalam konteks cryptocurrency, kita perlu memahami:</p>
      <ul>
        <li><strong>Bai' (Jual Beli):</strong> Transaksi spot cryptocurrency termasuk dalam kategori ini. Pertukaran aset digital dengan aset lain atau mata uang fiat harus memenuhi syarat serah terima (qabdh) secara hukmi.</li>
        <li><strong>Ijarah (Sewa):</strong> Beberapa skema staking dapat dikategorikan sebagai ijarah jika ada penyewaan aset dengan imbalan yang jelas.</li>
        <li><strong>Syirkah (Kemitraan):</strong> Liquidity pool dalam DeFi bisa jadi masuk kategori ini, namun perlu diperiksa apakah ada unsur riba di dalamnya.</li>
      </ul>

      <h3>2. Mendeteksi Unsur Riba</h3>
      <p>Riba adalah tambahan yang tidak dibenarkan dalam transaksi. Waspadai:</p>
      <ul>
        <li><strong>Interest-bearing accounts:</strong> Akun yang menjanjikan bunga tetap adalah riba fadhl.</li>
        <li><strong>Lending protocols:</strong> Platform pinjam-meminjam dengan bunga jelas haram.</li>
        <li><strong>Leveraged trading:</strong> Margin trading dengan leverage melibatkan pinjaman berbunga.</li>
      </ul>
      <p><em>Solusi Halal:</em> Fokus pada trading spot tanpa leverage, hindari semua bentuk lending dan borrowing dengan bunga.</p>

      <h3>3. Menghindari Gharar (Ketidakpastian Berlebihan)</h3>
      <p>Gharar adalah ketidakjelasan yang dapat menimbulkan perselisihan. Dalam crypto, gharar dapat muncul dari:</p>
      <ul>
        <li><strong>Tokenomics yang tidak jelas:</strong> Proyek tanpa whitepaper atau dokumentasi yang memadai.</li>
        <li><strong>Smart contract yang tidak diaudit:</strong> Risiko bug dan exploit yang tinggi.</li>
        <li><strong>Harga yang sangat volatil tanpa underlying asset:</strong> Meme coin tanpa utility nyata.</li>
      </ul>

      <h3>Checklist Praktis</h3>
      <p>Sebelum berinvestasi dalam proyek crypto, pastikan:</p>
      <ol>
        <li>✅ Proyek memiliki utility atau underlying asset yang jelas</li>
        <li>✅ Tidak ada mekanisme bunga atau lending</li>
        <li>✅ Smart contract telah diaudit oleh pihak ketiga</li>
        <li>✅ Tokenomics transparan dan masuk akal</li>
        <li>✅ Tim proyek teridentifikasi dengan jelas</li>
        <li>✅ Tidak ada unsur gambling atau spekulasi berlebihan</li>
      </ol>

      <h3>Kesimpulan</h3>
      <p>Menilai kehalalan proyek crypto memerlukan pemahaman mendalam tentang prinsip-prinsip muamalah dalam Islam. Tiga pilar utama—Akad, Riba, dan Gharar—harus dipertimbangkan secara komprehensif. Konsultasikan dengan ulama yang memahami teknologi blockchain untuk mendapatkan panduan yang lebih spesifik.</p>
      
      <p class="muted"><em>Disclaimer: Artikel ini bersifat edukatif dan bukan fatwa resmi. Selalu konsultasikan dengan ulama atau lembaga fatwa terpercaya untuk keputusan investasi Anda.</em></p>
    `
  },
  { 
    id: "staking-vs-ijarah",
    title: "Apakah Staking = Ijarah? Membongkar Analogi & Konsekuensinya", 
    kicker: "Opini Ulama", 
    img: "https://reku.id/_next/image?url=https%3A%2F%2Fapi-blog.reku.id%2Fwp-content%2Fuploads%2F2024%2F07%2Fapa-itu-staking-crypto.webp&w=3840&q=75", 
    read: "6 menit", 
    tags: ["Staking", "Ijarah"],
    content: `
      <p>Salah satu perdebatan terpanas dalam crypto syariah adalah: apakah staking cryptocurrency dapat dikategorikan sebagai ijarah (sewa) yang halal? Mari kita bedah analogi ini secara mendalam.</p>

      <h3>Memahami Ijarah dalam Fiqh</h3>
      <p>Ijarah adalah akad sewa-menyewa atas manfaat suatu aset. Dalam fiqh klasik, ijarah memerlukan:</p>
      <ul>
        <li>Objek sewa yang jelas (ma'jur)</li>
        <li>Manfaat yang dapat diukur</li>
        <li>Jangka waktu yang ditentukan</li>
        <li>Ujrah (upah sewa) yang disepakati di awal</li>
      </ul>

      <h3>Mekanisme Staking dalam PoS</h3>
      <p>Dalam blockchain Proof-of-Stake (PoS), staking berarti:</p>
      <ol>
        <li>Pengguna "mengunci" token mereka dalam jaringan</li>
        <li>Token tersebut digunakan untuk memvalidasi transaksi</li>
        <li>Sebagai imbalan, validator mendapat reward dari block reward dan transaction fees</li>
      </ol>

      <h3>Analogi Staking = Ijarah: Pro</h3>
      <p>Pendukung analogi ini berargumen:</p>
      <ul>
        <li><strong>Ada objek yang disewakan:</strong> Token yang di-stake</li>
        <li><strong>Ada manfaat yang jelas:</strong> Menjaga keamanan jaringan</li>
        <li><strong>Ada kompensasi:</strong> Staking reward</li>
      </ul>

      <h3>Kritik terhadap Analogi Ini</h3>
      <p>Namun, terdapat beberapa kelemahan fundamental:</p>
      
      <h4>1. Kepemilikan Token Tidak Berpindah</h4>
      <p>Dalam ijarah klasik, penyewa mendapat hak penuh atas manfaat aset. Dalam staking, token tetap milik staker, hanya "dikunci" sementara. Ini lebih mirip dengan rahn (gadai) daripada ijarah.</p>

      <h4>2. Reward Bersifat Probabilistik</h4>
      <p>Berbeda dengan ijarah yang ujrahnya pasti, reward staking tidak dijamin. Jumlahnya bergantung pada:</p>
      <ul>
        <li>Jumlah validator lain di jaringan</li>
        <li>Tingkat inflasi token</li>
        <li>Network activity</li>
      </ul>
      <p>Ketidakpastian ini dapat menimbulkan unsur <strong>gharar</strong>.</p>

      <h4>3. Sumber Reward Perlu Dikaji</h4>
      <p>Reward staking berasal dari:</p>
      <ul>
        <li><strong>Block reward:</strong> Token baru yang dicetak (inflasi) - ini perlu dikaji apakah halal</li>
        <li><strong>Transaction fees:</strong> Ini lebih clear sebagai ujrah atas jasa validasi</li>
      </ul>

      <h3>Alternatif Perspektif: Ju'alah</h3>
      <p>Beberapa ulama kontemporer menyarankan staking lebih tepat dikategorikan sebagai <strong>ju'alah</strong> (kontrak dengan upah yang dijanjikan untuk pekerjaan tertentu), karena:</p>
      <ul>
        <li>Validator melakukan "pekerjaan" (validasi transaksi)</li>
        <li>Reward diberikan setelah pekerjaan selesai</li>
        <li>Tidak ada kepastian akan mendapat reward (tergantung apakah terpilih sebagai validator)</li>
      </ul>

      <h3>Panduan Praktis</h3>
      <p>Jika Anda ingin melakukan staking dengan pendekatan kehati-hatian:</p>
      <ol>
        <li>Pilih blockchain yang reward-nya sebagian besar dari transaction fees, bukan inflasi</li>
        <li>Pahami risiko slashing (kehilangan sebagian stake karena downtime atau misbehavior)</li>
        <li>Pastikan tidak ada mekanisme lending di dalamnya</li>
        <li>Konsultasikan dengan ulama yang memahami teknologi</li>
      </ol>

      <h3>Kesimpulan</h3>
      <p>Analogi staking = ijarah memiliki kelemahan fundamental. Kategorisasi yang lebih tepat mungkin adalah ju'alah atau bahkan bentuk akad baru yang perlu ijtihad kontemporer. Yang pasti, staking memerlukan kajian mendalam dan tidak bisa langsung dianggap halal hanya karena "mirip" ijarah.</p>

      <p class="muted"><em>Penting: Ini adalah analisis akademis, bukan fatwa. Untuk keputusan praktis, konsultasikan dengan dewan syariah atau ulama yang berkompeten.</em></p>
    `
  },
  { 
    id: "checklist-syariah-exchange",
    title: "Checklist Syariah untuk Exchange: Dari KYC hingga Mekanisme Market",
    kicker: "Audit",
    img: "https://www.neugroup.com/wp-content/uploads/2022/07/kyc-small.jpeg",
    read: "9 menit",
    tags: ["Exchange", "Audit", "Tanpa Margin"],
    href: "#",
    content: `
      <p>Exchange crypto menjadi pintu utama umat Muslim berinteraksi dengan aset digital. Namun, tidak semua exchange memenuhi standar syariah. Artikel ini menyajikan checklist praktis agar Anda dapat menilai aspek halal sebuah platform exchange.</p>

      <h3>1. Verifikasi Identitas (KYC)</h3>
      <p>KYC (Know Your Customer) adalah bagian dari prinsip amanah dalam Islam. Platform yang mewajibkan KYC berfungsi untuk mencegah pencucian uang, penipuan, dan transaksi haram. Namun, data pengguna harus dijaga sesuai etika Islam (amanah informasi).</p>

      <h3>2. Mekanisme Market</h3>
      <p>Pastikan exchange hanya menyediakan <strong>spot market</strong>. Hindari:</p>
      <ul>
        <li>Margin trading (ada pinjaman berbunga)</li>
        <li>Futures dan derivatif (unsur maisir dan spekulasi)</li>
        <li>Short selling (menjual barang yang belum dimiliki)</li>
      </ul>
      <p><em>Spot trading</em> di mana aset berpindah kepemilikan secara langsung dan tunai (qabdh hukmi) adalah bentuk yang paling mendekati jual beli halal.</p>

      <h3>3. Token Listing Policy</h3>
      <p>Exchange yang baik harus memiliki kriteria syariah untuk listing, seperti:</p>
      <ul>
        <li>Token memiliki utility atau underlying asset</li>
        <li>Tidak berhubungan dengan perjudian, pornografi, atau riba</li>
        <li>Tokenomics transparan dan tidak berbentuk ponzi</li>
      </ul>

      <h3>4. Mekanisme Custody</h3>
      <p>Jika exchange menyimpan aset pengguna, pastikan:</p>
      <ul>
        <li>Tidak digunakan untuk lending tanpa izin</li>
        <li>Ada bukti audit cadangan (proof of reserve)</li>
        <li>Dana pengguna dipisahkan dari dana operasional</li>
      </ul>

      <h3>5. Transparansi & Etika Bisnis</h3>
      <p>Islam menekankan <strong>kejujuran dan keterbukaan</strong> dalam transaksi. Perhatikan:</p>
      <ul>
        <li>Adanya laporan keuangan dan audit berkala</li>
        <li>Adanya dewan syariah internal atau penasihat syariah</li>
        <li>Adanya mekanisme penyelesaian sengketa yang adil</li>
      </ul>

      <h3>Kesimpulan</h3>
      <p>Exchange syariah bukan hanya soal tidak ada riba, tapi juga soal amanah, keadilan, dan transparansi. Gunakan checklist ini untuk memilih platform yang sesuai nilai Islam.</p>
    `
  },
  { 
    id: "zakat-kripto",
    title: "Zakat Kripto: Metode Penilaian, Nishab, dan Waktu Pembayaran",
    kicker: "Zakat",
    img: "https://tunaizakat.my/wp-content/uploads/2024/05/MicrosoftTeams-image-37.webp",
    read: "7 menit",
    tags: ["Zakat", "Portofolio", "Fiqh"],
    href: "#",
    content: `
      <p>Zakat atas aset kripto semakin menjadi perbincangan penting seiring meningkatnya adopsi digital asset oleh umat Islam. Artikel ini membahas bagaimana menentukan nishab, menghitung jumlah zakat, dan kapan waktu pembayarannya.</p>

      <h3>1. Apakah Kripto Wajib Dizakati?</h3>
      <p>Mayoritas ulama kontemporer berpendapat bahwa kripto termasuk <strong>mal mutaqawwim</strong> (harta bernilai) sehingga wajib dizakati jika memenuhi syarat:</p>
      <ul>
        <li>Dimiliki penuh (al-milk at-tam)</li>
        <li>Melebihi nishab</li>
        <li>Berlalu satu haul (1 tahun hijriah)</li>
      </ul>

      <h3>2. Nishab Zakat Kripto</h3>
      <p>Nishab disamakan dengan emas (85 gram). Jika 1 gram emas = Rp1.300.000, maka nishab sekitar Rp110.500.000. Jika total nilai kripto Anda melebihi itu, maka wajib zakat.</p>

      <h3>3. Cara Menilai Aset</h3>
      <p>Gunakan nilai pasar saat haul tiba:</p>
      <ul>
        <li>Total nilai portfolio crypto (dalam rupiah)</li>
        <li>Hitung 2.5% sebagai zakat maal</li>
      </ul>

      <h3>4. Waktu Pembayaran</h3>
      <p>Zakat dibayar setelah 1 tahun kepemilikan. Namun, jika sering trading, gunakan sistem <em>mark-to-market</em> setiap Ramadhan untuk menyederhanakan perhitungan.</p>

      <h3>5. Penyaluran Zakat Kripto</h3>
      <p>Zakat dapat ditunaikan melalui platform digital, selama disalurkan kepada mustahik sah (8 golongan). Beberapa lembaga kini menerima pembayaran zakat via stablecoin seperti USDT atau token BSC.</p>

      <h3>Kesimpulan</h3>
      <p>Zakat kripto memperkuat nilai keadilan dalam ekonomi digital. Selama syarat kepemilikan, nishab, dan haul terpenuhi, maka zakat harus dikeluarkan sebagaimana harta lainnya.</p>
    `
  },
  { 
    id: "token-rwa-kepemilikan-riil",
    title: "Token Beragun Aset (RWA): Bagaimana Menilai Kepemilikan Riil?",
    kicker: "Riset RWA",
    img: "https://blog.pintu.co.id/wp-content/uploads/2023/12/rwa-crypto.jpg",
    read: "10 menit",
    tags: ["RWA", "Due Diligence"],
    href: "#",
    content: `
      <p>Tokenisasi aset nyata (Real World Assets/RWA) menjanjikan revolusi dalam keuangan syariah, namun juga menghadirkan tantangan hukum kepemilikan dan kejelasan akad. Bagaimana menilai kehalalannya?</p>

      <h3>1. Konsep Dasar RWA</h3>
      <p>RWA adalah token digital yang merepresentasikan kepemilikan atas aset nyata, seperti emas, properti, atau surat berharga. Tujuannya: meningkatkan likuiditas dan efisiensi perdagangan.</p>

      <h3>2. Prinsip Syariah yang Terlibat</h3>
      <ul>
        <li><strong>Milkiyah:</strong> Kepemilikan riil atas aset dasar</li>
        <li><strong>Tahqiq al-milk:</strong> Kemampuan menggunakan dan memanfaatkan aset tersebut</li>
        <li><strong>Tanzil al-ahkam:</strong> Akad dan struktur sesuai syariah (bukan sekadar klaim digital)</li>
      </ul>

      <h3>3. Tantangan RWA Syariah</h3>
      <ul>
        <li>Apakah token benar-benar mewakili kepemilikan aset fisik?</li>
        <li>Apakah ada audit dan bukti kepemilikan on-chain & off-chain?</li>
        <li>Bagaimana jika aset dasar disimpan oleh pihak ketiga (custodian)?</li>
      </ul>

      <h3>4. Kriteria Token RWA yang Halal</h3>
      <ol>
        <li>Didukung aset nyata yang dapat diverifikasi</li>
        <li>Ada sertifikat kepemilikan sah</li>
        <li>Tidak mengandung bunga, leverage, atau derivatif</li>
        <li>Distribusi keuntungan jelas (akad musyarakah/mudarabah)</li>
      </ol>

      <h3>5. Contoh Implementasi</h3>
      <p>Beberapa proyek token emas seperti XAUt atau PAXG memiliki underlying real gold yang diaudit secara berkala. Ini lebih mendekati konsep <strong>qabdhu haqiqi</strong>.</p>

      <h3>Kesimpulan</h3>
      <p>RWA dapat menjadi jembatan antara ekonomi digital dan keuangan syariah — asalkan struktur akad, kepemilikan, dan auditnya transparan. Jika tidak, tokenisasi hanya menjadi klaim digital tanpa hak milik sah.</p>
    `
  },
  { 
    id: "nft-milkiyah-hak-guna",
    title: "NFT sebagai Bukti Kepemilikan: Antara Milkiyah dan Hak Guna",
    kicker: "Hukum & Teknologi",
    img: "https://blog.pintu.co.id/wp-content/uploads/2023/09/nft-adalah.jpg",
    read: "6 menit",
    tags: ["NFT", "Hak"],
    href: "#",
    content: `
      <p>NFT (Non-Fungible Token) sering disebut sebagai bukti kepemilikan digital. Namun dalam perspektif fiqh muamalah, apakah NFT benar-benar memberikan milkiyah (hak milik), atau hanya hak guna (intifa’)?</p>

      <h3>1. Apa yang Dimiliki NFT?</h3>
      <p>Pemilik NFT tidak otomatis memiliki karya aslinya, tetapi hak kepemilikan atas <em>token unik</em> yang terdaftar di blockchain. File asli tetap dapat diakses publik, kecuali diatur secara kontraktual.</p>

      <h3>2. Milkiyah vs Hak Guna</h3>
      <ul>
        <li><strong>Milkiyah:</strong> Hak penuh untuk memiliki, memanfaatkan, dan menjual</li>
        <li><strong>Hak Guna (Intifa’):</strong> Hak terbatas untuk memanfaatkan tanpa kepemilikan penuh</li>
      </ul>
      <p>NFT lebih sering merepresentasikan hak guna atau hak komersial terbatas, bukan milkiyah penuh atas karya.</p>

      <h3>3. Risiko Fiqh</h3>
      <ul>
        <li>Ketidakjelasan akad antara kreator dan pembeli</li>
        <li>Potensi gharar jika NFT tidak punya manfaat riil</li>
        <li>Spekulasi harga tanpa underlying utility (maisir)</li>
      </ul>

      <h3>4. NFT yang Diperbolehkan</h3>
      <p>Beberapa model NFT dapat diterima syariah:</p>
      <ul>
        <li>NFT wakaf digital (representasi aset sosial)</li>
        <li>Sertifikat kepemilikan properti tokenized</li>
        <li>Akses lisensi software atau karya seni dengan akad yang jelas</li>
      </ul>

      <h3>Kesimpulan</h3>
      <p>NFT halal jika merepresentasikan hak yang sah, manfaat yang jelas, dan akad yang transparan. Namun, NFT berbasis spekulasi murni tetap termasuk kategori gharar dan maisir yang diharamkan.</p>
    `
  }
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