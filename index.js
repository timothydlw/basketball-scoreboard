let homeScoreNumber = 0
let guestScoreNumber = 0

let homeScoreEl = document.getElementById("home-score-number")
let guestScoreEl = document.getElementById("guest-score-number")

homeScoreEl.innerText = homeScoreNumber
guestScoreEl.innerText = guestScoreNumber

function homeOne() {
    homeScoreNumber += 1
    homeScoreEl.innerText = homeScoreNumber
    highlight()
}

function homeTwo() {
    homeScoreNumber += 2
    homeScoreEl.innerText = homeScoreNumber
    highlight()
}

function homeThree() {
    homeScoreNumber += 3
    homeScoreEl.innerText = homeScoreNumber
    highlight()
}

function guestOne() {
    guestScoreNumber += 1
    guestScoreEl.innerText = guestScoreNumber
    highlight()
}

function guestTwo() {
    guestScoreNumber += 2
    guestScoreEl.innerText = guestScoreNumber
    highlight()
}

function guestThree() {
    guestScoreNumber += 3
    guestScoreEl.innerText = guestScoreNumber
    highlight()
}

function newGame() {
    guestScoreNumber = 0
    homeScoreNumber = 0
    guestScoreEl.innerText = guestScoreNumber
    homeScoreEl.innerText = homeScoreNumber
}

function highlight() {

    homeScoreEl.style.color = "";
    guestScoreEl.style.color = "";

    if (homeScoreNumber > guestScoreNumber) {
        homeScoreEl.style.color = "yellow";
    } else if (homeScoreNumber < guestScoreNumber) {
        guestScoreEl.style.color = "yellow";
    }
}