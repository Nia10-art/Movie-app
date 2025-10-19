// Import library
const express = require("express");
const sqlite3 = require("sqlite3").verbose();

// Buat aplikasi express
const app = express();

// Hubungkan ke database SQLite
// Pastikan nama file database sesuai dengan yang kamu buat di SQLiteOnline
const db = new sqlite3.Database("./movie_app.db", (err) => {
  if (err) {
    console.error("Gagal menghubungkan ke database:", err.message);
  } else {
    console.log("Berhasil terhubung ke database.");
  }
});

// Middleware agar bisa baca JSON
app.use(express.json());

// Route 1: tampilkan semua data user
app.get("/users", (req, res) => {
  db.all("SELECT * FROM users", [], (err, rows) => {
    if (err) {
      res.status(500).json({ error: err.message });
    } else {
      res.json(rows);
     }
  });
});

// Route 2: tampilkan semua paket
app.get("/paket", (req, res) => {
  db.all("SELECT * FROM paket", [], (err, rows) => {
    if (err) {
      res.status(500).json({ error: err.message });
    } else {
      res.json(rows);
    }
  });
});

// Route 3: tampilkan semua orders
app.get("/orders", (req, res) => {
  db.all("SELECT * FROM orders", [], (err, rows) => {
    if (err) {
      res.status(500).json({ error: err.message });
    } else {
      res.json(rows);
    }
  });
});

// Jalankan server
app.listen(3000, () => {
  console.log("Server berjalan di http://localhost:3000");
});
