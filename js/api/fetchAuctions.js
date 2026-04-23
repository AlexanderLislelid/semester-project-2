import { get } from "./apiClient.js";
import { formatMilliseconds } from "../utils/formatter.js";

const itemsCount = document.getElementById("items");
const postContainer = document.getElementById("auctions-wrapper");
const prevPageBtn = document.getElementById("prev-page");
const nextPageBtn = document.getElementById("next-page");

//filter / sorting
const newPostsBtn = document.getElementById("newest-filter");
const oldPostsBtn = document.getElementById("oldest-filter");
const hotPostsBtn = document.getElementById("popular-filter");
let currentSort = "newest";

let currentPage = 1;
let currentSearch = "";
let isFetching = false;

async function fetchAndRenderAuctions(page, search = "") {
  isFetching = true;
  try {
    let url;

    if (search) {
      const params = new URLSearchParams({
        q: search,
        page: page,
        limit: 20,
        _bids: true,
        _seller: true,
      });
      url = `auction/listings/search?${params.toString()}`;
    } else {
      let sort, sortOrder;
      if (currentSort === "ending-soon") {
        sort = "endsAt";
        sortOrder = "asc";
      } else if (currentSort === "oldest") {
        sort = "created";
        sortOrder = "asc";
      } else {
        sort = "created";
        sortOrder = "desc";
      }

      const params = new URLSearchParams({
        page: page,
        limit: 20,
        _bids: true,
        _seller: true,
        _active: true,
        sort: sort,
        sortOrder: sortOrder,
      });
      url = `auction/listings?${params.toString()}`;
    }

    const response = await get(url);
    const listings = response.data;

    const numberOfAuctions = response.meta.totalCount;
    itemsCount.textContent = `Listings: ${numberOfAuctions}`;

    //create html elements
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
      const btn = document.createElement("a");

      //display content
      title.textContent = listing.title;
      postAuthor.textContent = `Created by ${listing.seller.name}`;
      bidCount.textContent = `Bids ${listing.bids.length}`;
      btn.textContent = "Bid on item";

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
        timer.innerHTML = `<div class="text-sm rounded-md py-1 px-2 absolute top-2 right-2 bg-teal-600 text-white">${formattedCountdown}</div>`;
      }

      // classes
      card.className =
        "group rounded-md bg-card shadow-md flex flex-col hover:scale-101 relative overflow-hidden";
      img.className = "rounded-t-md sm:h-48 w-full object-cover";
      textContainer.className = "px-4 py-2 capitalize";
      title.className = "text-xl truncate";
      tagContainer.className =
        "text-sm flex gap-2 truncate text-text-secondary font-regular";
      postAuthor.className = "text-xs text-end mt-4";
      bidCount.className = "text-sm text-text-secondary";
      bidWrapper.className = "flex flex-col mt-4 pt-3 border-t border-gray-200";
      btn.className =
        "flex items-center justify-center py-1 bg-teal-600/70 mt-4 text-white hover:bg-teal-600/90 group-hover:bg-teal-600/90 rounded-md";

      if (listing.tags && listing.tags.length > 0) {
        listing.tags.forEach((tag) => {
          const tagElement = document.createElement("span");
          tagElement.textContent = `#${tag}`;
          tagContainer.appendChild(tagElement);
        });
      }

      card.href = `./pages/single-listing.html?id=${listing.id}`;

      //append content
      postContainer.appendChild(card);
      textContainer.appendChild(title);
      textContainer.appendChild(tagContainer);
      bidWrapper.appendChild(bidAmount);
      bidWrapper.appendChild(bidCount);

      textContainer.appendChild(bidWrapper);
      textContainer.appendChild(btn);
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
    fetchAndRenderAuctions(currentPage, currentSearch);
  }
});

prevPageBtn.addEventListener("click", () => {
  if (!isFetching && currentPage >= 1) {
    currentPage--;
    postContainer.innerHTML = "";
    fetchAndRenderAuctions(currentPage, currentSearch);
  }
});

function setupSearch() {
  const form = document.getElementById("search-form");
  const input = document.getElementById("search");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    currentSearch = input.value.trim();
    currentPage = 1;
    postContainer.innerHTML = "";

    fetchAndRenderAuctions(currentPage, currentSearch);
    window.scrollTo(0, 0);
  });

  input.addEventListener("input", () => {
    if (input.value === "") {
      currentSearch = "";
      currentPage = 1;
      postContainer.innerHTML = "";
      fetchAndRenderAuctions(currentPage, currentSearch);
    }
  });
}

const filterBtns = [newPostsBtn, oldPostsBtn, hotPostsBtn];

function setActiveFilter(activeBtn) {
  filterBtns.forEach((btn) => btn.classList.remove("active-filter"));
  activeBtn.classList.add("active-filter");
}

newPostsBtn.addEventListener("click", () => {
  currentSort = "newest";
  currentPage = 1;
  postContainer.innerHTML = "";
  setActiveFilter(newPostsBtn);
  fetchAndRenderAuctions(currentPage, currentSearch);
});

oldPostsBtn.addEventListener("click", () => {
  currentSort = "oldest";
  currentPage = 1;
  postContainer.innerHTML = "";
  setActiveFilter(oldPostsBtn);
  fetchAndRenderAuctions(currentPage, currentSearch);
});

hotPostsBtn.addEventListener("click", () => {
  currentSort = "ending-soon";
  currentPage = 1;
  postContainer.innerHTML = "";
  setActiveFilter(hotPostsBtn);
  fetchAndRenderAuctions(currentPage, currentSearch);
});

setActiveFilter(newPostsBtn);
setupSearch();
fetchAndRenderAuctions(currentPage);
