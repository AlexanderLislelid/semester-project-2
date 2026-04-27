import { get } from "./apiClient.js";
import { renderListingCard } from "../components/listingCard.js";

const postContainer = document.getElementById("listings-container");
const itemsCount = document.getElementById("items");
const prevPageBtn = document.getElementById("prev-page");
const nextPageBtn = document.getElementById("next-page");

//filter / sorting
const dynamicHealine = document.getElementById("filtered-headline");
const newPostsBtn = document.getElementById("newest-filter");
const oldPostsBtn = document.getElementById("oldest-filter");
const endPostsBtn = document.getElementById("ending-soon-filter");
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

    renderListingCard(listings);

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
  if (!isFetching && currentPage > 1) {
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

const filterBtns = [newPostsBtn, oldPostsBtn, endPostsBtn];

function setActiveFilter(activeBtn) {
  filterBtns.forEach((btn) => btn.classList.remove("active-filter"));
  activeBtn.classList.add("active-filter");
}

newPostsBtn.addEventListener("click", () => {
  currentSort = "newest";
  currentPage = 1;
  postContainer.innerHTML = "";
  dynamicHealine.textContent = "Newest Auctions";
  setActiveFilter(newPostsBtn);
  fetchAndRenderAuctions(currentPage, currentSearch);
});

oldPostsBtn.addEventListener("click", () => {
  currentSort = "oldest";
  currentPage = 1;
  postContainer.innerHTML = "";
  dynamicHealine.textContent = "Oldest Auctions";
  setActiveFilter(oldPostsBtn);
  fetchAndRenderAuctions(currentPage, currentSearch);
});

endPostsBtn.addEventListener("click", () => {
  currentSort = "ending-soon";
  currentPage = 1;
  postContainer.innerHTML = "";
  dynamicHealine.textContent = "Ending Soon!";
  setActiveFilter(endPostsBtn);
  fetchAndRenderAuctions(currentPage, currentSearch);
});

setActiveFilter(newPostsBtn);
setupSearch();
fetchAndRenderAuctions(currentPage);
