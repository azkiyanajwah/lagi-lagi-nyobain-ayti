/* ==========================================================
   miloop.id - JavaScript Logic (Versi Paling Pintar & Detail)
   Menangani Detail Produk, Stok Real-time, Keranjang, dll.
========================================================== */

// ==================== 1. DATABASE PRODUK (36 Produk Unik) ====================
const defaultProdukData = [
    // --- AMIGURUMI (12) ---
    { id: 1, nama: "Amigurumi Bunny", kategori: "amigurumi", harga: 85000, img: "images/amigurumi-bunny.jpeg", deskripsi: "Boneka rajut handmade berbentuk kelinci yang menggemaskan dengan sentuhan detail yang rapi. Cocok dijadikan koleksi, dekorasi kamar, maupun hadiah spesial untuk orang tersayang." },
    { id: 2, nama: "Amigurumi Duck Sunflower", kategori: "amigurumi", harga: 80000, img: "images/amigurumi-duck-sunflower.jpeg", deskripsi: "Boneka rajut handmade berbentuk bebek dengan hiasan bunga matahari yang ceria dan unik. Memberikan kesan manis sebagai dekorasi atau koleksi favorit." },
    { id: 3, nama: "Amigurumi Howl", kategori: "amigurumi", harga: 75000, img: "images/amigurumi-howl.jpeg", deskripsi: "Boneka rajut handmade yang terinspirasi dari karakter dalam Howl's Moving Castle. Dibuat dengan penuh ketelitian sehingga cocok untuk para pecinta Studio Ghibli." },
    { id: 4, nama: "Amigurumi Kiky Delivery", kategori: "amigurumi", harga: 65000, img: "images/amigurumi-kiky-delivery.jpeg", deskripsi: "Boneka rajut handmade bertema Kiki's Delivery Service yang lucu dan estetik. Cocok sebagai koleksi maupun hadiah bagi penggemar Ghibli." },
    { id: 5, nama: "Amigurumi Luffy", kategori: "amigurumi", harga: 95000, img: "images/amigurumi-luffy.jpeg", deskripsi: "Boneka rajut handmade karakter Monkey D. Luffy dengan detail khas yang menarik. Pilihan tepat untuk melengkapi koleksi penggemar One Piece." },
    { id: 6, nama: "Amigurumi Nezuko", kategori: "amigurumi", harga: 70000, img: "images/amigurumi-nezuko.jpeg", deskripsi: "Boneka rajut handmade karakter Nezuko yang dibuat dengan detail menawan. Cocok dijadikan pajangan maupun hadiah untuk penggemar Demon Slayer." },
    { id: 7, nama: "Amigurumi Penguin", kategori: "amigurumi", harga: 75000, img: "images/amigurumi-penguin.jpeg", deskripsi: "Boneka rajut handmade berbentuk penguin yang lucu dan menggemaskan. Memberikan sentuhan hangat pada meja kerja, kamar, atau ruang favoritmu." },
    { id: 8, nama: "Amigurumi Pochacco", kategori: "amigurumi", harga: 60000, img: "images/amigurumi-pochacco.jpeg", deskripsi: "Boneka rajut handmade karakter Pochacco dengan tampilan yang manis dan menggemaskan. Cocok untuk koleksi maupun hadiah." },
    { id: 9, nama: "Amigurumi Tanjiro", kategori: "amigurumi", harga: 70000, img: "images/amigurumi-tanjiro.jpeg", deskripsi: "Boneka rajut handmade karakter Tanjiro dengan detail yang rapi dan menarik. Pilihan sempurna bagi para penggemar Demon Slayer." }, 
    { id: 10, nama: "Amigurumi Tottoro", kategori: "amigurumi", harga: 85000, img: "images/amigurumi-tottoro.jpeg", deskripsi: "Boneka rajut handmade karakter Totoro yang ikonik dan menggemaskan. Cocok dijadikan dekorasi sekaligus koleksi bagi pecinta Studio Ghibli." },
    { id: 11, nama: "Amigurumi Zootopia", kategori: "amigurumi", harga: 90000, img: "images/amigurumi-zootopia.jpeg", deskripsi: "Boneka rajut handmade yang terinspirasi dari karakter Zootopia. Memiliki desain unik dan cocok dijadikan hadiah maupun koleksi." },
    { id: 12, nama: "Amigurumi Zoro", kategori: "amigurumi", harga: 75000, img: "images/amigurumi-zoro.jpeg", deskripsi: "Boneka rajut handmade karakter Roronoa Zoro dengan detail yang khas. Sangat cocok untuk melengkapi koleksi para penggemar One Piece." },

    // --- BUCKET HAT (8) ---
    { id: 13, nama: "Strawberry Hat", kategori: "buckethat", harga: 135000, img: "images/bucket hat strawberry.jpeg", deskripsi: "Topi rajut handmade dengan motif stroberi yang manis dan estetik. Nyaman digunakan untuk aktivitas sehari-hari sekaligus mempercantik penampilan." },
    { id: 14, nama: "BMO Finn Hat", kategori: "buckethat", harga: 120000, img: "images/bucket-hat-bmo-finn.jpeg", deskripsi: "Topi rajut handmade bertema BMO dan Finn dengan desain unik yang cocok untuk para penggemar Adventure Time." },
    { id: 15, nama: "Cat Character Hat", kategori: "buckethat", harga: 145000, img: "images/bucket-hat-cat-character.jpeg", deskripsi: "Topi rajut handmade dengan karakter kucing yang lucu dan menggemaskan. Cocok dipadukan dengan berbagai gaya kasual." },
    { id: 16, nama: "Chopper Hat", kategori: "buckethat", harga: 125000, img: "images/bucket-hat-chopper.jpeg", deskripsi: "Topi rajut handmade bertema Chopper yang ikonik. Pilihan menarik bagi pecinta One Piece." },
    { id: 17, nama: "Frog Hat", kategori: "buckethat", harga: 150000, img: "images/bucket-hat-frog.jpeg", deskripsi: "Topi rajut handmade bermotif katak yang menggemaskan dan nyaman dipakai untuk berbagai aktivitas." },
    { id: 18, nama: "Giraffe Hat", kategori: "buckethat", harga: 140000, img: "images/bucket-hat-giraffe.jpeg", deskripsi: "Topi rajut handmade dengan motif jerapah yang unik dan menggemaskan. Memberikan tampilan yang lebih playful." },
    { id: 19, nama: "Monster inc Hat", kategori: "buckethat", harga: 130000, img: "images/bucket-hat-monster-inc.jpeg", deskripsi: "Topi rajut handmade bertema Monsters, Inc. dengan desain lucu yang cocok untuk koleksi maupun dipakai sehari-hari." },
    { id: 20, nama: "Soot Sprite Ghibli Hat", kategori: "buckethat", harga: 125000, img: "images/bucket-hat-soot-sprite-ghibli.jpeg", deskripsi: "Topi rajut handmade bertema Soot Sprite dari Studio Ghibli. Desainnya unik dan cocok untuk melengkapi gaya para pecinta Ghibli." },

    // --- TAS / TOTEBAG (8) ---
    { id: 21, nama: "Beaches Tote Bag", kategori: "bag", harga: 210000, img: "images/totebag-beaches.jpeg", deskripsi: "Tas rajut handmade dengan desain bertema pantai yang sederhana namun estetik. Cocok digunakan untuk aktivitas sehari-hari." },
    { id: 22, nama: "Blue Flower Tote Bag", kategori: "bag", harga: 195000, img: "images/totebag-blue-flower.jpeg", deskripsi: "Tas rajut handmade dengan motif bunga biru yang memberikan kesan elegan dan manis." },
    { id: 23, nama: "Cream Butterfly Bag", kategori: "bag", harga: 150000, img: "images/totebag-cream-butterfly.jpeg", deskripsi: "Tas rajut handmade dengan hiasan kupu-kupu berwarna krem yang cantik dan cocok dipadukan dengan berbagai outfit." },
    { id: 24, nama: "Daisy Flower Tote Bag", kategori: "bag", harga: 85000, img: "images/totebag-daisy-flower.jpeg", deskripsi: "Tas rajut handmade bermotif bunga daisy yang memberikan tampilan segar dan feminin." },
    { id: 25, nama: "Pink Butterfly Tote Bag", kategori: "bag", harga: 220000, img: "images/totebag-pink-butterfly.jpeg", deskripsi: "Tas rajut handmade dengan motif kupu-kupu berwarna pink yang manis dan estetik." },
    { id: 26, nama: "Pink Flower Tote Bag", kategori: "bag", harga: 135000, img: "images/totebag-pink-flower.jpeg", deskripsi: "Tas rajut handmade bermotif bunga pink yang cocok digunakan untuk aktivitas sehari-hari maupun sebagai pelengkap gaya." },
    { id: 27, nama: "Two Daisy Flower Bag", kategori: "bag", harga: 250000, img: "images/totebag-two-daisy-flower.jpeg", deskripsi: "Tas rajut handmade dengan dua motif bunga daisy yang memberikan kesan sederhana namun menawan." },
    { id: 28, nama: "White Sunflower", kategori: "bag", harga: 175000, img: "images/totebag-white-sunflower.jpeg", deskripsi: "Tas rajut handmade dengan motif bunga matahari putih yang elegan dan unik. Cocok digunakan sebagai tas harian maupun dijadikan hadiah spesial." },

    // --- KEYCHAIN (8) ---
    { id: 29, nama: "Chick Keychain", kategori: "keychain", harga: 35000, img: "images/keychain-chick.jpeg", deskripsi: "Gantungan kunci rajut handmade berbentuk anak ayam yang lucu dan menggemaskan. Cocok digunakan sebagai aksesori tas maupun kunci." },
    { id: 30, nama: "Frog Keychain", kategori: "keychain", harga: 45000, img: "images/keychain-frog.jpeg", deskripsi: "Gantungan kunci rajut handmade berbentuk katak yang lucu dan cocok dijadikan hadiah maupun koleksi." },
    { id: 31, nama: "Jelyfish Keychain", kategori: "keychain", harga: 30000, img: "images/keychain-jelyfish.jpeg", deskripsi: "Gantungan kunci rajut handmade berbentuk ubur-ubur dengan desain unik dan warna yang menarik." },
    { id: 32, nama: "Turtles Keychain", kategori: "keychain", harga: 35000, img: "images/keychain-turtles.jpeg", deskripsi: "Gantungan kunci rajut handmade berbentuk kura-kura mini yang lucu dan cocok dijadikan koleksi maupun hadiah." },
    { id: 33, nama: "Moon & Sun Keychain", kategori: "keychain", harga: 40000, img: "images/keychain-moon&sun.jpeg", deskripsi: "Gantungan kunci rajut handmade bertema bulan dan matahari yang melambangkan keseimbangan dan kehangatan." },
    { id: 34, nama: "Octopus Keychain", kategori: "keychain", harga: 45000, img: "images/keychain-octopus.jpeg", deskripsi: "Gantungan kunci rajut handmade berbentuk gurita mini yang lucu dan cocok sebagai aksesori sehari-hari." },
    { id: 35, nama: "Strawberry Cow Keychain", kategori: "keychain", harga: 25000, img: "images/keychain-strawberry-cow.jpeg", deskripsi: "Gantungan kunci rajut handmade berbentuk sapi stroberi yang menggemaskan dengan tampilan yang estetik." },
    { id: 36, nama: "Cute Penguin Keychain", kategori: "keychain", harga: 30000, img: "images/keychain-cute-penguin.jpeg", deskripsi: "Gantungan kunci rajut handmade berbentuk penguin mini dengan desain yang menggemaskan dan estetik." }
];

// Inisialisasi Database Produk ke LocalStorage (Ubah key ke V2 agar load deskripsi baru)
let produkData = JSON.parse(localStorage.getItem('miloop_produk_v3'));
if (!produkData) {
    produkData = defaultProdukData.map(p => ({
        ...p,
        stok: 20 // Default stok 20
    }));
    localStorage.setItem('miloop_produk_v2', JSON.stringify(produkData));
}

function simpanProduk() {
    localStorage.setItem('miloop_produk_v2', JSON.stringify(produkData));
}

// State Aplikasi
let keranjang = JSON.parse(localStorage.getItem('miloop_keranjang')) || [];
let riwayatPesanan = JSON.parse(localStorage.getItem('miloop_pesanan')) || [];
let grafikInstance = null;

// ==================== 2. INISIALISASI SAAT WEB DIMUAT ====================
document.addEventListener('DOMContentLoaded', () => {
    tampilkanProduk(produkData);
    updateBadgeKeranjang();
    
    // --- FITUR NAMA USER DINAMIS ---
    const namaUser = localStorage.getItem('miloop_nama') || 'Pengunjung';
    
    const menuProfil = document.getElementById('menu-profil-btn');
    if(menuProfil) menuProfil.innerText = `👤 Profil ${namaUser}`;
    
    const judulProfil = document.getElementById('judul-profil-user');
    if(judulProfil) judulProfil.innerText = `👤 Profil ${namaUser}`;
    
    const inputNamaCheckout = document.getElementById('nama-pembeli');
    if(inputNamaCheckout && namaUser !== 'Admin miloop') {
        inputNamaCheckout.value = namaUser;
    }

    // Setel opsi stok di dashboard admin
    const selectStok = document.getElementById('pilih-produk-stok');
    if (selectStok) {
        produkData.forEach(p => {
            selectStok.innerHTML += `<option value="${p.id}">${p.nama} (Sisa: ${p.stok})</option>`;
        });
    }
});

function formatRupiah(angka) {
    return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', maximumFractionDigits: 0 }).format(angka);
}

// ==================== 3. NAVIGASI HALAMAN ====================
function pindahHalaman(halamanId) {
    document.querySelectorAll('.halaman').forEach(el => el.classList.remove('aktif'));
    const target = document.getElementById('halaman-' + halamanId);
    if(target) {
        target.classList.add('aktif');
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    if (halamanId === 'keranjang') renderKeranjang();
    if (halamanId === 'user') renderRiwayatPesanan();
    if (halamanId === 'admin') {
        renderTabelAdmin();
        updateGrafikAdmin();
    }
}

function cekLoginStatus(targetRole) {
    const roleSaatIni = localStorage.getItem('miloop_role');
    if (targetRole === 'admin' && roleSaatIni !== 'admin') {
        Swal.fire({
            icon: 'error',
            title: 'Akses Ditolak',
            text: 'Halaman ini khusus Admin. Anda login sebagai User.',
            confirmButtonColor: '#E07A5F'
        });
        return; 
    }
    pindahHalaman(targetRole);
}

// ==================== 4. KATALOG, PENCARIAN, & DETAIL (POP-UP) ====================
function tampilkanProduk(data) {
    const grid = document.getElementById('daftar-produk');
    if (!grid) return;
    
    grid.innerHTML = '';
    if (data.length === 0) {
        grid.innerHTML = `<p style="grid-column: 1/-1; text-align: center; color: #888;">Produk tidak ditemukan.</p>`;
        return;
    }

    data.forEach(produk => {
        const warnaStok = produk.stok > 0 ? '#81B29A' : '#d90429';
        const teksStok = produk.stok > 0 ? `Tersedia: ${produk.stok} pcs` : 'Stok Habis!';

        grid.innerHTML += `
            <div class="product-card">
                <img src="${produk.img}" alt="${produk.nama}" loading="lazy" style="cursor:pointer;" onclick="tampilkanDetail(${produk.id})">
                <div class="product-info">
                    <h3>${produk.nama}</h3>
                    <div style="display:flex; justify-content:space-between; margin-bottom:10px;">
                        <span class="kategori" style="margin:0;">${produk.kategori.toUpperCase()}</span>
                        <span style="font-size:0.8rem; font-weight:bold; color:${warnaStok};">${teksStok}</span>
                    </div>
                    <p class="harga">${formatRupiah(produk.harga)}</p>
                    <div style="display: flex; gap: 10px;">
                        <button class="btn-secondary" onclick="tampilkanDetail(${produk.id})" style="padding: 10px; font-size: 0.9rem;">Lihat Detail</button>
                        <button class="btn-primary" onclick="tambahKeKeranjang(${produk.id})" style="padding: 10px; font-size: 0.9rem;" ${produk.stok <= 0 ? 'disabled' : ''}>+ Cart</button>
                    </div>
                </div>
            </div>
        `;
    });
}

function tampilkanDetail(id) {
    const produk = produkData.find(p => p.id === id);
    const warnaStok = produk.stok > 0 ? '#81B29A' : '#d90429';

    Swal.fire({
        title: produk.nama,
        html: `
            <img src="${produk.img}" style="width: 100%; height: 250px; object-fit: cover; border-radius: 12px; margin-bottom: 15px;">
            <p style="text-align: left; margin-bottom: 15px; color: #555; line-height: 1.6;">${produk.deskripsi}</p>
            <div style="display: flex; justify-content: space-between; align-items: center; background: #f9f9f9; padding: 15px; border-radius: 10px; border: 1px solid #eee;">
                <span style="font-weight: bold; color: #E07A5F; font-size: 1.3rem;">${formatRupiah(produk.harga)}</span>
                <span style="font-size: 0.95rem; font-weight: bold; color: ${warnaStok};">Sisa Stok: ${produk.stok}</span>
            </div>
        `,
        showCancelButton: true,
        confirmButtonText: '🛒 Masukkan Keranjang',
        cancelButtonText: 'Tutup',
        confirmButtonColor: '#E07A5F',
        cancelButtonColor: '#E5E7EB',
        width: '450px'
    }).then((result) => {
        if (result.isConfirmed) {
            tambahKeKeranjang(id);
        }
    });
}

const searchInput = document.getElementById('search-input');
const kategoriSelect = document.getElementById('kategori-select');

function saringProduk() {
    if(!searchInput || !kategoriSelect) return;
    
    const kataKunci = searchInput.value.toLowerCase();
    const kategori = kategoriSelect.value;

    const hasilFilter = produkData.filter(p => {
        let teksPencarian = (p.nama + " " + p.kategori + " " + p.deskripsi).toLowerCase();
        
        if (p.kategori === 'bag') teksPencarian += " tas totebag selempang";
        if (p.kategori === 'amigurumi') teksPencarian += " boneka rajut hewan mainan";
        if (p.kategori === 'buckethat') teksPencarian += " topi kupluk hat bucket";
        if (p.kategori === 'keychain') teksPencarian += " gantungan kunci gantungan";

        const cocokNama = teksPencarian.includes(kataKunci);
        const cocokKategori = kategori === 'semua' || p.kategori === kategori;
        return cocokNama && cocokKategori;
    });

    tampilkanProduk(hasilFilter);
}
if(searchInput) searchInput.addEventListener('input', saringProduk);
if(kategoriSelect) kategoriSelect.addEventListener('change', saringProduk);


// ==================== 5. LOGIKA KERANJANG BELANJA & STOK ====================
function tambahKeKeranjang(id) {
    const produk = produkData.find(p => p.id === id);
    if (produk.stok <= 0) {
        Swal.fire('Mohon Maaf', 'Stok produk ini sedang kosong atau sudah habis.', 'error');
        return;
    }
    const itemAda = keranjang.find(item => item.id === id);

    if (itemAda) { itemAda.jumlah++; } else { keranjang.push({ ...produk, jumlah: 1 }); }

    produk.stok -= 1;
    simpanProduk(); 
    simpanKeranjang();
    if(document.getElementById('halaman-katalog').classList.contains('aktif')) { saringProduk(); }

    Swal.fire({
        toast: true, position: 'top-end', icon: 'success', title: `${produk.nama} masuk keranjang!`, showConfirmButton: false, timer: 1500
    });
}

function simpanKeranjang() {
    localStorage.setItem('miloop_keranjang', JSON.stringify(keranjang));
    updateBadgeKeranjang();
    renderKeranjang();
}

function updateBadgeKeranjang() {
    const badge = document.getElementById('badge-cart');
    if (badge) {
        const totalBarang = keranjang.reduce((sum, item) => sum + item.jumlah, 0);
        badge.innerText = totalBarang;
    }
}

function renderKeranjang() {
    const wadah = document.getElementById('cart-items');
    const labelTotal = document.getElementById('cart-total');
    if (!wadah || !labelTotal) return;

    wadah.innerHTML = '';
    let totalHarga = 0;

    if (keranjang.length === 0) {
        wadah.innerHTML = '<p style="color:#888;">Keranjang kamu masih kosong, yuk mulai merajut cerita!</p>';
        labelTotal.innerText = 'Rp 0';
        return;
    }

    keranjang.forEach((item, index) => {
        const subtotal = item.harga * item.jumlah;
        totalHarga += subtotal;

        wadah.innerHTML += `
            <div class="cart-item">
                <div>
                    <h4>${item.nama}</h4>
                    <p>${formatRupiah(item.harga)} x ${item.jumlah}</p>
                </div>
                <div class="cart-controls">
                    <button onclick="ubahJumlah(${index}, -1)">-</button>
                    <span>${item.jumlah}</span>
                    <button onclick="ubahJumlah(${index}, 1)">+</button>
                    <button class="btn-hapus" onclick="hapusItem(${index})">🗑️</button>
                </div>
            </div>
        `;
    });
    labelTotal.innerText = formatRupiah(totalHarga);
}

function ubahJumlah(index, nilai) {
    const item = keranjang[index];
    const produkAsli = produkData.find(p => p.id === item.id);

    if (nilai > 0) {
        if (produkAsli.stok <= 0) {
            Swal.fire('Maaf', 'Sisa stok tidak mencukupi!', 'warning'); return;
        }
        produkAsli.stok -= 1; item.jumlah += 1;
    } else {
        produkAsli.stok += 1; item.jumlah -= 1;
        if (item.jumlah <= 0) { keranjang.splice(index, 1); }
    }
    
    simpanProduk(); simpanKeranjang(); saringProduk();
}

function hapusItem(index) {
    const item = keranjang[index];
    const produkAsli = produkData.find(p => p.id === item.id);
    produkAsli.stok += item.jumlah;
    keranjang.splice(index, 1);
    simpanProduk(); simpanKeranjang(); saringProduk();
}

// ==================== 6. PROSES CHECKOUT ====================
const formCheckout = document.getElementById('form-checkout');
if (formCheckout) {
    formCheckout.addEventListener('submit', (e) => {
        e.preventDefault();

        if (keranjang.length === 0) {
            Swal.fire('Eits!', 'Keranjang masih kosong, beli rajutan dulu yuk!', 'warning'); return;
        }

        const nama = document.getElementById('nama-pembeli').value;
        const pengiriman = document.getElementById('metode-pengiriman').value;
        const pembayaran = document.getElementById('metode-bayar').value;
        const totalBayar = keranjang.reduce((sum, item) => sum + (item.harga * item.jumlah), 0);
        const idPesanan = 'MLP-' + Math.floor(Math.random() * 1000000);
        const tanggal = new Date().toLocaleDateString('id-ID');

        let htmlPembayaran = '';
        if (pembayaran === 'QRIS') {
            const qrUrl = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=miloopid_tagihan_${totalBayar}`;
            htmlPembayaran = `
                <div style="text-align: center;">
                    <h3 style="color: #3D405B; margin-bottom: 10px;">Scan QRIS di bawah ini</h3>
                    <img src="${qrUrl}" alt="QRIS" style="border: 4px solid #E07A5F; border-radius: 15px; padding: 10px; margin-bottom: 15px;">
                    <p style="font-size: 1.1rem; color: #555;">Total Bayar: <b style="color: #E07A5F;">${formatRupiah(totalBayar)}</b></p>
                </div>
            `;
        } else if (pembayaran === 'BCA') {
            htmlPembayaran = `
                <div style="text-align: center;">
                    <h3 style="color: #0066AE; margin-bottom: 5px;">Bank BCA</h3>
                    <p style="color: #555; margin-bottom: 15px;">Silakan transfer ke rekening berikut:</p>
                    <h2 style="letter-spacing: 2px; color: #3D405B; background: #f4f4f4; padding: 15px; border-radius: 10px;">873-123-4567</h2>
                    <p style="margin-top: 10px;">Atas Nama: <b>miloop.id Official</b></p>
                    <p style="font-size: 1.1rem; color: #555; margin-top:15px;">Total Transfer: <b style="color: #E07A5F;">${formatRupiah(totalBayar)}</b></p>
                </div>
            `;
        } else if (pembayaran === 'Mandiri') {
            htmlPembayaran = `
                <div style="text-align: center;">
                    <h3 style="color: #F2A900; margin-bottom: 5px;">Virtual Account Mandiri</h3>
                    <p style="color: #555; margin-bottom: 15px;">Gunakan nomor VA di bawah ini:</p>
                    <h2 style="letter-spacing: 2px; color: #3D405B; background: #f4f4f4; padding: 15px; border-radius: 10px;">895-08-12345678</h2>
                    <p style="margin-top: 10px;">Atas Nama: <b>miloop.id Official</b></p>
                    <p style="font-size: 1.1rem; color: #555; margin-top: 15px;">Total Bayar: <b style="color: #E07A5F;">${formatRupiah(totalBayar)}</b></p>
                </div>
            `;
        }

        Swal.fire({
            title: 'Menunggu Pembayaran ⏳',
            html: htmlPembayaran,
            showCancelButton: true,
            confirmButtonColor: '#81B29A', 
            cancelButtonColor: '#E5E7EB',
            confirmButtonText: '✅ Saya Sudah Bayar',
            cancelButtonText: '<span style="color:#555">Batal</span>',
            allowOutsideClick: false 
        }).then((result) => {
            if (result.isConfirmed) {
                const pesananBaru = { id: idPesanan, tanggal: tanggal, nama: nama, pengiriman: pengiriman, pembayaran: pembayaran, total: totalBayar, items: [...keranjang] };
                riwayatPesanan.push(pesananBaru);
                localStorage.setItem('miloop_pesanan', JSON.stringify(riwayatPesanan));

                keranjang = []; simpanKeranjang(); formCheckout.reset();

                Swal.fire({
                    icon: 'success', title: 'Pembayaran Diterima!',
                    text: `Terima kasih ${nama}, pesanan rajutanmu (${idPesanan}) akan segera dirajut & dikirim!`,
                    confirmButtonColor: '#E07A5F'
                }).then(() => { pindahHalaman('user'); });
            }
        });
    });
}

// ==================== 7. PROFIL USER (RIWAYAT PESANAN) ====================
function renderRiwayatPesanan() {
    const wadah = document.getElementById('user-riwayat-pesanan');
    if (!wadah) return;

    if (riwayatPesanan.length === 0) {
        wadah.innerHTML = '<p style="color:#888;">Belum ada riwayat belanja.</p>'; return;
    }

    wadah.innerHTML = '';
    [...riwayatPesanan].reverse().forEach(p => {
        wadah.innerHTML += `
            <div style="background: #f9f9f9; padding: 15px; border-radius: 10px; margin-bottom: 15px; border: 1px solid #eee;">
                <div style="display: flex; justify-content: space-between; margin-bottom: 10px;">
                    <strong>ID: ${p.id}</strong><span style="color: #888; font-size: 0.85rem;">${p.tanggal}</span>
                </div>
                <p style="margin: 0; color: #555;">Total Bayar: <b style="color: var(--primary-color);">${formatRupiah(p.total)}</b> via ${p.pembayaran}</p>
                <p style="margin: 5px 0 0 0; font-size: 0.9rem; color: #777;">Kurir: ${p.pengiriman}</p>
            </div>
        `;
    });
}

// ==================== 8. DASBOR ADMIN ====================
function renderTabelAdmin() {
    const tbody = document.getElementById('tabel-pesanan-admin');
    if (!tbody) return;

    tbody.innerHTML = '';
    if (riwayatPesanan.length === 0) {
        tbody.innerHTML = '<tr><td colspan="6" style="text-align:center;">Belum ada data pesanan masuk.</td></tr>'; return;
    }

    [...riwayatPesanan].reverse().forEach(p => {
        tbody.innerHTML += `
            <tr>
                <td><strong>${p.id}</strong></td>
                <td>${p.tanggal}</td>
                <td>${p.nama}</td>
                <td>${p.pengiriman}</td>
                <td style="color: var(--primary-color); font-weight: bold;">${formatRupiah(p.total)}</td>
                <td>${p.pembayaran}</td>
            </tr>
        `;
    });
}

function bersihkanDataAdmin() {
    Swal.fire({
        title: 'Hapus Semua Log Pesanan?', text: "Data yang dihapus tidak bisa dikembalikan!",
        icon: 'warning', showCancelButton: true, confirmButtonColor: '#e63946',
        cancelButtonColor: '#81B29A', confirmButtonText: 'Ya, Hapus!'
    }).then((result) => {
        if (result.isConfirmed) {
            riwayatPesanan = []; localStorage.removeItem('miloop_pesanan');
            renderTabelAdmin(); updateGrafikAdmin();
            Swal.fire('Terhapus!', 'Semua data log pesanan telah dihapus.', 'success');
        }
    });
}

const formStok = document.getElementById('form-tambah-stok');
if (formStok) {
    formStok.addEventListener('submit', (e) => {
        e.preventDefault();
        const idBarang = parseInt(document.getElementById('pilih-produk-stok').value);
        const jumlah = parseInt(document.getElementById('jumlah-stok-tambah').value);
        
        const produk = produkData.find(p => p.id === idBarang);
        produk.stok += jumlah;
        
        simpanProduk(); saringProduk();
        Swal.fire('Berhasil!', `Stok <b>${produk.nama}</b> berhasil ditambah ${jumlah}. Sisa stok sekarang: ${produk.stok}`, 'success');
        formStok.reset();
        
        const selectStok = document.getElementById('pilih-produk-stok');
        selectStok.innerHTML = '';
        produkData.forEach(p => { selectStok.innerHTML += `<option value="${p.id}">${p.nama} (Sisa: ${p.stok})</option>`; });
    });
}

// ==================== 9. CHART.JS (Grafik Penjualan) ====================
function updateGrafikAdmin() {
    const ctx = document.getElementById('grafikPenjualan');
    if (!ctx) return;
    if (grafikInstance) grafikInstance.destroy();

    let dataBCA = 0, dataMandiri = 0, dataQRIS = 0;
    riwayatPesanan.forEach(p => {
        if (p.pembayaran.includes('BCA')) dataBCA++;
        else if (p.pembayaran.includes('Mandiri')) dataMandiri++;
        else if (p.pembayaran.includes('QRIS')) dataQRIS++;
    });

    grafikInstance = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Transfer BCA', 'VA Mandiri', 'QRIS (E-Wallet)'],
            datasets: [{
                label: 'Jumlah Transaksi', data: [dataBCA, dataMandiri, dataQRIS],
                backgroundColor: ['rgba(224, 122, 95, 0.8)', 'rgba(129, 178, 154, 0.8)', 'rgba(61, 64, 91, 0.8)'],
                borderColor: ['rgba(224, 122, 95, 1)', 'rgba(129, 178, 154, 1)', 'rgba(61, 64, 91, 1)'],
                borderWidth: 1, borderRadius: 8
            }]
        },
        options: { responsive: true, scales: { y: { beginAtZero: true, ticks: { stepSize: 1 } } } }
    });
}