// 1) declare my event handelers

function handdleFeatureLink(evt){
    console.log('shwo image function called')
    // a) get the refernce to the <img class ="feature"> element
    var featureImage= document.querySelector('img.feature');
    
    // b) remove  the hidden class from the element
    featureImage.classList.remove('hidden');
   // c) get the href from the <a class ="feature link" href="..."> element 
   // (storing in a local temperary variable)    
    //d) set the .src attribute's value for the <img>
    featureImage.src= featuerLink.href;

    featureImage.alt=featurelink.title;
    var captionParagraph=
    document.querySelector('p.feature.title');
    captionParagraph.innerHTML= featurelink.title;
    evt.preventDefault();
}
// 2) find the element that respond to events
var featurelink= document.querySelector('a.feature.link');


//3) "Wire up" the element to the event handlers

featuerLink.addEventListener('click',handleFeatureLinkClick);


