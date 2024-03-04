console.log('activo'); //activa la consola

document.querySelector('#botoncasa1').addEventListener('click', traerdatos); //selecciona el evento y activa traerdatos

function traerdatos(){ //funcion traer datos
    

    const xhttp = new XMLHttpRequest(); //crea una constante

    xhttp.open('GET','../Jsons/casa1.json', true); //llama al json

    xhttp.send(); //lo envía 

    xhttp.onreadystatechange = function(){ //ejecuta los datos
        if(this.readyState == 4 && this.status == 200){
           
            let datos = JSON.parse(this.responseText);
           
            let res = document.querySelector('#respuesta1');
            res.innerHTML = ''; 

            for(let item of datos){
                res.innerHTML = `
                <div>
                   <p>${item.domicilio}</p>
                   <p>${item.DescripcionGeneral}</p>
                   <p>${item.Estado}</p>
                   <p>${item.Valor}</p>
                </div>
                `             
            }
        }
    }
}