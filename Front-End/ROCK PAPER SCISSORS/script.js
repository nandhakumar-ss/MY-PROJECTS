const computerChoiceDisplay = document.getElementById('computer-choice')
const userChoiceDisplay = document.getElementById('user-choice')
const resultDisplay = document.getElementById('result-space')
const buttonSelector = document.querySelectorAll('button')

let userValue
let computerValue

const rpsArray = [`<img src="PNG's/rock.png" alt="ROCK" >`,
                `<img src="PNG's/paper.png" alt="PAPER" >`,
                `<img src="PNG's/scissor.png" alt="SCISSOR" >`,
                `<img src="PNG's/won.png" alt="WON" >`,
                `<img src="PNG's/lose.png" alt="LOST" >`,
                `<img src="PNG's/draw.png" alt="DRAW" >`]

buttonSelector.forEach( element => element.addEventListener('click', (e) => {
    userValue = e.target.id
    userValue === 'ROCK' ? userChoiceDisplay.innerHTML = rpsArray[0] 
                        : userValue === 'PAPER' ? userChoiceDisplay.innerHTML = rpsArray[1]
                        : userChoiceDisplay.innerHTML = rpsArray[2]
    computerGenerator()
}))
function computerGenerator(){
    computerValue = Math.floor(Math.random()*3)
    computerChoiceDisplay.innerHTML = rpsArray[computerValue]
    resultFunction()
}
function resultFunction() {
    
    if (computerValue===0 && userValue==='PAPER') {
        resultDisplay.innerHTML = rpsArray[4]
    }
    else if (computerValue===0 && userValue==='SCISSOR') {
        resultDisplay.innerHTML = rpsArray[4]
    }
    else if (computerValue===1 && userValue==='SCISSOR') {
        resultDisplay.innerHTML = rpsArray[3]
    }
    else if (computerValue===1 && userValue==='ROCK') {
        resultDisplay.innerHTML = rpsArray[3]
    }
    else if (computerValue===2 && userValue==='ROCK') {
        resultDisplay.innerHTML = rpsArray[3]
    }
    else if (computerValue===2 && userValue==='PAPER') {
        resultDisplay.innerHTML = rpsArray[4]
    }
    else{
        resultDisplay.innerHTML = rpsArray[5]
    }
    
}