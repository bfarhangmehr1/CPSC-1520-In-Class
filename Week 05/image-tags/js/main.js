// When the 'Add Tag' submit button is clicked, the p.feature.tags element should be 
// updated with the tag that was entered by the user.  Do not overwrite any existing tags,
// simply add each additional tag onto the already existing list.  A tag cannot be empty 
// (i.e. cannot be whitespace). If the user tries to add an empty tag, remove the hidden 
// class from the p.feature.error element.  If the form is submitted correctly, then ensure
// that the p.feature.error element is hidden.

document.querySelector('.feature.frm ').addEventListener( 'submit', function (evt) { 
    var frm = evt.target; 
    var tag = frm.elements.tags;
    var error = document.querySelector('p.feature.error'); 
     // ensure that there is a value in the tag field before adding a tag 
     //ensure there is value in tag before addding tag to paragraph.
     if (tag.value.trim() != '') { 
    // insert a '# ' before the tag for aesthetics
    if(tag.value.trim().indexOf(' ')>=0){
    error.innerHTML = "can not contains space"; 
    error.classList.remove('hidden');
    }
     document.querySelector('p.feature.tags ').innerHTML += '#' + tag.value.trim() + ' '; 
     tag.value +' ';
     tag.value = ' '; 
     error.classList.add('hidden');
    } else {
        // No data was entred 
        // I could add some text 
        error.innerHTML = "Blank input will not be processed"; 
        error.classList.remove('hidden'); }
        evt.preventDefault();
     });