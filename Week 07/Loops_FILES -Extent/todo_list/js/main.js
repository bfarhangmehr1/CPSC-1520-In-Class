// Enter JavaScript for the exercise here...
//var checks=document.querySelectorAll('[name=message]');
var myform = document.querySelector('form.myform');

myform.addEventListener('submit',function (evt){ 
    var formElements= evt.target;
    //var myform = document.querySelector('form.myform');
    var checks=document.querySelectorAll('td');       
    var input= myform.elements.partialstringId;
    var idx = 1;
    while (idx <= checks.length) {  
    if (checks.item(idx).innerHTML.toLowerCase().indexOf(input.value.toLowerCase())>-1){    
    checks[idx].classList.add('stripe');
    checks[idx-1].classList.add('stripe');    
    evt.preventDefault();
    } 
    idx = idx + 2;
    }
   }); 
