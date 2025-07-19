import{a as d,S as u,i}from"./assets/vendor-DqB7j7Ix.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))s(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function a(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(t){if(t.ep)return;t.ep=!0;const r=a(t);fetch(t.href,r)}})();const f="51392705-c835407a6ad34302eafe3f79f",p="https://pixabay.com/api/";async function m(e){return(await d.get(p,{params:{key:f,q:e,image_type:"photo",orientation:"horizontal",safesearch:!0}})).data}const y=new u(".gallery a",{captionsData:"alt",captionDelay:250});function c(){const e=document.querySelector(".loader");e&&e.classList.add("hidden")}function h(){const e=document.querySelector(".loader");e&&e.classList.remove("hidden")}function g(){const e=document.querySelector(".gallery");e&&(e.innerHTML="")}function L(e){const o=document.querySelector(".gallery"),a=e.map(s=>`
      <li class="gallery-item">
        <a href="${s.largeImageURL}">
          <img src="${s.webformatURL}" alt="${s.tags}" />
        </a>
       <div class="info">
           <div class="labels">
              <span>Likes</span>
              <span>Views</span>
              <span>Comments</span>
              <span>Downloads</span>
           </div>
         <div class="stats">
              <span>${s.likes}</span>
              <span>${s.views}</span>
              <span>${s.comments}</span>
              <span>${s.downloads}</span>
         </div>
       </div>

      </li>
    `).join("");o.insertAdjacentHTML("beforeend",a),y.refresh()}const l=document.querySelector(".form"),v=l.elements["search-text"];l.addEventListener("submit",async e=>{e.preventDefault();const o=v.value.trim();if(o){g(),h();try{const a=await m(o);if(c(),a.hits.length===0){i.show({message:"Sorry, there are no images matching your search query. Please try again!",backgroundColor:"#ff4e4e",position:"topRight"});return}L(a.hits)}catch(a){c(),console.error("Помилка запиту:",a.message),i.show({message:"An error occurred while fetching images. Please try again later.",backgroundColor:"#ffcc00",position:"topRight"})}}});
//# sourceMappingURL=index.js.map
