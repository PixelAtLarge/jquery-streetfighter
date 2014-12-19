$(document).ready(function() {
	playIntro ();
	$('.sf-logo').fadeIn(1500, function() {
    $(this).hide(function() {
      $('.brought-by').fadeIn(1500, function() {
        $(this).fadeOut(1500, function() {
          // $('.jquery-logo').fadeIn(1500, function() {
          //   $(this).fadeOut(1500, function() {
              $('.how-to').fadeIn(1500, function(){
              	$(this).fadeOut(5000);
							})            
            })
          })
		// 		})  	
  //     })
    })
  })

	function playIntro () {
		$('#theme-song')[0].volume = 0.2;
		$('#theme-song')[0].load();
		$('#theme-song')[0].play();
	}

	$('.ryu').mouseenter(function(){
		$('.ryu-still').hide();
		$('.ryu-ready').show();
	})

	.mouseleave(function(){
		$('.ryu-ready').hide();
		$('.ryu-still').show();
	})
	.mousedown(function(){
		playHadouken();
		$('.ryu-ready').hide();
		$('.ryu-throwing').show();
		$('.hadouken').finish().show()
		.animate(
			{'left': '300px'}, 
			500,
			function() {
    			$(this).hide();
    			$(this).css('left', '-212px'); 
	  		}
	  	);	
	})
	.mouseup(function(){
		$('.ryu-throwing').hide();		
		$('.ryu-ready').show();
	});

	function playHadouken () {
  		$('#hadouken-sound')[0].volume = 0.5;
  		$('#hadouken-sound')[0].load();
  		$('#hadouken-sound')[0].play();
	}

$(document).keydown(function(e) {
	if (e.keyCode == 88) {
		$('.ryu-ready').hide();
		$('.ryu-throwing').hide();
		$('.ryu-still').hide();
		$('.ryu-cool').show();
	}
})
	.keyup(function(e){
		if(e.keyCode == 88) {
			$('.ryu-cool').hide();
			$('.ryu-still').show();
		}
	});
});