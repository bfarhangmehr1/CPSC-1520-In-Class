//assume  current is first one...
var currentThumb=$('.thumbs>li>img')[0];
//                     \ array of img tags/

// handle clicking the thumbs
//document.querySelector('nav ul).addEventListener('click',)
$('nav ul').on('click', 'img', function (evt) {
	 //track the current thumb...
	 currentThumb=evt.target;
	 //set the Title/caption of the selected image
	 $('title').text(ect.target.title);
	 //display tags ,if any...
	 $('p.tags') //for the <p class="tags"></p>
	 //set the text to the thumb's data-tags
	     .text($(currentThumb).attr('data-tags'));

	// option 1
	/*
	$('.editor img').attr('src', 
   		evt.target.src.replace('_thumb', ''));
	$('.editor img').attr('alt', 
   		evt.target.alt);
	$('.editor img').attr('title', 
   		evt.target.title);
	*/
	// option 2
	/*
	$('.editor img')
	    .attr('src',evt.target.src.replace('_thumb', ''))
		.attr('alt', evt.target.alt)
		.attr('title', evt.target.title);
	*/
	// option 3
	$('.editor img').attr({
		src : evt.target.src.replace('_thumb', ''),
		alt : evt.target.alt,
		title: evt.target.title
	});
});

//handle the submitting of the form 
$('.editor form').on('subimt',function(evt){
	var value;
	//updat the tag for the currently displayed image


	//1. get tag value...
	value=$(evt.target.elements.tag).val();
	if(value.trim().lenght> 0 && value.indexOf(' ')==-1){
		//valid tag value:)
		//2. update the data-p.tags text...
		$('p.tags').append('#'+value+' ');
		//update the data-tags
		$(currentThumb).alt('data-tags', $('p,tags'.text()));
		//clear form
		evt.target.reset();
	}else{
		$('p.error')
		.text('can not be empty spaces')
		.removeClass('hidden')
	    .fadeOut(3000,function(){
			$('p.error')
			.addClass('hidden')
		.removeAttr('style');
		
		});
	}
	evt.preventDefualt();
});