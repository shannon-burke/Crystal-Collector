var targetNumber = Math.floor(Math.random() * 101 + 19);
$("#number-to-guess").text(targetNumber);

var currentScore = 0;
$("#current-score").text(currentScore);

var wins = 0;
$("#wins").text("Succesful days: " + wins);

var losses = 0;
$("#losses").text("Ripped bags: " + losses);

$("#crystal1").on("click", function () {
    currentScore += 1;
    console.log(currentScore);
    $("#current-score").text(currentScore);
});

$("#crystal2").on("click", function () {
    currentScore += 2;
    console.log(currentScore);
    $("#current-score").text(currentScore);
});

$("#crystal3").on("click", function () {
    currentScore += 3;
    console.log(currentScore);
    $("#current-score").text(currentScore);
});

$("#crystal4").on("click", function () {
    currentScore += 4;
    console.log(currentScore);
    $("#current-score").text(currentScore);
});
