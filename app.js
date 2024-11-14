let addbtn=document.getElementById("addbtn")
let title=document.getElementById("title")
let desc=document.getElementById("desc")
let todocontainer=document.getElementById("todocontainer")


addbtn.addEventListener("click", () =>{
    if(title.value=="" || desc.value==""){
        alert("Please fill in all fields")
        return
    }

    let task=document.createElement("div")
    task.classList.add("border","p-3","mycolor","justify-content-between","align-items-center","d-flex")
    for(let i=0;i<task.clientHeight;i++){
        task[i].style.backgroundColor="cyan"
    }

    let ldiv=document.createElement("div")
    let rdiv=document.createElement("div")

    let theading=document.createElement("h3")
    theading.innerText=title.value


    let tdesc=document.createElement("p")
    tdesc.innerText=desc.value

    ldiv.appendChild(theading)
    ldiv.appendChild(tdesc)

    task.appendChild(ldiv)

    let delbtn=document.createElement("button")
    delbtn.innerText="Delete"
    delbtn.classList.add("btn", "btn-danger")

    rdiv.appendChild(delbtn)

    task.appendChild(rdiv)

    todocontainer.appendChild(task)

    desc.value=""
    title.value=""
})