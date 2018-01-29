//An anonymose function is a function that does have a name 
// anonymoses fucntoion are often used when you want to creat a "one-of"
// function that is being passed into another method/function

  document.querySelector('img.feature')
     .addEventListener('click',function () {
		var desc = document.querySelector('p.feature.description');
	
		// remove the hidden class IF it is present,
		// otherwise, add it back!
		
		
		if(desc.classList.contains('hidden')){
			desc.classList.remove('hidden');
	
		}else{
			desc.classList.add('hidden');
		}
		// achieve the same result using using string functions
		//	if(desc.className.indexOf('hidden') >= 0){
		//	desc.classList.remove('hidden');
	
		//}else{
		//	desc.classList.add('hidden');
		//}
		
	});

// 2. create the event listener function

// 3. add event listener
//featureImage.addEventListener('click', handleFeatureClick);