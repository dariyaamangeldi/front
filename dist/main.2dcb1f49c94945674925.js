document.addEventListener("DOMContentLoaded",(function(){var t=document.getElementById("main-content");function n(n){fetch(n).then((function(t){return t.text()})).then((function(n){t.innerHTML=n})).catch((function(t){return console.error("Error loading page:",t)}))}function e(t){t.preventDefault();var e=t.target.getAttribute("href");history.pushState({},"",e),n(e)}document.querySelectorAll("nav a").forEach((function(t){t.addEventListener("click",e)})),window.addEventListener("popstate",(function(){n(window.location.pathname)})),n(window.location.pathname)}));