// Customize the color settings down below

// Select area where the banner should be display
let selector = `#r-1623249372249`;

// margin top and bottom of the banner, must include px at the end of the number.
let marginTopBanner = "100px";

// Customize font color of the text and  link to the quiz
let textColor = "white";

// Customize font color of the text and  link to the quiz when the mouse is over the text
let linkToQuizColor = "#c07282";

// Customize the background Picture. Use url link
let imageBackground =
  "https://github.com/DenisSkulovic/twik-interns/blob/main/esther/kotanical2.jpeg?raw=true";

// Customize the text down below
//Customize top text or message (first text on display)
let bannerTopText = "What's your go-to essential oil?";

//Customize bottom text or message (second text on display)
let bannerTextlink = "Take our quiz & find out more";

//Customize link, URL of the page the link goes to
let bannerLink = "https://kotanical.ie/pages/quiz";

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
  // inject CSS and HTML

  document.body.insertAdjacentHTML(
    "beforeend",
    `
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@100&display=swap" rel="stylesheet">


    <style>
    body,html {
      margin: 0;
      padding: 0;
  }

  .twik-banner-quiz-banner{
    position: relative;
    width:100vw;
    height:250px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: ${marginTopBanner};
    margin-bottom: ${marginTopBanner};
    padding:100px;
    box-sizing:border-box;
    /* background: linear-gradient(180deg, #0E91A9, #FDD1EC); */
  
    background:  url(${imageBackground}) rgba(0, 0, 0, 0.3);
    background-blend-mode: multiply;

    background-repeat: no-repeat;
    background-size: cover;
    background-attachment: initial;
    background-position: 0 center;
    // position:fixed;
    z-index: 9999999999999999999999999999999999;
    }


    .twik-banner-title-header{
        font-weight: bold;
        color:${textColor};
        font-family: 'Poppins', sans-serif;


    }

    .twik-banner-take-quiz-link{
        text-decoration: none;
        color:${textColor};
        font-weight: bold;
        font-family: 'Poppins', sans-serif;

    }

    .twik-banner-take-quiz-link:hover {
    color: ${linkToQuizColor};
    // text-decoration: underline;
    font-weight: bold;
    border-bottom: 1px solid;
    padding-bottom: 3px;
    }




    @media screen and (max-width: 650px) {
        .twik-banner-quiz-banner {
            justify-content: space-between;
            padding:20px;
            margin:0;
            text-align:center;
           
        }
    }


    
    </style>
    `
  );

  let QuizBanner = `

  <section class="twik-banner-quiz-banner">
  <div class="twik-banner-quiz-content">
      <h2 class="twik-banner-title-header">${bannerTopText}</h2>
      <a class="twik-banner-take-quiz-link" href=${bannerLink}>${bannerTextlink}</a>
  </div>
</section>
    
`;
  let selection = document.querySelector(selector);
  selection.innerHTML = QuizBanner;
}
