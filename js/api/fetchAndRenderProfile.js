import { get, post, put, del } from "./apiClient.js";
import { showTabs } from "../utils/tabs.js";
import { loadUser, loadToken } from "../utils/storage.js";

if (!loadUser() && !loadToken()) {
  window.location.href = "/pages/login.html";
}

showTabs();
async function fetchAndRenderProfile() {
  try {
    const response = await get(
      `auction/profiles/${loadUser().name}?_bids=true&_listings=true&_wins=true`,
    );
    const data = response.data;
    console.log(data);
  } catch (error) {}
}
fetchAndRenderProfile();
