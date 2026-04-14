function cekHasil() {
  const nama = document.getElementById("nama").value.toLowerCase().trim();
  const hasil = document.getElementById("hasil");

  const data = {
    "alfredo": "Staf Subdivisi Expo",
    "anaksi": "Staf Subdivisi Teknis",
    "annisa": "Staf Subdivisi Talent",
    "fathya": "Staf Subdivisi Expo",
    "itban": "Staf Subdivisi Talent",
    "shafira": "Staf Subdivisi Teknis"
  };

  if (data[nama]) {
    const namaRapi = nama.charAt(0).toUpperCase() + nama.slice(1);

    hasil.innerHTML = `
      <p><b>Selamat!</b></p>
      <p>${namaRapi}, kamu ditetapkan sebagai:</p>
      <h3>${data[nama]}</h3>
      <p>Subdivisi Acara Eksvoria 19</p>
    `;
  } else {
    hasil.innerHTML = `<p>Nama tidak ditemukan 😢</p>`;
  }
}
