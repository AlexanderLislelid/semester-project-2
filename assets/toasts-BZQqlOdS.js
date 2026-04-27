function e(){return`<div
      id="success-toast"
      class="p-6 fixed top-2.5 left-1/2 -translate-x-1/2 border border-green-500/50 rounded-md gap-2 shadow-md bg-green-100 hidden "
    >
      <i class="fa-solid fa-circle-check text-3xl text-green-500"></i>
      <div class="text-nowrap">
        <p class="text-xl">Login Successful</p>
        <p class="text-sm">Redirecting...</p>
      </div>
    </div>`}function t(){return`<div
      id="success-toast-register"
      class="p-6 fixed top-2.5 left-1/2 -translate-x-1/2 border border-green-500/50 rounded-md gap-2 shadow-md bg-green-100 hidden "
    >
      <i class="fa-solid fa-circle-check text-3xl text-green-500"></i>
      <div class="text-nowrap">
        <p class="text-xl">Register Successful</p>
        <p class="text-sm">Redirecting to Login page</p>
      </div>
    </div>`}function n(){let t=document.createElement(`div`);t.innerHTML=e(),document.body.append(t);let n=document.getElementById(`success-toast`);n.classList.remove(`hidden`),n.classList.add(`flex`),setTimeout(()=>{t.remove()},2e3)}function r(){let e=document.createElement(`div`);e.innerHTML=t(),document.body.append(e);let n=document.getElementById(`success-toast-register`);n.classList.remove(`hidden`),n.classList.add(`flex`),setTimeout(()=>{e.remove()},2e3)}export{r as n,n as t};