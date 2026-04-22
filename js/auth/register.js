import { post } from "../api/apiClient.js";

const form = document.getElementById("registration-form");
const errorWrapper = document.getElementById("error-wrapper");

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  errorWrapper.innerHTML = "";

  const password = document.getElementById("password");
  const passwordConfirm = document.getElementById("password-confirm");
  if (password.value !== passwordConfirm.value) {
    errorWrapper.textContent = "Passwords do not match.";
    errorWrapper.classList.remove("hidden");
    return;
  }
  try {
    const data = await post("auth/register", {
      name: form.name.value,
      email: form.email.value,
      password: form.password.value,
    });

    window.location.href = "./login.html";
  } catch (error) {
    errorWrapper.append(error.message);
    errorWrapper.classList.remove("hidden");
  }
});
