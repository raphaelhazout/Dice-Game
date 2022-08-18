var randomNumber1 = Math.floor(Math.random()*6) + 1; // random number bitween 1-6
var randomNumber2 = Math.floor(Math.random()*6) + 1; // random number bitween 1-6


var randomFirstDiceImg = "images/dice"+ randomNumber1 + ".png"; // -> images/dice(1-6).png
var randomSecondDiceImg = "images/dice"+ randomNumber2 + ".png"; // -> images/dice(1-6).png


document.querySelectorAll("img")[0].setAttribute("src",randomFirstDiceImg); //setting the new first dice
document.querySelectorAll("img")[1].setAttribute("src",randomSecondDiceImg); //setting the new second dice

if(randomNumber1 > randomNumber2)
{
    document.querySelector("h1").innerHTML = "🚩 Player 1 wins!";

}
else if (randomNumber1===randomNumber2)
{
    document.querySelector("h1").innerHTML = "Draw!";
}
else
{
    document.querySelector("h1").innerHTML = "Player 2 wins!🚩";

}