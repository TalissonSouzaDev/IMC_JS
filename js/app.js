const btnsubmit =  document.querySelector("#submit");
const altura =  document.querySelector("#altura");
const peso =  document.querySelector("#peso");
let  span =  document.getElementById("container-imc")


btnsubmit.addEventListener("click",(e)=>{
    e.preventDefault()
    span.innerHTML = ""
    WriteLineOption(altura.value,peso.value)

})

    function WriteLineOption(alturaImc,pesoImc)
    {
       
            let imc =  parseFloat(pesoImc) / (parseFloat(alturaImc) * parseFloat(alturaImc))
            imc = imc.toFixed(1)
            console.log(imc)

            var messagem = ""
           if(imc < 19)
           {
            messagem =  "Você esta muito abaixo do peso"
            span.style.backgroundColor  = "#9fc5e8"
           }
           else if(imc > 18.5 && imc <= 25.9)
           {
            messagem =  "Você esta no peso adequado"
            span.style.backgroundColor  = "#93c47d"
           }
           else if(imc >= 25 && imc <= 29.9)
           {
            messagem =  "Você esta no sobrepeso"
            span.style.backgroundColor  = "#ffe599"

           }
           else if(imc >= 30 && imc <= 34.9)
           {
            messagem =  "Você esta na obesidade grau 1"
            span.style.backgroundColor  = "#e69138"
         
          
           }
           else if(imc >= 35 && imc <=39.9)
           {
            messagem =  "Você esta na obesidade grau 2"
            span.style.backgroundColor  = "#dd4e1c"
         
          
           }
           else
           {
            messagem =  "Você esta na obesidade extrema"
            span.style.backgroundColor  = "#c7381e"
         
           } 
           altura.value = ""
           peso.value = ""
            span.innerHTML = `<span>sua media atual é ${imc} ${messagem}</span>`

     
    }

