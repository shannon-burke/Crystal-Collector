var targetNumber = Math.floor(Math.random() * 101 + 19);
$("#number-to-guess").text(targetNumber);

var currentScore = 0;
$("#current-score").text(currentScore);

var wins = 0;
$("#wins").text("Succesful days: " + wins);

var losses = 0;
$("#losses").text("Ripped bags: " + losses);

var a = Math.floor(Math.random() * 12 + 1);
var b = Math.floor(Math.random() * 12 + 1);
var c = Math.floor(Math.random() * 12 + 1);
var d = Math.floor(Math.random() * 12 + 1);
console.log(a, b, c, d);

function winOrLossFunction() {
    if (currentScore === targetNumber) {
        currentScore = 0;
        targetNumber = Math.floor(Math.random() * 101 + 19);
        wins += 1;

        a = Math.floor(Math.random() * 12 + 1);
        b = Math.floor(Math.random() * 12 + 1);
        c = Math.floor(Math.random() * 12 + 1);
        d = Math.floor(Math.random() * 12 + 1);
        console.log(a, b, c, d);
    };

    if (currentScore > targetNumber) {
        currentScore = 0;
        targetNumber = Math.floor(Math.random() * 101 + 19);
        losses += 1;

        a = Math.floor(Math.random() * 12 + 1);
        b = Math.floor(Math.random() * 12 + 1);
        c = Math.floor(Math.random() * 12 + 1);
        d = Math.floor(Math.random() * 12 + 1);
        console.log(a, b, c, d);
    };

    $("#number-to-guess").text(targetNumber);
    $("#current-score").text(currentScore);
    $("#wins").text("Succesful days: " + wins);
    $("#losses").text("Ripped bags: " + losses);

};

$("#crystal1").on("click", function () {
    currentScore += a;
    console.log(currentScore);
    $("#current-score").text(currentScore);
    winOrLossFunction();
});

$("#crystal2").on("click", function () {
    currentScore += b;
    console.log(currentScore);
    $("#current-score").text(currentScore);
    winOrLossFunction();
});

$("#crystal3").on("click", function () {
    currentScore += c;
    console.log(currentScore);
    $("#current-score").text(currentScore);
    winOrLossFunction();
});

$("#crystal4").on("click", function () {
    currentScore += d;
    console.log(currentScore);
    $("#current-score").text(currentScore);
    winOrLossFunction();
});