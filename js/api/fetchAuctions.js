import { get } from "./apiClient.js";

const itemsCount = document.getElementById("items");
const postContainer = document.getElementById("auctions-wrapper");

let currentPage = 1;
async function fetchAndRenderAuctions() {
  try {
    const response = await get(`auction/listings/?page=${currentPage}&_bids=true
`);
    console.log(response.data[0]);
    const listings = response.data;
    const numberOfAuctions = response.meta.totalCount;
    itemsCount.textContent = `Listings: ${numberOfAuctions}`;

    listings.forEach((listing) => {
      const card = document.createElement("a");
      const title = document.createElement("h2");
      const endDate = document.createElement("p");
      const img = document.createElement("img");
      const count = document.createElement("p");
      title.textContent = listing.title;
      card.href = `/pages/single-listing.html?id=${listing.id}`;

      postContainer.appendChild(card);
      card.appendChild(title);
    });
  } catch (error) {
    console.error("Failed to fetch auctions:", error);
  }
}
fetchAndRenderAuctions(currentPage);
