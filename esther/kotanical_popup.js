// Customize the color settings down below
// Select area where the banner should be display
let selector = `body`;

// Customize the background Picture. Use url link inside double quotes   "your link ";
let imageBackground =
  "https://github.com/DenisSkulovic/twik-interns/blob/main/esther/unnamed.jpg?raw=true";

//Customize link, URL of the page the link goes to
let popUpLink = "https://kotanical.ie/pages/quiz";

// declare global variables
let hidePopup;
let displayPopup;
let showPopup;
// ##########################################################################################

// Website fixes

// let selector = `#r-1623249372249`; hidde quiz banner
let selectorHidde = `#r-1623249372249`;
// let selector = `#r-1623249372249`; reverse essential oil position left to right
let selectorReverse = `#r-1585588742742`;

// ##########################################################################################

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
  showPopup = () => {
    document.querySelector("#off--overlay").style.display = "block";
    document.querySelector("#off--popup").style.display = "block";
  };
  setTimeout(() => showPopup(), 1500); // after 1.5 seconds

  hidePopup = () => {
    $(".twik-banner-quiz-banner").fadeOut("fast");
    $(".twik-overlay").fadeOut("fast");
  };

  // inject CSS and HTML

  document.body.insertAdjacentHTML(
    "beforeend",
    `
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@100&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css" integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p" crossorigin="anonymous"/>

    <link href="https://fonts.googleapis.com/icon?family=Material+Icons"
    rel="stylesheet">
    <style>
    
     .twik-banner-quiz-banner {
         display: none;
         margin: 0 auto;
         position: fixed;
         top: 40%;
         left: 50%;
         transform: translate(-50%, -50%);
         height: auto;
         max-width: 400px;
         font-weight:300;
         background: white;
         z-index: 99999999999999999999999;
         border-radius: 5px;
         animation-name: animate;
         animation-duration: 4s
     }
     @keyframes animate{
        0% 
       {
           top: 0px;
       }
       
       100% 
       {
           top: 40%;
       
       }
    } 
       

     .twik-overlay {
        display: none;
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: rgba(0, 0, 0, 0.5);
        z-index: 9999999999999999999999999999;
    }

     .twik-top-picture-banner {
        max-width: 100%;
        height: 50%;
        border-radius: 5px;

     }

     img {
      border-radius: 5px;
    }
     
  
     .twik-popup-close .material-icons{
        color: white;
        font-size: 18px;
        position: absolute;
        right: 0px;
        top: 1px;
        display: block;
        cursor:pointer;
    }

     

     .twik-inside-pop-up{
         font-family: inherit;
         text-align:center;
         text-transform: uppercase;
         margin-bottom: 20px;
         margin-top: 20px;

     }

     .twik-inside-pop-up h1 {
         color:black;
         font-size: 20px;
     }

     
    
     .twik-link-button-style{
        display: inline;
        justify-content: center;
        color:white;
        background: #c07282;
        font-size: 16px;
        width: 200px;
        height: 500px;
        padding: 5px;
        transition: transform .2s;
     }


     .twik-link-button-style:hover {
      padding: 7px;

    }


     @media screen and (max-width: 650px) {
        .twik-banner-quiz-banner {
             width: 90%;
         }
         

         .twik-inside-pop-up h1{
            font-size:15px;
         }

         .twik-banner-take-quiz-link{
            font-size:10px;
         }

         img{
             height:auto;
             width:100%;
         }
         
     }

    

   

 </style>
    `
  );
  let quizBanner = `
<div id="off--overlay" class="twik-overlay"></div>

<div id="off--popup" class="twik-banner-quiz-banner">
    <div id="close" class="twik-popup-close">
        <span class="material-icons md-48">close</span>
    </div>

    <div class="twik-top-picture-banner">
        <img src="${imageBackground}">
    </div>
    <div class="twik-inside-pop-up">
        <h1 class="twik-banner-title-header">What's your go to essential oil?</h1>
        <div class="twik-link-button-style">
            <a href="https://kotanical.ie/pages/quiz">Take our quiz</a>
        </div>
    </div>
    </div>
</div>
    
`;

  document.querySelector(selector).insertAdjacentHTML("beforeend", quizBanner);

  // ##########################################################################################

  // Website fixes

  //Hide quiz banner
  try {
    document.querySelector(selectorHidde).style.display = "none";
    document.querySelector(selectorReverse).style.display = "flex";
    document.querySelector(selectorReverse).style.flexDirection = "row-reverse";
  } catch (error) {}

  // Style essential oils section - direction reverse

  // ##########################################################################################

  $("#close, .twik-overlay").on("click", function () {
    console.log("click");
    hidePopup();
  });
}
