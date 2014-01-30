$(document).ready(function() { 

	// Game Class
	function Game() {
		// First a board is created
    var board = new Board();
  }

  // Board Class
  function Board() {
  	// Underscore template renders
    this.renderBoard();
  	// An array stores all the cell objects in the board
  	this.cells = [];
  	// All the cell objects are created
    this.makeCells();
    
  }

  // Makes cell objects and stores to board's cell array
  Board.prototype.makeCells = function() {
  	var idCounter = 0;
  	for (var x = 0; x < 8; x ++) {
  		for (var y = 0; y < 8; y ++) {
  			var cell = new Cell(x, y, idCounter);
  			this.cells.push(cell);
  			idCounter ++;
  		}
  	}
  }

  // Table for game board renders
  Board.prototype.renderBoard = function() {
  	for (var i = 0; i < 8; i++) {
  		var template = _.template("<tr " + "id=row_" + i + " ></tr>");
  		$(".board").append(template);
  	};
  }

  // Cell Class
  function Cell(xCoordinate, yCoordinate, id) {
  	//  The cell keeps track of it's x and y coordinates
    this.xCoordinate = xCoordinate;
    this.yCoordinate = yCoordinate;
    this.id = id;
    this.color = this.chooseColor();
    this.square = this.createSquare();
    this.click();
  }

  // Randomly selects color for square
  Cell.prototype.chooseColor = function() {
  	var colors = ["red", "green", "orange", "blue", "white", "purple", "yellow"];
  	var color = colors[Math.floor(Math.random()*colors.length)];
  	return color;
  }

  // Here an underscore template (<td>) will be created and attached to cell
  // These templates will be attached to <table> created in board
  Cell.prototype.createSquare = function() {
  	var template = _.template("<td class=" + this.color + " id=num" + this.id + ">" + this.color + "</td>");
  	var row = "#row_" + this.xCoordinate;
  	$(row).append(template);
  }

  // Define what will happen when a square is clicked
  Cell.prototype.click = function() {
  	var id = "#num" + this.id
  	$(id).click( function() {
  		console.log("clicked " + this.id);
  	});
  }

  var game = new Game();
});
