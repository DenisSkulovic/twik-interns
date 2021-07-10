// Declare global variables

let bubbleColor = "green";
let iconColor = "white";

let modalColor = "white";
let modalTextColor = "black";
let modalContactUsColor = " black";

let displaycallBubble;
let hidecallBubble;

let apiSpreadsheet = "https://api.apispreadsheets.com/data/13447/";


current = window.location.pathname;
    
if (current == '/') {
  console.log('Is the homepage.')
} else {
  console.log('Not on the homepage.')
}

const scrollButton = document.getElementById('menu-item-1844')
if (scrollButton) {
  scrollButton.addEventListener('click', function (e) {
    e.preventDefault();
   window.scrollTo({top: 0, behavior: 'smooth'});
  })
}

// Add jQuery for animations
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
  document.getElementsByTagName("head")[0].appendChild(script);
}

// Start defining functions
function mainJS() {

 
  displaycallBubble = () => {
    $("#modal-popup-form").show();
    console.log("show bubble");
  };
  
  hidemodalPopup = () => {
    $("#modal-popup-form").fadeOut();
    $("#call-bubble").fadeIn("fast");
};

// Inject CSS and HTML

document.body.insertAdjacentHTML(
  'beforeend',

    `
    <link rel="preconnect" href="https://fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,400;0,700;1,400;1,700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css">



    <style>

      #call-bubble {
        position: fixed;
        z-index: 1; /* z-index puts its element before or after other elements with different z-index. if my z-index is higher I will be in the front, and vice versa */
        right: 80px;
        bottom: 80px;
        z-index: 2222222222;
      }

      .call-btn-container {
        background: ${bubbleColor};
        border-radius: 100%;
        cursor: pointer;
        width: 50px;
        height: 50px;
      }

      .call-icon-btn {
        height: 100%;
        cursor: pointer;
        align-items: center;
        display: flex;
        justify-content: center;
        text-decoration: none;
        font-size: 30px;
        line-height: 30px;
      }

      .blackiconcolor {
        color: ${iconColor};
      }

      .modal-popup {
        background: ${modalColor};
        display: none;
        padding: 10px 10px;
        position: fixed;
        text-align: center;
        margin-left: 40%
        width: 200px;
        //height: 150px;
        bottom: 75px;
        right: 75px;
        border: 1px solid black;
        border-radius: 10px;
        z-index: 3333333333333;
      }
    
      .modal-close {
        color: red;
        cursor: pointer;
        font-size: 15px;
        text-decoration: none;
        position: absolute;
        right: 10px;
        top: 10px;
        display: block;
      }

    
      .contact-header {
        position: relative;
        margin-bottom: 12px;
        color: ${modalTextColor};
      }

      .contact-header h2 {
        color: ${modalContactUsColor};
        margin-bottom: 0px;
      }

      .contact-us-header {
        display: flex;
        justify-content: space-between;
        margin-bottom: 14px;
      }

    
      .contact-us-header-title {
        font-size: 18px;
      }
      
      .modal-popup .call-icon {
        background: green;
      }

      .modal-body {
        display: flex;
        flex-direction: column;
        height: 100%;
        font-family: arial, sans-serif;
        direction: ltr;
      }

      .input-box {
        flex-grow: 1;
      }

      .input-box .contactUsField {
        border: none;
        border-bottom: 1px solid #484748;
        //padding: 3px 5px;
        margin-bottom: 10px;
      }

      .input-box .submit-btn {
        background-color: #b0e2b2;
        //padding: 3px 5px;
        border: 1px solid #484748;
        cursor: pointer;
        margin-bottom: 15px;
        width: 50px;
      }

      .modal-popup .call-icon-btn i {
        color: white;
        font-size: 24px;
      }

      .modal-popup .call-btn-container {
        margin: 0 auto;
        width: 35px;
        height: 35px;
      }

    </style>

    `
  );

document.body.insertAdjacentHTML(
    "beforeend",

    `
        <div class="call-icon call-btn-container" id="call-bubble">
          <div id="button-open-phone-popup" title="+1 (800) 406-3026" class="call-icon-btn btn btn-phone text-center">
            <i class="fa fa-phone blackiconcolor"></i>
          </div>
        </div>

      <div id="modal-popup-form" class="modal-popup">
        <div class="modal-body">
          <div class="contact-us-header">
            <div class="contact-us-header-title">Contact Us</div>
            <div class="modal-close" id="modal-close">X</div>
          </div>
            
          <div class="input-box">
            <input type="text" class="contactUsField" autocomplete="tel" name="Phone" id="phoneBubble"
            class="input" placeholder="Enter phone number">
            <button id="send-phone" class="submit-btn">Send</button>
          </div>
          
          <div class="call-icon call-btn-container" id="call-bubble-form">
            <div id="call-service-btn" title="+1 (800) 406-3026" class="call-icon-btn btn btn-phone text-center">
              <i class="fa fa-phone"></i>
            </div>
          </div>
        </div>
      </div>
    
    `
);

// Set event Listeners


$("#send-phone").on("click", function(event) {
  event.stopPropagation();
  console.log('debug apiSpreadsheet')
  fetch(apiSpreadsheet, {
    method: 'POST',
    body: JSON.stringify({
      data: [
        {
          phone: $('#phoneBubble').val()
        }
      ]}
    )
  }).then(() => {
    alert('Thank you! We will contact you soon!')
  })
});

$("#call-service-btn").on("click", function(event) {
  event.stopPropagation();
  window.open('tel:123');
});

$("#button-open-phone-popup").on("click", function(event) {
  event.stopPropagation();
  console.log("click");
  displaycallBubble();
});

$("#modal-popup-form").on("click", (event) => {
  event.stopPropagation();
});

$(".modal-close").on("click", function (event) {
  event.stopPropagation();
  console.log("click");
  hidemodalPopup();
});






}