import { post } from "../api/apiClient.js";
import { saveToken, saveUser } from "../utils/storage.js";

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
    window.location.href = "../index.html";
  } catch (error) {
    errorWrapper.append(error.message);
    errorWrapper.classList.remove("hidden");
  }
});
