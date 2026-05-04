import { isLoggedIn } from "../utils/storage.js";
import { post } from "../api/apiClient.js";
import { showToast } from "../components/toasts.js";

const BASE_PATH = import.meta.env.BASE_URL.replace(/\/$/, "");

if (!isLoggedIn()) {
  window.location.href = `${BASE_PATH}/pages/login.html`;
}
