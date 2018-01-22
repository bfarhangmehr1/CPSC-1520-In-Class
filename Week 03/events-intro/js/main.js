// 1. select the target element
 var featureImage = document.querySelector('img.feature');
 var featuerLink =document.querySelector('a.feature.link');
// 2. create the event listener function
 function handleFeatureClick(){
     console.log('img.feature was clicked...');
     // grab the htmlelemnt with a .feature and a .description class
     var desc = document.querySelector('.feature.description');
     // all htmlelemnt object have .classlist porperty that is the collion of class name
     desc.classList.remove('hidden');
 }

 function handleFeatureLinkClick(evt){
     console.log('a.feature.link was clicked...');
     //set the image src to the anchor's href value
     featureImage.src = featuerLink.href;

     // make the image visible 
     featureImage.classList.remove('hidden');
     // do not want to load the image in the page
     evt.preventDefault();
 }

// 3. add event listener
featureImage.addEventListener('click',handleFeatureClick);
featuerLink.addEventListener('click', handleFeatureLinkClick);
