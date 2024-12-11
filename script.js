// Animasi sederhana untuk kartu layanan menggunakan class toggle
document.addEventListener('DOMContentLoaded', () => {
  const serviceCards = document.querySelectorAll('.service-card');

  // Menggunakan class toggle untuk animasi yang lebih baik
  serviceCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
      card.classList.add('card-hover'); // Menambah class saat mouse masuk
    });

    card.addEventListener('mouseleave', () => {
      card.classList.remove('card-hover'); // Menghapus class saat mouse keluar
    });
  });
});

function showSuccessMessage() {
  // Sembunyikan formulir
  document.getElementById("laundryForm").classList.add("d-none");
  // Tampilkan pesan sukses
  document.getElementById("successMessage").classList.remove("d-none");
}
