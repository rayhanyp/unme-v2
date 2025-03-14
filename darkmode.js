document.addEventListener("DOMContentLoaded", function () {
    const toggleButton = document.getElementById("dark-mode-switch");
    const body = document.body;

    // Cek apakah pengguna sudah mengaktifkan dark mode sebelumnya
    if (localStorage.getItem("theme") === "dark") {
        body.classList.add("html-darkmode");
    }

    // Event listener untuk tombol toggle
    toggleButton.addEventListener("click", function () {
        body.classList.toggle("html-darkmode");

        // Simpan preferensi pengguna di localStorage
        if (body.classList.contains("html-darkmode")) {
            localStorage.setItem("theme", "dark");
        } else {
            localStorage.setItem("theme", "light");
        }
    });
});
