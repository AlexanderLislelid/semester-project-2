export function showBidModal() {
  const container = document.createElement("div");
  {
    container.innerHTML = `<div
      class="p-6 fixed top-2.5 left-1/2 -translate-x-1/2 border border-red-500/50 rounded-md gap-2 shadow-md bg-red-100 flex"
    >
      <i class="fa-solid fa-circle-xmark text-3xl text-red-500"></i>
      <div class="text-nowrap">
        <p class="text-xl">${title}</p>
        <p class="text-sm">${message}</p>
      </div>
    </div>`;
  }
  document.body.append(container);
}
