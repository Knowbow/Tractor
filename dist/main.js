!function(e){var t={};function a(n){if(t[n])return t[n].exports;var r=t[n]={i:n,l:!1,exports:{}};return e[n].call(r.exports,r,r.exports,a),r.l=!0,r.exports}a.m=e,a.c=t,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)a.d(n,r,function(t){return e[t]}.bind(null,r));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/dist/",a(a.s=1)}([function(e,t,a){},function(e,t,a){"use strict";a.r(t);a(0);var n=function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.playerName=t,this.playerCards=[],this.active=[]};var r=function e(t,a,n,r){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.suit=t,this.rank=a,this.value=n,this.ref=r};function i(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var s=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.cards=[]}var t,a,n;return t=e,(a=[{key:"createDeck",value:function(){for(var e=["clubs","diamonds","hearts","spades"],t=["ace","2","3","4","5","6","7","8","9","10","jack","queen","king"],a=[14,2,3,4,5,6,7,8,9,10,11,12,13],n=["./dist/images/PNG/AC.png","./dist/images/PNG/2C.png","./dist/images/PNG/3C.png","./dist/images/PNG/4C.png","./dist/images/PNG/5C.png","./dist/images/PNG/6C.png","./dist/images/PNG/7C.png","./dist/images/PNG/8C.png","./dist/images/PNG/9C.png","./dist/images/PNG/10C.png","./dist/images/PNG/JC.png","./dist/images/PNG/QC.png","./dist/images/PNG/KC.png","./dist/images/PNG/AD.png","./dist/images/PNG/2D.png","./dist/images/PNG/3D.png","./dist/images/PNG/4D.png","./dist/images/PNG/5D.png","./dist/images/PNG/6D.png","./dist/images/PNG/7D.png","./dist/images/PNG/8D.png","./dist/images/PNG/9D.png","./dist/images/PNG/10D.png","./dist/images/PNG/JD.png","./dist/images/PNG/QD.png","./dist/images/PNG/KD.png","./dist/images/PNG/AH.png","./dist/images/PNG/2H.png","./dist/images/PNG/3H.png","./dist/images/PNG/4H.png","./dist/images/PNG/5H.png","./dist/images/PNG/6H.png","./dist/images/PNG/7H.png","./dist/images/PNG/8H.png","./dist/images/PNG/9H.png","./dist/images/PNG/10H.png","./dist/images/PNG/JH.png","./dist/images/PNG/QH.png","./dist/images/PNG/KH.png","./dist/images/PNG/AS.png","./dist/images/PNG/2S.png","./dist/images/PNG/3S.png","./dist/images/PNG/4S.png","./dist/images/PNG/5S.png","./dist/images/PNG/6S.png","./dist/images/PNG/7S.png","./dist/images/PNG/8S.png","./dist/images/PNG/9S.png","./dist/images/PNG/10S.png","./dist/images/PNG/JS.png","./dist/images/PNG/QS.png","./dist/images/PNG/KS.png"],i=0;i<e.length;i++)for(var s=0;s<t.length;s++)this.cards.push(new r(e[i],t[s],a[s],n[13*i+s]))}},{key:"shuffleDeck",value:function(){for(var e,t,a,n=0;n<1e3;n++)e=Math.floor(Math.random()*this.cards.length),t=Math.floor(Math.random()*this.cards.length),a=this.cards[e],this.cards[e]=this.cards[t],this.cards[t]=a}}])&&i(t.prototype,a),n&&i(t,n),e}();function d(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var l=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.cardsInMiddle=[],this.players=[],this.inPlay=[],this.firstSuit=1,this.token=0,this.over=!1,this.points=0}var t,a,r;return t=e,(a=[{key:"start",value:function(e,t,a,r){this.players.push(new n(e)),this.players.push(new n(t)),this.players.push(new n(a)),this.players.push(new n(r));var i=new s,d=new s;i.createDeck(),d.createDeck(),i.shuffleDeck(),d.shuffleDeck(),i.cards=i.cards.concat(d.cards),this.players[0].playerCards=i.cards.slice(0,26),this.players[1].playerCards=i.cards.slice(26,52),this.players[2].playerCards=i.cards.slice(52,78),this.players[3].playerCards=i.cards.slice(78,104)}}])&&d(t.prototype,a),r&&d(t,r),e}(),c=function(){var e=new s,t=new s;e.createDeck(),t.createDeck(),e.shuffleDeck(),t.shuffleDeck();var a=new l;a.start("Tony","Karen","Alice","Michael"),document.body.classList.add("center");var n=document.getElementById("shuffleBtn"),r=document.createElement("BUTTON"),i=document.createElement("BUTTON"),d=document.createElement("BUTTON"),c=document.createTextNode("Sort hand!"),o=document.createTextNode("Start round!"),u=document.createTextNode("Play card");function p(){a.token=0,a.players[0].active[0].shift();var e=a.players[0].active[0][0].value;a.players[1].active[0].value>e&&(e=a.players[1].active[0].value,a.token=1),a.players[2].active[0].value>e&&(e=a.players[2].active[0].value,a.token=2),a.players[3].active[0].value>e&&(e=a.players[3].active[0].value,a.token=3),a.firstSuit=1;var t=document.createElement("p"),n=document.createTextNode("Player ".concat(a.token," won!"));t.appendChild(n),document.getElementById("winner").firstChild&&document.getElementById("winner").removeChild(document.getElementById("winner").firstChild),document.getElementById("winner").appendChild(t)}function m(){for(;document.getElementById("playerHand").firstChild;)document.getElementById("playerHand").removeChild(document.getElementById("playerHand").firstChild);for(var e,t=[],n=[],r=[],i=[],s=0;s<a.players[0].playerCards.length;s++)"diamonds"==a.players[0].playerCards[s].suit&&t.push(a.players[0].playerCards[s]),"spades"==a.players[0].playerCards[s].suit&&n.push(a.players[0].playerCards[s]),"hearts"==a.players[0].playerCards[s].suit&&r.push(a.players[0].playerCards[s]),"clubs"==a.players[0].playerCards[s].suit&&i.push(a.players[0].playerCards[s]);t.sort((function(e,t){return e.value>t.value?1:-1})),n.sort((function(e,t){return e.value>t.value?1:-1})),r.sort((function(e,t){return e.value>t.value?1:-1})),i.sort((function(e,t){return e.value>t.value?1:-1})),e=t.concat(n).concat(r).concat(i),a.players[0].playerCards=e,y()}function y(){for(;document.getElementById("playerHand").firstChild;)document.getElementById("playerHand").removeChild(document.getElementById("playerHand").firstChild);for(var e=function(e){(n=document.createElement("img")).src=a.players[0].playerCards[e].ref,n.classList.add("HandCard"),n.addEventListener("click",(function(){g(a.players[0].playerCards[e],e)})),document.getElementById("playerHand").appendChild(n)},t=0;t<a.players[0].playerCards.length;t++){var n;e(t)}}function g(e,t){var n=document.getElementById("playerHand"),r=document.createElement("img");r.src=e.ref,r.classList.add("HandCard");var i=a.players[0].playerCards.splice(t,1);a.players[0].active.push(i),r.addEventListener("click",(function(){!function(e,t){var n=document.getElementById("active1"),r=document.createElement("img");r.src=e[0].ref,r.classList.add("HandCard"),r.addEventListener("click",(function(){g(e[0],t)})),n.removeChild(n.firstChild),a.players[0].playerCards.push(e[0]),a.players[0].active.splice(0,1),y(),m()}(i,t)})),document.getElementById("active1").appendChild(r),n.removeChild(n.childNodes[t]),y()}function f(e){a.players[e].playerCards;for(var t=[],n=[],r=[],i=[],s=0;s<a.players[e].playerCards.length;s++)"diamonds"==a.players[e].playerCards[s].suit&&t.push(a.players[e].playerCards[s]),"spades"==a.players[e].playerCards[s].suit&&n.push(a.players[e].playerCards[s]),"hearts"==a.players[e].playerCards[s].suit&&r.push(a.players[e].playerCards[s]),"clubs"==a.players[e].playerCards[s].suit&&i.push(a.players[e].playerCards[s]);if(t.sort((function(e,t){return e.value>t.value?1:-1})),n.sort((function(e,t){return e.value>t.value?1:-1})),r.sort((function(e,t){return e.value>t.value?1:-1})),i.sort((function(e,t){return e.value>t.value?1:-1})),a.token=(a.token+1)%4,1==a.firstSuit){var d=a.players[e].playerCards.shift();return a.players[e].active.push(d),a.inPlay.push(d),a.firstSuit=d.suit,(u=document.createElement("img")).src=d.ref,u.classList.add("HandCard"),void document.getElementById("aiPlay".concat(e)).appendChild(u)}if("clubs"==a.firstSuit){var l=i.pop();a.players[e].active.push(l),a.inPlay.push(l),a.players[e].playerCards=t.concat(n).concat(r).concat(i),(u=document.createElement("img")).src=l.ref,u.classList.add("HandCard"),document.getElementById("aiPlay".concat(e)).appendChild(u)}if("diamonds"==a.firstSuit){var c=t.pop();a.players[e].active.push(c),a.inPlay.push(c),a.players[e].playerCards=t.concat(n).concat(r).concat(i),(u=document.createElement("img")).src=c.ref,u.classList.add("HandCard"),document.getElementById("aiPlay".concat(e)).appendChild(u)}if("hearts"==a.firstSuit){var o=r.pop();a.players[e].active.push(o),a.inPlay.push(o),a.players[e].playerCards=t.concat(n).concat(r).concat(i),(u=document.createElement("img")).src=o.ref,u.classList.add("HandCard"),document.getElementById("aiPlay".concat(e)).appendChild(u)}if("spades"==a.firstSuit){var u,p=n.pop();a.players[e].active.push(p),a.inPlay.push(p),a.players[e].playerCards=t.concat(n).concat(r).concat(i),(u=document.createElement("img")).src=p.ref,u.classList.add("HandCard"),document.getElementById("aiPlay".concat(e)).appendChild(u)}}function h(e){setTimeout((function(){var t=document.createElement("img");t.src=a.players[0].playerCards[e].ref,t.classList.add("HandCard"),t.addEventListener("click",m),document.getElementById("playerHand").appendChild(t)}),10*e)}r.addEventListener("click",m),i.addEventListener("click",(function(){})),d.addEventListener("click",(function(){0==a.token&&(a.inPlay.push(a.players[0].active),a.token=1);1==a.firstSuit&&(a.firstSuit=a.players[0].active[0][0].suit)})),r.appendChild(c),i.appendChild(o),d.appendChild(u),n.appendChild(r),n.appendChild(i),n.appendChild(d),window.setInterval((function(){if(0==a.token){var e=document.createElement("p"),t=document.createTextNode("Your turn!");e.appendChild(t),document.getElementById("turn").firstChild&&document.getElementById("turn").removeChild(document.getElementById("turn").firstChild),document.getElementById("turn").appendChild(e)}for(;!a.over&&0!=a.token;)1==a.token&&a.inPlay.length<4&&f(1),2==a.token&&a.inPlay.length<4&&f(2),3==a.token&&a.inPlay.length<4&&f(3),a.inPlay.length>=4&&(p(),setTimeout((function(){document.getElementById("aiPlay1").removeChild(document.getElementById("aiPlay1").firstChild),document.getElementById("aiPlay2").removeChild(document.getElementById("aiPlay2").firstChild),document.getElementById("aiPlay3").removeChild(document.getElementById("aiPlay3").firstChild),document.getElementById("active1").removeChild(document.getElementById("active1").firstChild)}),3e3),a.inPlay=[])}),3e3);for(var v=0;v<a.players[0].playerCards.length;v++)h(v);var C=document.createElement("img");C.src="./dist/images/PNG/card_back1.jpg",C.classList.add("HandCard1","aiFront");var P=document.createElement("img");P.src="./dist/images/PNG/card_back1.jpg",P.classList.add("SideCard");var E=document.createElement("img");E.src="./dist/images/PNG/card_back1.jpg",E.classList.add("SideCard"),document.getElementById("aiHand1").appendChild(C),document.getElementById("aiHand2").appendChild(P),document.getElementById("aiHand3").appendChild(E)};function o(e){return function(e){if(Array.isArray(e))return m(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||p(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function u(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var a=[],n=!0,r=!1,i=void 0;try{for(var s,d=e[Symbol.iterator]();!(n=(s=d.next()).done)&&(a.push(s.value),!t||a.length!==t);n=!0);}catch(e){r=!0,i=e}finally{try{n||null==d.return||d.return()}finally{if(r)throw i}}return a}(e,t)||p(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function p(e,t){if(e){if("string"==typeof e)return m(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);return"Object"===a&&e.constructor&&(a=e.constructor.name),"Map"===a||"Set"===a?Array.from(e):"Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?m(e,t):void 0}}function m(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,n=new Array(t);a<t;a++)n[a]=e[a];return n}var y={currentExample:null,currentEventListeners:[]};document.querySelector("#tractor").addEventListener("click",(function(){(function(){for(;y.currentEventListeners.length;){var e=u(y.currentEventListeners.pop(),3),t=e[0],a=e[1],n=e[2];"window"===t?window.removeEventListener(a,n):document.querySelector(t).removeEventListener(a,n)}})(),"TRACTOREMO"===y.currentExample&&o(document.querySelectorAll(".card")).forEach((function(e){return document.body.removeChild(e)})),y.currentExample="TRACTORDEMO",c()}))}]);
//# sourceMappingURL=main.js.map