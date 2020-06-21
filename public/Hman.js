const attempts = document.getElementById("attempts"),
word = document.getElementById("word"),
start = document.getElementById("start"),
A = document.getElementById("A"),
B = document.getElementById("B"),
C = document.getElementById("C"),
D = document.getElementById("D"),
E = document.getElementById("E"),
F = document.getElementById("F"),
G = document.getElementById("G"),
H = document.getElementById("H"),
I = document.getElementById("I"),
J = document.getElementById("J"),
K = document.getElementById("K"),
L = document.getElementById("L"),
M = document.getElementById("M"),
N = document.getElementById("N"),
O = document.getElementById("O"),
P = document.getElementById("P"),
Q = document.getElementById("Q"),
R = document.getElementById("R"),
S = document.getElementById("S"),
T = document.getElementById("T"),
U = document.getElementById("U"),
V = document.getElementById("V"),
W = document.getElementById("W"),
X = document.getElementById("X"),
Y = document.getElementById("Y"),
Z = document.getElementById("Z"),
game = document.getElementById("game"),
resultWon = document.getElementById("resultWin"),
resultLost = document.getElementById("resultLost");

let chosen = [];
let guess = [];
const questions = [
    "CUBA",
    "BEIJING",
    "VENICE",
    "BRITAIN",
    "PERU",
    "KENYA",
    "QUEBEC",
    "AFRICA",
    "CARRIBEAN",
    "POLYNESIA",
    "AMERICA",
    "JAPAN",
    "KOREA",
    "HIMALAYAS",
    "PAMIR",
    "AUSTRALIA",
    "MEDITERRANEAN"
]
let remaining = 7;
let toGuess = 0;

attempts.innerHTML = remaining;

start.addEventListener("click", () => {
    game.classList.remove("hide")
    resultLost.classList.add("hide")
    resultWon.classList.add("hide")
    guess= []
    chosen = []
    remaining = 7
    toGuess = 0
    attempts.innerHTML = remaining
    let currentQuestion = questions[Math.floor(Math.random()*questions.length)]
    for ( let i = 0; i < currentQuestion.length; i++ ) 
	{
		chosen.push(currentQuestion[i])
	}
    for ( let i = 0; i < currentQuestion.length; i++ ) 
	{
        guess.push("x")
        toGuess++
	}
    word.innerText = guess
    A.classList.remove('hide')
    B.classList.remove('hide')
    C.classList.remove('hide')
    D.classList.remove('hide')
    E.classList.remove('hide')
    F.classList.remove('hide')
    G.classList.remove('hide')
    H.classList.remove('hide')
    I.classList.remove('hide')
    J.classList.remove('hide')
    K.classList.remove('hide')
    L.classList.remove('hide')
    M.classList.remove('hide')
    N.classList.remove('hide')
    O.classList.remove('hide')
    P.classList.remove('hide')
    Q.classList.remove('hide')
    R.classList.remove('hide')
    S.classList.remove('hide')
    T.classList.remove('hide')
    U.classList.remove('hide')
    V.classList.remove('hide')
    W.classList.remove('hide')
    X.classList.remove('hide')
    Y.classList.remove('hide')
    Z.classList.remove('hide')
    Y.classList.remove('hide')
})
const letter = (letterName, idea) => {idea.addEventListener("click", () => {
    let correct = false;
    for (let index = 0; index < chosen.length; index++) {
    
    if (chosen[index]===letterName){guess[index]=letterName
    word.innerText = guess
correct = true
toGuess--}
idea.classList.add('hide')
}
if (correct===false){remaining--
attempts.innerHTML = remaining}   
if (remaining<=0){
game.classList.add('hide')
resultLost.classList.remove('hide')} 
if (toGuess===0){
game.classList.add('hide')
resultWon.classList.remove('hide')}
})
}
letter("A",A);
letter("B",B);
letter("C",C);
letter("D",D);
letter("E",E);
letter("F",F);
letter("G",G);
letter("H",H);
letter("I",I);
letter("J",J);
letter("K",K);
letter("L",L);
letter("M",M);
letter("N",N);
letter("O",O);
letter("P",P);
letter("Q",Q);
letter("R",R);
letter("S",S);
letter("T",T);
letter("U",U);
letter("V",V);
letter("W",W);
letter("X",X);
letter("Y",Y);
letter("Z",Z);