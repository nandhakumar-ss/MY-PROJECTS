import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js"
import { getDatabase, ref, push, onValue, remove } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js"

const appSettings = {
    databaseURL : "https://realtime-database-a2b16-default-rtdb.firebaseio.com/"
}
const app = initializeApp(appSettings)
const database = getDatabase(app)
const groceriesList = ref(database,"Grocery_Items")

const inputItem = document.getElementById("input-val")
const saveBtn = document.getElementById("save-btn")
const  enteredValues= document.getElementById("item-values")

saveBtn.addEventListener("click",function(){
    let iVal = inputItem.value
    push(groceriesList, iVal)
    clearInputBox()
})

onValue(groceriesList, function(snapshot){
    if(snapshot.exists()){
        let firebaseDb = Object.entries(snapshot.val())
        clearUl()
        for (let i = 0; i < firebaseDb.length; i++) {
            let dbData = firebaseDb[i]
            addGrocery(dbData)
        }
    }
    else{
        enteredValues.innerHTML= "No Items Entered"
    }
})

function clearInputBox(){
    inputItem.value=""
}
function clearUl(){
    enteredValues.innerHTML=""
}

function addGrocery(groceryDb){
    let groceryId = groceryDb[0]
    let groceryItemName = groceryDb[1]

    let itemName = document.createElement("li")
    itemName.textContent = groceryItemName

    itemName.addEventListener("click",function(){
        let deleteIdLoc = ref(database, `Grocery_Items/${groceryId}`)
        remove(deleteIdLoc)
    })
    enteredValues.append(itemName)
}