let linkArr = []

const iBtn = document.getElementById("i-btn")
const saveBtn = document.getElementById("save-btn")
const tabBtn = document.getElementById("tab-btn")
const deleteBtn = document.getElementById("delete-btn")
const innerHtml = document.getElementById("links")
const locStore = JSON.parse(localStorage.getItem("linkArr"))



if (locStore) {
    linkie = locStore
    printLink(linkie)
}

tabBtn.addEventListener("click",function(){
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        linkArr.push(tabs[0].url)
        localStorage.setItem("linkArr",JSON.stringify(linkArr))
        printLink(linkArr)
    })
})

function printLink(arr){
    let temp=""
    for (let i = 0; i < arr.length; i++) {
    
        temp += `<li> 
                    <a target="_blank" href="${arr[i]}" >${arr[i]}
                    </a>
                </li>`
    }
    innerHtml.innerHTML = temp
}

deleteBtn.addEventListener("dblclick",function(){
    localStorage.clear()
    linkArr=[]
    printLink(linkArr)
})

saveBtn.addEventListener("click", function() {
    linkArr.push(iBtn.value)
    iBtn.value=""
    localStorage.setItem("linkArr",JSON.stringify(linkArr))
    printLink(linkArr)
})

