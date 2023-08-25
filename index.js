/* Create a turn element, a boxes array to feed data into a function, and a round counter to help get the strings rotating using loops */
var turn = document.getElementById("turn"),
boxes = document.querySelectorAll("#spaces div"), round = 0;

/*Create a function that takes the winning boxes and adds a "win" class to the selected boxes and changes the CSS for those when they win the round, also have some sort of header that says who wins/loses */
function grabbedWinners(b1, b2, b3) {
b1.classList.add("win");
b2.classList.add("win");
b3.classList.add("win");
turn.style.fontSize = "40px";
turn.innerHTML = `${b1.innerHTML} wins!`
}

/*Create a function that grabs all of the existing boxes and put them into a variable that can be interacted with, using if statements that will grab the boxes with the same innerHTML and putting them through the grabbedWinners function */
function getWinner() {
var box1 = document.getElementById("box1"),
  box2 = document.getElementById("box2"),
  box3 = document.getElementById("box3"),
  box4 = document.getElementById("box4"),
  box5 = document.getElementById("box5"),
  box6 = document.getElementById("box6"),
  box7 = document.getElementById("box7"),
  box8 = document.getElementById("box8"),
  box9 = document.getElementById("box9");

if (box1.innerHTML !== "" && box1.innerHTML === box2.innerHTML && box1.innerHTML === box3.innerHTML) 
  grabbedWinners(box1, box2, box3);

if (box4.innerHTML !== "" && box4.innerHTML === box5.innerHTML && box4.innerHTML === box6.innerHTML)
  grabbedWinners(box4, box5, box6);

if (box7.innerHTML !== "" && box7.innerHTML === box8.innerHTML && box7.innerHTML === box9.innerHTML)
  grabedWinners(box7, box8, box9);

if (box1.innerHTML !== "" && box1.innerHTML === box4.innerHTML && box1.innerHTML === box7.innerHTML)
  grabbedWinners(box1, box4, box7);

if (box2.innerHTML !== "" && box2.innerHTML === box5.innerHTML && box2.innerHTML === box8.innerHTML)
  grabbedWinners(box2, box5, box8);

if (box3.innerHTML !== "" && box3.innerHTML === box6.innerHTML && box3.innerHTML === box9.innerHTML)
  grabbedWinners(box3, box6, box9);

if (box1.innerHTML !== "" && box1.innerHTML === box5.innerHTML && box1.innerHTML === box9.innerHTML)
  grabbedWinners(box1, box5, box9);

if (box3.innerHTML !== "" && box3.innerHTML === box5.innerHTML && box3.innerHTML === box7.innerHTML)
  grabbedWinners(box3, box5, box7);

}


/*create a for loop that loops through the 'boxes' array and have it so when a box is clicked with an empty innerHTML it will select the turns based off of the round number that gets incremented with each click */
for (var i = 0; i < boxes.length; i++) {
boxes[i].onclick = function () {
  if (this.innerHTML !== "X" && this.innerHTML !== "O") {
    if (round % 2 === 0) {
      console.log(round);
      this.innerHTML = "X";
      turn.innerHTML = "O Turn Now";
      getWinner();
      round += 1;

    } else {
      console.log(round);
      this.innerHTML = "O";
      turn.innerHTML = "X Turn Now";
      getWinner();
      round += 1;
    }

     }
if (round >= 9) {
  turn.innerHTML = `DRAW!`;
}
    }
  

};

/*get the button to listen for a click and to replay the game when that button is clicked and that function is run */
document.getElementById('replay').addEventListener('click', replay);

/*make a function that resets all of the interactables and puts it back on stage 1 and will also get rid of the win class CSS effects */
function replay() {
for (var i = 0; i < boxes.length; i++) {
  boxes[i].classList.remove("win");
  boxes[i].innerHTML = "";
  turn.innerHTML = "Play";
  turn.style.fontSize = "25px";
  round = 0;
}

}



