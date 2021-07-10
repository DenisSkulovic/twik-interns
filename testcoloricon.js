// Declare global variables

// Enter phone number
let phoneNum='+972542884123';

// Choose background color (insert color name or hex code with #)
let styles = {
  
  'originalColor': {
    'bubbleColor': "#4caf50",
    'bubbleWidth': '50px',
    'bubbleHeight': '50px'
  },
}

let bubbleStyle = styles.originalColor; //just choose the style you want as a value

let iconColor = "white";
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

  const {bubbleColor, bubbleWidth, bubbleHeight} = bubbleStyle;

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
      width: ${bubbleWidth};
      height: ${bubbleHeight};
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