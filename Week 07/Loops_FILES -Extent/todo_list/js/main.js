// Enter JavaScript for the exercise here...
var checks=document.querySelectorAll('[name=message]');

checks.addEventListener('change',function (evt){ 
    var checkbox= evt.target;
    var myform = document.querySelector('form.myform');       
    var input= myform.elements.partialstringId;
    var idx = 0;
    while (idx < checks.length) {  
    if (checks.item(idx).nodeValue.toLowerCase().indexOf(input.value.toLowerCase())> -1){    
    checks[idx].classList.add('.stripe');
    } 
    idx = idx + 1;
    }
   }); 
