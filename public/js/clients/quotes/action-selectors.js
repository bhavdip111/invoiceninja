/*! For license information please see action-selectors.js.LICENSE.txt */
!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/",n(n.s=4)}({4:function(e,t,n){e.exports=n("ydWM")},ydWM:function(e,t){function n(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}(new(function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.parentElement=document.querySelector(".form-check-parent"),this.parentForm=document.getElementById("bulkActions")}var t,r,o;return t=e,(r=[{key:"watchCheckboxes",value:function(e){var t=this;document.querySelectorAll(".form-check-child").forEach((function(n){e.checked?(n.checked=e.checked,t.processChildItem(n,document.getElementById("bulkActions"))):(n.checked=!1,document.querySelectorAll(".child-hidden-input").forEach((function(e){return e.remove()})))}))}},{key:"processChildItem",value:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};n.hasOwnProperty("single")&&document.querySelectorAll(".child-hidden-input").forEach((function(e){return e.remove()}));var r=document.createElement("INPUT");r.setAttribute("name","quotes[]"),r.setAttribute("value",e.dataset.value),r.setAttribute("class","child-hidden-input"),r.hidden=!0,t.append(r)}},{key:"handle",value:function(){var e=this;this.parentElement.addEventListener("click",(function(){e.watchCheckboxes(e.parentElement)}));var t=!0,n=!1,r=void 0;try{for(var o,c=function(){var t=o.value;t.addEventListener("click",(function(){e.processChildItem(t,e.parentForm)}))},u=document.querySelectorAll(".form-check-child")[Symbol.iterator]();!(t=(o=u.next()).done);t=!0)c()}catch(e){n=!0,r=e}finally{try{t||null==u.return||u.return()}finally{if(n)throw r}}}}])&&n(t.prototype,r),o&&n(t,o),e}())).handle()}});