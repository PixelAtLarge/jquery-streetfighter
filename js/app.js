$(document).ready(function() {
	playIntro ();
	$('.sf-logo').fadeIn(1500, function() {
    $(this).fadeOut(1500, function() {
      $('.brought-by').fadeIn(1500, function() {
        $(this).fadeOut(1500, function() {
          $('.jq-logo').fadeIn(1500, function() {
            $(this).fadeOut(1500, function() {
              $('.how-to').fadeIn(1500, function(){
              	$(this).fadeOut(5000, stopIntro);
							});            
            });
          });
				});	
      });
    });
  });

	function playIntro () {
		$('#theme-song')[0].volume = 0.5;
		$('#theme-song')[0].load();
		$('#theme-song')[0].play();
	}

	function stopIntro() {
		$('#theme-song')[0].pause();
		$('#theme-song')[0].currentTime = 0;
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
		playCool ();
		$('.ryu-ready').hide();
		$('.ryu-throwing').hide();
		$('.ryu-still').hide();
		$('.ryu-cool').show();
	}
})

	.keyup(function(e){
		if(e.keyCode == 88) {
			$('#cool-song')[0].pause();
			$('#cool-song')[0].load();
			$('.ryu-cool').hide();
			$('.ryu-still').show();
		}
	});

var coolSound = false;
function playCool () {
  coolSound = !coolSound;
  if (coolSound) {
		$('#theme-song')[0].pause();
    $('#cool-song')[0].volume = 0.5;
    $('#cool-song')[0].play();
  }
}

});