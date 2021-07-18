let plansSection = document.querySelector(
  "body > div.main-container > section:nth-child(3)"
);

let sliderStyle = `
<style>
.twik-range-slider-calculator {
    margin: auto;
    width: 70%;
    z-index: 99999999999999999999999;
}
#twik-input-slider{
  -webkit-appearance: none;
      width: 100%;
      height: 13px;
      border-radius: 3px;
      background: transparent;
      border: 1px solid rgba(235,235,235,0.6) !important;
      outline: none;
      z-index: 5;
      position: absolute;
      cursor: pointer;
  }

  #twik-input-slider::-webkit-slider-thumb{
  -webkit-appearance: none;
  width: 48px;
  height: 48px;
  cursor: pointer;
  z-index:3;
  position: relative;
  }

  .twik-slider-container {
      position: relative;
      margin: 20px 0;
  }

  #sliderCircle{
      position: absolute;
      top: -3px;
      z-index: 3;
      width: 20px;
      height: 20px;
      background: red;
      border-radius: 50%;
  }

  #sliderCircle:hover {
    cursor: pointer;
  }

  .twik-inner-banner-content-box {
    position: relative;
  }

  #progressBar{
      height: 13px;
      background: #ececec ;
      border-radius: 1px;
      position: absolute;
      top: 1px;
      left: 0;
      bottom: 0;
      z-index: 2;
  }


.twik-screen-total-amount,
.twik-number-screens-text {
    text-align: left;
}

.twik-screen-total-amount {
    margin-top: 20px;
}

.twik-static-amount-price {
    text-align: center;
    margin: 50px;
}
</style>
`;
let sliderBanner = `
<div class="twik-range-slider-calculator">
<div class="twik-inner-banner-content-box">
  <div class="twik-inner-text-display">
    <div class="twik-screen-total-amount">
      <span id="number-screen-price"></span>
    </div>
    <div class="twik-number-screens-text">
      <span id="number-screen"></span>
    </div>
  </div>
  <div class="twik-slider-container">
  <input type="range" min="0" max="200" value="1" name="quantity" class="twik-slider-range-style"
  id="twik-input-slider">
  <div id="sliderCircle">
  <div id="selectValue"></div>
  </div>
  <div id="progressBar"></div>
  </div>
</div>
<div class="twik-static-amount-price">
  <p>$20 / 1 screen</p>
</div>
</div>
`;

document.head.insertAdjacentHTML("beforeend", sliderStyle);
plansSection.insertAdjacentHTML("afterend", sliderBanner);
let output = document.querySelector("#number-screen");
let total = document.querySelector("#number-screen-price");
let quantityInput = document.querySelector("#twik-input-slider");
let progressBar = document.querySelector("#progressBar");

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

function calculatePriceMonth() {
  let quantity = parseInt(quantityInput.value);

  const price = 20;
  let cost = price * quantity;

  if (cost >= 2000) {
    total.innerHTML =
      "$" + cost.toFixed(2) + " /month" + " or Partner Package, Contact Us";
  } else {
    total.innerHTML = "$" + cost.toFixed(2) + " /month";
    output.style.display = "block";
  }
}

function updateQuantityScreen() {
  let quantity = parseInt(quantityInput.value);

  if (quantity == 1) {
    output.innerHTML = quantity + " screen";
  } else {
    output.innerHTML = quantity + " screens";
  }
}

function updateProgressBar() {
  let sliderCircle = document.getElementById("sliderCircle");

  let perc = (quantityInput.value / quantityInput.max) * 100;

  console.log(perc);
  progressBar.style.width = perc + "%";
  if (perc <= 99) {
    sliderCircle.style.left = perc + "%";
  }
}

function mainJS() {
  calculatePriceMonth();
  updateQuantityScreen();

  quantityInput.addEventListener("input", calculatePriceMonth);
  quantityInput.addEventListener("input", updateQuantityScreen);
  quantityInput.addEventListener("input", updateProgressBar);
}
