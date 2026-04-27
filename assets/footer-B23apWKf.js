import{i as e,o as t,s as n,t as r}from"./apiClient-Bgt7fgGL.js";var i=window.location.hostname===`alexanderlislelid.github.io`?`/semester-project-2`:``;function a(){document.body.insertAdjacentHTML(`afterbegin`,`
    <nav id="nav-mobile" class="border-edges flex items-center justify-between border-b sm:hidden">
      <div class="px-2 pb-2 leading-1">
        <a href="${i}/index.html">
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
          <a href="${i}/index.html" class="border-b-edges block border-b px-2 py-3 hover:bg-gray-200">
            <i class="fa-regular fa-house mx-4 text-xl" aria-hidden="true"></i>Home
          </a>
        </li>
        <li>
          <a href="${i}/pages/create-listing.html" class="border-b-edges block border-b py-3 hover:bg-gray-200">
            <i class="fa-regular fa-plus mr-4 ml-6 text-xl" aria-hidden="true"></i>Create
          </a>
        </li>
        <li>
          <a href="${i}/pages/profile.html" class="border-b-edges block border-b py-3 hover:bg-gray-200">
            <i class="fa-regular fa-user mr-4 ml-6 text-xl" aria-hidden="true"></i>My Profile
          </a>
        </li>
        <li>
          <a href="${i}/pages/edit-profile.html" class="border-b-edges block border-b py-3 hover:bg-gray-200">
            <i class="fa-regular fa-user-pen mr-4 ml-6 text-xl" aria-hidden="true"></i>Edit Profile
          </a>
        </li>
        <li>
          <a href="${i}/pages/profile.html" class="border-b-edges block border-b py-3 hover:bg-gray-200">
            <i class="fa-regular fa-gavel mr-4 ml-6 text-xl" aria-hidden="true"></i>My Bids
          </a>
        </li>
        <li>
          <a href="${i}/pages/profile.html" class="border-b-edges block border-b py-3 hover:bg-gray-200">
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
        <a href="${i}/index.html">
          <p class="font-heading text-3xl leading-8 tracking-wider">GAVEL</p>
          <p class="text-text-secondary text-center text-xs">AUCTION HOUSE</p>
        </a>
      </div>
      <ul class="flex items-center">
        <li>
          <a href="${i}/index.html" class="block px-6 py-4 hover:bg-gray-200">
            <i class="fa-regular fa-house mr-2" aria-hidden="true"></i>Home
          </a>
        </li>
        <li>
          <a href="${i}/pages/create-listing.html" class="block px-6 py-4 hover:bg-gray-200">
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
          <a href="${i}/pages/profile.html" class="border-b-edges block border-b py-3 hover:border-l-8 hover:border-teal-600 hover:bg-gray-200">
            <i class="fa-regular fa-user mr-4 ml-6 text-xl" aria-hidden="true"></i>My Profile
          </a>
        </li>
        <li>
          <a href="${i}/pages/edit-profile.html" class="border-b-edges block border-b py-3 hover:border-l-8 hover:border-teal-600 hover:bg-gray-200">
            <i class="fa-regular fa-user-pen mr-4 ml-6 text-xl" aria-hidden="true"></i>Edit Profile
          </a>
        </li>
        <li>
          <a href="${i}/pages/profile.html" class="border-b-edges block border-b py-3 hover:border-l-8 hover:border-teal-600 hover:bg-gray-200">
            <i class="fa-regular fa-gavel mr-4 ml-6 text-xl" aria-hidden="true"></i>My Bids
          </a>
        </li>
        <li>
          <a href="${i}/pages/profile.html" class="border-b-edges block border-b py-3 hover:border-l-8 hover:border-teal-600 hover:bg-gray-200">
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
  `);let e=window.location.pathname.replace(i,``)||`/index.html`;document.querySelectorAll(`#nav-mobile-menu a, #nav-desktop a, #desktop-dropdown a`).forEach(t=>{new URL(t.href).pathname.replace(i,``)===e&&(t.closest(`#nav-desktop`)?t.classList.add(`border-b-2`,`border-teal-600`,`bg-gray-100`):t.closest(`#desktop-dropdown`)?t.classList.add(`border-l-8`,`border-teal-600`,`bg-gray-200`):t.classList.add(`border-l-4`,`border-teal-600`,`bg-gray-100`))})}a();var o=window.location.hostname===`alexanderlislelid.github.io`?`/semester-project-2`:``,s=document.getElementById(`mobile-menu-profile`),c=document.getElementById(`credits-mobile-menu`),l=document.getElementById(`credits-desktop`),u=document.getElementById(`desktop-dropdown-profile`);function d(){t(),n(),window.location.href=`${o}/pages/login.html`}var f=document.getElementById(`logout`);f&&f.addEventListener(`click`,d);var p=document.getElementById(`logout-desktop`);p&&p.addEventListener(`click`,d);async function m(){try{let e=localStorage.getItem(`user`),t=JSON.parse(e).name,n=(await r(`auction/profiles/${t}`)).data,i=n.name,a=n.email;n.avatar;let o=n.credits,d=document.createElement(`img`);d.src=n.avatar.url,d.alt=`${i}'s avatar`,d.className=`w-14 h-14 rounded-full`;let f=document.createElement(`div`),p=document.createElement(`p`),m=document.createElement(`p`);p.className=`text-lg`,m.className=`text-xs`,p.textContent=i,m.textContent=a,f.appendChild(p),f.appendChild(m),s.appendChild(d),s.appendChild(f);let h=document.createElement(`img`);h.src=n.avatar.url,h.alt=`${i}'s avatar`,h.className=`w-14 h-14 rounded-full`;let g=document.createElement(`div`),_=document.createElement(`p`),v=document.createElement(`p`);_.className=`text-lg`,v.className=`text-xs`,_.textContent=i,v.textContent=a,g.appendChild(_),g.appendChild(v),u.appendChild(g),u.appendChild(h),c.innerHTML=`<i class="fa-regular fa-coins text-teal-500 text-xl"></i>${o}`,l.className=`px-2 py-4 bg-teal-600 text-white`,l.innerHTML=`<i class="fa-regular fa-coins mr-2"></i>${o}`}catch{let e=document.createElement(`p`);e.textContent=`Could not load profile.`,e.className=`text-red-500 text-sm`,s.appendChild(e),u.appendChild(e)}}var h=document.getElementById(`nav-mobile-toggle`),g=document.getElementById(`nav-mobile-menu`),_=h.querySelector(`i`);h.addEventListener(`click`,()=>{let e=g.classList.toggle(`hidden`);_.classList.toggle(`fa-angle-down`,e),_.classList.toggle(`fa-angle-up`,!e),h.setAttribute(`aria-expanded`,!e)});var v=document.getElementById(`desktop-profile-toggle`),y=document.getElementById(`desktop-dropdown`);if(!e())v.innerHTML=`<a
            href="${o}/pages/login.html"
            class="px-6 py-4 hover:bg-gray-200 block"
            ><i class="fa-regular fa-right-to-bracket mr-2"></i>Login / Register</a
          >`;else{v.innerHTML=`<button
            class="px-6 py-4 hover:bg-gray-200 block cursor-pointer"
            aria-label="Toggle profile menu"
            aria-expanded="false"
            ><i class="fa-regular fa-user mr-2" aria-hidden="true"></i>Profile</button
          >`;let e=v.querySelector(`button`);v.addEventListener(`click`,()=>{let t=y.classList.toggle(`hidden`);e.setAttribute(`aria-expanded`,!t)}),document.body.addEventListener(`click`,e=>{!y.contains(e.target)&&!v.contains(e.target)&&y.classList.add(`hidden`)})}var b=document.getElementById(`logout-menu`);if(e())b.classList.remove(`hidden`),m();else{let e=document.createElement(`button`);b.classList.add(`hidden`),l.className=``,e.textContent=`Login / Register`,e.className=`text-center mx-auto py-2 bg-teal-600 rounded-md px-5 text-white border border-edges cursor-pointer text-sm hover:bg-teal-700`,e.addEventListener(`click`,()=>{window.location.href=`${o}/pages/login.html`}),s.appendChild(e)}function x(){let e=document.getElementById(`footer-wrapper`);return e.innerHTML=`<footer class="bg-dark-bg">
      <div
        class="sm:grid sm:grid-cols-[2fr_1fr_1fr] flex flex-col text-text-muted mt-60"
      >
        <div class="p-8">
          <h3 class="font-heading text-2xl text-white">GAVEL AUCTION HOUSE</h3>
          <p class="mt-4 font-light text-sm">
            Every student's premier destination for rare and valuable
            collectibles. Trusted by students worldwide since 2026.
          </p>
          <div class="flex gap-4 mt-10 text-teal-600 text-2xl">
            <a href="facebook.com"
              ><i class="fa-brands fa-facebook" aria-label="Facebook"></i
            ></a>
            <a href="twitter.com"
              ><i class="fa-brands fa-twitter" aria-label="twitter"></i
            ></a>
            <a href="instagram.com"
              ><i
                class="fa-brands fa-square-instagram"
                aria-label="instagram"
              ></i
            ></a>
            <a href="linkedin.com"
              ><i class="fa-brands fa-square-linkedin" aria-label="linkedin"></i
            ></a>
          </div>
        </div>
        <div class="p-8 flex flex-col gap-2 font-light">
          <h3 class="text-white font-heading text-xl mb-4">Company</h3>
          <a href="#" class="hover:text-white">How it works</a>
          <a href="#" class="hover:text-white">My Bids</a>
          <a href="#" class="hover:text-white">About Us</a>
          <a href="#" class="hover:text-white">Carreers</a>
          <a href="#" class="hover:text-white">Press</a>
          <a href="#" class="hover:text-white">Blog</a>
        </div>
        <div class="p-8 flex flex-col gap-2 font-light">
          <h3 class="text-white font-heading text-xl mb-4">Support</h3>
          <a href="#" class="hover:text-white">Help Center</a>
          <a href="#" class="hover:text-white">Buyer Protection</a>
          <a href="#" class="hover:text-white">Seller Guide</a>
          <a href="#" class="hover:text-white">Contact Us</a>
        </div>
      </div>
      <div
        class="mx-12 border-t border-teal-600 text-text-muted flex gap-4 justify-center sm:justify-end font-light"
      >
        <a href="#" class="mt-6 hover:text-white">Terms</a>
        <a href="#" class="mt-6 hover:text-white">Privacy</a>
        <a href="#" class="mt-6 hover:text-white">Cookies</a>
      </div>
      <p class="text-text-secondary text-center mt-8 text-sm p-2 font-light">
        &copy;2026 Gavel. All rights reserved
      </p>
    </footer>`}x();