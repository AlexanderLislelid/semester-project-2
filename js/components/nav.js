import { loadToken, removeToken, removeUser } from "../utils/storage.js";
import { get } from "../api/apiClient.js";

const BASE_PATH =
  window.location.hostname === "alexanderlislelid.github.io"
    ? "/semester-project-2"
    : "";

const userContainer = document.getElementById("mobile-menu-profile");
const creditsContainer = document.getElementById("credits-mobile-menu");
const creditsContainerDesktop = document.getElementById("credits-desktop");
const userContainderDesktop = document.getElementById(
  "desktop-dropdown-profile",
);

function logout() {
  removeToken();
  removeUser();
  window.location.href = `${BASE_PATH}/login.html`;
}

const logoutBtn = document.getElementById("logout");
if (logoutBtn) logoutBtn.addEventListener("click", logout);

const logoutBtnDesktop = document.getElementById("logout-desktop");
if (logoutBtnDesktop) logoutBtnDesktop.addEventListener("click", logout);

async function getUserProfile() {
  try {
    const storedUser = localStorage.getItem("user");
    const username = JSON.parse(storedUser).name;
    const response = await get(`auction/profiles/${username}`);
    const profile = response.data;

    const name = profile.name;
    const email = profile.email;
    const avatar = profile.avatar;
    const credits = profile.credits;

    // mobile profile
    const mobileAvatar = document.createElement("img");
    mobileAvatar.src = profile.avatar.url;
    mobileAvatar.alt = `${name}'s avatar`;
    mobileAvatar.className = "w-14 rounded-full";

    const mobileInfo = document.createElement("div");
    const mobileName = document.createElement("p");
    const mobileEmail = document.createElement("p");
    mobileName.className = "text-lg";
    mobileEmail.className = "text-xs";
    mobileName.textContent = name;
    mobileEmail.textContent = email;
    mobileInfo.appendChild(mobileName);
    mobileInfo.appendChild(mobileEmail);

    userContainer.appendChild(mobileAvatar);
    userContainer.appendChild(mobileInfo);

    // desktop profile
    const desktopAvatar = document.createElement("img");
    desktopAvatar.src = profile.avatar.url;
    desktopAvatar.alt = `${name}'s avatar`;
    desktopAvatar.className = "w-14 rounded-full";

    const desktopInfo = document.createElement("div");
    const desktopName = document.createElement("p");
    const desktopEmail = document.createElement("p");
    desktopName.className = "text-lg";
    desktopEmail.className = "text-xs";
    desktopName.textContent = name;
    desktopEmail.textContent = email;
    desktopInfo.appendChild(desktopName);
    desktopInfo.appendChild(desktopEmail);

    userContainderDesktop.appendChild(desktopInfo);
    userContainderDesktop.appendChild(desktopAvatar);

    // credits
    creditsContainer.innerHTML = `<i class="fa-regular fa-coins text-teal-500 text-xl"></i>${credits}`;
    creditsContainerDesktop.className = "px-2 py-4 bg-teal-600 text-white";
    creditsContainerDesktop.innerHTML = `<i class="fa-regular fa-coins mr-2"></i>${credits}`;
  } catch (error) {
    const errEl = document.createElement("p");
    errEl.textContent = "Could not load profile.";
    errEl.className = "text-red-500 text-sm";

    userContainer.appendChild(errEl);
    userContainderDesktop.appendChild(errEl);
  }
}

//toggle nav logic for smaller screens

const toggleMobileMenu = document.getElementById("nav-mobile-toggle");
const subMenu = document.getElementById("nav-mobile-menu");
const toggleIcon = toggleMobileMenu.querySelector("i");

toggleMobileMenu.addEventListener("click", () => {
  const isHidden = subMenu.classList.toggle("hidden");
  toggleIcon.classList.toggle("fa-angle-down", isHidden);
  toggleIcon.classList.toggle("fa-angle-up", !isHidden);
  toggleMobileMenu.setAttribute("aria-expanded", !isHidden);
});

//toggle profile menu for desktop

const toggleDesktopMenu = document.getElementById("desktop-profile-toggle");
const desktopMenu = document.getElementById("desktop-dropdown");
if (!loadToken()) {
  toggleDesktopMenu.innerHTML = `<a
            href="./login.html"
            class="px-6 py-4 hover:bg-gray-200 block"
            ><i class="fa-regular fa-right-to-bracket mr-2"></i>Login / Register</a
          >`;
} else {
  toggleDesktopMenu.innerHTML = `<button
            class="px-6 py-4 hover:bg-gray-200 block cursor-pointer"
            aria-label="Toggle profile menu"
            aria-expanded="false"
            ><i class="fa-regular fa-user mr-2" aria-hidden="true"></i>Profile</button
          >`;
  const desktopBtn = toggleDesktopMenu.querySelector("button");
  toggleDesktopMenu.addEventListener("click", () => {
    const isHidden = desktopMenu.classList.toggle("hidden");
    desktopBtn.setAttribute("aria-expanded", !isHidden);
  });

  //click outside menu to toggle hidden
  document.body.addEventListener("click", (e) => {
    if (
      !desktopMenu.contains(e.target) &&
      !toggleDesktopMenu.contains(e.target)
    ) {
      desktopMenu.classList.add("hidden");
    }
  });
}

// toggle profile info / login/reg button based on access token in localstorage

const logoutMenu = document.getElementById("logout-menu");

if (!loadToken()) {
  const loginBtn = document.createElement("button");
  logoutMenu.classList.add("hidden");
  creditsContainerDesktop.className = "";

  loginBtn.textContent = "Login / Register";
  loginBtn.className =
    "text-center mx-auto py-2 bg-teal-600 rounded-md px-5 text-white border border-edges cursor-pointer text-sm hover:bg-teal-700";

  loginBtn.addEventListener("click", () => {
    window.location.href = `${BASE_PATH}/login.html`;
  });

  userContainer.appendChild(loginBtn);
} else {
  logoutMenu.classList.remove("hidden");
  getUserProfile();
}
