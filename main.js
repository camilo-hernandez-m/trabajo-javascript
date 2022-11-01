addEventListener("DOMContentLoaded", (e)=>{
    const data = {
        Traditional: {
            0: [90, 100],
            1: [80, 89],
            2: [70, 79],
            3: [60, 69],
            4: [1, 59],
            5: [0, 0],
        },        
        Point_Range: {
            0: [12, 14],
            1: [9, 11],
            2: [6, 8],
            3: [3, 5],
            4: [1, 2],
            5: [0, 0],
        },
        Letter: {
            0: ['A'],
            1: ['B'],
            2: ['C'],
            3: ['D'],
            4: ['E'],
            5: ['F'],
        },
        SBG_Rating: {
            0: [4],
            1: [3],
            2: [2],
            3: [1],
            4: [0],
            5: [0],
        },
        Proficiency_level_witch_standard: {
            0: ['Exceeds proficiency'],
            1: ['Demonstrates proficiency'],
            2: ['Approaches proficiency'],
            3: ['Falls well below proficiency'],
            4: ['Lacks all proficiency'],
            5: ['No attempt made'],
        },
    }
    
    let mychek = document.querySelector('#selecion');
    
    mychek.addEventListener("click", (e)=>{
        let myinput = document.querySelector('input[name="nota"]');

        if(e.target.checked && e.target.value == "Traditional"){
            myinput.placeholder = "Ingrese la nota de 0 - 100";
        }else if(e.target.checked && e.target.value == "Point_Range"){
            myinput.placeholder = "Ingrese la nota de 0 - 14";
        }

    })

    
    let myform = document.querySelector("#myForm");
    let ventane = document.querySelector("dialog");
    let btnClose = document.querySelector("#close");
    myform.addEventListener("submit", (e)=>{
        e.preventDefault();
        let dataInput = Object.fromEntries(new FormData(e.target));
        for(let val in data[dataInput.scale]){
            if(data[dataInput.scale][val][0] <= dataInput.nota && data[dataInput.scale][val][1] >= dataInput.nota){
                ventane.showModal();
                let myTabla = document.querySelector("tbody");
                myTabla.innerHTML = "";
                myTabla.insertAdjacentHTML("beforeend",`
                    <tr>
                        <td>${data["Traditional"][val].join("-")}</td>
                        <td>${data["Point_Range"][val].join("-")}</td>
                        <td>${data["Letter"][val]}</td>
                        <td>${data["SBG_Rating"][val]}</td>
                        <td>${data["Proficiency_level_witch_standard"][val]}</td>
                    </tr>
                    <tr>
                        <td colspan="5">${(val == 0) ? "Querido usuario se gano un viaje a <b>Cancún</b>" : (val == 1) ? "Querido usuario se gano unas voletas para Cine Colombia para ver la pelicula de <b>Black Adam</b>" : ""}</td>
                    </tr>
                `);
            }
        }
    })
    btnClose.addEventListener("click", (e)=>{
        ventane.close();
    })


})