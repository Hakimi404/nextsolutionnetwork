function sendEmail(e) {
  e.preventDefault();
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const msg = document.getElementById("message").value;

  const mailto = `mailto:info@nextsolutionnetwork.com?subject=Kontakt%20von%20${name}&body=${encodeURIComponent(msg)}%0A%0AAbsender:%20${email}`;
  window.location.href = mailto;
}
