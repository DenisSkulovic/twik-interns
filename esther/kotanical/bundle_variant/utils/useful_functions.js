// #############################################################################################################
//
// GET CSS SELECTOR
//
// -------------------------------------------------------------------------------------------------------------
/**
 * Generate unique CSS Selector.
 * @param {Element} element DOM Element
 * @returns {string} Unique CSS Selector
 */
export const get_CSS_Selector = (element) => {
  var path = [];

  while (
    element.nodeName.toLowerCase() != "html" &&
    (element = element.parentNode) &&
    path.unshift(
      element.nodeName.toLowerCase() +
        (element.id ? "#" + element.id : "") +
        (element.className ? "." + element.className.replace(/\s+/g, ".") : "")
    )
  );
  return path.join(" > ");
};

//
//
//
//
// #############################################################################################################
//
// ADD FONT AWESOME
//
// -------------------------------------------------------------------------------------------------------------
/**
 * Add Font Awesome to the website. Appends a <link> with font awesome css to the head.
 */
export const addFontAwesome = () => {
  document.head.insertAdjacentHTML(
    "beforeend",
    `
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
        `
  );
};

// #############################################################################################################
//
// ADD OR LOCATE JQUERY
//
// -------------------------------------------------------------------------------------------------------------
/**
 * Run main function only after jQuery has been located or loaded.
 * @param {function} mainJS
 * @returns
 */
export const add_or_locate_jQuery = (mainJS) => {
  if (!window.jQuery) {
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
    return;
  }
  mainJS();
};

// #############################################################################################################
//
// FORMAT NUMBER AS CURRENCY (with commas and dots, but no symbol)
//
// -------------------------------------------------------------------------------------------------------------
/**
 * Format string or number as currency (without symbol though).
 * @param {string | number} x
 * @returns {string}
 */
export const numberWithCommas = (x) => {
  x = x.toString();
  var pattern = /(-?\d+)(\d{3})/;
  while (pattern.test(x)) x = x.replace(pattern, "$1,$2");
  return x;
};
