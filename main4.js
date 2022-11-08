addEventListener("DOMContentLoaded", (e) => {

     let primera = document.querySelector("#ventas");
     let resultados = document.querySelector("#resultados");
     let Venta1 = document.querySelector("#Venta1");
     let Venta2 = document.querySelector("#Venta2");
     let Venta3 = document.querySelector("#Venta3");
     let suldoB = 1000000
    
     ventas.addEventListener("submit", (e) => {
    
      e.preventDefault();
    
     let dataInput = Object.fromEntries(new FormData(e.target));
     
     let Comision1 = Number(dataInput.Venta1) * 0.10
     let Comision2 = Number(dataInput.Venta2) * 0.10
     let Comision3 = Number(dataInput.Venta3) * 0.10
     
     let Comision = Comision1 + Comision2 + Comision3
     let total = suldoB + Comision
     
     resultados.innerHTML = total
     })
     
    })
    