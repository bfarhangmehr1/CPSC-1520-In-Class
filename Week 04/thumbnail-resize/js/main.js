// When a gallery thumbnail size button is clicked, the corresponding size class
// should be added to the div.thumbnails element. 

// This will apply the corresponding CSS rule to  modify the display the of hte thumbnail images. 

// In addition to this, the clicked button should be made active (i.e. add the active class).

//var liSm= document.querySelector('.thumbnails-sm');
//var liMd= document.querySelector('.thumbnails-md');
//var liLg= document.querySelector('.thumbnails-lg');
var ulcontainer = document.querySelector('ul.thumbnails-sizes');

function thumbnaiSizeHandler (evt) {
    //Too
    var target = evt.target; // evt.target is the object the event happend on 
    var thumbnails= document.querySelector('div.thumbnalis');
    if(target.classList.contains('active')!=true){
        // update the active <li> element
       // console.log(target)
       // console.log('need to swithc the the selected size');
       document.querySelector('li.active').classList.remove('active');
       target.classList.add('active');
    

       // determine which button or <li> was clicked 
       if (target.classList.contains('thumbnails-sm')){
           console.log('swicth size to "sm"');
           thumbnails.classList.remove('md');
           thumbnails.classList.remove('lg');
           thumbnails.classList.add('sm');
       } else if(target.classList.contains('thumbnails-md')) {
           console.log('swith size to "md"');
           thumbnails.classList.remove('sm');
           thumbnails.classList.remove('lg');
           thumbnails.classList.add('md');
       }else{
        console.log('swith size to "lg"');
        thumbnails.classList.remove('sm');
        thumbnails.classList.remove('md');
        thumbnails.classList.add('lg');
       }

       }
    
    }   


//liSm.addEventListener('click',thumbnaiSizeHandler)
//liMd.addEventListener('click',thumbnaiSizeHandler)
//liLg.addEventListener('click',thumbnaiSizeHandler)
ulcontainer.addEventListener('click',thumbnaiSizeHandler);