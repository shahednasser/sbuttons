parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"NvjX":[function(require,module,exports) {
$(document).ready(function(){function t(){$("section").each(function(){if($(this).isOnScreen()){var t=$(".sidebar a[href='#"+$(this).attr("id")+"']");$(".sidebar a.active").removeClass("active"),t.addClass("active");var e=t.hasClass("submenu-link"),o=t.next().hasClass("submenu-links");if(e||!e&&!o){var s=t.parent();return(e=s.hasClass("submenu-links"))&&!s.hasClass("show")?($(".submenu-links.show").removeClass("show"),s.addClass("show")):e||$(".submenu-links.show").removeClass("show"),!1}}})}function e(){$(".content").isOnScreen()?($(".navbar").removeClass("scrolling"),$(".sidebar").removeClass("scrolling")):($(".navbar").addClass("scrolling"),$(".sidebar").addClass("scrolling"))}function o(){$(window).scrollTop()>100?$(".scroll-top").fadeIn():$(".scroll-top").fadeOut()}function s(t){document.body.setAttribute("data-theme",t),localStorage.setItem("currentTheme",t),$(".toggle-theme i").toggleClass("fa-moon fa-sun")}function i(t,e){var o=$('<input type="text" value=\''+t+"' />");o.appendTo("body"),o.get(0).select(),o.get(0).setSelectionRange(0,99999),document.execCommand("copy"),o.remove(),setTimeout(function(){return e.tooltip("hide")},1500)}$.fn.isOnScreen=function(){var t=$(window),e={top:t.scrollTop(),left:t.scrollLeft()};e.right=e.left+t.width(),e.bottom=e.top+t.height()-80;var o=this.offset();return o.right=o.left+this.outerWidth(),o.bottom=o.top+this.outerHeight()-80,!(e.right<o.left||e.left>o.right||e.bottom<o.top||e.top>o.bottom)};var n={title:"Copied",trigger:"click",placement:"bottom"};"dark"===localStorage.getItem("currentTheme")&&s("dark"),t(),e(),o(),$(window).on("scroll",function(){e(),t(),o()}),$(".scroll-top").click(function(){var t=100;$(window).width()<=640&&(t=210),$("html, body").animate({scrollTop:0},t)}),$(".button-caption-sub").tooltip(n),$(".button-caption-sub").click(function(){var t=$(this).text().trim();i(t=t.replace(/\./g,""),$(this))}),$(".script-copy").tooltip(n),$(".script-copy").click(function(){i($(this).text().trim(),$(this))}),$(".sidebar-toggler").on("click",function(t){var e=$(".sidebar");t.stopPropagation(),e.toggleClass("hide-sidebar"),$("#shade").toggleClass("shown")}),$(".sidebar a").on("click",function(){if(document.body.clientWidth<768){var t=$(".sidebar");$("#shade").toggleClass("shown"),t.addClass("animate__slideOutLeft"),window.setTimeout(function(){t.toggleClass("hide-sidebar"),t.removeClass("animate__slideOutLeft")},1e3)}}),$("body").click(function(t){var e=$(".sidebar"),o=$(t.target);$(window).width()<=767&&!o.hasClass("sidebar")&&!o.parents(".sidebar").length&&e.hasClass("animate__slideInLeft")&&!e.hasClass("hide-sidebar")&&($("#shade").toggleClass("shown"),e.addClass("animate__slideOutLeft"),window.setTimeout(function(){e.toggleClass("hide-sidebar"),e.removeClass("animate__slideOutLeft")},1e3))}),$(".close-sidebar").on("click",function(){var t=$(".sidebar");$("#shade").toggleClass("shown"),t.addClass("animate__slideOutLeft"),window.setTimeout(function(){t.toggleClass("hide-sidebar"),t.removeClass("animate__slideOutLeft")},1e3)}),$(".toggle-theme").on("click",function(){"dark"!==localStorage.getItem("currentTheme")?s("dark"):s("light")}),$("#downloadGithubRawHeader, #downloadGithubRawHowTo").on("click",function(){var t="https://raw.githubusercontent.com/shahednasser/sbuttons/master/dist/sbuttons.min.css";window.fetch?fetch(t).then(function(t){return t.blob()}).then(function(t){var e=window.URL.createObjectURL(t),o=document.createElement("a");o.style.display="none",o.href=e,o.download="sbuttons.min.css",document.body.appendChild(o),o.click(),window.URL.revokeObjectURL(e),document.body.removeChild(o)}).catch(function(t){return console.log(t)}):window.location.href=t})});
},{}]},{},["NvjX"], null)
//# sourceMappingURL=/js.b97f1a3b.js.map