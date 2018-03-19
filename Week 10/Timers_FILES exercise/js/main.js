// your js here...
var images = ['mountain1.jpg', 'mountain2.jpg', 'mountain3.jpg'];
var currentImg = 0;
var idx;

// add the appropriate number of selector bullets
for (idx = 0; idx < images.length; idx += 1) {
    document.querySelector('.image-tracker').innerHTML += '<span data-idx="' + idx + '">&bull;</span>';
    document.querySelector('.image-tracker').querySelector('span').classList.add('active');

function updatslide(idx){
    // display the current image
     document.querySelector('.carousel>img').src = 'images/' + images[idx];  
   // highlight the first bullet as 'active'
     document.querySelector('.image-tracker .active').classList.remove('active');
     document.querySelectorAll('[data-idx]')[currentImg].classList.add('active');
    }
    
}
var slideshowInterval;    
slideshowInterval=setInterval(function(){
  currentImg+=1;
  currentImg=( currentImg >= images.length) ? 0: currentImg;
  updatslide(currentImg);
},3000);

