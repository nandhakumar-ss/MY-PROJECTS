const squares = document.querySelectorAll('.square')
const moles = document.querySelectorAll('.mole')
const timer = document.getElementById('timer')
const result = document.getElementById('score')

let score = 0
let countDown = parseInt(prompt('Enter the Time in Seconds...'))
let moleSquareId

function randomMoleGenerator(){
    squares.forEach( square => square.classList.remove('mole'))
    let moleSquare = squares[Math.floor(Math.random()*9)]
    moleSquare.classList.add('mole')
    moleSquareId = moleSquare.id;
}

squares.forEach(square => {
    square.addEventListener('mousedown', function afterClick(){
        if(square.id==moleSquareId){
            score++
        }
    })
})
let moleId = setInterval(randomMoleGenerator, 500)
function timeCounter(){
    countDown--
    timer.textContent = countDown
    result.textContent = score
    if(countDown==0){
        clearInterval(timerId)
        clearInterval(moleId)
        alert('Game is Over... ')
        alert('Your Score is '+ score)
    }
}

let timerId = setInterval(timeCounter, 1000)