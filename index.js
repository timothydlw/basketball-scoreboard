let homeScoreNumber = 0
let guestScoreNumber = 0

let homeScoreEl = document.getElementById("home-score-number")
let guestScoreEl = document.getElementById("guest-score-number")

homeScoreEl.innerText = homeScoreNumber
guestScoreEl.innerText = guestScoreNumber

function homeOne() {
    homeScoreNumber += 1
    homeScoreEl.innerText = homeScoreNumber
}

function homeTwo() {
    homeScoreNumber += 2
    homeScoreEl.innerText = homeScoreNumber
}

function homeThree() {
    homeScoreNumber += 3
    homeScoreEl.innerText = homeScoreNumber
}

function guestOne() {
    guestScoreNumber += 1
    guestScoreEl.innerText = guestScoreNumber
}

function guestTwo() {
    guestScoreNumber += 2
    guestScoreEl.innerText = guestScoreNumber
}

function guestThree() {
    guestScoreNumber += 3
    guestScoreEl.innerText = guestScoreNumber
}