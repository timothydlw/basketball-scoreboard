let homeScoreNumber = 0
let guestScoreNumber = 0
let periodNumber = 0

let homeScoreEl = document.getElementById("home-score-number")
let guestScoreEl = document.getElementById("guest-score-number")
let periodNumberEl = document.getElementById("period-number")
let guestFouls = document.getElementById("guest-fouls")
let homeFouls = document.getElementById("home-fouls")

homeScoreEl.innerText = homeScoreNumber
guestScoreEl.innerText = guestScoreNumber
periodNumberEl.innerText = periodNumber

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
    periodNumber = 0
    guestScoreEl.innerText = guestScoreNumber
    homeScoreEl.innerText = homeScoreNumber
    periodNumberEl.innerText = periodNumber
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

function newPeriod() {
    periodNumber += 1
    periodNumberEl.innerText = periodNumber
}

function foulHighlight() {
    guestFouls.style.color = "";
    homeFouls.style.color = "";

    guestFouls.style.color = "red";
    homeFouls.style.color = "red";
}