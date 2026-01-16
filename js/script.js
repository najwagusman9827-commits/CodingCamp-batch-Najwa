// WELCOME MESSAGE (AUTO)
document.getElementById("userName").textContent = "Visitor";

// FORM VALIDATION & DISPLAY
document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;
  const message = document.getElementById("message").value;

  if (!name || !email || !phone || !message) {
    alert("Semua field wajib diisi!");
    return;
  }

  document.getElementById("result").innerHTML = `
    <h3>Data Terkirim</h3>
    <p><strong>Nama:</strong> ${name}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Nomor Telepon:</strong> ${phone}</p>
    <p><strong>Pesan:</strong> ${message}</p>
  `;

  document.getElementById("contactForm").reset();
});
