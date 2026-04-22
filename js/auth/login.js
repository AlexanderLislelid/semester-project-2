import { post } from "../api/apiClient.js";
import { saveToken, saveUser } from "../utils/storage.js";
import { showSuccessToast } from "../components/toasts.js";

const form = document.getElementById("login-form");
const errorWrapper = document.getElementById("error-wrapper");

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  errorWrapper.innerHTML = "";

  try {
    const data = await post("auth/login", {
      email: form.email.value,
      password: form.password.value,
    });

    saveToken(data.data.accessToken);
    saveUser(data.data);
    showSuccessToast();
    setTimeout(() => {
      window.location.href = "../index.html";
    }, 2000);
  } catch (error) {
    errorWrapper.append(error.message);
    errorWrapper.classList.remove("hidden");
  }
});
