import { isLoggedIn } from "../utils/storage.js";
import { post } from "../api/apiClient.js";
import { showToast } from "../components/toasts.js";

if (!isLoggedIn()) {
  window.location.href = "/pages/login.html";
}

const form = document.getElementById("create-listing");
const title = document.getElementById("title");
const description = document.getElementById("description");
const tags = document.getElementById("tags");
const imageWrapper = document.getElementById("media-wrapper");
const imageUrl = document.getElementById("media-url");
const imageAlt = document.getElementById("media-alt");
const addImgBtn = document.getElementById("media-add");
const endDate = document.getElementById("listing-end");

const images = [];

addImgBtn.addEventListener("click", (e) => {
  e.preventDefault();
  const url = imageUrl.value;
  const alt = imageAlt.value;

  const image = { url, alt };
  images.push(image);

  const item = document.createElement("div");
  item.className = "flex flex-col items-center gap-2 text-sm";

  const img = document.createElement("img");
  img.src = url;
  img.alt = alt;
  img.className = "h-14 w-14 rounded-md object-cover cursor-pointer";

  const label = document.createElement("p");
  label.className = "truncate max-w-14";
  label.textContent = url;

  //remove item (img and urltext) from array by clicking them
  img.addEventListener("click", () => {
    const index = images.indexOf(image);
    images.splice(index, 1);
    item.remove();
  });

  item.appendChild(img);
  item.appendChild(label);
  imageWrapper.appendChild(item);

  imageUrl.value = "";
  imageAlt.value = "";
});

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  try {
    const body = {
      title: title.value,
      description: description.value,
      tags: tags.value
        .split(",")
        .map((t) => t.trim())
        .filter(Boolean),
      media: images,
      endsAt: new Date(endDate.value).toISOString(),
    };
    const data = await post("auction/listings", body);
    showToast("Auction Created", "Auction created successfully!", "success");
    setTimeout(() => {
      window.location.href = `/pages/single-listing.html?id=${data.data.id}`;
    }, 2500);
  } catch (error) {
    showToast("Error", `${error.message}`, "error");
    console.error(error);
  }
});
