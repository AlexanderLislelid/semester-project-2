import { get, post, put, del } from "./apiClient.js";
import { showTabs } from "../utils/tabs.js";
import { isLoggedIn, loadUser } from "../utils/storage.js";
import { renderListingCard } from "../components/listingCard.js";
import { showLoader, hideLoader } from "../components/loader.js";

const BASE_PATH = import.meta.env.BASE_URL.replace(/\/$/, "");

if (!isLoggedIn()) {
  window.location.href = `${BASE_PATH}/pages/login.html`;
}

showTabs();
async function fetchAndRenderProfile() {
  try {
    showLoader();
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

    //my bids

    //my listings
    const listingsResponse = await get(
      `auction/profiles/${loadUser().name}/listings?_bids=true&_seller=true`,
    );
    renderListingCard(listingsResponse.data);
  } catch (error) {
    console.error("fetchAndRenderProfile error:", error);
  } finally {
    hideLoader();
  }
}
fetchAndRenderProfile();
