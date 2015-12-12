var columns = 16;
var rows = 16;
var $row = $('<div />', {class: 'row'});
var $square = $('<div />', {class: 'square'});

function makeGrid() {
	for (var i = 0; i < columns; i++) {
		$row.append($square.clone());
	}
	for (var i = 0; i < rows; i++) {
		$('body').append($row.clone());
	}
}

$(document).ready(function() {
	makeGrid();

	$('.square').mouseenter(function() {
		$(this).css('background-color', 'blue');
	});

	$('button').click(function() {
		$('.square').empty();
	});
});