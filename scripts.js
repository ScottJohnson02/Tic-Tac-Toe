//

let grid = ["", "", "", "", "", "", "", "", "", ];
/*
1. create grid
2. make each item clickable
3. add an X in the propper array spot
4. change the text in the clicked item to an x and prevent the box from clicking again
*/

document.getElementById("item0").addEventListener("click", event => {
  grid[0] = "x";
  console.log(grid);
  document.getElementById("item0").innerHTML = grid[0];
});
document.getElementById("item1").addEventListener("click", event => {
  grid[1] = "x";
  console.log(grid);
  document.getElementById("item1").innerHTML = grid[1];
});
document.getElementById("item2").addEventListener("click", event => {
  grid[2] = "x";
  console.log(grid);
  document.getElementById("item2").innerHTML = grid[2];
});
document.getElementById("item3").addEventListener("click", event => {
  grid[3] = "x";
  console.log(grid);
  document.getElementById("item3").innerHTML = grid[3];
});
document.getElementById("item4").addEventListener("click", event => {
  grid[4] = "x";
  console.log(grid);
  document.getElementById("item4").innerHTML = grid[4];
});
document.getElementById("item5").addEventListener("click", event => {
  grid[5] = "x";
  console.log(grid);
  document.getElementById("item5").innerHTML = grid[5];
});
document.getElementById("item6").addEventListener("click", event => {
  grid[6] = "x";
  console.log(grid);
  document.getElementById("item6").innerHTML = grid[6];
});
document.getElementById("item7").addEventListener("click", event => {
  grid[7] = "x";
  console.log(grid);
  document.getElementById("item7").innerHTML = grid[7];
});
document.getElementById("item8").addEventListener("click", event => {
  grid[8] = "x";
  console.log(grid);
  document.getElementById("item8").innerHTML = grid[8];
});