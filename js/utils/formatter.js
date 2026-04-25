export function formatMilliseconds(ms) {
  if (ms <= 0) return "Ended";

  const minutes = Math.floor((ms / (1000 * 60)) % 60);
  const hours = Math.floor((ms / (1000 * 60 * 60)) % 24);
  const days = Math.floor(ms / (1000 * 60 * 60 * 24));

  return `<div class="flex items-center align-center"><p class="font-semibold">${days}</p><p class="text-sm mr-1">d</p><p class="font-semibold">${hours}</p><p class="text-sm mr-1">h</p><p class="font-semibold">${minutes}</p><p class="text-sm mr-1">m</p></div>`;
}
