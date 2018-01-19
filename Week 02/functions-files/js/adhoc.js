//create a function called wrappInBlockquote that will take a in a sinlgle value and return a string that wrap the text in an html blockquote tag.

function wrappInBlockquote(text){
    return '<blockquote>' +text +'</blockquote>';
}

//2) Write the JavaScript code to get the element with the id o f"leadQuote" and using the function in step one , wrap the conteta of that element in blockquote.

var tag= document.getElementById('leadQuote');
//var tag= document.querySelector('#leadQuote');

tag.innerHTML= wrappInBlockquote(tag.innerHTML);


