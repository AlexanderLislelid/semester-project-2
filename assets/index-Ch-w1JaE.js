(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();function e(){return localStorage.getItem(`token`)}function t(){localStorage.removeItem(`token`)}function n(){localStorage.removeItem(`user`)}var r=`2f908da0-19de-4c3b-a9db-69cda003a3e6`,i=`https://v2.api.noroff.dev/`;async function a(t,n={}){let{body:a,...o}=n,s=e(),c={"Content-Type":`application/json`,"X-Noroff-API-Key":r};s&&(c.Authorization=`Bearer ${s}`);let l={method:a?`POST`:`GET`,...o,headers:{...c,...o.headers}};a&&(l.body=JSON.stringify(a));try{let e=await fetch(i+t,l);if(e.status===204)return{data:null};let n=await e.text(),r=n?JSON.parse(n):null;if(!e.ok){let e=r?.errors?.[0]?.message||r?.message||`An unknown API error occurred.`;throw Error(e)}return r}catch(e){throw console.error(`API Client Error:`,e),e}}var o=e=>a(e),s=window.location.hostname===`alexanderlislelid.github.io`?`/semester-project-2`:``;function c(){document.body.insertAdjacentHTML(`afterbegin`,`
    <nav id="nav-mobile" class="border-edges flex items-center justify-between border-b sm:hidden">
      <div class="px-2 pb-2 leading-1">
        <a href="${s}/index.html">
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
          <a href="${s}/index.html" class="border-b-edges block border-b px-2 py-3 hover:bg-gray-200">
            <i class="fa-regular fa-house mx-4 text-xl" aria-hidden="true"></i>Home
          </a>
        </li>
        <li>
          <a href="${s}/pages/create-listing.html" class="border-b-edges block border-b py-3 hover:bg-gray-200">
            <i class="fa-regular fa-plus mr-4 ml-6 text-xl" aria-hidden="true"></i>Create
          </a>
        </li>
        <li>
          <a href="${s}/pages/profile.html" class="border-b-edges block border-b py-3 hover:bg-gray-200">
            <i class="fa-regular fa-user mr-4 ml-6 text-xl" aria-hidden="true"></i>My Profile
          </a>
        </li>
        <li>
          <a href="${s}/pages/edit-profile.html" class="border-b-edges block border-b py-3 hover:bg-gray-200">
            <i class="fa-regular fa-user-pen mr-4 ml-6 text-xl" aria-hidden="true"></i>Edit Profile
          </a>
        </li>
        <li>
          <a href="${s}/pages/profile.html" class="border-b-edges block border-b py-3 hover:bg-gray-200">
            <i class="fa-regular fa-gavel mr-4 ml-6 text-xl" aria-hidden="true"></i>My Bids
          </a>
        </li>
        <li>
          <a href="${s}/pages/profile.html" class="border-b-edges block border-b py-3 hover:bg-gray-200">
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
        <a href="${s}/index.html">
          <p class="font-heading text-3xl leading-8 tracking-wider">GAVEL</p>
          <p class="text-text-secondary text-center text-xs">AUCTION HOUSE</p>
        </a>
      </div>
      <ul class="flex items-center">
        <li>
          <a href="${s}/index.html" class="block px-6 py-4 hover:bg-gray-200">
            <i class="fa-regular fa-house mr-2" aria-hidden="true"></i>Home
          </a>
        </li>
        <li>
          <a href="${s}/pages/create-listing.html" class="block px-6 py-4 hover:bg-gray-200">
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
          <a href="${s}/pages/profile.html" class="border-b-edges block border-b py-3 hover:border-l-8 hover:border-teal-600 hover:bg-gray-200">
            <i class="fa-regular fa-user mr-4 ml-6 text-xl" aria-hidden="true"></i>My Profile
          </a>
        </li>
        <li>
          <a href="${s}/pages/edit-profile.html" class="border-b-edges block border-b py-3 hover:border-l-8 hover:border-teal-600 hover:bg-gray-200">
            <i class="fa-regular fa-user-pen mr-4 ml-6 text-xl" aria-hidden="true"></i>Edit Profile
          </a>
        </li>
        <li>
          <a href="${s}/pages/profile.html" class="border-b-edges block border-b py-3 hover:border-l-8 hover:border-teal-600 hover:bg-gray-200">
            <i class="fa-regular fa-gavel mr-4 ml-6 text-xl" aria-hidden="true"></i>My Bids
          </a>
        </li>
        <li>
          <a href="${s}/pages/profile.html" class="border-b-edges block border-b py-3 hover:border-l-8 hover:border-teal-600 hover:bg-gray-200">
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
  `);let e=window.location.pathname.replace(s,``)||`/index.html`;document.querySelectorAll(`#nav-mobile-menu a, #nav-desktop a, #desktop-dropdown a`).forEach(t=>{new URL(t.href).pathname.replace(s,``)===e&&(t.closest(`#nav-desktop`)?t.classList.add(`border-b-2`,`border-teal-600`,`bg-gray-100`):t.closest(`#desktop-dropdown`)?t.classList.add(`border-l-8`,`border-teal-600`,`bg-gray-200`):t.classList.add(`border-l-4`,`border-teal-600`,`bg-gray-100`))})}c();var l=window.location.hostname===`alexanderlislelid.github.io`?`/semester-project-2`:``,u=document.getElementById(`mobile-menu-profile`),d=document.getElementById(`credits-mobile-menu`),f=document.getElementById(`credits-desktop`),p=document.getElementById(`desktop-dropdown-profile`);function m(){t(),n(),window.location.href=`${l}/pages/login.html`}var h=document.getElementById(`logout`);h&&h.addEventListener(`click`,m);var g=document.getElementById(`logout-desktop`);g&&g.addEventListener(`click`,m);async function _(){try{let e=localStorage.getItem(`user`),t=JSON.parse(e).name,n=(await o(`auction/profiles/${t}`)).data,r=n.name,i=n.email;n.avatar;let a=n.credits,s=document.createElement(`img`);s.src=n.avatar.url,s.alt=`${r}'s avatar`,s.className=`w-14 h-14 rounded-full`;let c=document.createElement(`div`),l=document.createElement(`p`),m=document.createElement(`p`);l.className=`text-lg`,m.className=`text-xs`,l.textContent=r,m.textContent=i,c.appendChild(l),c.appendChild(m),u.appendChild(s),u.appendChild(c);let h=document.createElement(`img`);h.src=n.avatar.url,h.alt=`${r}'s avatar`,h.className=`w-14 h-14 rounded-full`;let g=document.createElement(`div`),_=document.createElement(`p`),v=document.createElement(`p`);_.className=`text-lg`,v.className=`text-xs`,_.textContent=r,v.textContent=i,g.appendChild(_),g.appendChild(v),p.appendChild(g),p.appendChild(h),d.innerHTML=`<i class="fa-regular fa-coins text-teal-500 text-xl"></i>${a}`,f.className=`px-2 py-4 bg-teal-600 text-white`,f.innerHTML=`<i class="fa-regular fa-coins mr-2"></i>${a}`}catch{let e=document.createElement(`p`);e.textContent=`Could not load profile.`,e.className=`text-red-500 text-sm`,u.appendChild(e),p.appendChild(e)}}var v=document.getElementById(`nav-mobile-toggle`),y=document.getElementById(`nav-mobile-menu`),b=v.querySelector(`i`);v.addEventListener(`click`,()=>{let e=y.classList.toggle(`hidden`);b.classList.toggle(`fa-angle-down`,e),b.classList.toggle(`fa-angle-up`,!e),v.setAttribute(`aria-expanded`,!e)});var x=document.getElementById(`desktop-profile-toggle`),S=document.getElementById(`desktop-dropdown`);if(!e())x.innerHTML=`<a
            href="${l}/pages/login.html"
            class="px-6 py-4 hover:bg-gray-200 block"
            ><i class="fa-regular fa-right-to-bracket mr-2"></i>Login / Register</a
          >`;else{x.innerHTML=`<button
            class="px-6 py-4 hover:bg-gray-200 block cursor-pointer"
            aria-label="Toggle profile menu"
            aria-expanded="false"
            ><i class="fa-regular fa-user mr-2" aria-hidden="true"></i>Profile</button
          >`;let e=x.querySelector(`button`);x.addEventListener(`click`,()=>{let t=S.classList.toggle(`hidden`);e.setAttribute(`aria-expanded`,!t)}),document.body.addEventListener(`click`,e=>{!S.contains(e.target)&&!x.contains(e.target)&&S.classList.add(`hidden`)})}var C=document.getElementById(`logout-menu`);if(e())C.classList.remove(`hidden`),_();else{let e=document.createElement(`button`);C.classList.add(`hidden`),f.className=``,e.textContent=`Login / Register`,e.className=`text-center mx-auto py-2 bg-teal-600 rounded-md px-5 text-white border border-edges cursor-pointer text-sm hover:bg-teal-700`,e.addEventListener(`click`,()=>{window.location.href=`${l}/pages/login.html`}),u.appendChild(e)}function w(e){if(e<=0)return`Ended`;let t=Math.floor(e/(1e3*60)%60),n=Math.floor(e/(1e3*60*60)%24);return`<div class="flex items-center align-center"><p class="font-semibold">${Math.floor(e/(1e3*60*60*24))}</p><p class="text-sm mr-1">d</p><p class="font-semibold">${n}</p><p class="text-sm mr-1">h</p><p class="font-semibold">${t}</p><p class="text-sm mr-1">m</p></div>`}var T=document.getElementById(`items`),E=document.getElementById(`auctions-wrapper`),D=document.getElementById(`prev-page`),O=document.getElementById(`next-page`),k=document.getElementById(`filtered-headline`),A=document.getElementById(`newest-filter`),j=document.getElementById(`oldest-filter`),M=document.getElementById(`ending-soon-filter`),N=`newest`,P=1,F=``,I=!1;async function L(e,t=``){I=!0;try{let n;if(t)n=`auction/listings/search?${new URLSearchParams({q:t,page:e,limit:20,_bids:!0,_seller:!0}).toString()}`;else{let t,r;N===`ending-soon`?(t=`endsAt`,r=`asc`):N===`oldest`?(t=`created`,r=`asc`):(t=`created`,r=`desc`),n=`auction/listings?${new URLSearchParams({page:e,limit:20,_bids:!0,_seller:!0,_active:!0,sort:t,sortOrder:r}).toString()}`}let r=await o(n),i=r.data;T.textContent=`Listings: ${r.meta.totalCount}`,i.forEach(e=>{let t=document.createElement(`a`),n=document.createElement(`h2`),r=document.createElement(`img`),i=document.createElement(`div`),a=document.createElement(`p`),o=document.createElement(`p`),s=document.createElement(`div`),c=document.createElement(`div`),l=document.createElement(`p`),u=document.createElement(`div`),d=document.createElement(`a`);if(n.textContent=e.title,l.textContent=`Created by ${e.seller.name}`,a.textContent=`Bids ${e.bids.length}`,d.textContent=`Bid on item`,e.bids.length>0){let t=document.createElement(`i`);t.className=`fa-regular fa-coins mr-1 text-lg`,o.className=`font-semibold text-lg text-teal-600 flex items-center gap-1`,o.append(t,String(e.bids[e.bids.length-1].amount))}else o.textContent=`No bids`,o.className=`text-sm text-text-secondary italic`;e.media&&e.media.length>0?(r.src=e.media[0].url,r.alt=e.media[0].alt):(r.src=`/images/placeholder.png`,r.alt=``);let f=new Date(e.endsAt)-new Date,p=w(f);f<=0?u.innerHTML=`<div class="text-sm rounded-md  py-1 px-2 absolute top-2 right-2 bg-dark-bg text-white">${p}</div>`:u.innerHTML=`<div class="text-sm rounded-md py-1 px-2 absolute top-2 right-2 bg-teal-600/80 backdrop-blur-lg text-white flex items-center gap-1.5"><span class="size-1.5 rounded-full bg-white animate-pulse"></span>${p}</div>`,t.className=`group rounded-md bg-white shadow-sm hover:shadow-xl transition-shadow duration-300 flex flex-col relative overflow-hidden`,r.className=`h-52 w-full object-cover`,s.className=`px-4 py-3 flex flex-col flex-1 capitalize`,n.className=`text-base font-semibold truncate`,c.className=`text-xs flex gap-1.5 flex-wrap mt-1`,l.className=`text-xs text-text-secondary mt-2`,a.className=`text-xs text-text-secondary`,i.className=`flex items-center justify-between mt-3 pt-3 border-t border-gray-100`,d.className=`flex items-center justify-center py-2 bg-teal-600 mt-3 text-white text-sm font-medium hover:bg-teal-700 rounded-md transition-colors`,e.tags&&e.tags.length>0&&e.tags.forEach(e=>{let t=document.createElement(`span`);t.textContent=`#${e}`,t.className=`bg-gray-100 text-text-secondary rounded-full px-2 py-0.5`,c.appendChild(t)}),t.href=`./pages/single-listing.html?id=${e.id}`,E.appendChild(t),s.appendChild(n),s.appendChild(c),i.appendChild(o),i.appendChild(a),s.appendChild(i),s.appendChild(d),s.appendChild(l),t.appendChild(r),t.appendChild(u),t.appendChild(s)}),O.disabled=!1,D.disabled=!1,r.meta.isLastPage&&(O.disabled=!0),r.meta.isFirstPage&&(D.disabled=!0)}catch(e){console.error(`Failed to fetch auctions:`,e)}finally{I=!1}}O.addEventListener(`click`,()=>{I||(P++,E.innerHTML=``,L(P,F))}),D.addEventListener(`click`,()=>{!I&&P>=1&&(P--,E.innerHTML=``,L(P,F))});function R(){let e=document.getElementById(`search-form`),t=document.getElementById(`search`);e.addEventListener(`submit`,e=>{e.preventDefault(),F=t.value.trim(),P=1,E.innerHTML=``,L(P,F),window.scrollTo(0,0)}),t.addEventListener(`input`,()=>{t.value===``&&(F=``,P=1,E.innerHTML=``,L(P,F))})}var z=[A,j,M];function B(e){z.forEach(e=>e.classList.remove(`active-filter`)),e.classList.add(`active-filter`)}A.addEventListener(`click`,()=>{N=`newest`,P=1,E.innerHTML=``,k.textContent=`Newest Auctions`,B(A),L(P,F)}),j.addEventListener(`click`,()=>{N=`oldest`,P=1,E.innerHTML=``,k.textContent=`Oldest Auctions`,B(j),L(P,F)}),M.addEventListener(`click`,()=>{N=`ending-soon`,P=1,E.innerHTML=``,k.textContent=`Ending Soon!`,B(M),L(P,F)}),B(A),R(),L(P);