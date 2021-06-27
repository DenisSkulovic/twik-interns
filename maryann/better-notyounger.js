// Declare global variables

let displayPopup;
let hidePopup;

// Add jQuery for animations
if (window.jQuery) {
    $ = window.jQuery;
    mainJS();
} else {
    var script = document.createElement("SCRIPT");
    script.src =
        "https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js";
    script.type = "text/javascript";
    script.onload = function () {
        var $ = window.jQuery;
        mainJS();
    }; document.head.appendChild(script);

}

// Start defining functions only after jQuery is loaded
function mainJS() {

    displayPopup = () => {
        $("#off--wrapper").fadeIn("fast");
        $(".off--button-shop").fadeIn("fast");
        console.log("popup");
    };
        
    hidePopup = () => {
        $("#off--wrapper").fadeOut("fast");
        $(".off--button-shop").fadeOut("fast");
    };

// If a user scrolls up 200 pixels (or any other arbitrary number), activate the popup.
// Make sure the scroll tracking only applies for mobile devices. 


if ($(window).width() <= 960) { //all screens less than 960px - are mobile devices
    window.addEventListener("scroll", scrollFunc);
    var prevY = 0;
    var currentY = 0;
    var counterY = 0;
    function scrollFunc(){
        currentY = $(this).scrollTop();
        if ( prevY >= currentY) {
            counterY += prevY - currentY;
            if (counterY >= 200) { 
                $("#off--wrapper").fadeIn();
                window.removeEventListener("scroll", scrollFunc);
            }
    
        }
        prevY = currentY;
    };
}

    // For mobile, you need to set up scroll tracking.
   
    let isMobileDevice = () => {
        if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) 
        ) {
            console.log("mobile");
            return true; // some code..
           
           }
           console.log("not mobile");
           return false;
    };

    if(isMobileDevice()){
        window.addEventListener('scroll', function() {
            
        });
    }  console.log("finished....");
       
    
// Inject CSS and HTML
    document.head.insertAdjacentHTML(
        'beforeend',
        `

<style>

#off--wrapper {
    color: #404040;
    font-family: 'Lato', sans-serif;
    width: 325px;
    height: 360px;
    position: fixed;
    top: 50%;
    left: 50%;
    margin: 0 auto;
    transform: translate(-50%, -50%);
    z-index: 2;
    
}

.off--image,
.off--content {
    width: 100%;
    height: 100%;
}

.off--image {
    display: none;
    height: 360px;
}

.off--image image {
    width: 100%;
    height: auto;
}

.off--content {
    background: #ddafc8;
    padding: 10px 10px 38px 10px;
    box-sizing: border-box;
    max-width: 325px;
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
    //position: relative;
    // text-indent: -20px;
  
    
}

.off--list li {
    list-style-position: outside;
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
    line-height: 130%;
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
        'beforeend',
        `
        <div id="off--purchase" class="twik-overlay" style="display: none;"></div>
        <div id="off--wrapper" style="display:none;">
        <a href="javascript:;" class="off--close">X</a>
                <div class="off--image">
                <img src="https://raw.githubusercontent.com/DrorBarnea-twik/intern_variants/master/denis_the_terrible/better_not_younger_images/20-off-image.jpg">
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
                    <a href="#" id="off--shop" class="off--button-shop">Shop Now</a>
                </div>
            </div>
        </div>


`
    );

    let activateDiscount = () => {
        document.getElementById('text-activate').classList.add('off--hide');
        document.getElementById('text-shop').classList.remove('off--hide');
        document.getElementById('text-shop').classList.add('off--show');
        fetch('https://better-notyounger.com/discount/20BETTER');
        console.log('activateDiscount')

    }


    // Set event listeners

    document.querySelector("#off--purchase").addEventListener("click", () => {
        hidePopup();
        console.log('click')
    });
   
    document.querySelector(".off--close").addEventListener("click", () => {
        hidePopup();
        console.log('click')
    });

    document.querySelector("#off--shop").addEventListener("click", () => {
        hidePopup();
        console.log('click')
    });

    document
    .getElementById("activateOffer")
    .addEventListener("click", activateDiscount);

    $(document).on("mouseleave", () => {
        if (!sessionStorage.getItem("visited")) {
        console.log("leave");
        displayPopup();
        sessionStorage.setItem("visited", "true");
        }
    });
}


    

    