// Sederhana: Tambah notifikasi console saat CTA diklik
document.addEventListener("DOMContentLoaded", function() {
    const cta = document.querySelector(".cta");
    if (cta) {
        cta.addEventListener("click", () => {
            console.log("Tombol konsultasi diklik!");
        });
    }
});
// Tambahkan event listener untuk tombol CTA
// dan tampilkan notifikasi di konsol saat diklik
// Pastikan elemen dengan kelas "cta" ada sebelum menambahkan event listener
// Ini akan membantu dalam debugging dan memastikan interaksi pengguna tercatat
// Pastikan untuk menguji kode ini di konsol browser