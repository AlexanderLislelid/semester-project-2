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

    const banner = document.getElementById("my-banner");
    const avatar = document.getElementById("my-avatar");
    const myName = document.getElementById("my-name");
    const myEmail = document.getElementById("my-email");
    const bio = document.getElementById("my-bio");
    const myCredits = document.getElementById("my-credits");
    const numberOfListings = document.getElementById("my-listings-amount");
    const numberOfWins = document.getElementById("my-wins-amount");

    banner.src = data.banner.url;
    avatar.src = data.avatar.url;
    myName.textContent = data.name;
    myEmail.textContent = data.email;
    if (!data.bio) {
      bio.textContent = "No bio yet.. Edit profile to update.";
    } else {
      bio.textContent = data.bio;
    }
    myCredits.textContent = data.credits;
    numberOfListings.textContent = data.listings.length;
    numberOfWins.textContent = data.wins.length;
  } catch (error) {}
}
fetchAndRenderProfile();
