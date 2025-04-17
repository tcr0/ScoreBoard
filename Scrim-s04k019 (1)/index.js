let homeScore = 0;
let guestScore = 0;
let homeScoreBtnOne = document.getElementById("score-btn-one");
let homeScoreBtnTwo = document.getElementById("score-btn-two");
let homeScoreBtnThree = document.getElementById("score-btn-three");
let homeScoreElement = document.getElementById("home-score");
let guestScoreElement = document.getElementById("guest-score");
let newGameScoreElmenet = document.getElementById("newgame-btn");

homeScoreElement.textContent = homeScore;
guestScoreElement.textContent = guestScore;

function resetScore() {
  homeScore = 0;
  guestScore = 0;
  homeScoreElement.textContent = homeScore;
  guestScoreElement.textContent = guestScore;
}

function incrementHomeScore() {
  homeScore += 1;
  homeScoreElement.textContent = homeScore;
}

function incrementGuestScore() {
  guestScore += 1;
  guestScoreElement.textContent = guestScore;
}

function incrementHomeScoreByTwo() {
  homeScore += 2;
  homeScoreElement.textContent = homeScore;
}

function incrementHomeScoreByThree() {
  homeScore += 3;
  homeScoreElement.textContent = homeScore;
}

function incrementGuestScoreByTwo() {
  guestScore += 2;
  guestScoreElement.textContent = guestScore;
}

function incrementGuestScoreByThree() {
  guestScore += 3;
  guestScoreElement.textContent = guestScore;
}
