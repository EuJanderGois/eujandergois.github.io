(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=n(e);fetch(e.href,t)}})();document.title="Oops ...";document.querySelector("#app").innerHTML=`
  <div class="center">
    <img src="./maintenance.svg">
    <h1>Estamos em Manutenção</h1>
    <p>Desculpe pelo inconveniente, mas nosso site está passando por manutenção.</p>
    <p>Estamos trabalhando para voltar logo.</p>
    <p>Por favor, volte mais tarde.</p>
  </div>
`;
