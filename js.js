var greenWorth = [Math.floor(Math.random() * 25)], blueWorth = [Math.floor(Math.random() * 25)], redWorth = [Math.floor(Math.random() * 25)], whiteWorth = [Math.floor(Math.random() * 25)];
var score = 0, wins = 0, losses = 0;
var number = number = [Math.floor(Math.random() * 200)];
var totalScore = 0;

function blueFunction() {
    score = Number(score) + Number(blueWorth);
    document.getElementById("score").textContent= score;

    if (score == 125) {
        alert("YOU WIN!!!")
        wins++;
        document.getElementById("win").textContent= wins;
    }
    else if (score > 125) {
        alert("Wow, never seen someone so bad at math")
        losses++
        document.getElementById("loss").textContent= losses;
    }
}

function redFunction() {
    score = Number(score) + Number(redWorth);
    document.getElementById("score").textContent= score;

    if (score == number) {
        alert("YOU WIN!!!")
        wins++;
        document.getElementById("win").textContent= wins;
    }
    else if (score > number) {
        alert("Wow, never seen someone so bad at math")
        losses++
        document.getElementById("loss").textContent= losses;
    }
}

function greenFunction() {
    score = Number(score) + Number(greenWorth);
    document.getElementById("score").textContent= score;

    if (score == number) {
        alert("YOU WIN!!!")
        wins++;
        document.getElementById("win").textContent= wins;
    }
    else if (score > number) {
        alert("Wow, never seen someone so bad at math")
        losses++
        document.getElementById("loss").textContent= losses;
    }
}

function whiteFunction() {
    score = Number(score) + Number(whiteWorth);
    document.getElementById("score").textContent= score;

    if (score == number) {
        alert("YOU WIN!!!")
        wins++;
        document.getElementById("win").textContent= wins;
    }
    else if (score > number) {
        alert("Wow, never seen someone so bad at math")
        losses++
        document.getElementById("loss").textContent= losses;
    }
}

// Sending the variables to the HTML
document.getElementById("score").textContent= score;
document.getElementById("rndNum").textContent= number;
document.getElementById("win").textContent= wins;
document.getElementById("loss").textContent= losses;