!function(){var t,e=document.querySelector("body"),o=document.querySelector("[data-start]"),r=document.querySelector("[data-stop]");o.addEventListener("click",(function(){o.toggleAttribute("disabled"),r.toggleAttribute("disabled"),t=setInterval((function(){e.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16))}),1e3)})),r.addEventListener("click",(function(){clearInterval(t),o.toggleAttribute("disabled"),r.toggleAttribute("disabled")}))}();
//# sourceMappingURL=01-color-switcher.7db15071.js.map