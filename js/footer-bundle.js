"use strict";$(document).ready(function(){$(".burger").click(function(e){e.preventDefault(),$(this).toggleClass("burger_open"),$(".navigation-popup").toggleClass("navigation-popup_active"),$(".popup-menu-mobile").toggleClass("popup-menu-mobile_visible"),$("body").toggleClass("open-popup")}),$("html").keydown(function(e){event.ctrlKey&&71==event.keyCode&&$(".debug-grid").toggleClass("debug-grid__active")});document.documentElement.style.setProperty("--app-height","".concat(window.innerHeight,"px"))});