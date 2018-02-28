// Enter JavaScript for the exercise here...


var myform = document.querySelector('form.myform');

myform.addEventListener('submit', function (evt){ 
    var checks = document.querySelectorAll('[name=message]');
    var myform = evt.target;
    var input= myform.elements.partialstringId;

    var idx = 0;
    while (idx < checks.length) {
    if (checks.values().match(input.value)) {
     evt.preventDefault();
    checks[idx].classList.add('.stripe');
    } 
    idx = idx + 1;
    }
   }); 
