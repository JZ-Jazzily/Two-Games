let coinValue;
let guess;
let wins = 0;
let losses = 0;
const button = document.querySelectorAll(".button");
const coinImg = document.getElementById("coinImage");
const result = document.getElementById("result");
const winshtml = document.getElementById("wins");
const losseshtml = document.getElementById("losses");

button.forEach(input => {
    input.addEventListener("click", flipCoin)
});

function flipCoin() {
    coinValue = Math.round(Math.random())
    guess = event.target.value;

    // 1 = heads 0 = tails
    if (guess === "Heads") {
        if (coinValue === 1) {
            wins++;
            coinImg.src = "images/heads.jpg"
            result.innerHTML = "You chose Heads <br> The toss was Heads <br> You chose wisely!"
            winshtml.textContent = "Wins = "
            winshtml.textContent += wins;
        }
        else {
            losses++;
            coinImg.src = "images/tails.jpg"
            result.innerHTML = "You chose Heads <br> The toss was Tails <br> Sorry, wrong choice"
            losseshtml.textContent = "Losses = "
            losseshtml.textContent += losses;
        }
    }
    else if (guess == "Tails") {
        if (coinValue === 0) {
            wins++;
            coinImg.src = "images/tails.jpg"
            result.innerHTML = "You chose Tails <br> The toss was Tails <br> You chose wisely!"
            winshtml.textContent = "Wins = "
            winshtml.textContent += wins;
        }
        else {
            losses++;
            coinImg.src = "images/heads.jpg"
            result.innerHTML = "You chose Tails <br> The toss was Heads <br> Sorry, wrong choice"
            losseshtml.textContent = "Losses = "
            losseshtml.textContent += losses;
        }
    }
};