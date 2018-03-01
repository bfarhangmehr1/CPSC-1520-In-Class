// Enter JavaScript for the exercise here...
var checks=document.querySelectorAll('[name=message]');

checks.addEventListener('change',function (evt){ 
    var checkbox= evt.target;
    var myform = document.querySelector('form.myform');       
    var input= myform.elements.partialstringId;
    var idx = 0;
    while (idx < checks.length) {  
    if (input.value.toLowerCase().indexOf(checks.item(idx).nodeValue.toLowerCase())>=0){    
    checks[idx].classList.add('.stripe');
    } 
    idx = idx + 1;
    }
   }); 
