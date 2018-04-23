<script>
	window.onload = function(){
		var htmls = '<video autoplay loop poster="https://s3-us-west-2.amazonaws.com/s.cdpn.io/4273/polina.jpg" style="width: 100%;">'
				+'<br>'
				+'<source src="http://thenewcode.com/assets/videos/polina.webm" type="video/webm">'
				+'<br>'
				+'<source src="http://thenewcode.com/assets/videos/polina.mp4" type="video/mp4">'
				+'<br>'
			    +'</video>';
	    
		$('body').append(htmls);
	}		
</script>