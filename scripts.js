/*
1. create grid
2. make each item clickable
3. add an X in the propper array spot
4. change the text in the clicked item to an x and prevent the box from clicking again
*/
let grid = ["", "", "", "", "", "", "", "", "", ];
let turn = ((Math.floor(Math.random() * 2)));
let retry = false;
document.getElementById("grid-container").addEventListener("click", event => {
  if (turn == 0 && retry == false) {
    divReplace("X")
    turn++;
  } else if (turn == 1 && retry == false) {
    divReplace("O")
    turn--;
  }

});

function divReplace(playerIcon) {
  document.getElementById("item0").addEventListener("click", event => {
    if (grid[0] != "") {
      retry = true;
    } else {
      grid[0] = playerIcon;
      document.getElementById("item0").innerHTML = grid[0];
      retry = false;
    }


  });
  document.getElementById("item1").addEventListener("click", event => {
    if (grid[1] != "") {
      retry = true;
    } else {
      grid[1] = playerIcon;
      document.getElementById("item0").innerHTML = grid[1];
      retry = false;
    }
  });
  document.getElementById("item2").addEventListener("click", event => {
    if (grid[0] != "") {
      retry = true;
    } else {
      grid[0] = playerIcon;
      document.getElementById("item0").innerHTML = grid[0];
      retry = false;
    }
  });
  document.getElementById("item3").addEventListener("click", event => {
    if (grid[0] != "") {
      retry = true;
    } else {
      grid[0] = playerIcon;
      document.getElementById("item0").innerHTML = grid[0];
      retry = false;
    }
  });
  document.getElementById("item4").addEventListener("click", event => {
    if (grid[0] != "") {
      retry = true;
    } else {
      grid[0] = playerIcon;
      document.getElementById("item0").innerHTML = grid[0];
      retry = false;
    }
  });
  document.getElementById("item5").addEventListener("click", event => {
    if (grid[0] != "") {
      retry = true;
    } else {
      grid[0] = playerIcon;
      document.getElementById("item0").innerHTML = grid[0];
      retry = false;
    }
  });
  document.getElementById("item6").addEventListener("click", event => {
    if (grid[0] != "") {
      retry = true;
    } else {
      grid[0] = playerIcon;
      document.getElementById("item0").innerHTML = grid[0];
      retry = false;
    }
  });
  document.getElementById("item7").addEventListener("click", event => {
    if (grid[0] != "") {
      retry = true;
    } else {
      grid[0] = playerIcon;
      document.getElementById("item0").innerHTML = grid[0];
      retry = false;
    }
  });
  document.getElementById("item8").addEventListener("click", event => {
    if (grid[0] != "") {
      retry = true;
    } else {
      grid[0] = playerIcon;
      document.getElementById("item0").innerHTML = grid[0];
      retry = false;
    }
  });
}
