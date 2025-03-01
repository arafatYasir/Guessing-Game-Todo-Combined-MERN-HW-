function guessingGame(secretNum) {
    // first removing the todo fields
    todoContainer.style.display = "none";
    gameContainer.style.display = "block";

    // catching html elements
    let title = document.querySelector(".title");
    let errorMessage = document.querySelector(".error-message");
    let chancesNumber = document.querySelector(".chancesNumber");
    let chance = document.querySelector(".chance");

    // player-1's inputfield and button
    let player1 = document.querySelector(".player-1");
    let inputPlayer1 = document.querySelector(".inputPlayer1");
    let btnPlayer1 = document.querySelector(".btnPlayer1");

    // player-2's inputfield and button
    let player2 = document.querySelector(".player-2");
    let inputPlayer2 = document.querySelector(".inputPlayer2");
    let btnPlayer2 = document.querySelector(".btnPlayer2");

    // winner field
    let winner = document.querySelector(".winnerMessage");

    let n1, n2, chances = 5;

    // variables to mark winners
    let player1Wins = false;
    let player2Wins = false;

    // a function for printing the winners
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

    // player-1's event handler
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

    // player-2's event handler
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
            else if (chances == 1) {
                if (n2 == secretNum) {
                    player2Wins = true;
                }
                finalResult();
            }
        }
    });
}

// todo stuffs
// catching html elements
let gameContainer = document.querySelector(".game-container");
let todoContainer = document.querySelector(".todo-container");
let taskField = document.querySelector(".task-field");
let addBtn = document.querySelector(".add-btn");
let taskList = document.querySelector(".list");
let errorField = document.querySelector(".todo-error");
let listArr = [];

function displayList() {
    for (let i = 0; i < listArr.length; i++) {
        taskList.innerHTML += `<li>${listArr[i]} <button class="delete">Delete</button></li>`;

        let deleteBtns = document.querySelectorAll(".delete");
        let btnArr = Array.from(deleteBtns);

        for (let j = 0; j < btnArr.length; j++) {
            btnArr[j].addEventListener("click", function () {
                listArr.splice(j, 1);
                taskList.innerHTML = "";

                displayList();
            })
        }
    }
}

addBtn.addEventListener("click", function () {
    // clearing previous error message
    errorField.innerHTML = "";

    // clearing previous list array
    taskList.innerHTML = "";

    // getting the task value
    let task = taskField.value;
    taskField.value = "";

    // checking if it is a number -> then start the game
    if (task.trim() === "") {
        errorField.innerHTML = "Please enter something (text or number).";
    }
    else if (!isNaN(task)) {
        if (task >= 1 && task <= 10) {
            guessingGame(task);
        }
        else {
            errorField.innerHTML = "If you enter a number that must be inside 1 to 10.";
        }
    }
    else {
        listArr.push(task);
        displayList();
    }
});