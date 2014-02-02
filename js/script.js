// Testing

$(document).ready(function() { 

	// Game Class
	function Game() {
		// First a board is created
    this.board = new Board();
  }

  // Board Class
  function Board() {
  	// Underscore template renders
    this.renderBoard();
  	// An array stores all the cell objects in the board
  	this.cells = [];
  	// All the cell objects are created
    this.makeCells();

    this.click();
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

  // Swaps to cells
  Board.prototype.swap = function(cell_1, cell_2) {
    // alert("pausing");
    var firstTd = $("#num" + cell_1.id);
    var secondTd = $("#num" + cell_2.id);
    // console.log(firstTd);
    var tempContents = firstTd.contents().detach();
    var class1 = firstTd.attr("class");
    var class2 = secondTd.attr("class");
    firstTd.append(secondTd.contents());
    firstTd.attr( "class", class2 );
    secondTd.append(tempContents);
    secondTd.attr( "class", class1);
  }

  Board.prototype.click = function() {
    var board = this;
    var cells = this.cells;
    $("td").click(function() {
      var id = $(this).attr("id");
      if (id[4]) {
        var position1 = parseInt(id[3] + id[4]);
      }
      else {
        var position1 = parseInt(id[3]);
      };
      var cell_1 = cells[position1];
      $("td").click(function() {
        var id = $(this).attr("id");
        if (id[4]) {
          var position2 = parseInt(id[3] + id[4]);
        }
        else {
          var position2 = parseInt(id[3]);
        };
        var cell_2 = cells[position2];
        board.swap(cell_1, cell_2);
      });
    });
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
    return template;
  }

  // Define what will happen when a square is clicked
  Cell.prototype.click = function() {
  	var id = "#num" + this.id
  	$(id).click( function() {
  		var firstCell = this;
  	});
  }

  var game = new Game();
  // var board = game.board;
  // board.swap(board.cells[0], board.cells[9]);
});
