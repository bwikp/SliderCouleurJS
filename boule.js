let rouge = document.querySelector("#rouge");
let bleu = document.querySelector("#bleu");
let vert = document.querySelector("#vert");

let rougeV = document.querySelector("#rougeV")
let bleuV = document.querySelector("#bleuV")
let vertV = document.querySelector("#vertV")
console.log("ok")

let boule1 = document.querySelector("#boule1")
let boule2 = document.querySelector("#boule2")

let position = document.querySelector("#mouv")


boule1.addEventListener("click",()=>{
    boule1.classList.toggle("active")
    letsgo(boule1);

})

boule2.addEventListener("click",()=>{
    boule2.classList.toggle("active")
    letsgo(boule2);
}) 

function letsgo(boule) {

    rouge.addEventListener("input",()=>{
        changeColor(boule);
        })

        bleu.addEventListener("input",()=>{
            changeColor(boule);
            })
            vert.addEventListener("input",()=>{
                changeColor(boule);
                })
                position.addEventListener("input", ()=>{
                    move(boule)
                })
}

function changeColor(boule)
 {    
    if(boule.classList.contains("active"))
    {
    rougeV.value = rouge.value;
    bleuV.value = (bleu.value);
    vertV.value = (vert.value);
    boule.style.backgroundColor = "rgb("+rougeV.value+","+bleuV.value+","+vertV.value+")";
 }
 }
 
 function move(boule) {
    if(boule.classList.contains("active"))
     {
    boule.style.left = position.value+"%"
        console.log(position.value)
        
     }
 }