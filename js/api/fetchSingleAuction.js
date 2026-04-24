import { get } from "./apiClient.js";

const itemId = new URLSearchParams(window.location.search).get("id");
const itemTitle = document.getElementById("item-title");
const container = document.getElementById("listing-container");
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
    console.log(images);

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

    //title
    const title = document.createElement("h1");
    title.textContent = listing.title;

    //desc
    const description = document.createElement("p");
    description.textContent = listing.description;

    //tags
    tags.textContent = listing.tags.join(" / ");

    //appending
    itemTitle.appendChild(title);
    container.appendChild(description);
  } catch (error) {
    console.error("Error fetching listing:", error);
  }
}

fetchAndRenderListing();
