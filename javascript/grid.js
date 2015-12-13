// function builds a grid
function createGrid(x, z) {
	for (var rows = 0; rows < x; rows++) {
		for (var columns = 0; columns < z; columns++) {
			$('#container').append('<div class="grid"></div>');
		};
	};
	$('.grid').width(960/x);
	$('.grid').height(960/x);
};

// function to clear grid
function clearGrid() {
	$('.grid').remove();
};

// prompt user to select new grid dimension
function refreshGrid() {
	var z = prompt("Enter new grid rows");
	var y = prompt("Enter new grid columns");
	clearGrid();
	createGrid(z, y);
}

// create grid on page load
$('document').ready(function() {
	createGrid(16, 16);

	$('.grid').mouseover(function() {
		$(this).css('background-color', 'blue');
	});

	$('button').click(function() {
		refreshGrid();

		$('.grid').mouseover(function() {
		$(this).css('background-color', 'blue');
		});
	});
});
