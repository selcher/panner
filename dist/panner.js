var Panner=function(e){function n(o){if(t[o])return t[o].exports;var r=t[o]={exports:{},id:o,loaded:!1};return e[o].call(r.exports,r,r.exports,n),r.loaded=!0,r.exports}var t={};return n.m=e,n.c=t,n.p="D:\\tools\\Projects\\panner\\build",n(0)}([/*!******************!*\
  !*** multi main ***!
  \******************/
function(e,n,t){e.exports=t(/*! ./src/index.js */1)},/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
function(e,n){"use strict";var t=function(e,n,t){var o=Date.now();return function(r){n(r),o+t-Date.now()<0&&(e(r),o=Date.now())}},o=function(e,n){var o=n?n:e.parentElement,r=0,i=0,u=t(function(e){e.preventDefault(),requestAnimationFrame(function(){e&&1===e.which&&(0!==e.movementX&&(o.scrollLeft-=r),0!==e.movementY&&(o.scrollTop-=i),r=0,i=0)})},function(e){e&&1===e.which&&(0!==e.movementX&&(r+=e.movementX),0!==e.movementY&&(i+=e.movementY))},10);return e.addEventListener("mousemove",u),e};e.exports={init:o}}]);
//# sourceMappingURL=panner.js.map