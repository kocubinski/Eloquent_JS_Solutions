/* Chess board

Write a program that creates a string that represents an 8×8 grid, using newline characters to separate lines. At each position of the grid there is either a space or a “#” character. The characters should form a chess board.

Passing this string to console.log should show something like this:

 # # # #
# # # #
 # # # #
# # # #
 # # # #
# # # #
 # # # #
# # # #
 */
function print_chess_board(counter) {
  function even_line() {
    console.log(" # # # #");
  }

  function odd_line() {
    console.log("# # # #");
  }
  if (counter % 2 === 0) {
    even_line();
  } else {
    odd_line();
  }
}

for (var i = 0; i < 8; i++) {
  print_chess_board(i);
}

/* When you have a program that generates this pattern, define a variable size = 8 and change the program so that it works for any size, outputting a grid of the given width and height. */

var even_line_immutable = " #";
var odd_line_immutable = "# ";
var even_line = "";
var odd_line = "";
var pattern = "";

function create_lines(width) {
  even_line = "";
  odd_line = "";
  pattern = "";

  for (var i = 0; i < (width); i++) {
    if (i % 2 === 0) {
      even_line += even_line_immutable;
    } else {
      odd_line += odd_line_immutable;
    }
  }
  return pattern = even_line + "\n" + odd_line + "\n";
}

function print_chess_board(dimensions) {
  create_lines(dimensions);
  for (var i = 0; i < (dimensions / 2); i++) {
    console.log(pattern);
  }
}

print_chess_board(8);
print_chess_board(20);
