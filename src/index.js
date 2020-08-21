import "./styles/index.scss";
import "./dist/images/png/2c.png";
import "./dist/images/png/2d.png";
import "./dist/images/png/2h.png";
import "./dist/images/png/2s.png";

import { DeckRender } from "./scripts/board";

const currentStateObj = {
  currentExample: null,
  currentEventListeners: [],
};

document.querySelector("#tractor").addEventListener("click", startTractor);

function startTractor(){
  unregisterEventListeners();
  clearDemo();
  currentStateObj.currentExample = "TRACTORDEMO";
  DeckRender();
}


  

  


function unregisterEventListeners() {
  while (currentStateObj.currentEventListeners.length) {
    let [
      selector,
      event,
      handler,
    ] = currentStateObj.currentEventListeners.pop();
    if (selector === "window") {
      window.removeEventListener(event, handler);
      //console.log(handler);
    } else {
      document.querySelector(selector).removeEventListener(event, handler);
    }
  }
}

function clearDemo() {

  if (currentStateObj.currentExample === "TRACTOREMO") {
    [...document.querySelectorAll(".card")].forEach((elem) =>
      document.body.removeChild(elem)
    );
  }
}
