//my page has only one form 

var myForm= document.querySelector('form');

// a handler for reset event
myForm.addEventListener('reset',function(evt){

if(confirm('Are you sure you want to reset the form data?')){
// let the defualt action through, which is to reset

}else {
    evt.preventDefault();
}

});

// a handller for submit event
myForm.addEventListener('submit', function (evt){
    //validation for the for elements

    var control =evt.target.elements;
    var error= '';
    // 1. first and last name cannot be empty
   if(control.firstName.value.trim()== ""){
       error += '<li> First name cannot be empty </li>';

   }
   if(control.lastName.value.trim()== ""){
    error += '<li> Last name cannot be empty </li>';

   }

   // email should have an @ symbol
   if(! control.emailAddress.value.includes('@')){
       error+='<li> email address is invalid </li>';
   }

   // web address should start with http
   if(! control.personalWebsite.value.startWith('http')){
    error += '<li> website url should start with <code>http</code> and be a full url </li>';
}
    // decide whierher or not to display the form
    if(error) {
        evt.preventDefault();
        document.getElementById('errorList').innerHTML=error;
    } else {
        document.getElementById('errorList').innerHTML = "";
    }
});