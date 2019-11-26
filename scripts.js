/*
1. create grid
2. make each item clickable
3. add an X in the propper array spot
4. change the text in the clicked item to an x and prevent the box from clicking again
*/
let turn = 0;
let grid = ['', '', '', '', '', '', '', '', '']


function winCheck(value) {

  if (grid[0] == value && grid[1] == value && grid[2] == value) {
    alert(value + " wins")
  } else if (
    grid[3] === value && grid[4] === value && grid[5] === value) {
    alert(value + " wins")
  } else if (grid[6] === value && grid[7] === value && grid[8] === value) {
    alert(value + " wins")
  } else {
    console.log('no winner')
  }
}

document.body.addEventListener("click", event => {
  if (turn == 0) {
    if (event.target.nodeName == "BUTTON") {
      if (event.target.textContent == '') {
        console.log("Clicked", event.target.textContent);
        event.target.textContent = 'X';
        console.log(event.target.id)
        grid[event.target.id] = 'X'
        winCheck('X');
        console.log('test')
        turn++;
      }
    }
  } else {
    if (event.target.nodeName == "BUTTON") {

      if (event.target.textContent == '') {
        console.log("Clicked", event.target.textContent);
        event.target.textContent = 'O';
        console.log(event.target.id)
        grid[event.target.id] = 'O';
        winCheck('O');
        turn--;
      }
    }
  }
});