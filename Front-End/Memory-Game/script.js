const gameToys = [
    {
        name: 'cheeseburger',
        imgPath: 'images/cheeseburger.png'
    },
    {
        name: 'fries',
        imgPath: 'images/fries.png'
    },
    {
        name: 'hotdog',
        imgPath: 'images/hotdog.png'
    },
    {
        name: 'icecream',
        imgPath: 'images/icecream.png'
    },
    {
        name: 'milkshake',
        imgPath: 'images/milkshake.png'
    },
    {
        name: 'pizza',
        imgPath: 'images/pizza.png'
    },
    {
        name: 'cheeseburger',
        imgPath: 'images/cheeseburger.png'
    },
    {
        name: 'fries',
        imgPath: 'images/fries.png'
    },
    {
        name: 'hotdog',
        imgPath: 'images/hotdog.png'
    },
    {
        name: 'icecream',
        imgPath: 'images/icecream.png'
    },
    {
        name: 'milkshake',
        imgPath: 'images/milkshake.png'
    },
    {
        name: 'pizza',
        imgPath: 'images/pizza.png'
    }
    
]

gameToys.sort( () => 0.5-Math.random())

const gameToysContainer = document.querySelector('.playing-area')
let selectedCardsId = []
let selectedCardsName = []
let collectingCards = []

function addingBlanks(){
    for (let index = 0; index < gameToys.length; index++) {
        const imgElement = document.createElement('img')
        imgElement.setAttribute('src', 'images/blank.png')
        imgElement.setAttribute('data-id', index)
        imgElement.addEventListener('click', selectedChoice)
        gameToysContainer.append(imgElement)
    }
}

function verifyCards(){
    const imgSelector = document.querySelectorAll('img')
    const selectOne = imgSelector[selectedCardsId[0]]
    const selectTwo = imgSelector[selectedCardsId[1]]

    if(selectedCardsId[0] == selectedCardsId[1]){
        alert('YOU HAVE SELECTED THE SAME CARD...')
        imgSelector[selectedCardsId[0]].setAttribute('src', 'images/blank.png')
    }
    else if(selectedCardsName[0] === selectedCardsName[1]){
        alert('YOU HAVE FOUND A MATCH ! ! !')
        selectOne.setAttribute('src', 'images/white.png')
        selectTwo.setAttribute('src', 'images/white.png')
        selectOne.removeEventListener('click', selectedChoice)
        selectTwo.removeEventListener('click', selectedChoice)
        collectingCards.push(selectedCardsName)
    }
    else{
        selectOne.setAttribute('src', 'images/blank.png')
        selectTwo.setAttribute('src', 'images/blank.png')
        alert('OOPS! TRY AGAIN')
    }
    selectedCardsName = []
    selectedCardsId = []
    if(collectingCards.length === gameToys.length/2){
        gameToysContainer.innerHTML = `<p> YOU WON THE GAME </p>` 
    }
}

function selectedChoice(){
    let selectedElement = this.getAttribute('data-id')
    selectedCardsName.push(gameToys[selectedElement].name)
    selectedCardsId.push(selectedElement)
    this.setAttribute('src', gameToys[selectedElement].imgPath)
    if(selectedCardsId.length === 2){
        setTimeout(verifyCards, 500)
    }
}

addingBlanks()