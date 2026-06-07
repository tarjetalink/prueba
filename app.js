const API =
"https://script.google.com/macros/s/AKfycbxOJoIvulK7RSiqs69HHc6fMNQpUWEpVTBCa4hQiS66W9SSY7qGnnwIVGnK04IyV39SFw/exec";

const parametros =
new URLSearchParams(window.location.search);

const id =
parametros.get("id");

fetch(`${API}?id=${id}`)

.then(r=>r.json())

.then(data=>{

document.getElementById("nombre")
.innerText=data.nombre;

document.getElementById("visitas")
.innerText=data.visitas;

let porcentaje =
(data.visitas/10)*100;

document.getElementById("progreso")
.style.width=
porcentaje+"%";

if(data.visitas >= 10){

document.getElementById("mensaje")
.innerHTML=
"🎉 Tienes una hamburguesa GRATIS";

}else{

document.getElementById("mensaje")
.innerHTML=
`Te faltan ${10-data.visitas} compras`;

}

});
