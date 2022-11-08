addEventListener("DOMContentLoaded",(e)=>{



let n = document.querySelector("#N")
let resultado = ""
let numeros = document.querySelector("#numeros")
let suma = 0
let res= document.querySelector("#resultados")

numeros.addEventListener("submit",(e)=>{
    e.preventDefault();
    let datosEntrada = Object.fromEntries(new FormData(e.target));
    for (let s = 1; s < datosEntrada.N; s++){
        if(datosEntrada.N % s == 0){
            suma+=s
        }
    }
    if(datosEntrada.N == suma){
        resultado = "Es perfecto"
        suma = 0
    }
    else{
        resultado = "No es perfecto"
        suma = 0
    }
    res.innerHTML = ""
    res.insertAdjacentHTML("beforeend",`
    <h2> ${datosEntrada.N + ' ' + resultado} </h2>
    `);
    })
})