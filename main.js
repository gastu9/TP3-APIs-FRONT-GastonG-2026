fetch ('https://www.swapi.tech/api/planets/')
.then(response => response.json())
.then(data => {
    console.log('cositas cargadas')
    console.log(data);
    planetas = data.results;
    mostrarPlanetasConForEach(planetas)
})
.catch(error => {
    console.error('error al leer la API',error);
})

let planetas = []




let elementos = [];


const selectorTipo = document.getElementById("selectorTipo");
const buscador = document.getElementById("buscador");


function cargarElementos() {


    fetch("https://www.swapi.tech/api/" + selectorTipo.value + "/?page=1&limit=100") //esto es para que agarre todas las paginas
    .then(response => response.json())
    .then(data => {
        elementos = data.results;
        buscar();
    })
    .catch(error => {
        console.error("Error al leer la API:", error);
    });
}



function mostrarPlanetasConForEach(lista){

    const container = document.getElementById('infoContainer');
  
    container.innerHTML = "" ;
  
    lista.forEach( planeta => {
      container.innerHTML +=
      `
      <section class="espacio-card">
      <article class="card">
        <h2  class="titulo">${planeta.name}</h2>
        <p class="clima">${planeta.clima}</p>
        <p class="terreno">${planeta.terrain}</p>
        <p class="poblacion">${planeta.poblacion}</p>
        <p class=""></p>
        <p class=""></p>
      </article>  
      </section>
      `
    })
  
  
  }



 if(selectorTipo.value === "planets"){
    console.log("hola")
 }