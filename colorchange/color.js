const buttons = document.querySelectorAll(".button")
//console.log(buttons)
const a = document.querySelector("body")
//console.log(a)

buttons.forEach((buttons)=>{
  console.log(buttons)
  buttons.addEventListener("click",(e)=>{
    console.log(e.target)
   if(e.target.id === "grey"){
     a.style.backgroundColor = e.target.id
   }
   if(e.target.id === "white"){
    a.style.backgroundColor = e.target.id
   }
   if(e.target.id === "blue"){
    a.style.backgroundColor = e.target.id
   }
   if(e.target.id === "yellow"){
    a.style.backgroundColor = e.target.id
   }

  })

})