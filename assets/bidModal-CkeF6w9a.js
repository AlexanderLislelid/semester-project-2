import{r as e,t}from"./toasts-BRngUBp6.js";function n(e){if(e<=0)return`Ended`;let t=Math.floor(e/(1e3*60)%60),n=Math.floor(e/(1e3*60*60)%24);return`<div class="flex items-center align-center"><p class="font-semibold">${Math.floor(e/(1e3*60*60*24))}</p><p class="text-sm mr-1">d</p><p class="font-semibold">${n}</p><p class="text-sm mr-1">h</p><p class="font-semibold">${t}</p><p class="text-sm mr-1">m</p></div>`}function r(n){let r=n.bids[n.bids.length-1].amount,i=n.title,a=document.createElement(`div`);a.id=`bid-modal-overlay`,a.className=`fixed inset-0 bg-black/50 flex items-center justify-center z-50`,a.innerHTML=`
    <div id="bid-modal" class="bg-card flex w-full max-w-sm flex-col gap-4 rounded-lg p-6 shadow-xl">
      <div class="flex items-start justify-between">
        <div>
          <h2 class="max-w-56 truncate text-lg font-semibold">${i}</h2>
          <p class="text-text-secondary mt-1 text-sm">
            Current bid:
            <span class="font-medium text-teal-600">
              <i class="fa-regular fa-coins mr-1"></i>${r}
            </span>
          </p>
        </div>
        <button id="bid-modal-close" class="text-text-secondary ml-6 text-xl cursor-pointer">
          <i class="fa-solid fa-xmark"></i>
        </button>
      </div>
      <div class="flex flex-col gap-1">
        <input
          id="bid-amount"
          type="number"
          placeholder="Enter amount"
          class="inputs"
        />
      </div>
      <div class="flex justify-end gap-2">
        <button id="bid-modal-cancel" class="btn-cancel-form">Cancel</button>
        <button id="bid-modal-submit" class="btn-primary-form">Place bid</button>
      </div>
    </div>
  `;let o=a.querySelector(`#bid-modal-close`),s=a.querySelector(`#bid-modal-cancel`),c=a.querySelector(`#bid-modal-submit`);o.addEventListener(`click`,()=>{a.remove()}),s.addEventListener(`click`,()=>{a.remove()}),c.addEventListener(`click`,async()=>{let i=Number(a.querySelector(`#bid-amount`).value);i<=r&&t(`Invalid bid`,`Bid must be higher than ${r}`,`error`);try{await e(`auction/listings/${n.id}/bids`,{amount:i}),t(`Bid placed!`,`You bid ${i} credits`,`success`),a.remove()}catch(e){t(`Bid failed`,e.message,`error`)}}),document.body.append(a)}export{n,r as t};