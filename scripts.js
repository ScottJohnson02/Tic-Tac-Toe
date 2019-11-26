/*
1. create grid
2. make each item clickable
3. add an X in the propper array spot
4. change the text in the clicked item to an x and prevent the box from clicking again
*/
let turn = 0;
let grid = ['', '', '', '', '', '', '', '', '']

document.body.addEventListener("click", myFunction);
document.getElementById("reset").addEventListener("click", reset);

function reset() {
  window.location.reload();
}

function myFunction() {
  if (turn == 0) {
    if (event.target.nodeName == "BUTTON") {
      if (event.target.textContent == '') {
        console.log("Clicked", event.target.textContent);
        event.target.textContent = 'X';
        grid[event.target.id] = 'X'
        winCheck('X');
        turn++;
      }
    }
  } else {
    if (event.target.nodeName == "BUTTON") {

      if (event.target.textContent == '') {
        console.log("Clicked", event.target.textContent);
        event.target.textContent = 'O';
        grid[event.target.id] = 'O';
        winCheck('O');
        turn--;
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
  } else {
    console.log('no winner')
  }
}

function myFunction() {
  if (turn == 0) {
    if (event.target.nodeName == "BUTTON") {
      if (event.target.textContent == '') {
        console.log("Clicked", event.target.textContent);
        event.target.textContent = 'X';
        grid[event.target.id] = 'X'
        winCheck('X');
        turn++;
      }
    }
  } else {
    if (event.target.nodeName == "BUTTON") {

      if (event.target.textContent == '') {
        console.log("Clicked", event.target.textContent);
        event.target.textContent = 'O';
        grid[event.target.id] = 'O';
        winCheck('O');
        turn--;
      }
    }
  }
}
document.body.addEventListener("click", myFunction);
