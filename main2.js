addEventListener("DOMContentLoaded", (e)=>{
let hor2=document.querySelector('#elint')
let cont=1
hor2.addEventListener("submit",(e)=>{
    e.proventDefault();
    if (cont<=50){
    let datosEntrada = Object.fromEntries(new FormData(e.target))
        let hor = datosEntrada.nhoras
        let valh =5208.33
        let pgh= valh*hor

        let tabla=document.querySelector("tbody");
        tabla.insertAdjacentHTML("beforeend",`
        <tr>
            <td>${cont}</td>
            <td>${hor}</td>
            <td>${valh}</td>
            <td>${pgh}</td>
        </tr>
            `)
            cont++
        }
    })
})

const c = document.querySelector(".container");
const b = document.querySelector("button");

function change() {
  const
    { width: cWidth, height: cHeight } = c.getBoundingClientRect(),
    { width: bWidth, height: bHeight } = b.getBoundingClientRect(),
    i = Math.floor(Math.random() * (cWidth - bWidth)) + 1,
    j = Math.floor(Math.random() * (cHeight - bHeight)) + 1;

  b.style.left = i + "px";
  b.style.top = j + "px";
}

b.addEventListener("click", change);