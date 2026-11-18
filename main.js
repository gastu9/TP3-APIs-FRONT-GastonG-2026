
let elementos = [];


const selectorTipo = document.getElementById("selectorTipo");
const buscador = document.getElementById("buscador");


function cargarElementos() {

    fetch("https://www.swapi.tech/api/" + selectorTipo.value + "/?page=1&limit=10") //esto es para que agarre todas las paginas
    .then(response => response.json())
    .then(data => {
        elementos = data.results;
        console.log(data)
        buscar()
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

        const infoEspecificaPlaneta = data.result.properties; // es properties porque cuando pedis el especifico swapi te devuelve la info adentro de propetries que esta adentro de data;

        //Crea la tarjetita

    container.innerHTML +=
      `
      <section class="espacio-card">
      <article class="card">
        <h2  class="titulo">${infoEspecificaPlaneta.name}</h2>
        <p class="clima">Clima: ${infoEspecificaPlaneta.climate}</p>
        <p class="terreno">Terreno: ${infoEspecificaPlaneta.terrain}</p>
        <p class="poblacion">Poblacion: ${infoEspecificaPlaneta.population}</p>
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

    fetch(nave.url)
    .then(response => response.json())
    .then(data => {

        const infoEspecificaNave = data.result.properties; // es properties porque cuando pedis el especifico swapi te devuelve la info adentro de propetries que esta adentro de data;

        //Crea la tarjetita

      container.innerHTML +=
      `
      <section class="espacio-card">
      <article class="card">
        <h2  class="titulo">${infoEspecificaNave.name}</h2>
        <p class="constructor">Constructor: ${infoEspecificaNave.manufacturer}</p>
        <p class="precio">${infoEspecificaNave.cost_in_credits} creditos</p>
        <p class=""></p>
      </article>  
      </section>
      `
    })
    
    .catch(error => {
        console.error("Error al leer la API:", error);
    });

    })
  }

  //Personajes
  function mostrarPersonajesConForEach(lista){

    const container = document.getElementById('infoContainer');
  
    container.innerHTML = "" ;
  
    lista.forEach( personaje => {

    fetch(personaje.url)
    .then(response => response.json())
    .then(data => {

        const infoEspecificaPersonaje = data.result.properties; // es properties porque cuando pedis el especifico swapi te devuelve la info adentro de propetries que esta adentro de data;

      //Crea la tarjetita
      container.innerHTML +=
      `
      <section class="espacio-card">
      <article class="card">
        <h2  class="titulo">${infoEspecificaPersonaje.name}</h2>
        <p class="altura-persona">Altura: ${infoEspecificaPersonaje.height}cm</p>
        <p class="masa">masa: ${infoEspecificaPersonaje.mass}</p>
        <p class=""></p>
      </article>  
      </section>
      `
    })
    
    .catch(error => {
        console.error("Error al leer la API:", error);
    });

    })
  }

selectorTipo.addEventListener("change", cargarElementos);

cargarElementos();


//Buscador

const busqueda = document.getElementById("buscador")
busqueda.addEventListener("input", buscar)




function buscar (){
  let elementosFiltrados = elementos.filter( elemento => {
   return elemento.name.toLowerCase().includes(busqueda.value.toLowerCase())
  })
  if(elementosFiltrados)
  if(selectorTipo.value === "people"){
    mostrarPersonajesConForEach(elementosFiltrados)
  }
  else if(selectorTipo.value === "starships"){
    mostrarNavesConForEach(elementosFiltrados)
  }
  else if(selectorTipo.value === "planets"){
    console.log("hola")
    mostrarPlanetasConForEach(elementosFiltrados)
  }
}



//Ejemplo de fetch
//    fetch() //esto es para que agarre todas las paginas
//    .then(response => response.json())
//    .then(data => {
//        xxx = data.results;
//    })
    
//    .catch(error => {
//        console.error("Error al leer la API:", error);
//    });