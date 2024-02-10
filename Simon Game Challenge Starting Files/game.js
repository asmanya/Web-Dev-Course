var buttonColours = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var level = 1;

var started = false;
$(document).on("keypress", function () {
    if (!started) {
        started = true;
        gaming();
    }
});

function gaming() {
    $("#level-title").text("Level " + level);
    nextSequence();

    var count = 0;

    $(".btn").off("click").on("click", function () {
        var userChosenColour = this.id;
        playSound(userChosenColour);
        animatePress(userChosenColour);

        if (checkAnswer(userChosenColour, count)) {
            count++;

            if (count === gamePattern.length) {
                // Player completed the sequence, continue the game or level up
                level++;
                count = 0;
                setTimeout(function () {
                    gaming();
                }, 1000);
            }
        } else {
            $("#level-title").text("Game over!");
            playSound(wrong);
            // Additional actions for game over
            resetGame();
        }
    });
}

function nextSequence() {
    var randomNumber = Math.floor(4 * Math.random());
    var randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);

    $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
    playSound(randomChosenColour);
}

function checkAnswer(userChosenColour, count) {
    return userChosenColour === gamePattern[count];
}

function playSound(sound) {
    var audio = new Audio("sounds/" + sound + ".mp3");
    audio.play();
}

function animatePress(currentColor) {
    $("#" + currentColor).addClass("pressed");
    setTimeout(() => {
        $("#" + currentColor).removeClass("pressed");
    }, 100);
}

function resetGame() {
    started = false;
    level = 1;
    gamePattern = [];
}
