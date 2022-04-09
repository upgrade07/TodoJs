let addtodoscreen = document.getElementById('addtodo');
let card = document.getElementById('card')
let cardcontainer =  document.getElementById('cardcontainer')
let statusnew = document.getElementById('status')
let input = document.getElementById('userip').value
const tasklist =[]
function addtodo(){
    
    addtodoscreen.style.display = "block"
    
}

function closetodo(){
    
    addtodoscreen.style.display = "none"
}


function add(){
    
    statusnew.style.display = "none"
    addtodoscreen.style.display = "none"
    const tempobj ={
        id : Date.now,
        name : input
    }
    tasklist.push(tempobj)
    console.log(tasklist)
    addtaskonscreen()
    
    

}

function addtaskonscreen(){
    const element = document.createElement("div")
    element.setAttribute("id","card")
    element.innerText=tasklist[tasklist.length-1].name
    cardcontainer.appendChild(element)
}