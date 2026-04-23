import { get } from "./apiClient.js";

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
      `auction/listings/?page=${page}&limit=20&_bids=true`,
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

      //display content
      title.textContent = listing.title;

      if (listing.media && listing.media.length > 0) {
        img.src = listing.media[0].url;
        img.alt = listing.media[0].alt;
      } else {
        img.src = "/images/placeholder.png";
        img.alt = "";
      }

      // classes
      card.className = "rounded-md bg-card shadow-md flex flex-col";
      img.className = "rounded-t-md sm:h-48 w-full object-cover";
      textContainer.className = "p-4";
      title.className = "text-xl";

      card.href = `/pages/single-listing.html?id=${listing.id}`;

      //append content
      postContainer.appendChild(card);
      textContainer.appendChild(title);
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
