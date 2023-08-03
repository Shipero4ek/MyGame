const checkBtn = document.querySelector(".checkbtn");
const nav = document.querySelector("nav")

checkBtn.addEventListener('click', function(){
    nav.classList.toggle("show-menu");
});
const plusBtn = document.querySelector(".plus");
const minusBtn = document.querySelector(".minus");
const multiplyBtn = document.querySelector(".multiply");
const addingRandomBtn = document.querySelector(".plus-random-number");
const startingBtn = document.querySelector(".new-game");
const triesElement = document.querySelector(".tries");
let ourNumber = 0;
let triesNumber = 0;

startingBtn.addEventListener('click', function(){
    ourNumber = 0;
    triesNumber=0;
    updateNumber();
    checkWin();
});

plusBtn.addEventListener('click', function(){
    ourNumber += 1;
    triesNumber+=1;
    updateNumber();
    checkWin();
});

minusBtn.addEventListener('click', function(){
    ourNumber -= 1;
    triesNumber+=1;
    updateNumber();
    checkWin();
});

multiplyBtn.addEventListener('click', function(){
    ourNumber *= 5;
    triesNumber+=1;
    updateNumber();
    checkWin();
});

addingRandomBtn.addEventListener('click', function(){
    const randomNum = Math.floor(Math.random() * 10) + 1;
    triesNumber+=1;
    ourNumber += randomNum;
    updateNumber();
    checkWin();
});

function updateNumber() {
    const numberElement = document.querySelector(".our-number");
    numberElement.textContent = ourNumber;
}
const winDiv = document.querySelector(".if-win");
function checkWin() {
    if (ourNumber === 100) {
      winDiv.style.display = "flex";
      triesElement.textContent = `You had used : ${triesNumber} tries`;
    } else {
      winDiv.style.display = "none";
    }
  }
  const closeBtn = document.querySelector(".close-window");

  closeBtn.addEventListener("click", function () {
    winDiv.style.display = "none";
});
const tryAgainBtn = document.querySelector(".try-again");

tryAgainBtn.addEventListener("click", function () {
  winDiv.style.display = "none";
  ourNumber = 0;
    triesNumber=0;
    updateNumber();
});
