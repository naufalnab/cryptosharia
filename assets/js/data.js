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
    id: "paradoks-kaca-hutan-gelap",
    title: "Paradoks Kaca dan Hutan Gelap: Evolusi Privasi Blockchain",
    kicker: "Laporan Khusus",
    img: "assets/img/paradoks_kaca_hutan_gelap.png",
    read: "15 menit",
    tags: ["Privasi", "MEV", "Zero Knowledge"],
    content: `
      <p><em>Laporan Khusus: Memahami Sisi Lain Transparansi Blockchain dengan Bahasa Sederhana</em></p>

      <h3>Apa Itu "Paradoks Kaca"?</h3>
      <p>Banyak orang mengira Bitcoin dan crypto itu serba rahasia. Padahal faktanya justru sebaliknya: <strong>Blockchain itu seperti rumah kaca.</strong></p>
      <p>Bayangkan jika rekening bank Anda transparan. Siapapun—tetangga, penjual kopi, hingga penjahat—bisa melihat saldo Anda, dari mana uang Anda berasal, dan ke mana Anda mengirimnya. Itulah realitas blockchain saat ini. Transparansi ini bagus untuk mencegah korupsi, tapi buruk untuk privasi pribadi kita.</p>

      <h3>Mitos: "Crypto Itu Anonim"</h3>
      <p>Salah besar. Crypto itu <em>pseudonim</em> (punya nama samaran). Identitas Anda memang tidak tertulis sebagai "Budi" atau "Siti", tapi berupa deretan kode (misal: 0x7a2...).</p>
      <p>Masalahnya, jika sekali saja nama samaran ini ketahuan milik Anda (misalnya saat Anda transfer dari Tokocrypto/Indodax ke dompet pribadi), maka <strong>seluruh riwayat keuangan Anda terbuka selamanya</strong>. Tidak ada tombol "hapus" di blockchain.</p>

      <h3>Bahaya "Hutan Gelap" (Dark Forest)</h3>
      <p>Di dunia Ethereum (salah satu blockchain terbesar), ada fenomena yang disebut "Hutan Gelap". Ini seperti hutan rimba yang dipenuhi predator tak terlihat.</p>
      <p>Saat Anda kirim transaksi, transaksi itu masuk ke "ruang tunggu" (mempool) sebelum dicatat resmi. Di ruang tunggu ini, ada robot-robot canggih (bot) yang mengintai. Jika mereka melihat Anda mau beli token yang menguntungkan, mereka bisa:</p>
      <ul>
          <li>Menyalip antrian Anda (beli duluan).</li>
          <li>Menaikkan harga secara otomatis.</li>
          <li>Menjualnya kembali ke Anda dengan harga mahal.</li>
      </ul>
      <p>Ini disebut <strong>MEV</strong>, atau gampangnya: "uang palak digital". Anda rugi tanpa sadar.</p>

      <h3>Risiko Nyata: Kejahatan Fisik</h3>
      <p>Karena saldo Anda transparan, penjahat bisa tahu siapa "paus" (orang kaya) sebenarnya. Ini memicu risiko penculikan atau perampokan, karena mereka tahu pasti berapa harta yang Anda miliki di dompet digital Anda.</p>

      <h3>Solusi Masa Depan: Teknologi "Bukti Tanpa Rahasia"</h3>
      <p>Untungnya, para ahli sedang mengembangkan solusi bernama <strong>Zero-Knowledge Proofs (ZKP)</strong>.</p>
      <p>Bayangkan Anda ingin mengikuti pemungutan suara (voting) yang rahasia. Biasanya Anda harus menunjukkan KTP untuk verifikasi identitas. Dengan ZKP, Anda bisa membuktikan "Saya warga yang berhak memilih" tanpa perlu petugas tahu siapa nama Anda atau alamat rumah Anda. Suara Anda terhitung sah, namun identitas Anda tetap terjaga.</p>
      <p>Di blockchain, ini artinya kita bisa bertransaksi dengan aman dan jujur, tanpa harus menelanjangi data keuangan kita ke seluruh dunia.</p>

      <p>Di blockchain, ini artinya kita bisa bertransaksi dengan aman dan jujur, tanpa harus menelanjangi data keuangan kita ke seluruh dunia.</p>

      <h3>ZKP vs Modular Privacy: Apa Bedanya?</h3>
      <p>Jika ZKP adalah <strong>"mesinnya"</strong> (teknologinya), maka Modular Privacy adalah <strong>"arsitekturnya"</strong> (cara pasangnya). Mari kita bedah dengan analogi sederhana: <strong>Rumah Kaca vs Gorden Pintar</strong>.</p>

      <h4>1. Masalah Lama: Rumah Kaca vs Bunker</h4>
      <p>Dulu, dunia blockchain terbagi dua kubu ekstrem:</p>
      <ul>
        <li><strong>Kubu Transparan (Bitcoin/Ethereum):</strong> Ibarat <strong>Rumah Kaca</strong>. Aman karena semua orang bisa mengawasi, tapi privasi nol. Semua orang tahu Anda sedang makan apa.</li>
        <li><strong>Kubu Privat (Monero/Zcash):</strong> Ibarat <strong>Bunker Beton</strong>. Tertutup rapat. Privasi maksimal, tapi pemerintah curiga, "Jangan-jangan di dalam lagi merakit bom?". Akibatnya, koin ini sering dilarang (banned).</li>
      </ul>

      <h4>2. Solusi Baru: Modular Privacy (Rumah Kaca dengan Gorden)</h4>
      <p>Modular Privacy adalah jalan tengahnya. Bayangkan Rumah Kaca tadi, tapi sekarang Anda memasang <strong>Gorden Pintar</strong> di kamar tidur.</p>
      <ul>
        <li>Ruang tamu tetap transparan (publik tahu Anda ada di rumah).</li>
        <li>Saat masuk kamar pribadi, Anda tarik gordennya (privasi aktif).</li>
        <li>Setelah selesai, Anda buka lagi.</li>
      </ul>
      <p>Artinya: Blockchain utamanya tetap transparan (aman & terpercaya), tapi aktivitas sensitif dilakukan di lapisan terpisah yang privat.</p>

      <h4>3. Cara Kerjanya: Kotak Hitam</h4>
      <p>Anda mengirim aset ke "Kotak Hitam" (Layer Eksekusi seperti Aztec). Di dalam kotak itu, Anda bebas bertransaksi tanpa dilihat orang. Setelah selesai, kotak hitam hanya melapor ke Ethereum: <em>"User ini sudah selesai trading, saldo akhirnya sekian."</em> Ethereum mencatat saldo akhir tanpa perlu tahu detail dapurnya.</p>

      <h4>4. Keunggulan Utama: Kepatuhan (Compliance)</h4>
      <p>Ini fitur andalannya. Di Modular Privacy (seperti <strong>Midnight</strong> atau <strong>Aztec</strong>), ada fitur "Viewing Key". Anda bisa memberikan kunci khusus ini ke Auditor atau Petugas Pajak (atau Dewan Syariah) untuk melihat transaksi Anda, tanpa membukanya ke seluruh dunia.</p>
      <p><em>"Privasi bagi publik, Transparansi bagi regulator."</em></p>

      <h4>Contoh Proyek</h4>
      <ul>
        <li><strong>Aztec Network:</strong> Layer 2 Ethereum yang terenkripsi ("Encrypted Ethereum").</li>
        <li><strong>Midnight:</strong> Sidechain Cardano untuk perlindungan data bisnis.</li>
        <li><strong>Secret Network:</strong> Smart contract yang otomatis terenkripsi.</li>
      </ul>

      <h3>Kenapa Kita Butuh Privasi? (Bukan Cuma Buat Kriminal)</h3>
      <p>Dulu, privasi identik dengan menyembunyikan kejahatan. Tapi di era Web3, privasi adalah soal <strong>kedaulatan data</strong>.</p>

      <h4>1. Agar Uang Tetap "Setara" (Fungibility)</h4>
      <p>Uang Rp100.000 lusuh nilainya sama dengan yang baru dari ATM. Tapi di blockchain yang terlalu transparan, jika koin Anda pernah mampir di dompet judi (walau bukan Anda pelakunya), koin itu bisa di-blacklist. Teknologi privasi memastikan "uang tetaplah uang" yang bisa diterima di mana saja.</p>

      <h4>2. Keamanan Tingkat Institusi</h4>
      <p>Bayangkan perusahaan menggunakan blockchain untuk menggaji karyawan. Tanpa privasi, kompetitor bisa tahu persis berapa gaji setiap staf dan siapa supplier mereka. Privasi membuat blockchain aman digunakan untuk bisnis serius.</p>

      <h3>Kegunaan Lain: Login Tanpa Sebar Data</h3>
      <p>Pernahkah Anda kesal harus memberi nomor HP hanya untuk login aplikasi? Dengan teknologi privasi (Identity Management), Anda bisa login cukup dengan bukti kriptografi, tanpa menyerahkan data pribadi ke server perusahaan.</p>

      <h3>Sudut Pandang Syariah: Menjaga Harta (Hifz al-Mal)</h3>
      <p>Dalam Islam, privasi bukan sarana maksiat, melainkan bentuk perlindungan. Menjaga harta dari pandangan hasad (<strong>'Ain</strong>) dan pencurian adalah bagian dari <em>Maqasid Syariah</em> (Hifz al-Mal). Selama tidak digunakan untuk penipuan (<em>gharar</em>) atau judi (<em>maisir</em>), fitur privasi justru melindungi martabat dan keamanan pemilik harta.</p>

      <h3>Kesimpulan</h3>
      <p>Dunia crypto sedang berbenah. Kita bergerak dari era "transparansi total yang berbahaya" menuju "privasi yang aman dan bertanggung jawab".</p>
      
      <p class="muted"><em>(Artikel ini telah disederhanakan untuk pembaca umum.)</em></p>
    `
  },

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
    {
      id: "akad-aset-digital",
      title: "Akad dalam Aset Digital: Bai', Ijarah, Syirkah",
      kicker: "Sharia",
      img: "https://scontent.fsub8-2.fna.fbcdn.net/v/t39.30808-6/558090107_32336097412647918_5154194062032096093_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=aa7b47&_nc_eui2=AeHymmNrySmOGPZAln4DMEqiOhr4cFAVDKs6GvhwUBUMq1iyHnF90Qz1_UU9pyLW_NDShfotUTDMQoAwBtfJiO9p&_nc_ohc=peVmaKHHsX0Q7kNvwGngtxN&_nc_oc=AdlNbMDz4Nx1fW8eMETugH5_3h8nNKnT6ibUR-_Itgp5Lk7-ZS3Z_PR_sVOGLNdQJDc&_nc_zt=23&_nc_ht=scontent.fsub8-2.fna&_nc_gid=b5kIZamxrUpkkqjFqiGjzQ&oh=00_AfdW2tDRaJ2IYvyVLKreaJXeWG8MfCBsynoIbU--5DcZ2A&oe=68E7CA1F",
      read: "9 menit",
      tags: ["Akad", "Muamalah"],
      href: "#",
      content: `
        <p>Aset digital seperti crypto, token, dan NFT tidak bisa lepas dari perbincangan akad dalam perspektif fiqh muamalah. Untuk memahami status hukumnya, kita perlu meninjau jenis akad yang paling sering terjadi di ekosistem ini: <strong>Bai'</strong> (jual beli), <strong>Ijarah</strong> (sewa manfaat), dan <strong>Syirkah</strong> (kerjasama modal).</p>

        <h3>1. Bai' (Jual Beli) dalam Transaksi Crypto</h3>
        <p>Bai' adalah akad pertukaran antara dua barang yang memiliki nilai. Dalam crypto, transaksi spot termasuk akad jual beli apabila terjadi serah terima (qabdh) secara hukmi, yaitu aset berpindah ke wallet pengguna setelah transaksi selesai.</p>
        <ul>
          <li>✅ Syarat sah: Ada barang (crypto), harga, dan ijab-qabul</li>
          <li>❌ Tidak boleh ada penundaan serah terima seperti pada margin trading</li>
        </ul>

        <h3>2. Ijarah (Sewa Manfaat) dalam Ekosistem Blockchain</h3>
        <p>Konsep ijarah muncul pada layanan staking, cloud mining, atau penggunaan node. Selama manfaat yang disewa jelas dan tidak mengandung gharar, akad ini bisa diterapkan.</p>
        <p>Namun, perlu diperhatikan sumber imbalan. Jika reward berasal dari inflasi token yang tidak memiliki underlying asset, maka perlu kehati-hatian.</p>

        <h3>3. Syirkah (Kemitraan) dalam Proyek DeFi</h3>
        <p>Syirkah berlaku saat ada dua pihak atau lebih yang menggabungkan modal untuk mendapatkan keuntungan bersama. Liquidity pool (LP) bisa dianalogikan sebagai syirkah, selama tidak ada bunga dan pembagian keuntungan proporsional berdasarkan kontribusi.</p>

        <h3>Kesimpulan</h3>
        <p>Setiap akad dalam aset digital harus memenuhi prinsip keadilan, kejelasan, dan kerelaan. Dengan memahami akad-akad dasar ini, investor Muslim dapat menavigasi dunia crypto tanpa meninggalkan nilai-nilai syariah.</p>

        <p class="muted"><em>Catatan: Artikel ini bersifat edukatif dan bukan fatwa. Untuk keputusan hukum, konsultasikan dengan ulama yang kompeten dalam fiqh muamalah kontemporer.</em></p>
      `
    },
    {
      id: "riba-gharar-tokenomics",
      title: "Riba & Gharar: Cara Audit Tokenomics",
      kicker: "Sharia",
      img: "https://ischain.id/wp-content/uploads/2022/11/ANTARA-RIBA-GHARAR-1.jpg",
      read: "7 menit",
      tags: ["Riba", "Gharar"],
      href: "#",
      content: `
        <p>Tokenomics adalah jantung dari setiap proyek crypto. Namun, di balik kompleksitasnya sering tersembunyi unsur <strong>riba</strong> dan <strong>gharar</strong> yang bertentangan dengan prinsip syariah. Artikel ini membahas cara mengaudit tokenomics secara sederhana tapi efektif.</p>

        <h3>1. Deteksi Unsur Riba</h3>
        <p>Riba muncul ketika terjadi tambahan nilai tanpa aktivitas ekonomi yang sah. Dalam tokenomics, riba bisa muncul dalam bentuk:</p>
        <ul>
          <li>💸 <strong>Yield tetap</strong> tanpa risiko — mirip bunga deposito.</li>
          <li>📈 <strong>Interest-bearing lending</strong> dalam DeFi lending pool.</li>
          <li>📉 <strong>Margin trading</strong> dengan leverage, yang menggunakan dana pinjaman berbunga.</li>
        </ul>
        <p><em>Audit sederhana:</em> Pastikan reward tidak bersifat tetap dan berasal dari aktivitas produktif (seperti biaya transaksi).</p>

        <h3>2. Identifikasi Unsur Gharar</h3>
        <p>Gharar adalah ketidakpastian berlebihan yang menimbulkan spekulasi. Contohnya:</p>
        <ul>
          <li>❓ Tokenomics tidak menjelaskan fungsi token dengan jelas</li>
          <li>🪙 Supply dan burn mechanism yang tidak transparan</li>
          <li>👥 Tim anonim tanpa tanggung jawab</li>
        </ul>
        <p>Dalam syariah, gharar berlebihan dapat membuat akad menjadi fasid (rusak).</p>

        <h3>3. Langkah Audit Tokenomics</h3>
        <ol>
          <li>🔍 Periksa whitepaper dan distribusi token (apakah adil dan transparan)</li>
          <li>🧾 Pastikan tidak ada bunga atau jaminan profit tetap</li>
          <li>🧠 Cek logika supply-demand dan utility token</li>
          <li>🧱 Pastikan ada underlying project atau manfaat nyata</li>
        </ol>

        <h3>Kesimpulan</h3>
        <p>Menghindari riba dan gharar adalah fondasi utama dalam investasi syariah. Dengan audit sederhana, umat Muslim dapat berpartisipasi dalam inovasi blockchain tanpa mengorbankan prinsip agama.</p>

        <p class="muted"><em>Tips: Gunakan checklist syariah sebelum membeli token baru. Jika terlalu rumit atau tidak jelas sumber profitnya — tinggalkan.</em></p>
      `
    },
  ],

  blockchain: [
    {
      id: "konsensus-pow-pos",
      title: "Cara Kerja Konsensus: PoW vs PoS (Non-Riba)",
      kicker: "Blockchain",
      img: "https://i0.wp.com/zenledger.io/wp-content/uploads/2023/03/61b6f0f7644b7e1eec43423e_Proof-Of-Stake-Vs-Proof-Of-Work.jpg?w=1200&ssl=1",
      read: "8 menit",
      tags: ["Consensus", "Security"],
      href: "#",
      content: `
        <p>Salah satu aspek penting dalam blockchain adalah mekanisme konsensus. Dua sistem yang paling populer adalah <strong>Proof of Work (PoW)</strong> dan <strong>Proof of Stake (PoS)</strong>. Bagaimana keduanya dapat dipandang dari kacamata syariah?</p>

        <h3>1. Proof of Work (PoW)</h3>
        <p>PoW mengandalkan daya komputasi untuk memvalidasi transaksi dan menghasilkan blok baru. Para penambang (miner) bersaing memecahkan teka-teki kriptografi untuk mendapat reward.</p>
        <ul>
          <li>✅ Imbalan berdasarkan kerja nyata (usaha dan energi)</li>
          <li>❌ Boros energi, sehingga kurang efisien</li>
        </ul>
        <p>Secara fiqh, PoW mendekati akad <strong>ju’alah</strong> — yaitu imbalan untuk pekerjaan tertentu.</p>

        <h3>2. Proof of Stake (PoS)</h3>
        <p>PoS memilih validator berdasarkan jumlah token yang mereka stake. Reward diberikan kepada validator terpilih yang menjaga keamanan jaringan.</p>
        <ul>
          <li>✅ Lebih hemat energi</li>
          <li>❌ Potensi gharar jika reward tidak transparan atau berasal dari inflasi</li>
        </ul>

        <h3>3. Perspektif Syariah</h3>
        <p>Kedua mekanisme ini bisa diterima secara prinsip selama tidak melibatkan:</p>
        <ul>
          <li>❌ Lending berbunga</li>
          <li>❌ Manipulasi reward atau spekulasi</li>
        </ul>
        <p>Selama reward berasal dari aktivitas validasi transaksi (bukan pinjaman), maka PoW dan PoS dapat dikategorikan sebagai <strong>usaha produktif</strong> yang halal.</p>

        <h3>Kesimpulan</h3>
        <p>PoW dan PoS sama-sama memiliki dasar yang bisa diterima dalam ekonomi syariah, asalkan mekanisme reward dan kepemilikan asetnya jelas. Prinsip utamanya: “<em>La riba, la gharar, la zulm</em>” — tanpa riba, tanpa ketidakjelasan, tanpa kezaliman.</p>
      `
    },
    {
      id: "layer2-rollup-validium",
      title: "Layer-2 101: Rollup, Validium, & Biaya",
      kicker: "Blockchain",
      img: "https://blog.sagipl.com/wp-content/uploads/2024/10/L-2-Ethereum-Network.jpg",
      read: "6 menit",
      tags: ["L2", "Scalability"],
      href: "#",
      content: `
        <p>Layer-2 (L2) adalah solusi untuk meningkatkan skalabilitas blockchain tanpa mengorbankan keamanan. Dua jenis utama L2 adalah <strong>Rollup</strong> dan <strong>Validium</strong>. Mari kita pahami secara sederhana.</p>

        <h3>1. Rollup</h3>
        <p>Rollup menggabungkan banyak transaksi menjadi satu, lalu mengirim bukti hasilnya ke Layer-1. Ada dua tipe utama:</p>
        <ul>
          <li><strong>Optimistic Rollup:</strong> Mengasumsikan transaksi valid kecuali dibuktikan sebaliknya.</li>
          <li><strong>ZK Rollup:</strong> Menggunakan bukti kriptografi (zero-knowledge proof) untuk validasi cepat.</li>
        </ul>
        <p>Keunggulan: Biaya rendah, keamanan tetap tinggi.</p>

        <h3>2. Validium</h3>
        <p>Validium menyimpan data transaksi di luar blockchain (off-chain), tapi tetap menggunakan bukti ZK untuk validasi.</p>
        <ul>
          <li>⚡ Lebih cepat dan murah</li>
          <li>⚠️ Risiko: Ketergantungan pada operator penyimpan data</li>
        </ul>

        <h3>3. Perspektif Syariah</h3>
        <p>L2 tidak memunculkan akad baru, namun penting untuk memastikan tidak ada unsur <strong>gharar</strong> dalam pengelolaan data dan fee. Transparansi tetap wajib dijaga.</p>

        <h3>Kesimpulan</h3>
        <p>Rollup dan Validium adalah inovasi yang memperluas akses ke blockchain dengan biaya lebih murah. Prinsip syariah menuntut transparansi dan keadilan, bukan sekadar efisiensi teknis.</p>
      `
    },
  ],

  crypto: [
    {
      id: "spot-only-pemula",
      title: "Spot-Only Strategy untuk Pemula",
      kicker: "Crypto",
      img: "https://academy-public.coinmarketcap.com/optimized-uploads/9f8083bc994a46b5a18dc6f1464b03fb.png",
      read: "6 menit",
      tags: ["Spot", "Manajemen Risiko"],
      href: "#",
      content: `
        <p>Bagi Muslim yang baru terjun ke dunia crypto, strategi paling aman dan sesuai syariah adalah <strong>spot-only trading</strong>. Apa artinya dan bagaimana penerapannya?</p>

        <h3>1. Apa Itu Spot Trading?</h3>
        <p>Spot trading adalah jual beli aset digital secara langsung tanpa pinjaman (leverage). Setelah transaksi, aset berpindah ke wallet pembeli — memenuhi syarat <strong>qabdh hukmi</strong>.</p>

        <h3>2. Mengapa Spot Dibenarkan?</h3>
        <p>Dalam fiqh, spot trading termasuk akad jual beli sah karena:</p>
        <ul>
          <li>Tidak ada riba (tanpa bunga)</li>
          <li>Tidak ada gharar besar (transparan dan serah terima langsung)</li>
          <li>Tidak ada spekulasi berlebihan</li>
        </ul>

        <h3>3. Tips Praktis</h3>
        <ol>
          <li>Gunakan exchange yang tidak menyediakan margin/lending</li>
          <li>Pahami aset yang dibeli (utility, tim, proyek)</li>
          <li>Gunakan manajemen risiko: maksimal 10% modal per aset</li>
        </ol>

        <h3>Kesimpulan</h3>
        <p>Spot-only adalah jalan tengah antara partisipasi dalam inovasi dan menjaga prinsip syariah. Fokuslah pada pemahaman, bukan sekadar profit cepat.</p>
      `
    },
    {
      id: "staking-ijarah-analogi",
      title: "Staking & Delegasi: Analogi Ijarah",
      kicker: "Crypto",
      img: "https://cdn.prod.website-files.com/624b08d53d7ac65cf7c11d91/67aa7ae20e2601bd622d3586_Crypto%20Staking%20Explained_%20How%20It%20Works%2C%20Types%2C%20Benefits%20%26%20Risks%202.jpg",
      read: "7 menit",
      tags: ["Staking", "Validator"],
      href: "#",
      content: `
        <p>Staking sering dibandingkan dengan akad <strong>ijarah</strong> (sewa manfaat). Namun, apakah perbandingan ini valid secara fiqh?</p>

        <h3>1. Mekanisme Staking</h3>
        <p>Staking berarti mengunci token untuk membantu memvalidasi transaksi di jaringan PoS. Sebagai imbalan, pengguna mendapat reward.</p>

        <h3>2. Analogi Ijarah</h3>
        <ul>
          <li><strong>Aset:</strong> Token yang disewakan</li>
          <li><strong>Manfaat:</strong> Keamanan jaringan</li>
          <li><strong>Imbalan:</strong> Staking reward</li>
        </ul>
        <p>Namun, ijarah mensyaratkan ujrah yang pasti dan manfaat terukur. Sedangkan reward staking bersifat probabilistik.</p>

        <h3>3. Pendekatan Alternatif</h3>
        <p>Beberapa ulama memandang staking lebih mirip akad <strong>ju’alah</strong>, yaitu pemberian hadiah atas jasa yang berhasil dilakukan.</p>

        <h3>Kesimpulan</h3>
        <p>Staking bisa diterima secara syariah jika reward berasal dari biaya transaksi, bukan dari inflasi token atau bunga. Prinsip utamanya: hindari gharar dan riba, serta pahami mekanisme teknologinya.</p>
      `
    },
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
    trending.find(a => a.id === "paradoks-kaca-hutan-gelap"),
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
