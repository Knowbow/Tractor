!function(e){var t={};function n(a){if(t[a])return t[a].exports;var r=t[a]={i:a,l:!1,exports:{}};return e[a].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,a){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(a,r,function(t){return e[t]}.bind(null,r));return a},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/dist/",n(n.s=1)}([function(e,t,n){},function(e,t,n){"use strict";n.r(t);n(0);var a=function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.playerName=t,this.playerCards=[],this.active=[]};var r=function e(t,n,a,r){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.suit=t,this.rank=n,this.value=a,this.ref=r};function i(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}var s=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.cards=[]}var t,n,a;return t=e,(n=[{key:"createDeck",value:function(){for(var e=["clubs","diamonds","hearts","spades"],t=["ace","2","3","4","5","6","7","8","9","10","jack","queen","king"],n=[14,2,3,4,5,6,7,8,9,10,11,12,13],a=["./dist/images/PNG/ac.png","./dist/images/PNG/2c.png","./dist/images/PNG/3c.png","./dist/images/png/4c.png","./dist/images/png/5c.png","./dist/images/png/6c.png","./dist/images/png/7c.png","./dist/images/png/8c.png","./dist/images/png/9c.png","./dist/images/png/10c.png","./dist/images/png/JC.png","./dist/images/png/QC.png","./dist/images/png/KC.png","./dist/images/png/AD.png","./dist/images/png/2D.png","./dist/images/png/3D.png","./dist/images/png/4D.png","./dist/images/png/5D.png","./dist/images/png/6D.png","./dist/images/png/7D.png","./dist/images/png/8D.png","./dist/images/png/9D.png","./dist/images/png/10D.png","./dist/images/png/JD.png","./dist/images/png/QD.png","./dist/images/png/KD.png","./dist/images/png/AH.png","./dist/images/png/2H.png","./dist/images/png/3H.png","./dist/images/png/4H.png","./dist/images/png/5H.png","./dist/images/png/6H.png","./dist/images/png/7H.png","./dist/images/png/8H.png","./dist/images/png/9H.png","./dist/images/png/10H.png","./dist/images/png/JH.png","./dist/images/png/QH.png","./dist/images/png/KH.png","./dist/images/png/AS.png","./dist/images/png/2S.png","./dist/images/png/3S.png","./dist/images/png/4S.png","./dist/images/png/5S.png","./dist/images/png/6S.png","./dist/images/png/7S.png","./dist/images/png/8S.png","./dist/images/png/9S.png","./dist/images/png/10S.png","./dist/images/png/JS.png","./dist/images/png/QS.png","./dist/images/png/KS.png"],i=0;i<e.length;i++)for(var s=0;s<t.length;s++)this.cards.push(new r(e[i],t[s],n[s],a[13*i+s]))}},{key:"shuffleDeck",value:function(){for(var e,t,n,a=0;a<1e3;a++)e=Math.floor(Math.random()*this.cards.length),t=Math.floor(Math.random()*this.cards.length),n=this.cards[e],this.cards[e]=this.cards[t],this.cards[t]=n}}])&&i(t.prototype,n),a&&i(t,a),e}();function d(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}var l=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.cardsInMiddle=[],this.players=[],this.inPlay=[],this.firstSuit=1,this.token=0,this.over=!1,this.points=0}var t,n,r;return t=e,(n=[{key:"start",value:function(e,t,n,r){this.players.push(new a(e)),this.players.push(new a(t)),this.players.push(new a(n)),this.players.push(new a(r));var i=new s,d=new s;i.createDeck(),d.createDeck(),i.shuffleDeck(),d.shuffleDeck(),i.cards=i.cards.concat(d.cards),this.players[0].playerCards=i.cards.slice(0,26),this.players[1].playerCards=i.cards.slice(26,52),this.players[2].playerCards=i.cards.slice(52,78),this.players[3].playerCards=i.cards.slice(78,104)}}])&&d(t.prototype,n),r&&d(t,r),e}(),c=function(){var e=new s,t=new s;e.createDeck(),t.createDeck(),e.shuffleDeck(),t.shuffleDeck();var n=new l;n.start("Tony","Karen","Alice","Michael"),document.body.classList.add("center");var a=document.getElementById("shuffleBtn"),r=document.createElement("BUTTON"),i=document.createElement("BUTTON"),d=document.createElement("BUTTON"),c=document.createTextNode("Sort hand!"),o=document.createTextNode("Start round!"),p=document.createTextNode("Play card");function u(){n.token=0;var e=n.players[0].active[0][0].value;n.players[1].active[0].value>e&&(e=n.players[1].active[0].value,n.token=1),n.players[2].active[0].value>e&&(e=n.players[2].active[0].value,n.token=2),n.players[3].active[0].value>e&&(e=n.players[3].active[0].value,n.token=3),n.firstSuit=1}function g(){for(;document.getElementById("playerHand").firstChild;)document.getElementById("playerHand").removeChild(document.getElementById("playerHand").firstChild);for(var e,t=[],a=[],r=[],i=[],s=0;s<n.players[0].playerCards.length;s++)"diamonds"==n.players[0].playerCards[s].suit&&t.push(n.players[0].playerCards[s]),"spades"==n.players[0].playerCards[s].suit&&a.push(n.players[0].playerCards[s]),"hearts"==n.players[0].playerCards[s].suit&&r.push(n.players[0].playerCards[s]),"clubs"==n.players[0].playerCards[s].suit&&i.push(n.players[0].playerCards[s]);t.sort((function(e,t){return e.value>t.value?1:-1})),a.sort((function(e,t){return e.value>t.value?1:-1})),r.sort((function(e,t){return e.value>t.value?1:-1})),i.sort((function(e,t){return e.value>t.value?1:-1})),e=t.concat(a).concat(r).concat(i),n.players[0].playerCards=e,m()}function m(){for(;document.getElementById("playerHand").firstChild;)document.getElementById("playerHand").removeChild(document.getElementById("playerHand").firstChild);for(var e=function(e){(a=document.createElement("img")).src=n.players[0].playerCards[e].ref,a.classList.add("HandCard"),a.addEventListener("click",(function(){y(n.players[0].playerCards[e],e)})),document.getElementById("playerHand").appendChild(a)},t=0;t<n.players[0].playerCards.length;t++){var a;e(t)}}function y(e,t){var a=document.getElementById("playerHand"),r=document.createElement("img");r.src=e.ref,r.classList.add("HandCard");var i=n.players[0].playerCards.splice(t,1);n.players[0].active.push(i),r.addEventListener("click",(function(){!function(e,t){var a=document.getElementById("active1"),r=document.createElement("img");r.src=e[0].ref,r.classList.add("HandCard"),r.addEventListener("click",(function(){y(e[0],t)})),a.removeChild(a.firstChild),n.players[0].playerCards.push(e[0]),n.players[0].active.splice(0,1),m(),g()}(i,t)})),document.getElementById("active1").appendChild(r),a.removeChild(a.childNodes[t]),m()}function f(e){n.players[e].playerCards;for(var t=[],a=[],r=[],i=[],s=0;s<n.players[e].playerCards.length;s++)"diamonds"==n.players[e].playerCards[s].suit&&t.push(n.players[e].playerCards[s]),"spades"==n.players[e].playerCards[s].suit&&a.push(n.players[e].playerCards[s]),"hearts"==n.players[e].playerCards[s].suit&&r.push(n.players[e].playerCards[s]),"clubs"==n.players[e].playerCards[s].suit&&i.push(n.players[e].playerCards[s]);if(t.sort((function(e,t){return e.value>t.value?1:-1})),a.sort((function(e,t){return e.value>t.value?1:-1})),r.sort((function(e,t){return e.value>t.value?1:-1})),i.sort((function(e,t){return e.value>t.value?1:-1})),n.token=(n.token+1)%4,1==n.firstSuit){var d=n.players[e].playerCards.shift();return n.players[e].active.push(d),n.inPlay.push(d),n.firstSuit=d.suit,(p=document.createElement("img")).src=d.ref,p.classList.add("HandCard"),void document.getElementById("aiPlay".concat(e)).appendChild(p)}if("clubs"==n.firstSuit){var l=i.pop();n.players[e].active.push(l),n.inPlay.push(l),n.players[e].playerCards=t.concat(a).concat(r).concat(i),(p=document.createElement("img")).src=l.ref,p.classList.add("HandCard"),document.getElementById("aiPlay".concat(e)).appendChild(p)}if("diamonds"==n.firstSuit){var c=t.pop();n.players[e].active.push(c),n.inPlay.push(c),n.players[e].playerCards=t.concat(a).concat(r).concat(i),(p=document.createElement("img")).src=c.ref,p.classList.add("HandCard"),document.getElementById("aiPlay".concat(e)).appendChild(p)}if("hearts"==n.firstSuit){var o=r.pop();n.players[e].active.push(o),n.inPlay.push(o),n.players[e].playerCards=t.concat(a).concat(r).concat(i),(p=document.createElement("img")).src=o.ref,p.classList.add("HandCard"),document.getElementById("aiPlay".concat(e)).appendChild(p)}if("spades"==n.firstSuit){var p,u=a.pop();n.players[e].active.push(u),n.inPlay.push(u),n.players[e].playerCards=t.concat(a).concat(r).concat(i),(p=document.createElement("img")).src=u.ref,p.classList.add("HandCard"),document.getElementById("aiPlay".concat(e)).appendChild(p)}}function h(e){setTimeout((function(){var t=document.createElement("img");t.src=n.players[0].playerCards[e].ref,t.classList.add("HandCard"),t.addEventListener("click",g),document.getElementById("playerHand").appendChild(t)}),10*e)}r.addEventListener("click",g),i.addEventListener("click",(function(){})),d.addEventListener("click",(function(){0==n.token&&(n.inPlay.push(n.players[0].active),n.token=1);1==n.firstSuit&&(n.firstSuit=n.players[0].active[0][0].suit)})),r.appendChild(c),i.appendChild(o),d.appendChild(p),a.appendChild(r),a.appendChild(i),a.appendChild(d),window.setInterval((function(){if(0==n.token){var e=document.createElement("p"),t=document.createTextNode("Your turn!");e.appendChild(t),document.getElementById("turn").firstChild&&document.getElementById("turn").removeChild(document.getElementById("turn").firstChild),document.getElementById("turn").appendChild(e)}for(;!n.over&&0!=n.token;)1==n.token&&n.inPlay.length<4&&f(1),2==n.token&&n.inPlay.length<4&&f(2),3==n.token&&n.inPlay.length<4&&f(3),4==n.inPlay.length&&(u(),setTimeout((function(){document.getElementById("aiPlay1").removeChild(document.getElementById("aiPlay1").firstChild),document.getElementById("aiPlay2").removeChild(document.getElementById("aiPlay2").firstChild),document.getElementById("aiPlay3").removeChild(document.getElementById("aiPlay3").firstChild),document.getElementById("active1").removeChild(document.getElementById("active1").firstChild)}),6e3),n.inPlay=[])}),1e3);for(var v=0;v<n.players[0].playerCards.length;v++)h(v);var C=document.createElement("img");C.src="./dist/images/png/card_back1.jpg",C.classList.add("HandCard1","aiFront");var E=document.createElement("img");E.src="./dist/images/png/card_back1.jpg",E.classList.add("SideCard");var b=document.createElement("img");b.src="./dist/images/png/card_back1.jpg",b.classList.add("SideCard"),document.getElementById("aiHand1").appendChild(C),document.getElementById("aiHand2").appendChild(E),document.getElementById("aiHand3").appendChild(b)};function o(e){return function(e){if(Array.isArray(e))return g(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||u(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function p(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var n=[],a=!0,r=!1,i=void 0;try{for(var s,d=e[Symbol.iterator]();!(a=(s=d.next()).done)&&(n.push(s.value),!t||n.length!==t);a=!0);}catch(e){r=!0,i=e}finally{try{a||null==d.return||d.return()}finally{if(r)throw i}}return n}(e,t)||u(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function u(e,t){if(e){if("string"==typeof e)return g(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?g(e,t):void 0}}function g(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}var m={currentExample:null,currentEventListeners:[]};document.querySelector("#tractor").addEventListener("click",(function(){(function(){for(;m.currentEventListeners.length;){var e=p(m.currentEventListeners.pop(),3),t=e[0],n=e[1],a=e[2];"window"===t?window.removeEventListener(n,a):document.querySelector(t).removeEventListener(n,a)}})(),"TRACTOREMO"===m.currentExample&&o(document.querySelectorAll(".card")).forEach((function(e){return document.body.removeChild(e)})),m.currentExample="TRACTORDEMO",c()}))}]);
//# sourceMappingURL=main.js.map