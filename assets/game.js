var targetNumber = Math.floor(Math.random() * 101 + 19);
$("#number-to-guess").text(targetNumber);

var currentScore = 0;
$("#current-score").text(currentScore);

var wins = 0;
$("#wins").text("Succesful days: " + wins);

var losses = 0;
$("#losses").text("Ripped bags: " + losses);

function winFunction() {

};

$("#crystal1").on("click", function () {
    currentScore += 1;
    console.log(currentScore);
    $("#current-score").text(currentScore);

    if (currentScore === targetNumber) {
        currentScore = 0;
        targetNumber = Math.floor(Math.random() * 101 + 19);
        wins += 1;
        $("#current-score").text(currentScore);
        $("#number-to-guess").text(targetNumber);
        $("#wins").text("Succesful days: " + wins);
    };
});

$("#crystal2").on("click", function () {
    currentScore += 2;
    console.log(currentScore);
    $("#current-score").text(currentScore);

    if (currentScore === targetNumber) {
        currentScore = 0;
        targetNumber = Math.floor(Math.random() * 101 + 19);
        wins += 1;
        $("#wins").text("Succesful days: " + wins);
    };
});

$("#crystal3").on("click", function () {
    currentScore += 3;
    console.log(currentScore);
    $("#current-score").text(currentScore);

    if (currentScore === targetNumber) {
        currentScore = 0;
        targetNumber = Math.floor(Math.random() * 101 + 19);
        wins += 1;
        $("#wins").text("Succesful days: " + wins);
    };
});

$("#crystal4").on("click", function () {
    currentScore += 10;
    console.log(currentScore);
    $("#current-score").text(currentScore);

    if (currentScore === targetNumber) {
        currentScore = 0;
        targetNumber = Math.floor(Math.random() * 101 + 19);
        wins += 1;
        $("#wins").text("Succesful days: " + wins);
    };


});


