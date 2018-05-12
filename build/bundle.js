!function(t){function e(n){if(i[n])return i[n].exports;var r=i[n]={i:n,l:!1,exports:{}};return t[n].call(r.exports,r,r.exports,e),r.l=!0,r.exports}var i={};e.m=t,e.c=i,e.i=function(t){return t},e.d=function(t,i,n){e.o(t,i)||Object.defineProperty(t,i,{configurable:!1,enumerable:!0,get:n})},e.n=function(t){var i=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(i,"a",i),i},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=4)}([function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});e.SVG_NS="http://www.w3.org/2000/svg"},function(t,e,i){t.exports=i.p+"public/fonts/slkscr-webfont.eot"},function(t,e,i){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var s=function(){function t(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,i,n){return i&&t(e.prototype,i),n&&t(e,n),e}}(),o=i(6),a=n(o),l=i(7),h=n(l),u=i(5),d=n(u),c=i(8),f=n(c),p=i(0),y=function(){function t(e,i,n){function s(t){return(t.key||t.which).toLowerCase()}var o=this;r(this,t),this.element=e,this.width=i,this.height=n,this.gameElement=document.getElementById(this.element),this.board=new a.default(this.width,this.height),this.paddleWidth=8,this.paddleHeight=56,this.boardGap=10,this.maxPoints=50,this.pause=!1,this.winner="",this.ball=new d.default(this.width/2,this.height/2,8),this.ball2=new d.default(this.width/2,this.height/2,4),this.player1=new h.default(this.paddleWidth,this.paddleHeight,this.boardGap,(this.height-this.paddleHeight)/2),this.player2=new h.default(this.paddleWidth,this.paddleHeight,this.width-this.boardGap-this.paddleWidth,(this.height-this.paddleHeight)/2),this.score1=new f.default(this.width/2-25,30,30,"end"),this.score2=new f.default(this.width/2+25,30,30,"start"),this.status=new f.default(this.width/2,this.height/2,48),this.colon=new f.default(this.width/2,30,30),this.pingSound=new Audio("public/sounds/pong-01.wav"),this.keyState={},document.addEventListener("keydown",function(t){o.keyState[s(t)]=!0," "===t.key&&(o.pause=!o.pause)},!0),document.addEventListener("keyup",function(t){o.keyState[s(t)]=!1},!0)}return s(t,[{key:"movePaddle",value:function(t,e,i){this.keyState[e]&&(t.y=Math.max(0,t.y-t.speed)),this.keyState[i]&&(t.y=Math.min(this.height-t.height,t.y+t.speed))}},{key:"moveBall",value:function(t){t.collideWithBox(this.player1.x,this.player1.y,this.player1.width,this.player1.height)&&this.pingSound.play(),t.collideWithBox(this.player2.x,this.player2.y,this.player2.width,this.player2.height)&&this.pingSound.play(),t.collideWithBox(0,0,this.width,1),t.collideWithBox(0,this.height,this.width,1),t.collideWithBox(0,0,1,this.height)&&(this.player2.score+=1,this.player2.score===this.maxPoints&&(this.pause=!0,this.winner="player 2"),t.reset(this.width/2,this.height/2)),t.collideWithBox(this.width,0,1,this.height)&&(this.player1.score+=1,this.player1.score===this.maxPoints&&(this.pause=!0,this.winner="player 1"),t.reset(this.width/2,this.height/2)),t.move()}},{key:"moveObjects",value:function(){this.movePaddle(this.player1,"w","s"),this.movePaddle(this.player2,"arrowup","arrowdown"),this.moveBall(this.ball),this.moveBall(this.ball2)}},{key:"render",value:function(){if(!this.pause){this.moveObjects(),this.gameElement.innerHTML="";var t=document.createElementNS(p.SVG_NS,"svg");t.setAttributeNS(null,"width",this.width),t.setAttributeNS(null,"height",this.height),t.setAttributeNS(null,"viewBox","0 0 "+this.width+" "+this.height),this.gameElement.appendChild(t),this.board.render(t),this.player2.render(t),this.player1.render(t),this.ball.render(t),this.ball2.render(t),this.winner.length>0&&this.status.render(t,this.winner+" won!"),this.score1.render(t,this.player1.score),this.score2.render(t,this.player2.score),this.colon.render(t,":")}}}]),t}();e.default=y},function(t,e,i){var n=i(9);"string"==typeof n&&(n=[[t.i,n,""]]);i(14)(n,{});n.locals&&(t.exports=n.locals)},function(t,e,i){"use strict";function n(){var t=document.getElementById("game-instruction-hidden");a?(a=!1,t.style.height="0px"):(a=!0,t.style.height=l+"px")}i(3);var r=i(2),s=function(t){return t&&t.__esModule?t:{default:t}}(r),o=new s.default("game",512,256);!function t(){o.render(),requestAnimationFrame(t)}();var a=!1,l=120;document.getElementById("show-more").onclick=n},function(t,e,i){"use strict";function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var r=function(){function t(t,e){var i=[],n=!0,r=!1,s=void 0;try{for(var o,a=t[Symbol.iterator]();!(n=(o=a.next()).done)&&(i.push(o.value),!e||i.length!==e);n=!0);}catch(t){r=!0,s=t}finally{try{!n&&a.return&&a.return()}finally{if(r)throw s}}return i}return function(e,i){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return t(e,i);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),s=function(){function t(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,i,n){return i&&t(e.prototype,i),n&&t(e,n),e}}(),o=i(0),a=function(){function t(e,i,r){n(this,t),this.radius=r,this.x=0,this.y=0,this.vx=0,this.vy=0,this.direction=1,this.reset(e,i)}return s(t,[{key:"paddleCollision",value:function(t,e){if(this.vx>0){var i=e.coordinates(e.x,e.y,e.width,e.height),n=r(i,4),s=n[0],o=n[1],a=n[2],l=n[3];this.x+this.radius>=s&&this.x+this.radius<=o&&this.y>=a&&this.y<=l&&(this.vx=-this.vx,this.ping.play())}else{var h=t.coordinates(t.x,t.y,t.width,t.height),u=r(h,4),d=u[0],c=u[1],f=u[2],p=u[3];this.x-this.radius<=c&&this.x-this.radius>=d&&this.y>=f&&this.y<=p&&(this.vx*=-1,this.ping.play())}}},{key:"reset",value:function(t,e){for(this.x=t,this.y=e,this.vy=0,this.vx=0;0===this.vy||0===this.vx;)this.vx=Math.round(10*Math.random()-5),this.vy=Math.round(10*Math.random()-5)}},{key:"wallCollision",value:function(){var t=this.x-this.radius<=0,e=this.x+this.radius>=this.boardWidth,i=this.y-this.radius<=0,n=this.y+this.radius>=this.boardHeight;t||e?this.vx*=-1:(i||n)&&(this.vy*=-1)}},{key:"collideWithBox",value:function(t,e,i,n){var r=i/2,s=n/2,o=Math.abs(this.x-(t+r)),a=Math.abs(this.y-(e+s));return!(o>r+this.radius)&&(!(a>s+this.radius)&&(o<=r?(this.vy*=-1,!0):a<=s?(this.vx*=-1,!0):o*o+a*a<=this.radius*this.radius&&(this.vx*=-1,this.vy*=-1,!0)))}},{key:"move",value:function(){this.x+=this.vx,this.y+=this.vy}},{key:"render",value:function(t){this.wallCollision();var e=document.createElementNS(o.SVG_NS,"circle");e.setAttributeNS(null,"r",this.radius),e.setAttributeNS(null,"cx",this.x),e.setAttributeNS(null,"cy",this.y),e.setAttributeNS(null,"fill","yellow"),t.appendChild(e)}}]),t}();e.default=a},function(t,e,i){"use strict";function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var r=function(){function t(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,i,n){return i&&t(e.prototype,i),n&&t(e,n),e}}(),s=i(0),o=function(){function t(e,i){n(this,t),this.width=e,this.height=i}return r(t,[{key:"render",value:function(t){var e=document.createElementNS(s.SVG_NS,"rect");e.setAttributeNS(null,"width",this.width),e.setAttributeNS(null,"height",this.height),e.setAttributeNS(null,"fill","deeppink");var i=document.createElementNS(s.SVG_NS,"line");i.setAttributeNS(null,"x1",this.width/2),i.setAttributeNS(null,"y1",0),i.setAttributeNS(null,"x2",this.width/2),i.setAttributeNS(null,"y1",this.height),i.setAttributeNS(null,"stroke","pink"),i.setAttributeNS(null,"stroke-dasharray","20, 10"),i.setAttributeNS(null,"stroke-width",2),t.appendChild(e),t.appendChild(i)}}]),t}();e.default=o},function(t,e,i){"use strict";function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var r=function(){function t(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,i,n){return i&&t(e.prototype,i),n&&t(e,n),e}}(),s=i(0),o=function(){function t(e,i,r,s){n(this,t),this.width=e,this.height=i,this.x=r,this.y=s,this.speed=10,this.score=0}return r(t,[{key:"render",value:function(t){var e=document.createElementNS(s.SVG_NS,"rect");e.setAttributeNS(null,"fill","white"),e.setAttributeNS(null,"height",this.height),e.setAttributeNS(null,"width",this.width),e.setAttributeNS(null,"x",this.x),e.setAttributeNS(null,"y",this.y),t.appendChild(e)}}]),t}();e.default=o},function(t,e,i){"use strict";function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var r=function(){function t(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,i,n){return i&&t(e.prototype,i),n&&t(e,n),e}}(),s=i(0),o=function(){function t(e,i,r){var s=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"middle";n(this,t),this.x=e,this.y=i,this.size=r,this.anchor=s}return r(t,[{key:"render",value:function(t,e){var i=document.createElementNS(s.SVG_NS,"text");i.setAttributeNS(null,"x",this.x),i.setAttributeNS(null,"y",this.y),i.setAttributeNS(null,"font-family",'"Silkscreen Web", monotype'),i.setAttributeNS(null,"font-size",this.size),i.setAttributeNS(null,"text-anchor",this.anchor),i.setAttributeNS(null,"fill","white"),i.textContent=e,t.appendChild(i)}}]),t}();e.default=o},function(t,e,i){e=t.exports=i(10)(),e.push([t.i,'a,abbr,acronym,address,applet,article,aside,audio,b,big,blockquote,body,canvas,caption,center,cite,code,dd,del,details,dfn,div,dl,dt,em,embed,fieldset,figcaption,figure,footer,form,h1,h2,h3,h4,h5,h6,header,hgroup,html,i,iframe,img,ins,kbd,label,legend,li,mark,menu,nav,object,ol,output,p,pre,q,ruby,s,samp,section,small,span,strike,strong,sub,summary,sup,table,tbody,td,tfoot,th,thead,time,tr,tt,u,ul,var,video{margin:0;padding:0;border:0;font-size:100%;font:inherit;vertical-align:baseline}article,aside,details,figcaption,figure,footer,header,hgroup,menu,nav,section{display:block}body{line-height:1}ol,ul{list-style:none}blockquote,q{quotes:none}blockquote:after,blockquote:before,q:after,q:before{content:"";content:none}table{border-collapse:collapse;border-spacing:0}@font-face{font-family:Silkscreen Web;src:url('+i(1)+");src:url("+i(1)+'?#iefix) format("embedded-opentype"),url('+i(13)+') format("woff"),url('+i(12)+') format("truetype"),url('+i(11)+'#silkscreennormal) format("svg");font-weight:400;font-style:normal}html{font-size:16px}body{align-items:center;display:flex;flex-direction:column;font-family:Silkscreen Web,monotype;height:100vh;justify-content:center;width:100%}h1{font-size:2.3rem;margin-bottom:1rem;text-align:center}.heart{animation:pulse 2s infinite}h2{font-size:1.5rem}.instruction-hidden{text-align:center;padding:0 20px;border:1px solid pink;margin:10px 0;width:512px;height:0;overflow:hidden;box-sizing:border-box;transition:all 1s ease-in-out;background:#eeee}ul{display:flex;justify-content:space-around}li>p{font-size:.8rem}span{font-size:.6rem}footer{text-align:center;margin:0 auto;font-family:Verdana,sans-serif;text-transform:lowercase;font-size:.7rem}',""])},function(t,e){t.exports=function(){var t=[];return t.toString=function(){for(var t=[],e=0;e<this.length;e++){var i=this[e];i[2]?t.push("@media "+i[2]+"{"+i[1]+"}"):t.push(i[1])}return t.join("")},t.i=function(e,i){"string"==typeof e&&(e=[[null,e,""]]);for(var n={},r=0;r<this.length;r++){var s=this[r][0];"number"==typeof s&&(n[s]=!0)}for(r=0;r<e.length;r++){var o=e[r];"number"==typeof o[0]&&n[o[0]]||(i&&!o[2]?o[2]=i:i&&(o[2]="("+o[2]+") and ("+i+")"),t.push(o))}},t}},function(t,e,i){t.exports=i.p+"public/fonts/slkscr-webfont.svg"},function(t,e,i){t.exports=i.p+"public/fonts/slkscr-webfont.ttf"},function(t,e,i){t.exports=i.p+"public/fonts/slkscr-webfont.woff"},function(t,e){function i(t,e){for(var i=0;i<t.length;i++){var n=t[i],r=c[n.id];if(r){r.refs++;for(var s=0;s<r.parts.length;s++)r.parts[s](n.parts[s]);for(;s<n.parts.length;s++)r.parts.push(l(n.parts[s],e))}else{for(var o=[],s=0;s<n.parts.length;s++)o.push(l(n.parts[s],e));c[n.id]={id:n.id,refs:1,parts:o}}}}function n(t){for(var e=[],i={},n=0;n<t.length;n++){var r=t[n],s=r[0],o=r[1],a=r[2],l=r[3],h={css:o,media:a,sourceMap:l};i[s]?i[s].parts.push(h):e.push(i[s]={id:s,parts:[h]})}return e}function r(t,e){var i=y(),n=m[m.length-1];if("top"===t.insertAt)n?n.nextSibling?i.insertBefore(e,n.nextSibling):i.appendChild(e):i.insertBefore(e,i.firstChild),m.push(e);else{if("bottom"!==t.insertAt)throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");i.appendChild(e)}}function s(t){t.parentNode.removeChild(t);var e=m.indexOf(t);e>=0&&m.splice(e,1)}function o(t){var e=document.createElement("style");return e.type="text/css",r(t,e),e}function a(t){var e=document.createElement("link");return e.rel="stylesheet",r(t,e),e}function l(t,e){var i,n,r;if(e.singleton){var l=v++;i=b||(b=o(e)),n=h.bind(null,i,l,!1),r=h.bind(null,i,l,!0)}else t.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(i=a(e),n=d.bind(null,i),r=function(){s(i),i.href&&URL.revokeObjectURL(i.href)}):(i=o(e),n=u.bind(null,i),r=function(){s(i)});return n(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;n(t=e)}else r()}}function h(t,e,i,n){var r=i?"":n.css;if(t.styleSheet)t.styleSheet.cssText=g(e,r);else{var s=document.createTextNode(r),o=t.childNodes;o[e]&&t.removeChild(o[e]),o.length?t.insertBefore(s,o[e]):t.appendChild(s)}}function u(t,e){var i=e.css,n=e.media;if(n&&t.setAttribute("media",n),t.styleSheet)t.styleSheet.cssText=i;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(i))}}function d(t,e){var i=e.css,n=e.sourceMap;n&&(i+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(n))))+" */");var r=new Blob([i],{type:"text/css"}),s=t.href;t.href=URL.createObjectURL(r),s&&URL.revokeObjectURL(s)}var c={},f=function(t){var e;return function(){return void 0===e&&(e=t.apply(this,arguments)),e}},p=f(function(){return/msie [6-9]\b/.test(self.navigator.userAgent.toLowerCase())}),y=f(function(){return document.head||document.getElementsByTagName("head")[0]}),b=null,v=0,m=[];t.exports=function(t,e){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");e=e||{},void 0===e.singleton&&(e.singleton=p()),void 0===e.insertAt&&(e.insertAt="bottom");var r=n(t);return i(r,e),function(t){for(var s=[],o=0;o<r.length;o++){var a=r[o],l=c[a.id];l.refs--,s.push(l)}if(t){i(n(t),e)}for(var o=0;o<s.length;o++){var l=s[o];if(0===l.refs){for(var h=0;h<l.parts.length;h++)l.parts[h]();delete c[l.id]}}}};var g=function(){var t=[];return function(e,i){return t[e]=i,t.filter(Boolean).join("\n")}}()}]);