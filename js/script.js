function guessingGame() {
    // catching html elements
    let title = document.querySelector(".title");
    let inputSetter = document.querySelector(".inputSetter");
    let btnSetter = document.querySelector(".btnSetter");
    let errorMessage = document.querySelector(".errorMessage");
    let chancesNumber = document.querySelector(".chancesNumber");

    // player-1's inputfield and button
    let player1 = document.querySelector(".player-1");
    let inputPlayer1 = document.querySelector(".inputPlayer1");
    let btnPlayer1 = document.querySelector(".btnPlayer1");

    // player-2's inputfield and button
    let player2 = document.querySelector(".player-2");
    let inputPlayer2 = document.querySelector(".inputPlayer2");
    let btnPlayer2 = document.querySelector(".btnPlayer2");

    // chance field
    let chance = document.querySelector(".chance");

    // winner field
    let winner = document.querySelector(".winnerMessage");

    let secretNum, n1, n2;
    let chances = 5;

    let player1Wins = false;
    let player2Wins = false;

    // a functio for printing the winner
    function finalResult() {
        title.innerHTML = `Secret number is: ${secretNum}`;
        chance.style.display = "none";
        player2.style.display = "none";
        if (player1Wins && player2Wins) {
            winner.innerHTML = "Both Player wins!";
        }
        else if (player1Wins) {
            winner.innerHTML = "Player-1 wins!";
        }
        else if (player2Wins) {
            winner.innerHTML = "Player-2 wins!";
        }
        else {
            winner.innerHTML = "Number setter wins!";
        }
    }

    chancesNumber.innerHTML = chances;

    // button setter even handling
    btnSetter.addEventListener("click", function () {
        // clearing prevoius error messages
        errorMessage.innerHTML = "";

        secretNum = inputSetter.value;
        inputSetter.value = "";

        if (isNaN(secretNum)) {
            errorMessage.innerHTML = "Please enter a number";
        }
        else if (secretNum < 1 || secretNum > 10) {
            errorMessage.innerHTML = "Enter a number between 1 & 10.";
        }
        else {
            title.innerHTML = "Player-1's turn";
            chance.style.display = "block";
            inputSetter.style.display = "none";
            btnSetter.style.display = "none";
            player1.style.display = "block";
        }
    });



    // player-1's event handling
    btnPlayer1.addEventListener("click", function () {
        // clearing prevoius error messages
        errorMessage.innerHTML = "";

        n1 = inputPlayer1.value;
        inputPlayer1.value = "";

        if (isNaN(n1)) {
            errorMessage.innerHTML = "Please enter a number";
        }
        else if (n1 < 1 || n1 > 10) {
            errorMessage.innerHTML = "Enter a number between 1 & 10.";
        }
        else {
            if (chances > 1) {
                chances--;
                chancesNumber.innerHTML = chances;

                if (n1 == secretNum) {
                    player1Wins = true;
                    title.innerHTML = "Player-2's turn";
                    chances = 5;
                    chancesNumber.innerHTML = chances;
                    player1.style.display = "none";
                    player2.style.display = "block";
                }
            }
            else if (chances == 1) {
                if (n1 == secretNum) {
                    player1Wins = true;
                }

                title.innerHTML = "Player-2's turn";
                chances = 5;
                chancesNumber.innerHTML = chances;
                player1.style.display = "none";
                player2.style.display = "block";
            }
        }
    });

    // player-2's event handling
    btnPlayer2.addEventListener("click", function () {
        // clearing prevoius error messages
        errorMessage.innerHTML = "";

        n2 = inputPlayer2.value;
        inputPlayer2.value = "";

        if (isNaN(n2)) {
            errorMessage.innerHTML = "Please enter a number";
        }
        else if (n2 < 1 || n2 > 10) {
            errorMessage.innerHTML = "Enter a number between 1 & 10.";
        }
        else {
            if (chances > 1) {
                chances--;
                chancesNumber.innerHTML = chances;

                if (n2 == secretNum) {
                    player2Wins = true;
                    finalResult();
                }
            }
            else if(chances == 1) {
                if (n2 == secretNum) {
                    player2Wins = true;
                }
                finalResult();
            }
        }
    });
}


guessingGame();