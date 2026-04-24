import { get } from "./apiClient.js";

const itemId = new URLSearchParams(window.location.search).get("id");
const container = document.getElementById("listing-container");
const galleryContainer = document.getElementById("gallery-container");

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
    expandedImg.className = "w-full object-cover";

    const thumbnailRow = document.createElement("div");
    thumbnailRow.className = "flex flex-wrap";

    if (images && images.length > 0) {
      expandedImg.src = images[0].url;
      expandedImg.alt = images[0].alt;

      images.forEach((image) => {
        const wrapper = document.createElement("div");
        const thumb = document.createElement("img");

        thumb.src = image.url;
        thumb.alt = image.alt;
        thumb.className = "w-full cursor-pointer opacity-60 hover:opacity-100";

        thumb.addEventListener("click", () => {
          expandedImg.src = image.url;
          expandedImg.alt = image.alt;
        });

        wrapper.className = "w-1/4 p-1";
        wrapper.append(thumb);
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

    //appending

    container.append(title, description);
  } catch (error) {
    console.error("Error fetching listing:", error);
  }
}

fetchAndRenderListing();
