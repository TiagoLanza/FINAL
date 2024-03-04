console.log('activo');

document.querySelector('#botondepto1').addEventListener('click', traerdatos);

function traerdatos(){
    //console.log('funcion activada');

    const xhttp = new XMLHttpRequest();

    xhttp.open('GET','../Jsons/depto1.json', true);

    xhttp.send();

    xhttp.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            //console.log(this.responseText);
            let datos = JSON.parse(this.responseText);
            //console.log(datos);
            let res = document.querySelector('#respuesta1');
            res.innerHTML = ''; 

            for(let item of datos){
                res.innerHTML = `
                <div>
                   <p>${item.Domicilio}</p>
                   <p>${item.DescripcionGeneral}</p>
                   <p>${item.Estado}</p>
                   <p>${item.Valor}</p>
                </div>
                `             
            }
        }
    }
}