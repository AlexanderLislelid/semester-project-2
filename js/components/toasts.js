export function showToast(title, message, type) {
  const container = document.createElement("div");

  if (type === "success") {
    container.innerHTML = `<div
      class="p-6 fixed top-2.5 left-1/2 -translate-x-1/2 border border-green-500/50 rounded-md gap-2 shadow-md bg-green-100 flex"
    >
      <i class="fa-solid fa-circle-check text-3xl text-green-500"></i>
      <div class="text-nowrap">
        <p class="text-xl">${title}</p>
        <p class="text-sm">${message}</p>
      </div>
    </div>`;
  } else if (type === "error") {
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
  setTimeout(() => {
    container.remove();
  }, 2000);
}
