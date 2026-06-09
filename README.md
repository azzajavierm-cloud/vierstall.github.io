# vierstall.github.io

Cara menjalankan di lokal:
1. Buka folder project di VS Code.
2. Jalankan Live Server dari extension VS Code.
3. Buka halaman yang muncul, misalnya http://127.0.0.1:5500/.

Cara deploy ke GitHub Pages:
1. Buka Settings > Pages di repository GitHub.
2. Pilih Source: Deploy from a branch.
3. Pilih branch `main` dan folder `/ (root)`.
4. Simpan, lalu tunggu proses publish selesai.

Catatan penting:
- Gunakan path relatif seperti `./src/...` agar asset bisa ditemukan saat di-host di GitHub Pages.
