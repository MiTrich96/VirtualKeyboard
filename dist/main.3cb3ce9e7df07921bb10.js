!function(){"use strict";let e=!1,t=!1,n=document.querySelector(".output_area");function a(a){switch(["back","shift","space","enter","language"].reduce(((e,t)=>(a.target.classList.contains(t)&&(e=t),e)),"")){case"back":if(n.textContent.length){let e=n.textContent.slice(0,n.textContent.length-1);n.textContent=e}break;case"enter":n.textContent+="\n";break;case"space":n.textContent+=" ";break;case"shift":{e=!e;const t=document.getElementsByClassName("shift");t[0].classList.toggle("shift_clicked"),t[1].classList.toggle("shift_clicked");break}case"language":t=!t,i(t?"rus":"eng")}}var c=function(t){let c=t.target;c.classList.contains("keyboard_item")&&!c.classList.contains("special")?function(t){let a=t.target,c=e?a.innerText.toUpperCase():a.innerText.toLowerCase();n.textContent+=c}(t):c.classList.contains("special")&&a(t)};const s=["q","w","e","r","t","z","u","i","o","p","a","s","d","f","g","h","j","k","l","y","x","c","v","b","n","m","shift","back","enter","space","language","shift"],o=["й","ц","у","к","е","н","г","ш","щ","з","х","ъ","ф","ы","в","а","п","р","о","л","д","ж","э","я","ч","с","м","и","т","ь","б","ю","shift","back","enter","space","language","shift"];function r(e){const t=document.createElement("div");t.classList.add("keyboard_wrap");return function(e){return e.map((e=>{const t=document.createElement("div");return t.classList.add("keyboard_item"),t.innerText=e,1===e.length||(t.classList.add("special"),t.classList.add(e)),t}))}(e).map((e=>{t.appendChild(e)})),t}var i=function(e){let t=document.querySelector(".keyboard_wrap");null!==t&&(t.parentNode.removeChild(t),t.removeEventListener("click",c));const n=document.querySelector(".app_bottom");"rus"===e?n.appendChild(r(o)):n.appendChild(r(s)),t=document.querySelector(".keyboard_wrap"),t.addEventListener("click",c)};function l(e){const t=document.getElementsByClassName("keyboard_item");for(let n=0;n<t.length;n++)t[n].innerHTML==e&&(t[n].classList.add("active"),setTimeout((()=>{t[n].classList.remove("active")}),300))}var u=function(e){e.preventDefault();const t=document.querySelector(".output_area");-1===["Alt","Shift","Control","Enter","Backspace","Space"].indexOf(e.key)?(t.textContent+=e.key,l(e.key)):(!function(e){const t=document.querySelector(".output_area");switch(e){case"Backspace":if(t.textContent.length){let e=t.textContent.slice(0,t.textContent.length-1);t.textContent=e}break;case"Enter":t.textContent+="\n";break;case"Space":t.textContent+=" "}}(e.key),l(e.key))};i("eng");document.querySelector(".output_area").addEventListener("keydown",u)}();