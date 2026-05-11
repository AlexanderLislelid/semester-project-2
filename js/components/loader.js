/**
 * Shows a fullscreen loading spinner overlay. Creates the element if it doesn't
 * exist, or unhides it if it was previously hidden.
 *
 * @export
 * @returns {void}
 */
export function showLoader() {
  let loader = document.getElementById("loader");
  if (loader) {
    loader.classList.remove("hidden");
    return;
  }
  document.body.insertAdjacentHTML(
    "beforeend",
    `<div id="loader" class="fixed inset-0 z-50 flex h-screen w-screen items-center justify-center bg-white/10 backdrop-blur-sm">
        <div class="border-edges h-14 w-14 animate-spin rounded-full border-6 border-t-teal-600"></div>
      </div>`,
  );
}

/**
 * Removes the loading spinner overlay from the DOM.
 *
 * @export
 * @returns {void}
 */
export function hideLoader() {
  const loader = document.getElementById("loader");
  if (loader) loader.remove();
}
