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