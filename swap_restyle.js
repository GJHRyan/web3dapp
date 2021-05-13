// JavaScript Document
var counter = 0;
$(document).ready(function() {
	
	selectPage();
	selectModel();

	function selectPage() {

		$('#home').show();
		$('#about').hide();
		$('#models').hide();
		$('#interaction').hide();
		$('#cokeDescription').hide();
		$('#spriteDescription').hide(); 
		$('#pepperDescription').hide();
			$('#coke2Description').hide(); 		


		$('#navHome').click(function(){
			$('#home').show();
			$('#about').hide();
			$('#models').hide();
			$('#interaction').hide();
			$('#cokeDescription').hide();
			$('#spriteDescription').hide(); 
			$('#pepperDescription').hide(); 
			$('#coke2Description').hide(); 			
		});

		$('#navAbout').click(function(){
			$('#home').hide();
			$('#about').show();
			$('#models').hide();
			$('#interaction').hide();
			$('#cokeDescription').hide();
			$('#spriteDescription').hide(); 
			$('#pepperDescription').hide();
			$('#coke2Description').hide(); 			
		});

		$('#navModels').click(function(){
			$('#home').hide();
			$('#about').hide();
			$('#models').show();
			$('#interaction').show(); 
			$('#cokeDescription').show();
			$('#spriteDescription').hide(); 
			$('#pepperDescription').hide();
			$('#coke2Description').hide(); 			
		});
	}

	function selectModel() {

		$('#navCoke').click(function(){
			$('#coke').show();
			$('#sprite').hide();
			$('#pepper').hide();
			$('#coke2').hide();
			$('#interaction').show(); 
			$('#cokeDescription').show();
			$('#spriteDescription').hide(); 
			$('#pepperDescription').hide();
			$('#coke2Description').hide(); 			
		});

		$('#navSprite').click(function(){
			$('#coke').hide();
			$('#sprite').show();
			$('#pepper').hide();
			$('#coke2').hide();
			$('#interaction').show(); 
			$('#cokeDescription').hide();
			$('#spriteDescription').show();
			$('#pepperDescription').hide();
			$('#coke2Description').hide(); 			
		});

		$('#navPepper').click(function(){
			$('#coke').hide();
			$('#sprite').hide();
			$('#pepper').show();
			$('#coke2').hide();
			$('#interaction').show(); 
			$('#cokeDescription').hide();
			$('#spriteDescription').hide(); 
			$('#pepperDescription').show(); 
			$('#coke2Description').hide(); 
		});
		$('#navCoke2').click(function(){
			$('#coke').hide();
			$('#sprite').hide();
			$('#pepper').hide();
			$('#coke2').show();
			$('#interaction').show(); 
			$('#cokeDescription').hide();
			$('#spriteDescription').hide(); 
			$('#pepperDescription').hide(); 
			$('#coke2Description').show(); 
		});
	}

});

function changeLook() {
	counter += 1;
	switch (counter) {
		case 1:
			document.getElementById('bodyColor').style.backgroundColor = '#7f7f7f';
			document.getElementById('headerColor').style.backgroundColor = '#FF0000';
			document.getElementById('footerColor').style.backgroundColor = '#FF0000';
			break;
		case 2:
			document.getElementById('bodyColor').style.backgroundColor = '#5b5b5b';
			document.getElementById('headerClor').style.backgroundColor = '#6f4e37';
			document.getElementById('footerColor').style.backgroundColor = '#764d30';
			break;
		case 3:
			document.getElementById('bodyColor').style.backgroundColor = '#b7b7b7';
			document.getElementById('headerColor').style.backgroundColor = '#ff6f7b';
			document.getElementById('footerColor').style.backgroundColor = 'ff6d6c';
			break;
		case 4:
			counter = 0;
			document.getElementById('bodyColor').style.backgroundColor = '5b5b5b';
			document.getElementById('headerColor').style.backgroundColor = '#8db600';
			document.getElementById('footerColor').style.backgroundColor = '#9acd00';
			break;
	}
}

function changeBack() {
	document.getElementById('bodyColor').style.backgroundColor = '#FFFFFF';
	document.getElementById('headerColor').style.backgroundColor = 'rgba(175,0,0,1)';
	document.getElementById('footerColor').style.backgroundColor = 'rgba(175,0,0,1)';
}

