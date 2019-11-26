/*
1. create grid
2. make each item clickable
3. add an X in the propper array spot
4. change the text in the clicked item to an x and prevent the box from clicking again
*/
let turn = 0;

document.body.addEventListener("click", event =>{
  if(turn==0){
    if (event.target.nodeName == "BUTTON") {
      if(event.target.textContent == '') {
        console.log("Clicked", event.target.textContent);
        event.target.textContent = 'X';
        turn++;
      }
    }
  }
  else{
    if (event.target.nodeName == "BUTTON") {
      if(event.target.textContent == '') {
        console.log("Clicked", event.target.textContent);
        event.target.textContent = 'O';
        turn--;
      }
    }
  }
});
