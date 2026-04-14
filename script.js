function cekHasil() {
  const nama = document.getElementById("nama").value.toLowerCase().trim();
  const hasil = document.getElementById("hasil");

  const data = {
    "alfredo": "Staf Subdivisi Expo",
    "mahes": "Staf Subdivisi Teknis",
    "annisa": "Staf Subdivisi Talent",
    "astrid": "Staf Subdivisi Expo",
    "itban": "Staf Subdivisi Talent",
    "shafira": "Staf Subdivisi Teknis"
  };

  if (data[nama]) {
    const namaRapi = nama.charAt(0).toUpperCase() + nama.slice(1);

    hasil.innerHTML = `
      <div class="success">
        <p>🎉 <b>Selamat!</b> 🎉</p>

        <p>Berdasarkan hasil diskusi dan pertimbangan, kamu ditetapkan sebagai:</p>

        <p><b>${namaRapi}</b></p>
        <h3>${data[nama]}</h3>

        <p>✨ Semoga amanah ini dapat dijalankan dengan baik dan penuh tanggung jawab.</p>
      </div>
    `;

    // 🎊 CONFETTI
    confetti({
      particleCount: 120,
      spread: 70,
      origin: { y: 0.6 }
    });

    // 🔊 SOUND
const ding = document.getElementById("ding");
  ding.currentTime = 0;
  ding.play().catch(() => {});

  } else {
    hasil.innerHTML = `<p>Nama tidak ditemukan 😢</p>`;
  }
}
