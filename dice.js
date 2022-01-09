// PLAYER1
let randomNumber = Math.ceil(Math.random()*6)

let randomDiceImage = "dice" + randomNumber + ".jpg"

let randomImageSource = "diceimages/" + randomDiceImage

let image = document.querySelectorAll("img")[0]
image.setAttribute("src", randomImageSource)


// PLAYER2
let randomFigure = Math.ceil(Math.random()*6)

let randomfigureImage = "dice" + randomFigure + ".jpg"

let randomFigureSource = "images/" + randomfigureImage

let image = document.querySelectorAll("img")[1]
image.setAttribute("src", randomFigureSource)

if(randomNumber>randomFigure){
    document.querySelector("h1").innerText = "Player1 wins🎈"
} else if(randomFigure>randomNumber){
    document.querySelector("h1").innerText = "Player2 wins🎈"
}else{
    document.querySelector("h1").innerText = "Draw"
}

abcde

