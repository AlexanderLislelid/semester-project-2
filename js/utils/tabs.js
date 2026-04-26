export function showTabs() {
  const tabs = document.querySelectorAll(".tab-btn");
  const content = document.querySelectorAll(".tab-content");

  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      tabs.forEach((t) => t.classList.remove("border-b-2", "border-teal-600"));
      content.forEach((c) => c.classList.add("hidden"));

      tab.classList.add("border-b-2", "border-teal-600");
      document.getElementById(tab.dataset.tab).classList.remove("hidden");
    });
  });
}
