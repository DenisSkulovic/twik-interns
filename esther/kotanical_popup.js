// Customize the color settings down below

// Select area where the banner should be display
let selector = `body`;

// Customize font color of the text and link to the quiz
let textColor = "black";

// Customize font color of the text and  link to the quiz when the mouse is over the text
let linkToQuizColor = "white";

// Customize background color of the link button and  link to the quiz when the mouse is over the text
let linkBackgroundColor = "#c07282";

// Customize color of the X right corner
let twikCloseButton = "white";

// Customize the background Picture. Use url link inside double quotes   "your link ";
let imageBackground =
  "https://github.com/DenisSkulovic/twik-interns/blob/main/esther/unnamed.jpg?raw=true";

// let imageBackground =
//   "https://scontent-ort2-1.cdninstagram.com/v/t51.2885-15/182918538_112262551017131_3458862427693329672_n.jpg?_nc_cat=105&ccb=1-3&_nc_sid=8ae9d6&_nc_ohc=UKXGbOqo4lwAX-uFGa9&_nc_ht=scontent-ort2-1.cdninstagram.com&oh=ae536566b3badd63cb7a5a9be1f8a9f3&oe=60E31606";

//background color
let popUpBackgroundColor = "white";

// Customize the text down below
//Customize top text or message (first text on display)
let popUpTopText = "What's your go-to essential oil?";

//Customize text size
let popUpTopTextSize = "20px";

//Customize bottom text or message (second text on display)
let popUpTextLink = "Take our quiz & find out more";

//Customize second text size
let popUpLinkSize = "16px";

//Customize link, URL of the page the link goes to
let popUpLink = "https://kotanical.ie/pages/quiz";

// declare global variables
let hidePopup;
let displayPopup;
let showIt;
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
  //   displayPopup = () => {
  //     $(".twik-banner-quiz-banner").show();
  //     $(".twik-overlay").show();
  //     console.log("popup");
  //   };

  showIt = () => {
    document.querySelector("#off--overlay").style.visibility = "visible";
    document.querySelector("#off--popup").style.visibility = "visible";
  };
  setTimeout(() => showIt(), 3000); // after 3 seconds

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


    <style>
     body,
     html {
         margin: 0;
         padding: 0;
     }

    
     .twik-banner-quiz-banner {
         display: block; 
         visibility: hidden;
         margin: 0 auto;
         position: fixed;
         top: 50%;
         left: 50%;
         transform: translate(-50%, -50%);
         height: auto; 
         width: 400px;
         padding: 10px 10px;
         box-sizing: border-box;
         z-index: 999999999999999999999999999999999999999999999999999999999;
     }

  
    .banner-content-border-close{
        background: ${popUpBackgroundColor};
        padding:10px;
    }
       
    
     .twik-overlay {
        display: block; 
        visibility: hidden;
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: rgba(0, 0, 0, .5);
        z-index: 999999999999999999999999999999999999999999999999999999999;
    }




     .twik-top-picture-banner{
        max-width: 100%;
        height: 50%;
     }

     .popup-border{
        border: 1px solid black;
        padding:10px;

     }
     
     .twik-popup-close {
        color: ${twikCloseButton};
        font-size: 30px;
        text-decoration: none;
        cursor: pointer;
        position: absolute;
        right: -28px;
        top: -20px;
        height: 37px;

    }
    .close-button-style{
        cursor: pointer;
        display: inline-block;
        width: 37px;
        height: 37px;
        border-width: 1px;
        border-radius: 50%;
        border-style: solid;
        position: relative;

    }

    .x-close{
        text-align:center;
        transform: translate(2%, -21%);
    }


     .twik-banner-title-header {
         color:${textColor};
         font-family: 'Poppins',sans-serif;
         font-size: ${popUpTopTextSize};
         text-align:center;
         padding:0;
         margin-top: 20px;
         text-transform: uppercase;

     }

     .twik-banner-take-quiz-link {
         text-decoration: none;
         text-align:center;
         display: block;         
         color:${textColor};
         font-family: 'Poppins', sans-serif;
         text-transform: uppercase;
         border: 1px solid black;
         padding:5px;
         font-size: ${popUpLinkSize};
     }

     .twik-banner-take-quiz-link:hover {
         color: ${linkToQuizColor};
        background:${linkBackgroundColor};
        border:${linkBackgroundColor};
    }




     @media screen and (max-width: 650px) {
        .twik-banner-quiz-banner {
            width: 90%;
            height:auto;
             justify-content: space-between;
             padding: 20px;
             margin: 0;
             text-align: center;
         }
         

         .twik-banner-title-header{
            font-size:15px;
         }

         .twik-banner-take-quiz-link{
            font-size:10px;
         }

         img{
             height:auto;
             width:100%;
         }

         .twik-popup-close {
            font-size: 15px;
            height: 23px;
            position: absolute;
            right: 1px;
            top: 1px;
        }

        .close-button-style{
            cursor: pointer;
            display: inline-block;
            width: 18.5px;
            height: 18.5px;
            
    
        }
    
        .x-close{
            text-align:center;
        }
         
     }



 </style>
    `
  );
  let QuizBanner = `

  <div id="off--overlay" class="twik-overlay"></div>

 <section id="off--popup" class="twik-banner-quiz-banner">

     <div id="close" class="twik-popup-close"">
      <div class=" close-button-style">
         <div class="x-close">&times;</div>
     </div>
     </div>
     <div class="banner-content-border-close">
         <div class="banner-content-border">
             <div class="popup-border">
                 <div class="twik-top-picture-banner">
                     <img src=${imageBackground}>
                     <div class="twik-banner-quiz-content">

                         <h1 class="twik-banner-title-header">${popUpTopText}</h1>
                         <a class="twik-banner-take-quiz-link" href=${popUpLink}>${popUpTextLink}</a>
                     </div>
                 </div>
             </div>
         </div>
     </div>
 </section>

    
`;

  document.querySelector(selector).insertAdjacentHTML("beforeend", QuizBanner);

  // ##########################################################################################

  // Website fixes

  //Hide quiz banner
  document.querySelector(selectorHidde).style.display = "none";

  // Style essential oils section - direction reverse
  document.querySelector(selectorReverse).style.display = "flex";
  document.querySelector(selectorReverse).style.flexDirection = "row-reverse";

  // ##########################################################################################

  $("#close").on("click", function () {
    console.log("click");
    hidePopup();
  });

  $(".twik-overlay").on("click", function () {
    console.log("click");
    hidePopup();
  });
}
