/*
1. create grid
2. make each item clickable
3. add an X in the propper array spot
4. change the text in the clicked item to an x and prevent the box from clicking again
*/
let turn = (Math.floor(Math.random() * 2));

let grid = ['', '', '', '', '', '', '', '', '']
let players = ['X', 'O'];

document.body.addEventListener("click", myFunction);
document.getElementById("reset").addEventListener("click", reset);
document.getElementById("turnCount").textContent = 'Player ' + players[turn] + ' is up';


function reset() {
  window.location.reload();
}

function myFunction() {
  if (turn == 0) {
    console.log(event.target.textContent)
    if (event.target.nodeName == "BUTTON") {
      console.log(event.target.textContent)
      if (event.target.textContent == '') {
        event.target.textContent = 'X';
        grid[event.target.id] = 'X'
        winCheck('X');
        turn++;
        document.getElementById("turnCount").textContent = 'Player ' + players[turn] + ' is up';
      }
    }
  } else {
    console.log(event.target.textContent)
    if (event.target.nodeName == "BUTTON") {
      if (event.target.textContent == '') {
        event.target.textContent = 'O';
        grid[event.target.id] = 'O';
        winCheck('O');
        turn--;
        document.getElementById("turnCount").textContent = 'Player ' + players[turn] + ' is up';
      }
    }
  }
}


function winCheck(value) {

  if (grid[0] == value && grid[1] == value && grid[2] == value) {
    alert(value + " wins")
    document.body.removeEventListener("click", myFunction);
  } else if (
    grid[3] === value && grid[4] === value && grid[5] === value) {
    alert(value + " wins")
    document.body.removeEventListener("click", myFunction);
  } else if (grid[6] === value && grid[7] === value && grid[8] === value) {
    alert(value + " wins")
    document.body.removeEventListener("click", myFunction);
  } else if (grid[0] === value && grid[3] === value && grid[6] === value) {
    alert(value + " wins")
    document.body.removeEventListener("click", myFunction);
  } else if (grid[1] === value && grid[4] === value && grid[7] === value) {
    alert(value + " wins")
    document.body.removeEventListener("click", myFunction);
  } else if (grid[2] === value && grid[5] === value && grid[8] === value) {
    alert(value + " wins")
    document.body.removeEventListener("click", myFunction);
  } else if (grid[0] === value && grid[4] === value && grid[8] === value) {
    alert(value + " wins")
    document.body.removeEventListener("click", myFunction);
  } else if (grid[2] === value && grid[4] === value && grid[6] === value) {
    alert(value + " wins")
    document.body.removeEventListener("click", myFunction);
  } else if (grid[0] != '' && grid[1] != '' && grid[2] != '' && grid[3] != '' && grid[4] != '' && grid[5] != '' && grid[6] != '' && grid[7] != '' && grid[8] != '') {
    alert('no winner')
  } else {
    console.log('no winner')
  }
}