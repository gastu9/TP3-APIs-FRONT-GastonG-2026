
let elementos = [];


const selectorTipo = document.getElementById("selectorTipo");
const buscador = document.getElementById("buscador");


function cargarElementos() {

    fetch("https://www.swapi.tech/api/" + selectorTipo.value + "/?page=1&limit=100") //esto es para que agarre todas las paginas
    .then(response => response.json())
    .then(data => {
        elementos = data.results;

    if(selectorTipo.value === "people"){
        mostrarPersonajesConForEach(elementos)
    }
    else if(selectorTipo.value === "starships"){
        mostrarNavesConForEach(elementos)
    }
    else if(selectorTipo.value === "planets"){
        console.log("hola")
        mostrarPlanetasConForEach(elementos)
    }
    })
    
    .catch(error => {
        console.error("Error al leer la API:", error);
    });
}


//PLANETAS
function mostrarPlanetasConForEach(lista){

    const container = document.getElementById('infoContainer');
  
    container.innerHTML = "" ;
  
    lista.forEach( planeta => {

    //desde aca


    fetch(planeta.url)
    .then(response => response.json())
    .then(data => {
        
        const infoEspecificaPlaneta = data.results.properties; // es properties porque cuando pedis el especifico swapi te devuelve la info adentro de propetries que esta adentro de data;

        //Crea la tarjetita

    container.innerHTML +=
      `
      <section class="espacio-card">
      <article class="card">
        <h2  class="titulo">${infoEspecificaPlaneta.name}</h2>
        <p class="clima">${infoEspecificaPlaneta.climate}</p>
        <p class="terreno">${infoEspecificaPlaneta.terrain}</p>
        <p class="poblacion">${infoEspecificaPlaneta.population}</p>
        <p class=""></p>
        <p class=""></p>
      </article>  
      </section>
      `
    })
    
    .catch(error => {
        console.error("Error al leer la API:", error);
    });

    //hasta aca esta lo raro (abajo hay que poner la tarjeta de vuelta y cambiar lo de infoespecificaplaneta)
    })
  }

 //NAVES
  function mostrarNavesConForEach(lista){

    const container = document.getElementById('infoContainer');
  
    container.innerHTML = "" ;
  
    lista.forEach( nave => {
      container.innerHTML +=
      `
      <section class="espacio-card">
      <article class="card">
        <h2  class="titulo">${nave.name}</h2>
        <p class="constructor">${nave.manufacturer}</p>
        <p class="precio"></p>
        <p class=""></p>
      </article>  
      </section>
      `
    })
  }

  //Personajes
  function mostrarPersonajesConForEach(lista){

    const container = document.getElementById('infoContainer');
  
    container.innerHTML = "" ;
  
    lista.forEach( personaje => {
      container.innerHTML +=
      `
      <section class="espacio-card">
      <article class="card">
        <h2  class="titulo">${personaje.name}</h2>
        <p class=""></p>
      </article>  
      </section>
      `
    })
  }

selectorTipo.addEventListener("change", cargarElementos);

cargarElementos();




//Ejemplo de fetch
//    fetch() //esto es para que agarre todas las paginas
//    .then(response => response.json())
//    .then(data => {
//        xxx = data.results;
//    })
    
//    .catch(error => {
//        console.error("Error al leer la API:", error);
//    });