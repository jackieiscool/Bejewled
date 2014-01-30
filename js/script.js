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
  	for (var x = 0; x < 8; x ++) {
  		for (var y = 0; y < 8; y ++) {
  			var cell = new Cell(x, y);
  			this.cells.push(cell);
  		}
  	}
  	console.log(this.cells);
  }

  // Table for game board renders
  Board.prototype.renderBoard = function() {
  	for (var i = 0; i < 8; i++) {
  		var template = _.template("<tr " + "id=row_" + i + " ></tr>");
  		$(".board").append(template);
  	};
  }

  // Cell Class
  function Cell(xCoordinate, yCoordinate) {
  	//  The cell keeps track of it's x and y coordinates
    this.xCoordinate = xCoordinate;
    this.yCoordinate = yCoordinate;
    this.color = this.chooseColor();
    this.square = this.createSquare();
  }

  // Here a color will be chosen for the board
  Cell.prototype.chooseColor = function() {

  }

  // Here an underscore template (<td>) will be created and attached to cell
  // These templates will be attached to <table> created in board
  Cell.prototype.createSquare = function() {

  }


  var game = new Game();
});