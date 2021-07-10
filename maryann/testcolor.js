// Declare global variables

// Enter phone number

let phoneNum='+972542884123';
let backgroundColor = 'white'; 

let bubbleColor = "#e6736a";
let iconColor = "white";

let displaycallBubble;
let hidePopup;

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
    $("#color-bubble").show();
    console.log("show bubble");
  };

  hidePopup = () => {
    $("#newColor").show();
    console.log("show bubble");
    
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
      z-index: 2222222222; /* z-index puts its element before or after other elements with different z-index. if my z-index is higher I will be in the front, and vice versa */
      right: 50px;
      bottom: 30px;
      border-radius: 10px;
    }

    .call-btn-container {
      background: ${bubbleColor};
      cursor: pointer;
      width: 50px;
      height: 50px;

    }

    #button-open-phone-popup {
        height: 100%;
        cursor: pointer;
        align-items: center;
        display: flex;
        text-decoration: none;
        font-size: 30px;
        
       
    }

    #styleColor {
        display: none;
        color: black;
        height: 50px;
        width: 50px;
        border: solid black 1px;
        position: fixed;
        z-index: 2222222222;
        right: 50px;
        bottom: 30px;
        border-radius: 5px;
        background: ${bubbleColor};
        cursor: pointer;
        text-decoration: none;
    }

    .blackiconcolor {
      color: ${iconColor} ;
    }

  </style>

    `
  );

document.body.insertAdjacentHTML(
    "beforeend",

    `    
        <div class="call-icon call-btn-container" id="call-bubble">
            <div id="button-open-phone-popup" title="+972542884123" class="call-icon-btn btn btn-phone text-center">
                <i class="fa fa-phone blackiconcolor">
            </div>
        </div>

        <div id="styleColor">
          <input type="text"  id="newColor">
              <i class="fa fa-phone blackiconcolor">
          <input type="text"  id="newSize">
        </div>
    
    `
);

// Set event Listeners

$("#call-bubble").on("click", function(event) {
  event.stopPropagation();
  console.log("click");
  displaycallBubble();
});

$("#button-open-phone-popup").on("click", function(event) {
  event.stopPropagation();
  window.open('tel:+972542884123');
  document.getElementById('styleColor').style.display='block'
});

$("#newColor").off("click", function(event) {
  event.stopPropagation();
  console.log("click");
  hidePopup();
});


}

// This script switches the title text in the browser tab back and forth every 1.1 seconds
// between the original text and a newly specified message.
// **You can specify the new title by updating the text value of "newHeaderText_str" ("init variables" section)
// and can also specify the time interval by updating the integer (value in milliseconds)
// at the end of "setInterval" ("run script" section).
// #####################################################################################
// declare variables
// #####################################################################################
let docHeadTitle_element;
let originalHeaderText_str;
let newHeaderText_str;
// #####################################################################################
// init variables
// #####################################################################################
docHeadTitle_element = document.getElementsByTagName('TITLE')[0];
originalHeaderText_str = docHeadTitle_element.innerText;
newHeaderText_str = 'PERFECT!'; //--------( CHANGEABLE!!!! )----------------
// #####################################################################################
// define functions
// #####################################################################################
function alternateBetweenHeadTexts() {
	let currentHeadText = document.getElementsByTagName('TITLE')[0].innerText;
	switch (currentHeadText) {
		case originalHeaderText_str:
			docHeadTitle_element.innerText = newHeaderText_str;
			break;
		default:
			docHeadTitle_element.innerText = originalHeaderText_str;
	}
}
// #####################################################################################
// run script
// #####################################################################################
setInterval(function () {
	alternateBetweenHeadTexts();
}, 1100);

// Declare global variables

// Enter phone number
let phoneNum='+972542884123';

// Choose background color (insert color name or hex code with #)
// let originalColor;
// let newColor;

let bubbleColor = "#e6736a";
let iconColor = "red";

let displaycallBubble;


// To determine weather you're in the homepage or not
current = window.location.pathname;
    
if (current == '/') {
  console.log('Is the homepage.')
} else {
  console.log('Not on the homepage.')
}

// To scroll up to the page smoothly by clicking the element (using selector)
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
    $("#call-bubble").show();
    console.log("show bubble");
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
      z-index: 2222222222; /* z-index puts its element before or after other elements with different z-index. if my z-index is higher I will be in the front, and vice versa */
      right: 50px;
      bottom: 30px;
      border-radius: 10px;
      background: ${bubbleColor};
      cursor: pointer;
      width: 50px;
      height: 50px;
    }



    #button-open-phone-popup {
        height: 100%;
        cursor: pointer;
        align-items: center;
        display: flex;
        text-decoration: none;
        font-size: 30px;
        
       
}

    .blackiconcolor {
      color: ${iconColor} ;
    }

  </style>

    `
  );

document.body.insertAdjacentHTML(
    "beforeend",

    `    
        <div class="call-icon call-btn-container" id="call-bubble">
            <div id="button-open-phone-popup" title="+972542884123" class="call-icon-btn btn btn-phone text-center">
                <i class="fa fa-phone blackiconcolor">
            </div>
        </div>

    
    `
);

// Set event Listeners

$("#call-bubble").on("click", function(event) {
  event.stopPropagation();
  console.log("click");
  displaycallBubble();
});

$("#button-open-phone-popup").on("click", function(event) {
  event.stopPropagation();
  window.open('tel:+972542884123');
  
});


}