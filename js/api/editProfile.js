import { get, put } from "../api/apiClient.js";
import { loadUser } from "../utils/storage.js";
import { showToast } from "../components/toasts.js";

const BASE_PATH = import.meta.env.BASE_URL.replace(/\/$/, "");

const form = document.getElementById("edit-profile");
const avatarInput = document.getElementById("avatar");
const avatarAlt = document.getElementById("avatar-alt");
const bannerInput = document.getElementById("banner");
const bannerAlt = document.getElementById("banner-alt");
const bioInput = document.getElementById("bio");

async function fetchProfileInfo() {
  try {
    const { data } = await get(`auction/profiles/${loadUser().name}`);
    avatarInput.placeholder = data.avatar.url;
    avatarAlt.placeholder = data.avatar.alt;
    bannerInput.placeholder = data.banner.url;
    bannerAlt.placeholder = data.banner.alt;
    if (data.bio) {
      bioInput.placeholder = data.bio;
    }
  } catch (error) {
    showToast("Error", "Could not load profile data.", "error");
  }
}
fetchProfileInfo();

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  try {
    const body = {};
    if (avatarInput.value)
      body.avatar = { url: avatarInput.value, alt: avatarAlt.value };
    if (bannerInput.value)
      body.banner = { url: bannerInput.value, alt: bannerAlt.value };
    if (bioInput.value) body.bio = bioInput.value;

    await put(`auction/profiles/${loadUser().name}`, body);
    showToast("Profile Updated", "Your profile was updated successfully!", "success");
    setTimeout(() => {
      window.location.href = `${BASE_PATH}/pages/profile.html`;
    }, 2500);
  } catch (error) {
    showToast("Error", `${error.message}`, "error");
  }
});
