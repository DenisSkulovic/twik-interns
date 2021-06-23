// declare global variables

// Choose the colors for the background and for text
let bubbleColor = "#068785";

let PanelBackgroundColor = "white";
let PanelTextColor = "black";
let PanelButtonColor = "#068785";
let PanelButtonTextColor = "white";

let iconBackgroundColor = "#068785";
let iconColor = "white";

let thankYouMessageTextColor = "black";
let thankYouIconColor = "#0ada50";
let thankYouMessageBackgroundColor = "white";

let SubForm;
let displayPanel;
let hidePanel;
let displayThankYou;
let hideThankYou;

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
  SubForm = () => {
    console.log($("#twik-bubble-form").serializeArray());
    $(".panel-popup").hide();
    $("#loader-wrapper-form").show();
    console.log("loading page");

    $(function () {
      setTimeout(function () {
        console.log("hide after 3 seconds");
        $("#thank-you-panel").fadeOut("fast");
        $("#loader-wrapper-form").fadeOut("fast");
        $("#bubble-popup-corner").fadeIn("fast");
      }, 3000);
    });
    $.ajax({
      url: "https://api.apispreadsheets.com/data/14107/",
      type: "post",
      data: $("#twik-bubble-form").serializeArray(),
      success: (displayThankYou = () => {
        $("#thank-you-panel").show();
        $("#panel-popup-form").hide();
        $("#bubble-popup-corner").hide();
        $("#twik-bubble-form")[0].reset();
        console.log("thanks message");
      }),
      error: function () {
        alert("There was an error :(");
      },
    });
  };

  displayPanel = () => {
    $("#panel-popup-form").show();
  };

  hidePanel = () => {
    console.log("hide click window");
    $("#panel-popup-form").fadeOut("slow");
    $("#thank-you-panel").fadeOut("slow");
    $("#bubble-popup-corner").fadeIn("fast");
  };

  window.addEventListener("click", () => {
    console.log("window click");
    hidePanel();
  });

  window.addEventListener("click", () => {
    console.log("window click");
    hideThankYou();
  });

  hideThankYou = () => {
    console.log("hide thank you click window");

    $("#loader-wrapper-form").fadeOut("slow");
    $("#thank-you-panel").fadeOut("slow");
    $("#bubble-popup-corner").fadeIn("fast");
  };

  //   $(function () {
  //     setTimeout(function () {
  //         console.log("hide after 5 seconds")
  //       $("#thank-you-panel").fadeOut(1500);
  //       $("#loader-wrapper-form").fadeOut(1000);
  //       $("#bubble-popup-corner").fadeIn(1600);

  //     }, 5000);
  //   });

  // inject CSS and HTML
  document.body.insertAdjacentHTML(
    "beforeend",
    `    
    <link rel="preconnect" href="https://fonts.gstatic.com">

    <link href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,400;0,700;1,400;1,700&display=swap" rel="stylesheet">
    
    <link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css" integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p" crossorigin="anonymous"/>

    <style>
    .bubble{
        position: fixed;
        bottom: 10%;
        right: 2%;
        cursor: pointer;
        z-index: 9999999999999999999999999999999999;

    }

    .icon-background {
        color: ${iconBackgroundColor} ;
    }
    
    .blackiconcolor {
        color: ${iconColor} ;
    }
    

    .panel-popup{
        display:none;
        position:fixed;
        margin-left: 40%;
        text-align: center;
        color: ${PanelTextColor};
        width: 300px;
        height: 150px;
        background-color: ${PanelBackgroundColor};
        padding: 10px 10px;
        bottom: 10px;
        right: 10px;
        border: none;
        border-radius: 5px;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
        z-index: 9999999999999999999999999999999999;
      

    }

    .panel-popup .panel-button{
        float: right;
        cursor: pointer;
        border: none;
        outline: none;
        background: none;
        font-size: 2rem;
    }

    .panel-popup h1{
        text-align: right;
        width: 100%;
        padding: 2px 20px;

    }

    .panel-form{
        align-items: center;
        display: block;
        
    }

    .email-input{
        width: 90%;
        padding: 12px 20px;
        margin: 8px 0;
        display: inline-block;
        border: 1px solid #ccc;
        box-sizing: border-box;
        outline: none;
        font-family: 'Open Sans', sans-serif;
        text-align: right;
        background: transparent;
        border: none;
        border-bottom: 1px solid #000000;
      }

        input:-webkit-autofill,
        input:-webkit-autofill:hover, 
        input:-webkit-autofill:focus, 
        input:-webkit-autofill:active
        {
        -webkit-box-shadow: 0 0 0 30px white inset !important;
        }

      .submit-button{
        background-color: ${PanelButtonColor};
        color: ${PanelButtonTextColor};
        padding: 16px 20px;
        border: none;
        border-radius: 2px;
        cursor: pointer;
        width: 90%;
        margin-bottom:10px;
        opacity: 0.8;
        font-family: 'Open Sans', sans-serif;

      }

      .thank-you{
        display:none;
        position: fixed;
        margin-left: 40%;
        width: 300px;
        height: 150px;
        background-color: ${thankYouMessageBackgroundColor};
        color: ${thankYouMessageTextColor};
        padding: 5px 0;
        text-align: center;
        padding: 10px 10px 10px 10px;
        bottom: 10px;
        right: 10px;
        border: none;
        border-radius: 5px;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
        z-index: 9999999999999999999999999999999999;
    }

    .thank-you p{
        margin-top: 0px;
    }


    .thank-background {
        color: ${thankYouIconColor};
        font-size: 58px;
        width: 100%;
        margin-top: 15px;
    }
      .thank-you .thank-close-button{
        float: right;
        cursor: pointer;
        border: none;
        outline: none;
        background: none;
        font-size: 2rem;
    }
    @media all and (max-width: 600px) {

        .bubble {
            right: 5px;
            bottom: 50px;
        }
    
        .panel-popup{
            position: fixed;
            margin: auto;
            margin-bottom: 50px !important;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            height: fit-content;
        }
    }

    
    /* loader */
    .loader-wrapper{
        display:none;
        position: fixed;
        margin-left: 40%;
        width: 300px;
        height: 150px;
        background-color: ${thankYouMessageBackgroundColor};
        color: red;
        padding: 5px 0;
        text-align: center;
        padding: 10px 10px 10px 10px;
        bottom: 10px;
        right: 10px;
        border: none;
        border-radius: 5px;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
        z-index: 9999999999999999999999999999999999;
    }

    
.loader {
    margin-left: 125px;
    margin-top: 50px;
    align-items: center;
    border: 5px solid #f3f3f3;
    border-radius: 50%;
    border-top: 5px solid #068785;
    border-right: 5px solid #0ada50;
    border-bottom: 5px solid #068785;
    border-left: 5px solid #0ada50;

    width: 50px;
    height: 50px;
    -webkit-animation: spin 2s linear infinite; /* Safari */
    animation: spin 2s linear infinite;
  }
  
  /* Safari */
  @-webkit-keyframes spin {
    0% { -webkit-transform: rotate(0deg); }
    100% { -webkit-transform: rotate(360deg); }
  }
  
  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }

 


    
    
    </style>
    `
  );

  document.body.insertAdjacentHTML(
    "beforeend",

    `
  <div class='bubble' id='bubble-popup-corner'>
    <span class="fa-stack fa-2x">
        <i class="fa fa-circle fa-stack-2x icon-background"></i>
        <i class="far fa-envelope fa-stack-1x blackiconcolor"></i>
    </span>
</div>
<section>
    <div class="loader-wrapper" id="loader-wrapper-form">
        <div class="loader"></div>
    </div>

    <div class="panel-popup" id="panel-popup-form">
        <button id="panel-close-btn" class="panel-button">&times;</button>
        <h1>צור קשר</h1>
        <div class="panel-form">
            <form action="#" id="twik-bubble-form" class=bubbleForm">
                <input type="email" name="email" id="email" placeholder="איימל" class="email-input" required=""
                    autofocus="" oninvalid="this.setCustomValidity('Not Valid')"
                    onchange="try{setCustomValidity('')}catch(e){}" oninput="setCustomValidity(' ')"
                    pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$">
                <button type="submit" id="submit-form-btn" class="submit-button">הרשמה לניוזלייטר</button>
            </form>
        </div>
    </div>

    <div class="thank-you" id="thank-you-panel">
        <button class="thank-close-button" id="thank-close-btn">&times;</button>
        <div class="thank-you-top">
            <i class="fas fa-check-circle thank-background"></i>
            <p> !תודה </p>
        </div>
    </div>
</section>
`
  );

  //event listeners

  $("#bubble-popup-corner").on("click", function (event) {
    event.stopPropagation();
    console.log("click");
    displayPanel();
  });

  $("#panel-close-btn").on("click", function (event) {
    event.stopPropagation();
    console.log("click");
    hidePanel();
  });

  $("#twik-bubble-form").on("submit", function (event) {
    event.stopPropagation();
    event.preventDefault();
    console.log("click");
    SubForm();
  });

  $("#thank-close-btn").on("click", function (event) {
    event.stopPropagation();
    console.log("close btn thank you click");
    hideThankYou();
  });

  $("#panel-popup-form").on("click", (event) => {
    event.stopPropagation();
  });
}
