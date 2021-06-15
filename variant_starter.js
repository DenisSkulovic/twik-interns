// shortcuts
const qSel = (selector) => document.querySelector(selector);
const qSelAll = (selector) => document.querySelectorAll(selector);
const addE = (el, event, callback) => el.addEventListener(event, callback);
const insAdjHTML = (el, location, html) =>
  el.insertAdjacentHTML(location, html);
const insAdjEl = (el, location, ins_el) =>
  el.insertAdjacentElement(location, ins_el);

// useful functions
const getShopifyCart_fetch = async () => {
  const res = await fetch("/cart.json");
  return await res.json();
};
const getTwikJson = async () => {
  const { fingerprint } = JSON.parse(localStorage.getItem("twik_store"));
  let res = await fetch(
    `https://api.twik.io/twik?origin=${window.location.href}&snippet_id=${TWIK_ID}&fingerprint=${fingerprint}&ref=`
  );
  return await res.json();
};
const get_CSS_Selector = (element) => {
  var path = [];

  while (
    element.nodeName.toLowerCase() != "html" &&
    (element = element.parentNode) &&
    path.unshift(
      element.nodeName.toLowerCase() +
        (element.id ? "#" + element.id : "") +
        (element.className ? "." + element.className.replace(/\s+/g, ".") : "")
    )
  );
  return path.join(" > ");
};

// CODING AREA
// CODING AREA
// CODING AREA
// CODING AREA
// ###########################################################################
// ###########################################################################

// --------------------------------------------------------------------------------------------
// declare variables in global scope (to make values and functions reachable in the console while testing)
// --------------------------------------------------------------------------------------------
let dummyVar;
let anotherDummyVar;
let sayHi;
let hTagText = "Hello";
let someColor = "pink";

// start defining functionality after jQuery loads
function mainJS() {
  // --------------------------------------------------------------------------------------------
  // define functions (attach arrow functions to variables declared in global scope)
  // --------------------------------------------------------------------------------------------

  sayHi = () => {
    console.log("Hi");
    alert("Hi");
  };

  // --------------------------------------------------------------------------------------------
  // inject HTML and CSS as long strings
  // --------------------------------------------------------------------------------------------
  insAdjHTML(
    document.head,
    "beforeend",
    `
    <style>
        body {
            color: ${someColor};
        }
    </style>
  `
  );
  insAdjHTML(
    document.body,
    "afterbegin",
    `
  <h1>${hTagText}</h1>
  `
  );
  // --------------------------------------------------------------------------------------------
  // add event listeners
  // --------------------------------------------------------------------------------------------
  addE(window, "click", () => {
    console.log("click");
    alert("click");
  });

  // --------------------------------------------------------------------------------------------
  // activate some functionality
  // --------------------------------------------------------------------------------------------
  sayHi();
}
// ###########################################################################
// ###########################################################################
// CODING AREA
// CODING AREA
// CODING AREA
// CODING AREA

if (window.jQuery) {
  $ = window.jQuery;
  mainJS();
} else {
  var script = document.createElement("SCRIPT");
  script.src =
    "https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js";
  script.type = "text/javascript";
  // this is doc.ready
  //-------------------
  script.onload = function () {
    var $ = window.jQuery;
    mainJS();
  };
  document.head.appendChild(script);
}
