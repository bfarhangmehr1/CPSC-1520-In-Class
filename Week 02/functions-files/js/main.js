/* main.js
this is a comment block enclosed in  slash + asteridk and 
ending with an asterisk + slash
*/

//Demo of calling a function - conslole is the javascript editor environment in the browser
console.log('main.js is loaded');    

// The updateInnerHtml function has two parameters 
// -selector - is a string that identifiers which Dom elememnt to get/selector
// - new Value - is a string that will be thenew value for selector's.innerHTML
function updateInnerHTML(selector, newValue) {
  document.querySelector(selector).innerHTML = newValue;
}

function strong(value) {
    //combining string to produce a new string is called concatenation
  return '<strong>' + value + '</strong>';
}