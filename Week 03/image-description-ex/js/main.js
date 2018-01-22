var featurelink= document.querySelector('a.feature.link');

function handdleFeatureLink(evt){
    var featureImage= document.querySelector('img.feature');
    featureImage.src= featuerLink.href;
    featureImage.classList.remove('hidden');
    evt.preventDefault();
}

featuerLink.addEventListener('click',handleFeatureLinkClick);


