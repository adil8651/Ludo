var turnNumber = 0;
var turn6 = 0;
var goalTurn = 0;
var restPoint = [1, 9, 14, 22, 27, 35, 40, 48];
var killTurn = 0;
var killed = false;

var rollOn = document.querySelector(".dice");
// to start red pawns
var redStart1 = document.getElementById("red-block1");
var redStarted1 = false;
var redStart2 = document.getElementById("red-block2");
var redStarted2 = false;
var redStart3 = document.getElementById("red-block3");
var redStarted3 = false;
var redStart4 = document.getElementById("red-block4");
var redStarted4 = false;

// to hive term to red pawn
var redStartpawn = false;

// to start yellow pawns
var yellowStart1 = document.getElementById("yellow-block1");
var yellowStarted1 = false;
var yellowStart2 = document.getElementById("yellow-block2");
var yellowStarted2 = false;
var yellowStart3 = document.getElementById("yellow-block3");
var yellowStarted3 = false;
var yellowStart4 = document.getElementById("yellow-block4");
var yellowStarted4 = false;

// to hive term to yellow pawn
var yellowStartpawn = false;

var img1 = document.createElement("img");
var img2 = document.createElement("img");
var img3 = document.createElement("img");
var img4 = document.createElement("img");
var img5 = document.createElement("img");
var img6 = document.createElement("img");

var red1 = document.createElement("img");
var red2 = document.createElement("img");
var red3 = document.createElement("img");
var red4 = document.createElement("img");
var green1 = document.createElement("img");
var green2 = document.createElement("img");
var green3 = document.createElement("img");
var green4 = document.createElement("img");
var yellow1 = document.createElement("img");
var yellow2 = document.createElement("img");
var yellow3 = document.createElement("img");
var yellow4 = document.createElement("img");
var blue1 = document.createElement("img");
var blue2 = document.createElement("img");
var blue3 = document.createElement("img");
var blue4 = document.createElement("img");

img1.src = "img/1.png";
img2.src = "img/2.png";
img3.src = "img/3.png";
img4.src = "img/4.png";
img5.src = "img/5.png";
img6.src = "img/6.png";

red1.src = "img/red.png";
red2.src = "img/red.png";
red3.src = "img/red.png";
red4.src = "img/red.png";
green1.src = "img/green.png";
green2.src = "img/green.png";
green3.src = "img/green.png";
green4.src = "img/green.png";
yellow1.src = "img/yellow.png";
yellow2.src = "img/yellow.png";
yellow3.src = "img/yellow.png";
yellow4.src = "img/yellow.png";
blue1.src = "img/blue.png";
blue2.src = "img/blue.png";
blue3.src = "img/blue.png";
blue4.src = "img/blue.png";

red1.id = "red1";
red2.id = "red2";
red3.id = "red3";
red4.id = "red4";
green1.id = "green1";
green2.id = "green2";
green3.id = "green3";
green4.id = "green4";
yellow1.id = "yellow1";
yellow2.id = "yellow2";
yellow3.id = "yellow3";
yellow4.id = "yellow4";
blue1.id = "blue1";
blue2.id = "blue2";
blue3.id = "blue3";
blue4.id = "blue4";

function redTurn() {
  redStartpawn = true;
  yellowStartpawn = false;
  redStarted1 = false;
  redStarted2 = false;
  redStarted3 = false;
  redStarted4 = false;

  red1.style.zIndex = "1";
  red2.style.zIndex = "1";
  red3.style.zIndex = "1";
  red4.style.zIndex = "1";

  yellow1.style.zIndex = "0";
  yellow2.style.zIndex = "0";
  yellow3.style.zIndex = "0";
  yellow4.style.zIndex = "0";

  yellowStarted1 = true;
  yellowStarted2 = true;
  yellowStarted3 = true;
  yellowStarted4 = true;
}
function yellowTurn() {
  redStartpawn = false;
  yellowStartpawn = true;
  yellowStarted1 = false;
  yellowStarted2 = false;
  yellowStarted3 = false;
  yellowStarted4 = false;

  yellow1.style.zIndex = "1";
  yellow2.style.zIndex = "1";
  yellow3.style.zIndex = "1";
  yellow4.style.zIndex = "1";

  red1.style.zIndex = "0";
  red2.style.zIndex = "0";
  red3.style.zIndex = "0";
  red4.style.zIndex = "0";

  redStarted1 = true;
  redStarted2 = true;
  redStarted3 = true;
  redStarted4 = true;
}

// these variable will assign to every pawn
var random;
var rolled = true;

function roll() {
  random = Math.floor(Math.random() * 6) + 1;
  if (random === 1) {
    rollOn.appendChild(img1);
  } else if (random === 2) {
    rollOn.appendChild(img2);
  } else if (random === 3) {
    rollOn.appendChild(img3);
  } else if (random === 4) {
    rollOn.appendChild(img4);
  } else if (random === 5) {
    rollOn.appendChild(img5);
  } else if (random === 6) {
    rollOn.appendChild(img6);
  }
  // rolled only be true when the player take hise move
  rolled = false;
  turn();
}
function turn() {
  // to change turn
  if (turnNumber < 2 && turn6 === 0) {
    turnNumber++;
  } else if (turnNumber === 2 && turn6 === 0) {
    turnNumber = 1;
  } else if (turn6 > 0) {
    turnNumber = turn6;
    turn6 = 0;
  } else if (goalTurn > 0) {
    turnNumber = goalTurn;
    goalTurn = 0;
  }
  if (random === 6) {
    turn6 = turnNumber;
  }
  if (turnNumber === 1) {
    rollOn.style.backgroundColor = "red";
  } else if (turnNumber === 2) {
    rollOn.style.backgroundColor = "yellow";
  }
}

function diceRoll() {
  if (rolled === true) {
    roll();
  }
  if (turnNumber === 1) {
    redTurn();
  } else if (turnNumber === 2) {
    yellowTurn();
  }
  if (killTurn > 0) {
    turnNumber = killTurn;
    killTurn = 0;
    killed = false;
  }
}

rollOn.addEventListener("click", function () {
  diceRoll();
});
// Function to Kill with Red
function rKill1() {
  if (restPoint.indexOf(redPosition1) === -1) {
    if (redPosition1 === yellowPosition1 && thirdFace1 === true) {
      alert("Red Pawn 1 Kill Yellow Pawn 1");
      yellowPosition1 = 27;
      yPosition1.removeChild(yellow1);
      yellowUse1 = false;
      yellowStart1.appendChild(yellow1);
      killed = true;
    } else if (redPosition1 === yellowPosition2 && thirdFace2 === true) {
      alert("Red Pawn 1 Kill Yellow Pawn 2");
      yellowPosition2 = 27;
      yPosition2.removeChild(yellow2);
      yellowUse2 = false;
      yellowStart2.appendChild(yellow2);
      killed = true;
    } else if (redPosition1 === yellowPosition3 && thirdFace3 === true) {
      alert("Red Pawn 1 Kill Yellow Pawn 3");
      yellowPosition3 = 27;
      yPosition3.removeChild(yellow3);
      yellowUse3 = false;
      yellowStart3.appendChild(yellow3);
      killed = true;
    } else if (redPosition1 === yellowPosition4 && thirdFace4 === true) {
      alert("Red Pawn 1 Kill Yellow Pawn 4");
      yellowPosition4 = 27;
      yPosition4.removeChild(yellow4);
      yellowUse4 = false;
      yellowStart4.appendChild(yellow4);
      killed = true;
    }
    if (killed === true) {
      killTurn = 1;
      turn();
    }
  }
}
function rKill2() {
  if (restPoint.indexOf(redPosition2) === -1) {
    if (redPosition2 === yellowPosition1 && thirdFace1 === true) {
      alert("Red Pawn 2 Kill Yellow Pawn 1");
      yellowPosition1 = 27;
      yPosition1.removeChild(yellow1);
      yellowUse1 = false;
      yellowStart1.appendChild(yellow1);
      killed = true;
    } else if (redPosition2 === yellowPosition2 && thirdFace2 === true) {
      alert("Red Pawn 2 Kill Yellow Pawn 2");
      yellowPosition2 = 27;
      yPosition2.removeChild(yellow2);
      yellowUse2 = false;
      yellowStart2.appendChild(yellow2);
      killed = true;
    } else if (redPosition2 === yellowPosition3 && thirdFace3 === true) {
      alert("Red Pawn 2 Kill Yellow Pawn 3");
      yellowPosition3 = 27;
      yPosition3.removeChild(yellow3);
      yellowUse3 = false;
      yellowStart3.appendChild(yellow3);
      killed = true;
    } else if (redPosition2 === yellowPosition4 && thirdFace4 === true) {
      alert("Red Pawn 2 Kill Yellow Pawn 4");
      yellowPosition4 = 27;
      yPosition4.removeChild(yellow4);
      yellowUse4 = false;
      yellowStart4.appendChild(yellow4);
      killed = true;
    }
    if (killed === true) {
      killTurn = 1;
      turn();
    }
  }
}
function rKill3() {
  if (restPoint.indexOf(redPosition3) === -1) {
    if (redPosition3 === yellowPosition1 && thirdFace1 === true) {
      alert("Red Pawn 3 Kill Yellow Pawn 1");
      yellowPosition1 = 27;
      yPosition1.removeChild(yellow1);
      yellowUse1 = false;
      yellowStart1.appendChild(yellow1);
      killed = true;
    } else if (redPosition3 === yellowPosition2 && thirdFace2 === true) {
      alert("Red Pawn 3 Kill Yellow Pawn 2");
      yellowPosition2 = 27;
      yPosition2.removeChild(yellow2);
      yellowUse2 = false;
      yellowStart2.appendChild(yellow2);
      killed = true;
    } else if (redPosition3 === yellowPosition3 && thirdFace3 === true) {
      alert("Red Pawn 3 Kill Yellow Pawn 3");
      yellowPosition3 = 27;
      yPosition3.removeChild(yellow3);
      yellowUse3 = false;
      yellowStart3.appendChild(yellow3);
      killed = true;
    } else if (redPosition3 === yellowPosition4 && thirdFace4 === true) {
      alert("Red Pawn 3 Kill Yellow Pawn 4");
      yellowPosition4 = 27;
      yPosition4.removeChild(yellow4);
      yellowUse4 = false;
      yellowStart4.appendChild(yellow4);
      killed = true;
    }
    if (killed === true) {
      killTurn = 1;
      turn();
    }
  }
}
function rKill4() {
  if (restPoint.indexOf(redPosition4) === -1) {
    if (redPosition4 === yellowPosition1 && thirdFace1 === true) {
      alert("Red Pawn 4 Kill Yellow Pawn 1");
      yellowPosition1 = 27;
      yPosition1.removeChild(yellow1);
      yellowUse1 = false;
      yellowStart1.appendChild(yellow1);
      killed = true;
    } else if (redPosition4 === yellowPosition2 && thirdFace2 === true) {
      alert("Red Pawn 4 Kill Yellow Pawn 2");
      yellowPosition2 = 27;
      yPosition2.removeChild(yellow2);
      yellowUse2 = false;
      yellowStart2.appendChild(yellow2);
      killed = true;
    } else if (redPosition4 === yellowPosition3 && thirdFace3 === true) {
      alert("Red Pawn 4 Kill Yellow Pawn 3");
      yellowPosition3 = 27;
      yPosition3.removeChild(yellow3);
      yellowUse3 = false;
      yellowStart3.appendChild(yellow3);
      killed = true;
    } else if (redPosition4 === yellowPosition4 && thirdFace4 === true) {
      alert("Red Pawn 4 Kill Yellow Pawn 4");
      yellowPosition4 = 27;
      yPosition4.removeChild(yellow4);
      yellowUse4 = false;
      yellowStart4.appendChild(yellow4);
      killed = true;
    }
    if (killed === true) {
      killTurn = 1;
      turn();
    }
  }
}

// this code is to choose the red pawn
var redUse1 = false;
redStart1.addEventListener("click", function () {
  if (redUse1 === false) {
    if (redStarted1 === false && random === 6) {
      redStart1.innerHTML = "";
      rollOn.removeChild(rollOn.lastChild);
      //test
      position1 = document.getElementById("p1");
      position1.appendChild(red1);
      //test
      rolled = true;
      redUse1 = true;
    } else if (redStarted1 === false && random < 6) {
      rollOn.removeChild(rollOn.lastChild);
      rolled = true;
    }
  }
});
// this code is to choose the red pawn
var redUse2 = false;
redStart2.addEventListener("click", function () {
  if (redUse2 === false) {
    if (redStarted2 === false && random === 6) {
      redStart2.innerHTML = "";
      rollOn.removeChild(rollOn.lastChild);
      //test
      position2 = document.getElementById("p1");
      position2.appendChild(red2);
      //test
      rolled = true;
      redUse2 = true;
    } else if (redStarted2 === false && random < 6) {
      rollOn.removeChild(rollOn.lastChild);
      rolled = true;
    }
  }
});
// this code is to choose the red pawn
var redUse3 = false;
redStart3.addEventListener("click", function () {
  if (redUse3 === false) {
    if (redStarted3 === false && random === 6) {
      redStart3.innerHTML = "";
      rollOn.removeChild(rollOn.lastChild);
      //test
      position3 = document.getElementById("p1");
      position3.appendChild(red3);
      //test
      rolled = true;
      redUse3 = true;
    } else if (redStarted3 === false && random < 6) {
      rollOn.removeChild(rollOn.lastChild);
      rolled = true;
    }
  }
});
var redUse4 = false;
redStart4.addEventListener("click", function () {
  if (redUse4 === false) {
    if (redStarted4 === false && random === 6) {
      redStart4.innerHTML = "";
      rollOn.removeChild(rollOn.lastChild);
      //test
      position4 = document.getElementById("p1");
      position4.appendChild(red4);
      //test
      rolled = true;
      redUse4 = true;
    } else if (redStarted4 === false && random < 6) {
      rollOn.removeChild(rollOn.lastChild);
      rolled = true;
    }
  }
});

red1.addEventListener("click", function () {
  if (redStartpawn === true && redUse1 === true) {
    if (redGoal1 + random <= 6) {
      rollOn.removeChild(rollOn.lastChild);
      run();
      rolled = true;
      rKill1();
    } else if (redGoal1 + random > 6) {
      alert("can't roll");
      // temporarily
      rollOn.removeChild(rollOn.lastChild);
      rolled = true;
    }
  }
});
red2.addEventListener("click", function () {
  if (redStartpawn === true && redUse2 === true) {
    if (redGoal2 + random <= 6) {
      rollOn.removeChild(rollOn.lastChild);
      run2();
      rolled = true;
      rKill2();
    } else if (redGoal2 + random > 6) {
      alert("can't roll");
      // temporarily
      rollOn.removeChild(rollOn.lastChild);
      rolled = true;
    }
  }
});
red3.addEventListener("click", function () {
  if (redStartpawn === true && redUse3 === true) {
    if (redGoal3 + random <= 6) {
      rollOn.removeChild(rollOn.lastChild);
      run3();
      rolled = true;
      rKill3();
    } else if (redGoal3 + random > 6) {
      alert("can't roll");
      // temporarily
      rollOn.removeChild(rollOn.lastChild);
      rolled = true;
    }
  }
});
red4.addEventListener("click", function () {
  if (redStartpawn === true && redUse4 === true) {
    if (redGoal4 + random <= 6) {
      rollOn.removeChild(rollOn.lastChild);
      run4();
      rolled = true;
      rKill4();
    } else if (redGoal4 + random > 6) {
      alert("can't roll");
      // temporarily
      rollOn.removeChild(rollOn.lastChild);
      rolled = true;
    }
  }
});
// this code should let player choose the pawn

var redPosition1 = 1;
var redGoal1 = 0;
var position1 = 0;
function run() {
  redPosition1 = redPosition1 + random;
  redGoal1 = redPosition1 - 51;
  if (redPosition1 <= 51) {
    position1 = document.getElementById("p" + redPosition1);
    position1.appendChild(red1);
  } else if (redPosition1 <= 57 && redGoal1 < 6) {
    position1 = document.getElementById("r" + redGoal1);
    position1.appendChild(red1);
  } else if (redGoal1 === 6) {
    position1 = document.getElementById("r6");
    position1.appendChild(red1);
    alert("Red pawn 1 reached home!");
    goalTurn = 1;
    turn();
  }
}

// this code should let player choose the pawn

var redPosition2 = 1;
var redGoal2 = 0;
var position2 = 0;
function run2() {
  redPosition2 = redPosition2 + random;
  redGoal2 = redPosition2 - 51;
  if (redPosition2 <= 51) {
    position2 = document.getElementById("p" + redPosition2);
    position2.appendChild(red2);
  } else if (redPosition2 <= 57 && redGoal2 < 6) {
    position2 = document.getElementById("r" + redGoal2);
    position2.appendChild(red2);
  } else if (redGoal2 === 6) {
    position2 = document.getElementById("r6");
    position2.appendChild(red2);
    alert("Red pawn 2 reached home!");
    goalTurn = 1;
    turn();
  }
}
// this code should let player choose the pawn

var redPosition3 = 1;
var redGoal3 = 0;
var position3 = 0;
function run3() {
  redPosition3 = redPosition3 + random;
  redGoal3 = redPosition3 - 51;
  if (redPosition3 <= 51) {
    position3 = document.getElementById("p" + redPosition3);
    position3.appendChild(red3);
  } else if (redPosition3 <= 57 && redGoal3 < 6) {
    position3 = document.getElementById("r" + redGoal3);
    position3.appendChild(red3);
  } else if (redGoal3 === 6) {
    position3 = document.getElementById("r6");
    position3.appendChild(red3);
    alert("Red pawn 3 reached home!");
    goalTurn = 1;
    turn();
  }
}
// this code should let player choose the pawn

var redPosition4 = 1;
var redGoal4 = 0;
var position4 = 0;
function run4() {
  redPosition4 = redPosition4 + random;
  redGoal4 = redPosition4 - 51;
  if (redPosition4 <= 51) {
    position4 = document.getElementById("p" + redPosition4);
    position4.appendChild(red4);
  } else if (redPosition4 <= 57 && redGoal4 < 6) {
    position4 = document.getElementById("r" + redGoal4);
    position4.appendChild(red4);
  } else if (redGoal4 === 6) {
    position4 = document.getElementById("r6");
    position4.appendChild(red4);
    alert("Red pawn 4 reached home!");
    goalTurn = 1;
    turn();
  }
}
// functionn to kill with yellow1
function yKill1() {
  if (restPoint.indexOf(yellowPosition1) === -1) {
    if (yellowPosition1 === redPosition1) {
      alert("Yellow pawn 1 killed red pawn 1!");
      position1.removeChild(red1);
      redPosition1 = 1;
      redUse1 = false;
      redStart1.appendChild(red1);
      killed = true;
    } else if (yellowPosition1 === redPosition2) {
      alert("Yellow pawn 1 killed red pawn 2!");
      position2.removeChild(red2);
      redPosition2 = 1;
      redUse2 = false;
      redStart2.appendChild(red2);
      killed = true;
    } else if (yellowPosition1 === redPosition3) {
      alert("Yellow pawn 1 killed red pawn 3!");
      position3.removeChild(red3);
      redPosition3 = 1;
      redUse3 = false;
      redStart3.appendChild(red3);
      killed = true;
    } else if (yellowPosition1 === redPosition4) {
      alert("Yellow pawn 1 killed red pawn 4!");
      position4.removeChild(red4);
      redPosition4 = 1;
      redUse4 = false;
      redStart4.appendChild(red4);
      killed = true;
    }
    if (killed === true) {
      killTurn = 2;
      turn();
    }
  }
}
function yKill2() {
  if (restPoint.indexOf(yellowPosition2) === -1) {
    if (yellowPosition2 === redPosition1) {
      alert("Yellow pawn 2 killed red pawn 1!");
      position1.removeChild(red1);
      redPosition1 = 1;
      redUse1 = false;
      redStart1.appendChild(red1);
      killed = true;
    } else if (yellowPosition2 === redPosition2) {
      alert("Yellow pawn 2 killed red pawn 2!");
      position2.removeChild(red2);
      redPosition2 = 1;
      redUse2 = false;
      redStart2.appendChild(red2);
      killed = true;
    } else if (yellowPosition2 === redPosition3) {
      alert("Yellow pawn 2 killed red pawn 3!");
      position3.removeChild(red3);
      redPosition3 = 1;
      redUse3 = false;
      redStart3.appendChild(red3);
      killed = true;
    } else if (yellowPosition2 === redPosition4) {
      alert("Yellow pawn 2 killed red pawn 4!");
      position4.removeChild(red4);
      redPosition4 = 1;
      redUse4 = false;
      redStart4.appendChild(red4);
      killed = true;
    }
    if (killed === true) {
      killTurn = 2;
      turn();
    }
  }
}
function yKill3() {
  if (restPoint.indexOf(yellowPosition3) === -1) {
    if (yellowPosition3 === redPosition1) {
      alert("Yellow pawn 3 killed red pawn 1!");
      position1.removeChild(red1);
      redPosition1 = 1;
      redUse1 = false;
      redStart1.appendChild(red1);
      killed = true;
    } else if (yellowPosition3 === redPosition2) {
      alert("Yellow pawn 3 killed red pawn 2!");
      position2.removeChild(red2);
      redPosition2 = 1;
      redUse2 = false;
      redStart2.appendChild(red2);
      killed = true;
    } else if (yellowPosition3 === redPosition3) {
      alert("Yellow pawn 3 killed red pawn 3!");
      position3.removeChild(red3);
      redPosition3 = 1;
      redUse3 = false;
      redStart3.appendChild(red3);
      killed = true;
    } else if (yellowPosition3 === redPosition4) {
      alert("Yellow pawn 3 killed red pawn 4!");
      position4.removeChild(red4);
      redPosition4 = 1;
      redUse4 = false;
      redStart4.appendChild(red4);
      killed = true;
    }
    if (killed === true) {
      killTurn = 2;
      turn();
    }
  }
}
function yKill4() {
  if (restPoint.indexOf(yellowPosition3) === -1) {
    if (yellowPosition4 === redPosition1) {
      alert("Yellow pawn 4 killed red pawn 1!");
      position1.removeChild(red1);
      redPosition1 = 1;
      redUse1 = false;
      redStart1.appendChild(red1);
      killed = true;
    } else if (yellowPosition4 === redPosition2) {
      alert("Yellow pawn 4 killed red pawn 2!");
      position2.removeChild(red2);
      redPosition2 = 1;
      redUse2 = false;
      redStart2.appendChild(red2);
      killed = true;
    } else if (yellowPosition4 === redPosition3) {
      alert("Yellow pawn 4 killed red pawn 3!");
      position3.removeChild(red3);
      redPosition3 = 1;
      redUse3 = false;
      redStart3.appendChild(red3);
      killed = true;
    } else if (yellowPosition4 === redPosition4) {
      alert("Yellow pawn 4 killed red pawn 4!");
      position4.removeChild(red4);
      redPosition4 = 1;
      redUse4 = false;
      redStart4.appendChild(red4);
      killed = true;
    }
    if (killed === true) {
      killTurn = 2;
      turn();
    }
  }
}
var yellowUse1 = false;
yellowStart1.addEventListener("click", function () {
  if (yellowUse1 === false) {
    if (yellowStarted1 === false && random === 6) {
      yellowStart1.innerHTML = "";
      rollOn.removeChild(rollOn.lastChild);
      //test
      yPosition1 = document.getElementById("p27");
      yPosition1.appendChild(yellow1);
      //test
      rolled = true;
      yellowUse1 = true;
    } else if (yellowStarted1 === false && random < 6) {
      rollOn.removeChild(rollOn.lastChild);
      rolled = true;
    }
  }
});

var yellowPosition1 = 27;
var yellowGoal1 = 0;
var yPosition1 = 0;
var secondFace1 = false;
var thirdFace1 = false;
function yRun1() {
  yellowPosition1 = yellowPosition1 + random;
  yellowGoal1 = yellowPosition1 - 25;
  if (yellowPosition1 <= 52 && secondFace1 === false) {
    yPosition1 = document.getElementById("p" + yellowPosition1);
    yPosition1.appendChild(yellow1);
  } else if (yellowPosition1 <= 25) {
    yPosition1 = document.getElementById("p" + yellowPosition1);
    yPosition1.appendChild(yellow1);
  } else if (yellowPosition1 > 52) {
    yellowPosition1 = yellowPosition1 - 52;
    yellowGoal1 = yellowPosition1 - 25;
    secondFace1 = true;
    yPosition1 = document.getElementById("p" + yellowPosition1);
    yPosition1.appendChild(yellow1);
  } else if (yellowPosition1 >= 25 && yellowGoal1 < 6) {
    if (secondFace1 === true) {
      yPosition1 = document.getElementById("y" + yellowGoal1);
      yPosition1.appendChild(yellow1);
      thirdFace1 = true;
    }
  } else if (yellowGoal1 === 6) {
    yPosition1 = document.getElementById("y6");
    yPosition1.appendChild(yellow1);
    alert("Yellow pawn 1 reached home!");
    goalTurn = 2;
    turn();
  }
}

yellow1.addEventListener("click", function () {
  if (yellowStartpawn === true && yellowUse1 === true) {
    if (secondFace1 === false) {
      rollOn.removeChild(rollOn.lastChild);
      yRun1();
      rolled = true;
      yKill1();
    } else if (yellowGoal1 + random <= 6) {
      rollOn.removeChild(rollOn.lastChild);
      yRun1();
      rolled = true;
      yKill1();
    } else if (secondFace1 === true && yellowGoal1 + random > 6) {
      alert("can't roll");
      // temporarily
      rollOn.removeChild(rollOn.lastChild);
      rolled = true;
    }
  }
});

var yellowUse2 = false;
yellowStart2.addEventListener("click", function () {
  if (yellowUse2 === false) {
    if (yellowStarted2 === false && random === 6) {
      yellowStart2.innerHTML = "";
      rollOn.removeChild(rollOn.lastChild);
      //test
      yPosition2 = document.getElementById("p27");
      yPosition2.appendChild(yellow2);
      //test
      rolled = true;
      yellowUse2 = true;
    } else if (yellowStarted2 === false && random < 6) {
      rollOn.removeChild(rollOn.lastChild);
      rolled = true;
    }
  }
});

var yellowPosition2 = 27;
var yellowGoal2 = 0;
var yPosition2 = 0;
var secondFace2 = false;
var thirdFace2 = false;
function yRun2() {
  yellowPosition2 = yellowPosition2 + random;
  yellowGoal2 = yellowPosition2 - 25;
  if (yellowPosition2 <= 52 && secondFace2 === false) {
    yPosition2 = document.getElementById("p" + yellowPosition2);
    yPosition2.appendChild(yellow2);
  } else if (yellowPosition2 <= 25) {
    yPosition2 = document.getElementById("p" + yellowPosition2);
    yPosition2.appendChild(yellow2);
  } else if (yellowPosition2 > 52) {
    yellowPosition2 = yellowPosition2 - 52;
    yellowGoal2 = yellowPosition2 - 25;
    secondFace2 = true;
    yPosition2 = document.getElementById("p" + yellowPosition2);
    yPosition2.appendChild(yellow2);
  } else if (yellowPosition2 >= 25 && yellowGoal2 < 6) {
    if (secondFace2 === true) {
      yPosition2 = document.getElementById("y" + yellowGoal2);
      yPosition2.appendChild(yellow2);
      thirdFace2 = true;
    }
  } else if (yellowGoal2 === 6) {
    yPosition2 = document.getElementById("y6");
    yPosition2.appendChild(yellow2);
    alert("Yellow pawn 2 reached home!");
    goalTurn = 2;
    turn();
  }
}

yellow2.addEventListener("click", function () {
  if (yellowStartpawn === true && yellowUse2 === true) {
    if (secondFace2 === false) {
      rollOn.removeChild(rollOn.lastChild);
      yRun2();
      rolled = true;
      yKill2();
    } else if (yellowGoal2 + random <= 6) {
      rollOn.removeChild(rollOn.lastChild);
      yRun2();
      rolled = true;
      yKill2();
    } else if (secondFace2 === true && yellowGoal2 + random > 6) {
      alert("can't roll");
      // temporarily
      rollOn.removeChild(rollOn.lastChild);
      rolled = true;
    }
  }
});

var yellowUse3 = false;
yellowStart3.addEventListener("click", function () {
  if (yellowUse3 === false) {
    if (yellowStarted3 === false && random === 6) {
      yellowStart3.innerHTML = "";
      rollOn.removeChild(rollOn.lastChild);
      //test
      yPosition3 = document.getElementById("p27");
      yPosition3.appendChild(yellow3);
      //test
      rolled = true;
      yellowUse3 = true;
    } else if (yellowStarted3 === false && random < 6) {
      rollOn.removeChild(rollOn.lastChild);
      rolled = true;
    }
  }
});

var yellowPosition3 = 27;
var yellowGoal3 = 0;
var yPosition3 = 0;
var secondFace3 = false;
var thirdFace3 = false;
function yRun3() {
  yellowPosition3 = yellowPosition3 + random;
  yellowGoal3 = yellowPosition3 - 25;
  if (yellowPosition3 <= 52 && secondFace3 === false) {
    yPosition3 = document.getElementById("p" + yellowPosition3);
    yPosition3.appendChild(yellow3);
  } else if (yellowPosition3 <= 25) {
    yPosition3 = document.getElementById("p" + yellowPosition3);
    yPosition3.appendChild(yellow3);
  } else if (yellowPosition3 > 52) {
    yellowPosition3 = yellowPosition3 - 52;
    yellowGoal3 = yellowPosition3 - 25;
    secondFace3 = true;
    yPosition3 = document.getElementById("p" + yellowPosition3);
    yPosition3.appendChild(yellow3);
  } else if (yellowPosition3 >= 25 && yellowGoal3 < 6) {
    if (secondFace3 === true) {
      yPosition3 = document.getElementById("y" + yellowGoal3);
      yPosition3.appendChild(yellow3);
      thirdFace3 = true;
    }
  } else if (yellowGoal3 === 6) {
    yPosition3 = document.getElementById("y6");
    yPosition3.appendChild(yellow3);
    alert("Yellow pawn 3 reached home!");
    goalTurn = 2;
    turn();
  }
}

yellow3.addEventListener("click", function () {
  if (yellowStartpawn === true && yellowUse3 === true) {
    if (secondFace3 === false) {
      rollOn.removeChild(rollOn.lastChild);
      yRun3();
      rolled = true;
      yKill3();
    } else if (yellowGoal3 + random <= 6) {
      rollOn.removeChild(rollOn.lastChild);
      yRun3();
      rolled = true;
      yKill3();
    } else if (secondFace3 === true && yellowGoal3 + random > 6) {
      alert("can't roll");
      // temporarily
      rollOn.removeChild(rollOn.lastChild);
      rolled = true;
    }
  }
});

var yellowUse4 = false;
yellowStart4.addEventListener("click", function () {
  if (yellowUse4 === false) {
    if (yellowStarted4 === false && random === 6) {
      yellowStart4.innerHTML = "";
      rollOn.removeChild(rollOn.lastChild);
      //test
      yPosition4 = document.getElementById("p27");
      yPosition4.appendChild(yellow4);
      //test
      rolled = true;
      yellowUse4 = true;
    } else if (yellowStarted4 === false && random < 6) {
      rollOn.removeChild(rollOn.lastChild);
      rolled = true;
    }
  }
});

var yellowPosition4 = 27;
var yellowGoal4 = 0;
var yPosition4 = 0;
var secondFace4 = false;
var thirdFace4 = false;
function yRun4() {
  yellowPosition4 = yellowPosition4 + random;
  yellowGoal4 = yellowPosition4 - 25;
  if (yellowPosition4 <= 52 && secondFace4 === false) {
    yPosition4 = document.getElementById("p" + yellowPosition4);
    yPosition4.appendChild(yellow4);
  } else if (yellowPosition4 <= 25) {
    yPosition4 = document.getElementById("p" + yellowPosition4);
    yPosition4.appendChild(yellow4);
  } else if (yellowPosition4 > 52) {
    yellowPosition4 = yellowPosition4 - 52;
    yellowGoal4 = yellowPosition4 - 25;
    secondFace4 = true;
    yPosition4 = document.getElementById("p" + yellowPosition4);
    yPosition4.appendChild(yellow4);
  } else if (yellowPosition4 >= 25 && yellowGoal4 < 6) {
    if (secondFace4 === true) {
      yPosition4 = document.getElementById("y" + yellowGoal4);
      yPosition4.appendChild(yellow4);
      thirdFace4 = true;
    }
  } else if (yellowGoal4 === 6) {
    yPosition4 = document.getElementById("y6");
    yPosition4.appendChild(yellow4);
    alert("Yellow pawn 4 reached home!");
    goalTurn = 2;
    turn();
  }
}

yellow4.addEventListener("click", function () {
  if (yellowStartpawn === true && yellowUse4 === true) {
    if (secondFace4 === false) {
      rollOn.removeChild(rollOn.lastChild);
      yRun4();
      rolled = true;
      yKill4();
    } else if (yellowGoal4 + random <= 6) {
      rollOn.removeChild(rollOn.lastChild);
      yRun4();
      rolled = true;
      yKill4();
    } else if (secondFace4 === true && yellowGoal4 + random > 6) {
      alert("can't roll");
      // temporarily
      rollOn.removeChild(rollOn.lastChild);
      rolled = true;
    }
  }
});
