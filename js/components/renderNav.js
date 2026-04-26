const BASE_PATH =
  window.location.hostname === "alexanderlislelid.github.io"
    ? "/semester-project-2"
    : "";

export function renderNav() {
  document.body.insertAdjacentHTML(
    "afterbegin",
    `
    <nav id="nav-mobile" class="border-edges flex items-center justify-between border-b sm:hidden">
      <div class="px-2 pb-2 leading-1">
        <a href="${BASE_PATH}/index.html">
          <p class="font-heading text-2xl tracking-wider">GAVEL</p>
          <p class="text-2xs text-text-secondary text-center">AUCTION HOUSE</p>
        </a>
      </div>
      <button id="nav-mobile-toggle" class="bg-teal-600 px-4 py-3 text-white" aria-label="Toggle navigation menu" aria-expanded="false">
        <i class="fa-solid fa-angle-down text-xl" aria-hidden="true"></i>
      </button>
    </nav>
    <div id="nav-mobile-menu" class="bg-background absolute top-12.5 z-50 hidden w-full">
      <div id="mobile-menu-profile" class="border-b-edges flex items-center justify-between gap-6 border-b px-6 py-4 text-end"></div>
      <ul>
        <li>
          <a href="${BASE_PATH}/index.html" class="border-b-edges block border-b px-2 py-3 hover:bg-gray-200">
            <i class="fa-regular fa-house mx-4 text-xl" aria-hidden="true"></i>Home
          </a>
        </li>
        <li>
          <a href="${BASE_PATH}/pages/create-listing.html" class="border-b-edges block border-b py-3 hover:bg-gray-200">
            <i class="fa-regular fa-plus mr-4 ml-6 text-xl" aria-hidden="true"></i>Create
          </a>
        </li>
        <li>
          <a href="${BASE_PATH}/pages/profile.html" class="border-b-edges block border-b py-3 hover:bg-gray-200">
            <i class="fa-regular fa-user mr-4 ml-6 text-xl" aria-hidden="true"></i>My Profile
          </a>
        </li>
        <li>
          <a href="${BASE_PATH}/pages/edit-profile.html" class="border-b-edges block border-b py-3 hover:bg-gray-200">
            <i class="fa-regular fa-user-pen mr-4 ml-6 text-xl" aria-hidden="true"></i>Edit Profile
          </a>
        </li>
        <li>
          <a href="${BASE_PATH}/pages/profile.html" class="border-b-edges block border-b py-3 hover:bg-gray-200">
            <i class="fa-regular fa-gavel mr-4 ml-6 text-xl" aria-hidden="true"></i>My Bids
          </a>
        </li>
        <li>
          <a href="${BASE_PATH}/pages/profile.html" class="border-b-edges block border-b py-3 hover:bg-gray-200">
            <i class="fa-regular fa-tag mr-4 ml-6 text-xl" aria-hidden="true"></i>My Listings
          </a>
        </li>
      </ul>
      <div id="logout-menu" class="bg-dark-bg flex-flex-col p-6 text-white">
        <div class="flex justify-between">
          <p class="font-light">Credits</p>
          <span id="credits-mobile-menu" class="text-bold bg-dark-highlights flex items-center gap-2 rounded-full px-4 py-1">
            <i class="fa-regular fa-coins text-xl text-teal-500" aria-hidden="true"></i>
          </span>
        </div>
        <button id="logout" class="bg-dark-highlights mt-6 w-full cursor-pointer rounded-md py-2 text-center hover:border hover:border-gray-500">
          <i class="fa-regular fa-arrow-left-from-bracket mr-2" aria-hidden="true"></i>
          Logout
        </button>
      </div>
    </div>
    <nav id="nav-desktop" class="border-edges hidden items-center justify-between border-b sm:flex">
      <div class="px-2">
        <a href="${BASE_PATH}/index.html">
          <p class="font-heading text-3xl leading-8 tracking-wider">GAVEL</p>
          <p class="text-text-secondary text-center text-xs">AUCTION HOUSE</p>
        </a>
      </div>
      <ul class="flex items-center">
        <li>
          <a href="${BASE_PATH}/index.html" class="block px-6 py-4 hover:bg-gray-200">
            <i class="fa-regular fa-house mr-2" aria-hidden="true"></i>Home
          </a>
        </li>
        <li>
          <a href="${BASE_PATH}/pages/create-listing.html" class="block px-6 py-4 hover:bg-gray-200">
            <i class="fa-regular fa-plus mr-2" aria-hidden="true"></i>Create
          </a>
        </li>
        <li id="desktop-profile-toggle"></li>
        <li id="credits-desktop"></li>
      </ul>
    </nav>
    <div id="desktop-dropdown" class="bg-background absolute top-14.5 right-0 z-50 hidden w-84">
      <div id="desktop-dropdown-profile" class="border-b-edges flex items-center justify-between border-b px-6 py-4"></div>
      <ul>
        <li>
          <a href="${BASE_PATH}/pages/profile.html" class="border-b-edges block border-b py-3 hover:border-l-8 hover:border-teal-600 hover:bg-gray-200">
            <i class="fa-regular fa-user mr-4 ml-6 text-xl" aria-hidden="true"></i>My Profile
          </a>
        </li>
        <li>
          <a href="${BASE_PATH}/pages/edit-profile.html" class="border-b-edges block border-b py-3 hover:border-l-8 hover:border-teal-600 hover:bg-gray-200">
            <i class="fa-regular fa-user-pen mr-4 ml-6 text-xl" aria-hidden="true"></i>Edit Profile
          </a>
        </li>
        <li>
          <a href="${BASE_PATH}/pages/profile.html" class="border-b-edges block border-b py-3 hover:border-l-8 hover:border-teal-600 hover:bg-gray-200">
            <i class="fa-regular fa-gavel mr-4 ml-6 text-xl" aria-hidden="true"></i>My Bids
          </a>
        </li>
        <li>
          <a href="${BASE_PATH}/pages/profile.html" class="border-b-edges block border-b py-3 hover:border-l-8 hover:border-teal-600 hover:bg-gray-200">
            <i class="fa-regular fa-tag mr-4 ml-6 text-xl" aria-hidden="true"></i>My Listings
          </a>
        </li>
      </ul>
      <div id="logout-menu-desktop" class="bg-dark-bg flex-flex-col p-6 text-white">
        <div class="flex justify-between"></div>
        <button id="logout-desktop" class="bg-dark-highlights mt-6 w-full cursor-pointer rounded-md py-2 text-center hover:border hover:border-gray-500">
          <i class="fa-regular fa-arrow-left-from-bracket mr-2" aria-hidden="true"></i>
          Logout
        </button>
      </div>
    </div>
  `,
  );

  const currentPath = window.location.pathname.replace(BASE_PATH, "") || "/index.html";

  document.querySelectorAll("#nav-mobile-menu a, #nav-desktop a, #desktop-dropdown a").forEach((link) => {
    const linkPath = new URL(link.href).pathname.replace(BASE_PATH, "");
    if (linkPath === currentPath) {
      if (link.closest("#nav-desktop")) {
        link.classList.add("border-b-2", "border-teal-600", "bg-gray-100");
      } else if (link.closest("#desktop-dropdown")) {
        link.classList.add("border-l-8", "border-teal-600", "bg-gray-200");
      } else {
        link.classList.add("border-l-4", "border-teal-600", "bg-gray-100");
      }
    }
  });
}
