parcelRequire=function(e,r,n,t){var i="function"==typeof parcelRequire&&parcelRequire,o="function"==typeof require&&require;function u(n,t){if(!r[n]){if(!e[n]){var f="function"==typeof parcelRequire&&parcelRequire;if(!t&&f)return f(n,!0);if(i)return i(n,!0);if(o&&"string"==typeof n)return o(n);var c=new Error("Cannot find module '"+n+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[n][1][r]||r},p.cache={};var l=r[n]=new u.Module(n);e[n][0].call(l.exports,p,l,l.exports,this)}return r[n].exports;function p(e){return u(p.resolve(e))}}u.isParcelRequire=!0,u.Module=function(e){this.id=e,this.bundle=u,this.exports={}},u.modules=e,u.cache=r,u.parent=i,u.register=function(r,n){e[r]=[function(e,r){r.exports=n},{}]};for(var f=0;f<n.length;f++)u(n[f]);if(n.length){var c=u(n[n.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=c:"function"==typeof define&&define.amd?define(function(){return c}):t&&(this[t]=c)}return u}({"g2Hq":[function(require,module,exports) {
function e(e){return o(e)||n(e)||t()}function t(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function n(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}function o(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}!function(){var t=document.getElementById("app"),n=document.createElement("div"),o=document.createElement("div"),a=document.createElement("div"),r=document.createElement("span"),c=document.createElement("div"),d=document.createElement("span"),i=[87,38],l=[83,40],f=-1,s=-1,p=0,u=[],m=0,v=30;n.className="Christmas-tree",n.textContent="🎄",o.className="Board",a.className="Score",a.textContent="Score: ",a.appendChild(r),r.textContent=p,c.className="Timer",c.textContent="Time Left: ",c.appendChild(d),d.textContent=v,o.appendChild(a),o.appendChild(c),t.appendChild(o),t.appendChild(n),t.style.padding="".concat(100,"px 0");var h=function(){u.forEach(function(e){(function(e){var t=e.offsetLeft<n.offsetLeft+n.offsetWidth&&e.offsetLeft+e.offsetWidth>n.offsetLeft,o=e.offsetTop<n.offsetTop+n.offsetHeight&&e.offsetHeight+e.offsetTop>n.offsetTop;return t&&o})(e)&&(e.remove(),p++,v++),0===e.offsetLeft&&e.remove()}),r.textContent=p,d.textContent=v},C=function(){s=setInterval(function(){if((m+=10)%1e3==0){var n=document.createElement("div"),o=(d=Math.floor,i=Math.random,l=t.offsetHeight-200,d(i()*l)+100);n.className="Present",n.textContent="🎁",n.style.top="".concat(o,"px"),t.appendChild(n),u=[].concat(e(u),[n]),v>0?v-=1:(a=document.createElement("div"),r=document.createElement("p"),c=document.createElement("button"),a.className="Overlay__column",a.appendChild(r),a.appendChild(c),c.type="button",c.textContent="Restart",r.className="Message",r.textContent="You are amazing! Happy holidays! Keep on rocking next year!",t.appendChild(a),c.addEventListener("click",function(){return document.location.reload()}),clearInterval(s),clearInterval(f))}var a,r,c,d,i,l;h()},10)};h(),window.addEventListener("load",function(){var e=document.createElement("div"),n=document.createElement("button");e.className="Overlay",e.appendChild(n),n.type="button",n.textContent="Start",t.appendChild(e),n.addEventListener("click",function(){e.remove(),C()})}),document.addEventListener("keydown",function(e){var t=e.keyCode,o=null;o=i.includes(t)?"up":o,(o=l.includes(t)?"down":o)&&-1===f&&(f=setInterval(function(){return function(e){var t=n.offsetTop;"up"===e&&(t-=1),"down"===e&&(t+=1),n.style.top="".concat(t,"px")}(o)},5))}),document.addEventListener("keyup",function(){console.log(),clearInterval(f),f=-1})}();
},{}]},{},["g2Hq"], null)