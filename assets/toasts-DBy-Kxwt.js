(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();function e(e){localStorage.setItem(`token`,e)}function t(){return localStorage.getItem(`token`)}function n(){localStorage.removeItem(`token`)}function r(e){localStorage.setItem(`user`,JSON.stringify(e))}function i(){return JSON.parse(localStorage.getItem(`user`))}function a(){localStorage.removeItem(`user`)}function o(){return!!(i()&&t())}var s=`2f908da0-19de-4c3b-a9db-69cda003a3e6`,c=`https://v2.api.noroff.dev/`;async function l(e,n={}){let{body:r,...i}=n,a=t(),o={"Content-Type":`application/json`,"X-Noroff-API-Key":s};a&&(o.Authorization=`Bearer ${a}`);let l={method:r?`POST`:`GET`,...i,headers:{...o,...i.headers}};r&&(l.body=JSON.stringify(r));try{let t=await fetch(c+e,l);if(t.status===204)return{data:null};let n=await t.text(),r=n?JSON.parse(n):null;if(!t.ok){let e=r?.errors?.[0]?.message||r?.message||`An unknown API error occurred.`;throw Error(e)}return r}catch(e){throw console.error(`API Client Error:`,e),e}}var u=e=>l(e),d=(e,t)=>l(e,{body:t}),f=(e,t)=>l(e,{method:`PUT`,body:t}),p=e=>l(e,{method:`DELETE`});function m(e,t,n){let r=document.createElement(`div`);n===`success`?r.innerHTML=`<div
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
    </div>`),document.body.append(r),setTimeout(()=>{r.remove()},2e3)}export{f as a,i as c,e as d,r as f,d as i,n as l,p as n,o,u as r,t as s,m as t,a as u};