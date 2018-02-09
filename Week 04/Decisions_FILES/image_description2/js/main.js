var featureLink = document.querySelector('a.feature');


function featureLinkHandler(evt) {
   var target= evt.target;
    var featureImage = document.querySelector('img.feature');
    if(featureLink){ 
        featureLink.innerHTML="Hide Barcelona";       
        featureImage.src = featureLink.href; 
        featureImage.classList.remove('hidden');         

    }else{  
                      
        featureImage.classList.add('hidden'); 
        featureLink.innerHTML="View Barcelona";       
        //featureImage.src='';      
    }    
    evt.preventDefault();
}
featureLink.addEventListener('click', featureLinkHandler);