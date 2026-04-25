import { get } from "./apiClient.js";
import { formatMilliseconds } from "../utils/formatter.js";

const itemId = new URLSearchParams(window.location.search).get("id");
const itemTitle = document.getElementById("item-title");
const itemDescription = document.getElementById("item-description");
const galleryContainer = document.getElementById("gallery-container");
const tags = document.getElementById("tags");

async function fetchAndRenderListing() {
  try {
    const data = await get(
      `auction/listings/${itemId}?_seller=true&_bids=true`,
    );

    //data
    const listing = data.data;
    const bids = listing.bids;
    const images = listing.media;

    console.log(bids);

    // tabs
    const tabs = document.querySelectorAll(".tab-btn");
    const content = document.querySelectorAll(".tab-content");

    tabs.forEach((tab) => {
      tab.addEventListener("click", () => {
        tabs.forEach((t) =>
          t.classList.remove("border-b-2", "border-teal-600"),
        );
        content.forEach((c) => c.classList.add("hidden"));

        tab.classList.add("border-b-2", "border-teal-600");
        document.getElementById(tab.dataset.tab).classList.remove("hidden");
      });
    });

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
        "bg-gray-100 flex items-center justify-between rounded-md py-2 px-4 shadow-md";
      icon.className = "fa-regular fa-coins";

      amountDiv.append(icon, amount);

      card.append(avatar, name, amountDiv);
      bidHistoryList.append(card);
    });

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
      expandedImg.src = "/images/placeholder.png";
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

    //bids
    const currentHighestBid = document.getElementById("highest-bid");
    const numberOfBids = document.getElementById("number-of-bids");
    currentHighestBid.textContent = bids.at(-1).amount;
    numberOfBids.textContent = bids.length;

    itemTitle.textContent = listing.title;
    itemDescription.textContent = listing.description;
    tags.textContent = listing.tags.join(" / ");
  } catch (error) {
    console.error("Error fetching listing:", error);
  }
}

fetchAndRenderListing();
