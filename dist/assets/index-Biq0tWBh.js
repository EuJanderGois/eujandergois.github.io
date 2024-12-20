(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();function c(s){let r=0;const o=n=>{r=n,s.innerHTML=`count is ${r}`};s.addEventListener("click",()=>o(r+1)),o(0)}document.querySelector("#app").innerHTML=`
  <div class="center">
    <img src="./maintenance.svg">
    <h1>Estamos em Manutenção</h1>
    <p>Desculpe pelo inconveniente, mas nosso site está passando por manutenção.</p>
    <p>Estamos trabalhando duro para melhorar sua experiência.</p>
    <p>Por favor, volte mais tarde.</p>
  </div>
`;c(document.querySelector("#counter"));
