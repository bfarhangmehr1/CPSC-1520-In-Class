var featureLink = document.querySelector('a.feature');
var LinkText = document.querySelector('a.feature');
console.log(LinkText);

function featureLinkHandler(evt) {
    var featureImage = document.querySelector('img.feature');
    if(featureImage.classList.contains('hidden')!==true){ 
        LinkText.innerHTML="Hide Barcelona";       
        featureImage.src = featureLink.href; 
        //featureImage.classList.remove('hidden'); 
            
        
        
    }else{        
                      
        featureImage.classList.add('hidden'); 
        LinkText.innerHTML="View Barcelona";       
        //featureImage.src='';      
    }    
    evt.preventDefault();
}
featureLink.addEventListener('click', featureLinkHandler);