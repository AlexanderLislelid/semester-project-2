import { showToast } from "./toasts.js";
import { post } from "../api/apiClient.js";

export function showBidModal(listing) {
  const highestBid =
    listing.bids.length > 0 ? listing.bids[listing.bids.length - 1].amount : 0;
  const listingTitle = listing.title;

  const overlay = document.createElement("div");
  overlay.id = "bid-modal-overlay";
  overlay.className =
    "fixed inset-0 bg-black/50 flex items-center justify-center z-50";

  overlay.innerHTML = `
    <div id="bid-modal" class="bg-card flex w-full max-w-sm flex-col gap-4 rounded-lg p-6 shadow-xl">
      <div class="flex items-start justify-between">
        <div>
          <h2 class="max-w-56 truncate text-lg font-semibold">${listingTitle}</h2>
          <p class="text-text-secondary mt-1 text-sm">
            Current bid:
            <span class="font-medium text-teal-600">
              ${highestBid > 0 ? `<i class="fa-regular fa-coins mr-1"></i>${highestBid}` : "No bids yet"}
            </span>
          </p>
        </div>
        <button id="bid-modal-close" class="text-text-secondary ml-6 text-xl cursor-pointer">
          <i class="fa-solid fa-xmark"></i>
        </button>
      </div>
      <div class="flex flex-col gap-1">
        <input
          id="bid-amount"
          type="number"
          placeholder="Enter amount"
          class="inputs"
        />
      </div>
      <div class="flex justify-end gap-2">
        <button id="bid-modal-cancel" class="btn-cancel-form">Cancel</button>
        <button id="bid-modal-submit" class="btn-primary-form">Place bid</button>
      </div>
    </div>
  `;

  const closeBtn = overlay.querySelector("#bid-modal-close");
  const cancelBtn = overlay.querySelector("#bid-modal-cancel");
  const submitBtn = overlay.querySelector("#bid-modal-submit");

  closeBtn.addEventListener("click", () => {
    overlay.remove();
  });
  cancelBtn.addEventListener("click", () => {
    overlay.remove();
  });

  submitBtn.addEventListener("click", async () => {
    const amount = Number(overlay.querySelector("#bid-amount").value);
    if (amount <= highestBid) {
      showToast(
        "Invalid bid",
        `Bid must be higher than ${highestBid}`,
        "error",
      );
    }

    try {
      await post(`auction/listings/${listing.id}/bids`, { amount });
      showToast("Bid placed!", `You bid ${amount} credits`, "success");
      overlay.remove();
      window.location.reload();
    } catch (error) {
      showToast("Bid failed", error.message, "error");
    }
  });

  document.body.append(overlay);
}
