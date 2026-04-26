import { get, put } from "../api/apiClient.js";
import { loadUser } from "../utils/storage.js";

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
    console.log(data);
    if (data.bio) {
      bioInput.placeholder = data.bio;
    }
  } catch (error) {
    console.error(error);
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

    const formData = await put(`auction/profiles/${loadUser().name}`, body);
    window.location.href = "/pages/profile.html";
  } catch (error) {
    console.error(error);
  }
});
