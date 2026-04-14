const sound = new Audio("https://cdn.pixabay.com/download/audio/2022/03/15/audio_c8c8a73467.mp3?filename=success-fanfare-trumpets-6185.mp3");
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
    sound.currentTime = 0;
sound.play().catch(() => {});

  } else {
    hasil.innerHTML = `<p>Nama tidak ditemukan 😢</p>`;
  }
}
