$(document).ready(function(){
	var makeGrids = function(size){
		var gridSize = Math.floor(500 / size);
		// create the grid
		for (var i = 0; i < size; i++) {
			$('#grid').append('<div class="row"></div>');
		}
		for (var j = 0; j < size; j++) {
				$('.row').append('<div class="grid"></div>');
		}
		// give squares appropriate size
		$('.grid').css({'width': gridSize + 'px',
						 'height': gridSize + 'px'});
		colorGrid();	
	};
	// color the grid
	var colorGrid = function(){
		var color = $('#changeColor').val();
		$('.grid').on('mouseenter', function(){
			$(this).css({'background-color': color,
						  'border-color': color});
		});
	};	
	$('#changeColor').change(function(){
		colorGrid();
	});
	// make default grid
	makeGrids(16);
	colorGrid();
	// reset the grid
	$('button').click(function(){
		var gridNum = prompt("How many squares per row? Enter only positive integers below 101.", "16");
		var size = parseInt(gridNum);
		// check for positive integer
		if(isNaN(size) === true || size < 1 || size > 100){
			alert('Invalid input! Try again.');
		}else{
			$('#grid').empty();
			makeGrids(size);
		}	
	});
});