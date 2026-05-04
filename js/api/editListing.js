import { isLoggedIn } from "../utils/storage.js";
import { put, get, del } from "../api/apiClient.js";
import { showToast } from "../components/toasts.js";

const BASE_PATH = import.meta.env.BASE_URL.replace(/\/$/, "");

if (!isLoggedIn()) {
  window.location.href = `${BASE_PATH}/pages/login.html`;
}

const itemId = new URLSearchParams(window.location.search).get("id");
const form = document.getElementById("edit-listing");
const itemTitle = document.getElementById("title");
const itemDescription = document.getElementById("description");
const galleryContainer = document.getElementById("media-wrapper");
const tags = document.getElementById("tags");
const addMedia = document.getElementById("media-add");
const mediaUrl = document.getElementById("media-url");
const mediaAlt = document.getElementById("media-alt");
const endDate = document.getElementById("listing-end");
const deleteBtn = document.getElementById("delete-btn");

const images = [];

async function fillForm() {
  try {
    const response = await get(`auction/listings/${itemId}`);
    const item = response.data;
    console.log(item);
    itemTitle.value = item.title;
    itemDescription.value = item.description;
    tags.value = item.tags;
    endDate.value = new Date(item.endsAt).toISOString().slice(0, 16);

    function renderImage(media) {
      images.push(media);
      const wrapper = document.createElement("div");
      const thumbnail = document.createElement("img");
      const altText = document.createElement("p");

      thumbnail.src = media.url;
      altText.textContent = media.alt;
      thumbnail.className = "h-20 hover:opacity-50";
      thumbnail.addEventListener("click", () => {
        images.splice(images.indexOf(media), 1);
        wrapper.remove();
      });

      wrapper.append(thumbnail, altText);
      galleryContainer.append(wrapper);
    }

    addMedia.addEventListener("click", () => {
      renderImage({ url: mediaUrl.value, alt: mediaAlt.value });
      mediaUrl.value = "";
      mediaAlt.value = "";
    });

    item.media.forEach(renderImage);
    console.log(images);
  } catch (error) {
    console.error(error);
    showToast("Something went wrong!", error.message, "danger");
  }
}

fillForm();

form.addEventListener("submit", async (event) => {
  event.preventDefault();
  const body = {
    title: itemTitle.value,
    description: itemDescription.value,
    tags: tags.value
      .split(",")
      .map((t) => t.trim())
      .filter(Boolean),
    media: images,
    endsAt: endDate.value,
  };
  try {
    await put(`auction/listings/${itemId}`, body);
    showToast("Success", "Listing updated!", "success");
    setTimeout(() => {
      window.location.href = `${BASE_PATH}/pages/single-listing.html?id=${itemId}`;
    }, 2000);
  } catch (error) {
    console.error(error);
    showToast("Something went wrong!", error.message, "danger");
  }
});

deleteBtn.addEventListener("click", async () => {
  const popover = document.getElementById("delete-confirmation");
  try {
    await del(`auction/listings/${itemId}`);
    showToast("Success", "Listing Deleted", "success");
    popover.hidePopover();
    setTimeout(() => {
      window.location.href = `index.html`;
    }, 2000);
  } catch (error) {
    showToast("Something went wrong!", error.message, "danger");
  }
});
