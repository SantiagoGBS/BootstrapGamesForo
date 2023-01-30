
let body=document.getElementById("bodycopo");
let firts=document.getElementById("firts");
let second=document.getElementById("second");
let third=document.getElementById("third");

var i = 0;
const crearCopo=()=>{
    let copo=document.createElement("IMG");
    copo.classList.add("copo");
    copo.setAttribute("src", "../assets/images/copofinal.png")
    copo.style.cssText=`left:${Math.random()*95}vw;top:5vh`
    copo.addEventListener("animationend",()=>{
        body.removeChild(copo);
    })
    body.appendChild(copo)
    setTimeout(() => {
        // if (i<10) {
        //     body.appendChild(copo)
        //     i++;
        //     console.log(i)
        //     crearCopo()
        // }
        crearCopo()
    }, 1000);
}

window.addEventListener("DOMContentLoaded", (event)=>{
    crearCopo()
})

firts.addEventListener("animationend", ()=>{
    setTimeout(()=>{
        second.classList.toggle("mov")
    },2000)

})
second.addEventListener("animationend", ()=>{
    setTimeout(()=>{
        third.classList.toggle("mov")
    },2000)

})