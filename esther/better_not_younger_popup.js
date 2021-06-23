// declare global variables

let hidePopup;
let displayPopup;

let oldDistance = 0;
let newDistance = 0;
let difference = 0;
let distanceScrollUp = 0;

// add jQuery for animations

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

// start defining functions

function mainJS() {
  displayPopup = () => {
    $("#off--wrapper").fadeIn("fast");
    $(".twik-overlay").fadeIn("fast");
    console.log("popup");
  };

  hidePopup = () => {
    $("#off--wrapper").fadeOut("fast");
    $(".twik-overlay").fadeOut("fast");
  };

  let activateDiscount = () => {
    console.log("click");
    fetch("https://better-notyounger.com/discount/20BETTER");
    document.getElementById("text-activate").classList.add("off--hide");
    document.getElementById("text-shop").classList.remove("off--hide");
    document.getElementById("text-shop").classList.add("off--show");
  };

  let scrollFunc = () => {
    console.log("scroll");
    console.log("distanceScrollUp", distanceScrollUp);

    if (distanceScrollUp > 200) {
      displayPopup();
      window.removeEventListener("scroll", scrollFunc);
    }
    newDistance = window.scrollY;
    difference = newDistance - oldDistance;
    if (difference < 0) {
      distanceScrollUp = distanceScrollUp - difference;
    } else if (difference > 0) {
      distanceScrollUp = 0;
    }
    oldDistance = newDistance;
  };

  let isMobile = () => {
    if (
      /iPhone|iPad|iPod|Android|webOS|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      )
    ) {
      console.log("mobile");
      return true;
    }
    console.log("is not mobile");
    return false;
  };

  // inject CSS and HTML

  document.body.insertAdjacentHTML(
    "beforeend",
    `    
    <link rel="preconnect" href="https://fonts.gstatic.com">

    <link href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,400;0,700;1,400;1,700&display=swap" rel="stylesheet">

    <style>
    body,html {
        margin: 0;
        padding: 0;
    }
    #off--wrapper {
        color: #404040;
        font-family: 'Lato', sans-serif;
        width: 325px;
        height: 360px;
        margin: 0 auto;
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        z-index: 11;
                   
    }
    .off--image,
    .off--content {
        width: 100%;
        height: 100%;
    }
    .off--image {
        height: 360px;
        display: none;
    }
    .off--image image {
        width: 100%;
        height: auto;
    }
    .off--content {
        background: #ddafc8;
        padding: 10px 10px 38px 10px;
        box-sizing: border-box;
    }
    .off--offer {
        background: #FFF;
        font-size: 20px;
        text-align: center;
        width: 170px;
        height: 170px;
        margin: 0 auto;
        padding: 0;
        border-radius: 50%;
        display: flex;
        flex-direction: column;
        flex-wrap: nowrap;
        justify-content: center;
        align-items: center;
        align-content: normal;
    }
    .off--offer strong {
        font-size: 40px;
        font-weight: 700;
        display: block;
    }
    .off--phrase {
        font-size: 18px;
        text-align: center;
        margin: 30px 0;
    }
    .off--list {
        font-size: 14px;
        width: 75%;
        margin: 20px auto;
    }
    
    
    .off--list li{
        padding: 0;
        line-height: 130%;
        list-style-position: outside;

    }
    

    .off--button-activate,
    .off--button-shop {
        color: #FFF;
        background: #64113f;
        font-size: 18px;
        text-align: center;
        text-decoration: none;
        width: 50%;
        margin: 0 auto;
        padding: 10px;
        display: block;
        transition: 300ms ease;
    }
    .off--button-activate:hover,
    .off--button-shop:hover {
        background: rgba(100, 17, 63, 0.8);
    }
    .off--close {
        color: #FFF;
        font-size: 18px;
        font-weight: 700;
        text-decoration: none;
        padding: 10px 12px;
        position: absolute;
        right: 0;
        top: 0;
        display: block;
    }
    .off--show {
        display: block;
    }
    .off--hide {
        display: none;
    }
    .twik-overlay {
        //display:none;
        position: fixed;
        top:0; 
        left:0; 
        right:0; 
        bottom:0; 
        background-color: rgba(0, 0, 0, .5);
    }

    @media (min-width: 1025px) {
        #off--wrapper {
            width: 650px;
            display: flex;
            flex-direction: row;
            flex-wrap: nowrap;
            justify-content: center;
            align-items: stretch;
            align-content: normal;
        }
        .off--image,
        .off--content {
            width: 50%;
        }
        .off--image {
            display: block;
        }
    }

    </style>
    `
  );

  document.body.insertAdjacentHTML(
    "beforeend",

    `
<div id="off--overlay" class="twik-overlay" style="display: none;"></div>
  <div id="off--wrapper" style="display:none;">
    <a href="javascript:;" id="close" class="off--close">X</a>
    <div class="off--image">
      <img
        src="https://raw.githubusercontent.com/DrorBarnea-twik/intern_variants/master/denis_the_terrible/better_not_younger_images/20-off-image.jpg">
    </div>
    <div class="off--content">
      <p class="off--offer">
        <strong>20%</strong> off your first purchase
      </p>
      <div id="text-activate">
        <p class="off--phrase"><strong>Treat yourself today!</strong> <br>Get healthier, shinier, stronger hair.</p>
        <a href="#" class="off--button-activate" id="activateOffer">Activate Offer</a>
      </div>
      <div id="text-shop" class="off--hide">
        <ul class="off--list">
          <li>Discount will show at checkout.</li>
          <li>No minimum purchase is required.</li>
          <li>Cannot be combined with any other ongoing offer/discount/promotion.</li>
        </ul>
        <a href="#" id="close-shop" class="off--button-shop">Shop Now</a>
      </div>
    </div>
  </div>
    
`
  );

  //event listeners

  $("#close").on("click", function () {
    console.log("click");
    hidePopup();
  });

  $("#close-shop").on("click", function () {
    console.log("click");
    hidePopup();
  });

  $("#off--overlay").on("click", function () {
    console.log("click");
    hidePopup();
  });

  $("body").on("mouseleave", () => {
    console.log(sessionStorage.getItem("popup_popped"));
    if (!sessionStorage.getItem("popup_popped")) {
      displayPopup();
      sessionStorage.setItem("popup_popped", "true");
    }
  });

  document
    .getElementById("activateOffer")
    .addEventListener("click", activateDiscount);

  if (isMobile()) {
    window.addEventListener("scroll", scrollFunc);
  }
  console.log("finish script");
}
