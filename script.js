function handleSubmit(event) {
  event.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const zip = document.getElementById("zip").value.trim();

  const signup = {
    name,
    email,
    zip,
    joinedAt: new Date().toISOString()
  };

  const existing = JSON.parse(localStorage.getItem("huzlnWaitlist") || "[]");
  existing.push(signup);
  localStorage.setItem("huzlnWaitlist", JSON.stringify(existing));

  document.getElementById("message").textContent =
    "You're on the HUZLN waitlist. Your Hustle. Your Future.";

  event.target.reset();
}
