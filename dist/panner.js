var Panner=function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={exports:{},id:r,loaded:!1};return e[r].call(o.exports,o,o.exports,t),o.loaded=!0,o.exports}var n={};return t.m=e,t.c=n,t.p="D:\\tools\\Projects\\panner\\build",t(0)}([/*!******************!*\
  !*** multi main ***!
  \******************/
function(e,t,n){e.exports=n(/*! ./src/index.js */1)},/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
function(e,t){"use strict";e.exports={init:function(e,t){var n=t?t:e.parentElement;return e.addEventListener("mousemove",function(e){e.preventDefault(),e&&1===e.which&&(0!==e.movementX&&(n.scrollLeft-=e.movementX),0!==e.movementY&&(n.scrollTop-=e.movementY))}),e}}}]);
//# sourceMappingURL=panner.js.map