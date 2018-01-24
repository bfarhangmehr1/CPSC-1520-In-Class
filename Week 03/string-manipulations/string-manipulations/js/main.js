var urlTemplate = 'http://placehold.it/:size/:color/:background/';
var urlQueryStringTemplate = "?text="


var textInput = document.querySelector('input[name=placeholderText]');
console.log(textInput);

function onPlaceholderTextchang(evt){
    // the .target of the evt is hte object that "expercend " the evt
    console.log(evt.target.value);// value is the attribute of <input> element
 
   var imgElement= document.querySelector('img');
   var src= imgElement.src;
   var indexOfEqualSign = img.indexOf('=');
   var newSrc= src.substring(0,indexOfEqualSign);
   console.log(newSrc);
    
   newSrc=newSrc+ '=' + evt.target.value;
   imgElement.src=newSrc;


}
//wier up my envt handler
textInput.addEventListener('change',onPlaceholderTextchang);
// mini-lesson on string manipulation:



//  split string into an array
//  join from array into a string
//  includes / endswith / startsWith
//  match - regular expressions
//  indexof / lastIndexOf
//  replace
//  character access
//  comparing - equals, greater/lesser
//  slice
//  toString
//  trim