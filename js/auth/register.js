import { post } from "../api/apiClient.js";
import { showToast } from "../components/toasts.js";
import { redirectTimer } from "../utils/timeout.js";

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
    await post("auth/register", {
      name: form.name.value,
      email: form.email.value,
      password: form.password.value,
    });
    showToast("Register Successful", "Redirecting to Login page", "success");
    errorWrapper.classList.add("hidden");
    redirectTimer(2000, "pages/login.html");
  } catch (error) {
    errorWrapper.append(error.message);
    errorWrapper.classList.remove("hidden");
  }
});
