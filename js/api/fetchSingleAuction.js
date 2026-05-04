import { get } from "./apiClient.js";
import { formatMilliseconds } from "../utils/formatter.js";
import { showTabs } from "../utils/tabs.js";
import { showBidModal } from "../components/bidModal.js";
import { loadUser } from "../utils/storage";
import { showLoader, hideLoader } from "../components/loader.js";
import { showToast } from "../components/toasts.js";

const BASE_PATH = import.meta.env.BASE_URL.replace(/\/$/, "");

const itemId = new URLSearchParams(window.location.search).get("id");
const itemTitle = document.getElementById("item-title");
const itemDescription = document.getElementById("item-description");
const galleryContainer = document.getElementById("gallery-container");
const tags = document.getElementById("tags");

async function fetchAndRenderListing() {
  try {
    showLoader();
    const data = await get(
      `auction/listings/${itemId}?_seller=true&_bids=true`,
    );

    //data
    const listing = data.data;
    const bids = listing.bids;
    const images = listing.media;

    console.log(data);

    // tabs
    showTabs();

    //bid history
    const bidHistoryList = document.getElementById("bid-history-list");

    bids.forEach((bid) => {
      const card = document.createElement("div");
      const avatar = document.createElement("img");
      const name = document.createElement("p");
      const amountDiv = document.createElement("div");
      const icon = document.createElement("i");
      const amount = document.createElement("p");

      avatar.src = bid.bidder.avatar.url;
      avatar.alt = bid.bidder.avatar.alt;
      avatar.className = "h-10 w-10 rounded-full object-cover";

      name.textContent = bid.bidder.name;
      amount.textContent = bid.amount;

      amountDiv.className = "flex items-center gap-2";
      card.className =
        "flex items-center border-b border-edges justify-between py-2 px-4";
      icon.className = "fa-regular fa-coins text-teal-600";

      amountDiv.append(icon, amount);

      card.append(avatar, name, amountDiv);
      bidHistoryList.append(card);
    });

    //seller
    const sellerDiv = document.getElementById("item-seller");
    const sellerAvatar = document.createElement("img");
    const sellerInfo = document.createElement("div");
    const sellerName = document.createElement("p");
    const createdAt = document.createElement("p");

    sellerAvatar.src = listing.seller.avatar.url;
    sellerAvatar.className = "rounded-full h-15 w-15";

    sellerName.textContent = listing.seller.name;
    createdAt.textContent = `Created: ${listing.created.slice(0, 10)}`;

    createdAt.className = "text-text-secondary text-sm";
    sellerInfo.className = "flex flex-col ";
    sellerDiv.className =
      "border-edges border-t border-b flex items-center gap-4 py-6 px-8";
    sellerInfo.append(sellerName, createdAt);
    sellerDiv.append(sellerAvatar, sellerInfo);

    //image gallery -- https://www.w3schools.com/howto/howto_js_tab_img_gallery.asp
    const expandedImg = document.createElement("img");
    expandedImg.className = "w-full h-96 object-cover";

    const thumbnailRow = document.createElement("div");
    thumbnailRow.className = "flex flex-wrap";

    if (images && images.length > 0) {
      expandedImg.src = images[0].url;
      expandedImg.alt = images[0].alt;

      images.forEach((image) => {
        const wrapper = document.createElement("div");
        const thumbnail = document.createElement("img");

        thumbnail.src = image.url;
        thumbnail.alt = image.alt;
        thumbnail.className =
          "w-full h-full object-cover cursor-pointer opacity-60 hover:opacity-100";

        thumbnail.addEventListener("click", () => {
          expandedImg.src = image.url;
          expandedImg.alt = image.alt;
        });

        wrapper.className = "w-1/4 h-20 p-1";
        wrapper.append(thumbnail);
        thumbnailRow.append(wrapper);
      });
    } else {
      expandedImg.src = `${BASE_PATH}/images/placeholder.png`;
      expandedImg.alt = "";
    }

    galleryContainer.append(expandedImg, thumbnailRow);

    //timer
    const displayTimeContainer = document.getElementById("timer");
    const endsAt = new Date(listing.endsAt);
    const now = new Date();
    const diffMs = endsAt - now;
    const formattedCountdown = formatMilliseconds(diffMs);

    if (diffMs <= 0) {
      displayTimeContainer.innerHTML = `<p class="text-red-500">${formattedCountdown}</p>`;
    } else {
      displayTimeContainer.innerHTML = `${formattedCountdown}`;
    }

    //open modal (place bid)
    const openModalBtn = document.getElementById("place-bid-btn");
    const user = loadUser();
    if (!user || listing.seller.name === user.name) {
      openModalBtn.classList.add("hidden");
    } else {
      openModalBtn.classList.remove("hidden");
    }
    openModalBtn.addEventListener("click", () => showBidModal(listing));

    //Edit Listing
    const editBtn = document.getElementById("edit-btn");
    if (user && listing.seller.name === user.name) {
      editBtn.classList.remove("hidden");
      editBtn.addEventListener("click", () => {
        window.location.href = `${BASE_PATH}/pages/edit-listing.html?id=${itemId}`;
      });
    } else {
      editBtn.classList.add("hidden");
    }

    //bids
    const currentHighestBid = document.getElementById("highest-bid");
    const numberOfBids = document.getElementById("number-of-bids");
    currentHighestBid.textContent = bids.at(-1)?.amount ?? 0;
    numberOfBids.textContent = bids.length;

    itemTitle.textContent = listing.title;
    itemDescription.textContent = listing.description;

    tags.textContent = listing.tags.join(" / ");
  } catch (error) {
    showToast("Something went wrong", error.message, "error");
    console.error("Error fetching listing:", error);
  } finally {
    hideLoader();
  }
}

fetchAndRenderListing();
