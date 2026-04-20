import { loadToken, removeToken, removeUser } from "../utils/storage.js";
import { get } from "../api/apiClient.js";

const userContainer = document.getElementById("mobile-menu-profile");
const creditsContainer = document.getElementById("credits-mobile-menu");
const creditsContainerDesktop = document.getElementById("credits-desktop");

const logoutBtn = document.getElementById("logout");
if (logoutBtn) {
  logoutBtn.addEventListener("click", () => {
    removeToken();
    removeUser();
    window.location.href = "/login.html";
  });
}

async function getUserProfile() {
  const storedUser = localStorage.getItem("user");
  const username = JSON.parse(storedUser).name;

  try {
    const response = await get(`auction/profiles/${username}`);
    const profile = response.data;

    const name = profile.name;
    const email = profile.email;
    const avatar = profile.avatar;
    const credits = profile.credits;

    const nameContainer = document.createElement("div");
    const nameEl = document.createElement("p");
    const emailEl = document.createElement("p");
    const avatarEl = document.createElement("img");
    avatarEl.src = profile.avatar.url;
    avatarEl.alt = "profile avatar";

    avatarEl.className = "w-14 rounded-full";
    emailEl.className = "text-xs";
    nameEl.className = "text-lg";

    nameEl.textContent = name;
    emailEl.textContent = email;

    // show / hide credits on desktop nav

    creditsContainer.innerHTML = `<i class="fa-regular fa-coins text-teal-500 text-xl"></i
          >${credits}`;
    if (!loadToken()) {
      creditsContainer.innerHTML = "";
    } else {
      creditsContainer.innerHTML = `<i class="fa-regular fa-coins text-teal-500 text-xl"></i>${credits}`;
      creditsContainerDesktop.className = "px-6 py-4 bg-teal-600 text-white";
      creditsContainerDesktop.innerHTML = `<i class="fa-regular fa-coins mr-2"></i>${credits}`;
    }

    nameContainer.appendChild(nameEl);
    nameContainer.appendChild(emailEl);
    userContainer.appendChild(avatarEl);
    userContainer.appendChild(nameContainer);
  } catch (error) {
    const errEl = document.createElement("p");
    errEl.textContent = "Could not load profile.";
    errEl.className = "text-red-500 text-sm";
    userContainer.appendChild(errEl);
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
const desktopMenu = document.getElementById("desktop-profile-menu");
if (!loadToken()) {
  toggleDesktopMenu.innerHTML = `<a
            href="./login.html"
            class="px-6 py-4 hover:bg-gray-200 block"
            ><i class="fa-regular fa-right-to-bracket mr-2"></i></i>Login / Register</a
          >`;
} else {
  toggleDesktopMenu.innerHTML = `<button
            href="./profile.html"
            class="px-6 py-4 hover:bg-gray-200 block cursor-pointer"
            ><i class="fa-regular fa-user mr-2"></i>Profile</button
          >`;
  toggleDesktopMenu.addEventListener("click", () => {
    desktopMenu.classList.toggle("hidden");
    console.log("add desktop profile dropdown!");
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
    window.location.href = "/login.html";
  });

  userContainer.appendChild(loginBtn);
} else {
  logoutMenu.classList.remove("hidden");
  getUserProfile();
}
