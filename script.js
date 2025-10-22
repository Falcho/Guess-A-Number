let min = 1;
let max = 100;
let guess;

const question = document.getElementById("question");
const message = document.getElementById("message");
const history = document.getElementById("history")

const startBtn = document.getElementById("btn_start");
const lowerBtn = document.getElementById("lower");
const higherBtn = document.getElementById("higher");
const correctBtn = document.getElementById("correct");

startBtn.addEventListener("click", start);
lowerBtn.addEventListener("click", () => handleAnswer("lower"))
higherBtn.addEventListener("click", () => handleAnswer("higher"))
correctBtn.addEventListener("click", () => handleAnswer("correct"))

lowerBtn.style.display = "none";
higherBtn.style.display = "none";
correctBtn.style.display = "none";

function start() {
    min = 1;
    max = 100;
    startBtn.style.display = "none";
    lowerBtn.style.display = "inline-block";
    higherBtn.style.display = "inline-block";
    correctBtn.style.display = "inline-block";
    message.textContent = "";
    history.innerHTML = "";
    makeGuess()
}

function makeGuess(){
    if(min > max){
        question.textContent = "Noget gik galt. Prøv igen"
        return;
    }
    guess = Math.floor((min + max) / 2);
    question.textContent = `Er dit tal ${guess}?`
    appendHistory(`Tidligere gæt: ${guess}`);

}

function appendHistory(text) {
    const p = document.createElement("p");
    p.textContent = text;
    history.appendChild(p);
}

function handleAnswer(type){
    if (type === "lower"){
        max = guess - 1;
        makeGuess();
    }else if (type === "higher"){
        min = guess + 1;
        makeGuess();
    }else if (type === "correct"){
        question.textContent = `Dit tal er ${guess}`;
        message.textContent = "Tryk 'Start' for et nyt spil"
        appendHistory(`Korrekt gæt: ${guess}`);
        lowerBtn.style.display = "none";
        higherBtn.style.display = "none";
        correctBtn.style.display = "none";
        startBtn.style.display = "inline-block";
    }
}

/*
while(true)
{
    guess = Math.floor((min + max)/2);

    let answer = make_guess(guess);

    if (answer === "for højt") 
    {
        max = guess - 1;
    }else if(answer === "for lavt")
    {
        min = guess + 1;
    } else 
    {
        console.log("korrekt! Tallet var " + guess);
        break;
    }
}*/