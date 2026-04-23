import { get } from "./apiClient.js";
import { formatMilliseconds } from "../utils/formatter.js";

const itemsCount = document.getElementById("items");
const postContainer = document.getElementById("auctions-wrapper");
const prevPageBtn = document.getElementById("prev-page");
const nextPageBtn = document.getElementById("next-page");

let currentPage = 1;
let isFetching = false;
async function fetchAndRenderAuctions(page) {
  isFetching = true;
  try {
    const response = await get(
      `auction/listings/?page=${page}&limit=20&_bids=true&_seller=true`,
    );
    console.log(response.data);
    const listings = response.data;
    const numberOfAuctions = response.meta.totalCount;
    itemsCount.textContent = `Listings: ${numberOfAuctions}`;

    //create html elements
    listings.forEach((listing) => {
      const card = document.createElement("a");
      const title = document.createElement("h2");
      const endDate = document.createElement("p");
      const img = document.createElement("img");
      const count = document.createElement("p");
      const textContainer = document.createElement("div");
      const tagContainer = document.createElement("div");
      const postAuthor = document.createElement("p");
      const timer = document.createElement("div");

      //display content
      title.textContent = listing.title;
      postAuthor.textContent = `Created by - ${listing.seller.name}`;

      if (listing.media && listing.media.length > 0) {
        img.src = listing.media[0].url;
        img.alt = listing.media[0].alt;
      } else {
        img.src = "/images/placeholder.png";
        img.alt = "";
      }

      //countdown
      const endsAt = new Date(listing.endsAt);
      const now = new Date();
      const diffMs = endsAt - now;
      const formattedCountdown = formatMilliseconds(diffMs);
      console.log(formattedCountdown);

      if (diffMs <= 0) {
        timer.innerHTML = `<div class="text-sm rounded-md  py-1 px-2 absolute top-38 right-2 bg-gray-500 text-white">${formattedCountdown}</div>`;
      } else {
        timer.innerHTML = `<div class="text-sm rounded-md py-1 px-2 absolute top-38 right-2 bg-teal-600 text-white">${formattedCountdown}</div>`;
      }

      // classes
      card.className =
        "rounded-md bg-card shadow-md flex flex-col hover:scale-105 relative overflow-hidden";
      img.className = "rounded-t-md sm:h-48 w-full object-cover";
      textContainer.className = "px-4 py-2 capitalize";
      title.className = "text-xl truncate";
      tagContainer.className =
        "text-sm flex gap-2 truncate text-text-secondary font-regular";
      postAuthor.className = "text-xs text-end mt-8";

      if (listing.tags && listing.tags.length > 0) {
        listing.tags.forEach((tag) => {
          const tagElement = document.createElement("span");
          tagElement.textContent = `#${tag}`;
          tagContainer.appendChild(tagElement);
        });
      }

      card.href = `/pages/single-listing.html?id=${listing.id}`;

      //append content
      postContainer.appendChild(card);
      textContainer.appendChild(title);
      textContainer.appendChild(tagContainer);
      textContainer.appendChild(postAuthor);
      textContainer.appendChild(timer);

      card.appendChild(img);
      card.appendChild(textContainer);
    });

    //update buttons based on metadata
    nextPageBtn.disabled = false;
    prevPageBtn.disabled = false;

    if (response.meta.isLastPage) {
      nextPageBtn.disabled = true;
    }
    if (response.meta.isFirstPage) {
      prevPageBtn.disabled = true;
    }
  } catch (error) {
    console.error("Failed to fetch auctions:", error);
  } finally {
    isFetching = false;
  }
}

//page browse buttons
nextPageBtn.addEventListener("click", () => {
  if (!isFetching) {
    currentPage++;
    postContainer.innerHTML = "";
    fetchAndRenderAuctions(currentPage);
  }
});

prevPageBtn.addEventListener("click", () => {
  if (!isFetching && currentPage >= 1) {
    currentPage--;
    postContainer.innerHTML = "";
    fetchAndRenderAuctions(currentPage);
  }
});

fetchAndRenderAuctions(currentPage);
