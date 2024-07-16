const forms = document.querySelector("form")
console.log(forms)

forms.addEventListener("submit", (e)=>{
  e.preventDefault();


  const height = parseInt(document.querySelector("#height").value)
  const weight = parseInt(document.querySelector("#weight").value)


  const result = document.querySelector("#results")

  if(height==="" || isNaN(height) || height < 0 ){
    console.log("invalid height")
  }else if(weight==="" || isNaN(weight) || weight < 0 ){
    console.log("invalid weight")
  }else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2)
    result.innerHTML = `<span>${bmi}</span>`
  }




})
