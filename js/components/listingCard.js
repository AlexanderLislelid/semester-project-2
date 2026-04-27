import { formatMilliseconds } from "../utils/formatter.js";
import { loadUser } from "../utils/storage.js";
import { showBidModal } from "./bidModal.js";

const BASE_PATH = import.meta.env.BASE_URL.replace(/\/$/, "");

export function renderListingCard(listings) {
  const postContainer = document.getElementById("listings-container");
  listings.forEach((listing) => {
    const card = document.createElement("a");
    const title = document.createElement("h2");
    const img = document.createElement("img");
    const bidWrapper = document.createElement("div");
    const bidCount = document.createElement("p");
    const bidAmount = document.createElement("p");
    const textContainer = document.createElement("div");
    const tagContainer = document.createElement("div");
    const postAuthor = document.createElement("p");
    const timer = document.createElement("div");
    const btn = document.createElement("button");

    //display content
    title.textContent = listing.title;
    postAuthor.textContent = `Created by ${listing.seller.name}`;
    bidCount.textContent = `Bids ${listing.bids.length}`;

    if (listing.bids.length > 0) {
      const icon = document.createElement("i");
      icon.className = "fa-regular fa-coins mr-1 text-lg";

      bidAmount.className =
        "font-semibold text-lg text-teal-600 flex items-center gap-1";
      bidAmount.append(
        icon,
        String(listing.bids[listing.bids.length - 1].amount),
      );
    } else {
      bidAmount.textContent = "No bids";
      bidAmount.className = "text-sm text-text-secondary italic";
    }

    if (listing.media && listing.media.length > 0) {
      img.src = listing.media[0].url;
      img.alt = listing.media[0].alt;
    } else {
      img.src = "/images/placeholder.png";
      img.alt = "";
    }

    //countdown and time of post creation

    const endsAt = new Date(listing.endsAt);
    const now = new Date();
    const diffMs = endsAt - now;
    const formattedCountdown = formatMilliseconds(diffMs);

    if (diffMs <= 0) {
      timer.innerHTML = `<div class="text-sm rounded-md  py-1 px-2 absolute top-2 right-2 bg-dark-bg text-white">${formattedCountdown}</div>`;
    } else {
      timer.innerHTML = `<div class="text-sm rounded-md py-1 px-2 absolute top-2 right-2 bg-teal-600/80 backdrop-blur-lg text-white flex items-center gap-1.5"><span class="size-1.5 rounded-full bg-white animate-pulse"></span>${formattedCountdown}</div>`;
    }

    // classes
    card.className =
      "group rounded-md bg-white shadow-sm hover:shadow-xl transition-shadow duration-300 flex flex-col relative overflow-hidden";
    img.className = "h-52 w-full object-cover";
    textContainer.className = "px-4 py-3 flex flex-col flex-1 capitalize";
    title.className = "text-base font-semibold truncate";
    tagContainer.className = "text-xs flex gap-1.5 flex-wrap mt-1";
    postAuthor.className = "text-xs text-text-secondary mt-2";
    bidCount.className = "text-xs text-text-secondary";
    bidWrapper.className =
      "flex items-center justify-between mt-3 pt-3 border-t border-gray-100";
    btn.className =
      "flex items-center justify-center py-2 bg-teal-600 mt-3 text-white text-sm font-medium hover:bg-teal-700 rounded-md transition-colors";

    if (listing.tags && listing.tags.length > 0) {
      listing.tags.forEach((tag) => {
        const tagElement = document.createElement("span");
        tagElement.textContent = `#${tag}`;
        tagElement.className =
          "bg-gray-100 text-text-secondary rounded-full px-2 py-0.5";
        tagContainer.appendChild(tagElement);
      });
    }

    const user = loadUser();
    if (!user || listing.seller.name === user.name) {
      btn.classList.add("hidden");
    } else {
      btn.classList.remove("hidden");
    }

    btn.textContent = "Bid on item";
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      showBidModal(listing);
    });

    card.href = `${BASE_PATH}/pages/single-listing.html?id=${listing.id}`;

    //append content
    postContainer.appendChild(card);
    textContainer.appendChild(title);
    textContainer.appendChild(tagContainer);
    bidWrapper.appendChild(bidAmount);
    bidWrapper.appendChild(bidCount);

    textContainer.appendChild(bidWrapper);
    textContainer.appendChild(btn);
    textContainer.appendChild(postAuthor);

    card.appendChild(img);
    card.appendChild(timer);
    card.appendChild(textContainer);
  });
}
