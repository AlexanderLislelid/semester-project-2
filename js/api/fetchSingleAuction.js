import { get } from "./apiClient.js";

const itemId = new URLSearchParams(window.location.search).get("id");
const container = document.getElementById("listing-container");

async function fetchAndRenderListing() {
  try {
    const data = await get(
      `auction/listings/${itemId}?_seller=true&_bids=true`,
    );

    //data
    const listing = data.data;
    const bids = listing.bids;
    const images = listing.media;

    //image -- https://www.w3schools.com/howto/howto_js_tab_img_gallery.asp
    const gallery = document.createElement("div");
    if (images && images.length > 0) {
      images.forEach((img) => {
        const image = document.createElement("img");
        image.src = img.url;
        image.alt = img.alt;
        gallery.append(image);
      });
    } else {
      const image = document.createElement("img");
      image.src = "../images/placeholder.png";
      image.alt = "";
      gallery.append(image);
    }

    //title
    const title = document.createElement("h1");
    title.textContent = listing.title;

    //desc
    const description = document.createElement("p");
    description.textContent = listing.description;

    //appending
    container.append(gallery, title, description);
  } catch (error) {
    console.error("Error fetching listing:", error);
  }
}

fetchAndRenderListing();
