!function(e){var n={};function t(r){if(n[r])return n[r].exports;var i=n[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,t),i.l=!0,i.exports}t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:r})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(t.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var i in e)t.d(r,i,function(n){return e[n]}.bind(null,i));return r},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=0)}([function(e,n,t){e.exports=t(1)},function(e,n,t){"use strict";t.r(n);t(2),t(3),t(4),t(5)},function(e,n,t){},function(e,n){var t=document.querySelector(".header-navigation__btn"),r=document.querySelector(".side-menu"),i=document.querySelector(".header-navigation"),d=document.getElementById("burger"),s=(document.querySelector(".header-nav__list .header-nav__item:nth-child(5)"),document.querySelector(".header-nav__list .header-nav__item:nth-child(1)"),document.querySelector(".header-nav__list .header-nav__item:nth-child(2)"),document.querySelector(".header-nav__list .header-nav__item:nth-child(3)")),o=document.querySelector(".header"),c=document.querySelector(".header_wrapper"),a=document.getElementById("search-icon"),l=document.querySelector(".shadow"),u=!0,m=function(){r.classList.add("hidden"),u=!0,d.src="./img/icon1.svg",a.src="./img/icon2.svg",i.src="gap: 16px",o.style="background: #ffffff; z-index: 1;",c.style="max-width: 720px; margin: 0 auto; z-index: 1;",document.querySelector(".feedback").classList.contains("hidden")&&document.querySelector(".responsiveness").classList.contains("hidden")&&l.classList.add("hidden"),document.querySelector(".header-nav__list").classList.remove("visible"),document.querySelector(".header-nav__list").classList.add("hidden")};t.addEventListener("click",(function(){u?(r.classList.remove("hidden"),u=!1,d.src="./img/icon.x.svg",s.style="display: none",a.src="./img/icon.search.svg",o.style="background: white; z-index: 3;",c.style="max-width: 340px; margin: 0; position: fixed; z-index: 3; border: none;",l.classList.remove("hidden"),document.querySelector(".header-nav__list").classList.add("visible"),document.querySelector(".header-nav__list").classList.remove("hidden")):m()}));var h=document.querySelector("#order-call"),v=document.querySelector(".feedback"),f=document.querySelectorAll(".feedback-img");h.addEventListener("click",(function(){v.classList.remove("hidden"),l.classList.remove("hidden"),document.querySelector(".side-menu").classList.contains("hidden")||m()})),f[0].addEventListener("click",(function(){document.querySelector(".side-menu").classList.contains("hidden")&&l.classList.add("hidden"),v.classList.add("hidden")}));var y=document.querySelector("#responsiveness"),p=document.querySelector(".responsiveness");y.addEventListener("click",(function(){p.classList.remove("hidden"),l.classList.remove("hidden"),document.querySelector(".side-menu").classList.contains("hidden")||m()})),f[1].addEventListener("click",(function(){p.classList.add("hidden"),document.querySelector(".side-menu").classList.contains("hidden")&&l.classList.add("hidden")}))},function(e,n){new Swiper(".swiper",{direction:"horizontal",loop:!0,pagination:{el:".swiper-pagination"},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},scrollbar:{el:".swiper-scrollbar"}})},function(e,n){document.addEventListener("click",(function(e){var n=e.target,t=n.parentNode.children[0],r=e.target.parentNode.parentNode;"main__description_btn"==e.target.className&&(r.classList.contains("hidden")?function(e,n,t){e.classList.remove("hidden"),n.innerHTML="Скрыть",t.style="transform: rotate(180deg)"}(r,n,t):function(e,n,t){e.classList.add("hidden"),n.innerHTML="Показать все",t.style="transform: rotate(0deg)",console.log(e.className),"main__description hidden"==e.className&&(n.innerHTML="Читать далее")}(r,n,t))}))}]);
//# sourceMappingURL=bundle.js.map