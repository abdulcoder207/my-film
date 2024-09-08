// script.js

// document.addEventListener("DOMContentLoaded", function() {
//     const cards = document.querySelectorAll('.movie-card');

//     cards.forEach(card => {
//         let hoverTimeout;

//         card.addEventListener('mouseover', () => {
//             hoverTimeout = setTimeout(() => {
//                 card.classList.add('show-full-text');
//             }, 1000); // Adjust the delay time as needed
//         });

//         card.addEventListener('mouseout', () => {
//             clearTimeout(hoverTimeout);
//             card.classList.remove('show-full-text');
//         });
//     });
// });

// Fungsi untuk menampilkan loader
function showLoader(message) {
    document.getElementById('network-loader').style.display = 'flex'; // Tampilkan loader
    document.getElementById('loader-message').textContent = message;  // Tampilkan pesan
}

// Fungsi untuk menyembunyikan loader
function hideLoader() {
    document.getElementById('network-loader').style.display = 'none'; // Sembunyikan loader
}

// Deteksi jaringan
function checkNetwork() {
    if (!navigator.onLine) {
        showLoader("You are offline. Please check your connection.");
    } else {
        hideLoader();
    }
}

// Tambahkan event listener untuk perubahan status jaringan
window.addEventListener('online', checkNetwork);
window.addEventListener('offline', checkNetwork);

// Cek status jaringan saat halaman pertama kali dimuat
checkNetwork();

// Simulasi jaringan lambat dengan timeout (misalnya jika data loading lama)
function simulateDataLoad() {
    // Tampilkan loader jika pemuatan data butuh waktu lebih dari 3 detik
    let loadingTimeout = setTimeout(function() {
        showLoader("Loading is taking longer than usual...");
    }, 3000); // Loader muncul jika lebih dari 3 detik

    // Simulasi permintaan data (misal: ambil data dari API)
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(data => {
            clearTimeout(loadingTimeout);  // Hapus timeout jika data berhasil di-load
            hideLoader(); // Sembunyikan loader
            console.log(data); // Tampilkan data di console
        })
        .catch(error => {
            showLoader("Failed to load data. Please check your connection.");
            console.error('Error loading data:', error);
        });
}

// Panggil fungsi untuk simulasi pemuatan data
simulateDataLoad();
