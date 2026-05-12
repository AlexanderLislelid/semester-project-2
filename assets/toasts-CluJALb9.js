function e(e,t,n){let r=document.createElement(`div`);n===`success`?r.innerHTML=`<div
      class="p-6 fixed top-2.5 left-1/2 -translate-x-1/2 border border-green-500/50 rounded-md gap-2 shadow-md bg-green-100 flex z-50"
    >
      <i class="fa-solid fa-circle-check text-3xl text-green-500"></i>
      <div class="text-nowrap">
        <p class="text-xl">${e}</p>
        <p class="text-sm">${t}</p>
      </div>
    </div>`:n===`error`&&(r.innerHTML=`<div
      class="p-6 fixed top-2.5 left-1/2 -translate-x-1/2 border border-red-500/50 rounded-md gap-2 shadow-md bg-red-100 flex z-50"
    >
      <i class="fa-solid fa-circle-xmark text-3xl text-red-500"></i>
      <div class="text-nowrap">
        <p class="text-xl">${e}</p>
        <p class="text-sm">${t}</p>
      </div>
    </div>`),document.body.append(r),setTimeout(()=>{r.remove()},2e3)}export{e as t};