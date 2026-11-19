
let elementos = [];


const selectorTipo = document.getElementById("selectorTipo");
const buscador = document.getElementById("buscador");


function cargarElementos() {

    fetch("https://www.swapi.tech/api/" + selectorTipo.value + "/?page=1&limit=1000&expanded=true") //esto es para que agarre todas las paginas
    .then(response => response.json())
    .then(data => {

        elementos = data.results.map(elemento => { //esto aca recorre los objetos de la api
          elemento.properties.uid = elemento.uid; //agrega el uid de la cosa al array de elementos
          return elemento.properties;
      });


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

    //Crea la tarjetita
    container.innerHTML +=
      `
      <section class="espacio-card">
      <article class="card">
        <div class="espacio-imagen-tarjeta">
        <img class="imagen" src="https://starwarsgallery.netlify.app/assets/planets/${planeta.uid}.jpg" alt="Foto planeta">        
        </div>
        <h2  class="titulo">${planeta.name}</h2>
        <p class="clima">Clima: ${planeta.climate}</p>
        <p class="terreno">Terreno: ${planeta.terrain}</p>
        <p class="poblacion">Poblacion: ${planeta.population}</p>
        <p class=""></p>
        <p class=""></p>
      </article>  
      </section>
      `
    })
  }

 //NAVES
  function mostrarNavesConForEach(lista){

    const container = document.getElementById('infoContainer');
  
    container.innerHTML = "" ;
  
    lista.forEach( nave => {

        //Crea la tarjetita

      container.innerHTML +=
      `
      <section class="espacio-card">
      <article class="card">
        <div class="espacio-imagen-tarjeta">
        <img class="imagen" src="https://starwarsgallery.netlify.app/assets/starships/${nave.uid}.jpg" alt="Foto planeta">        
        </div>
        <h2  class="titulo">${nave.name}</h2>
        <p class="nave-constructor">Constructor: ${nave.manufacturer}</p>
        <p class="nave-precio">${nave.cost_in_credits} creditos</p>
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

      //Crea la tarjetita
      container.innerHTML +=
      `
      <section class="espacio-card">
      <article class="card">
        <div class="espacio-imagen-tarjeta">
         <img class="imagen" src="https://starwarsgallery.netlify.app/assets/people/${personaje.uid}.jpg" alt="foto persona">
        </div>
        <h2  class="titulo">${personaje.name}</h2>
        <p class="altura-persona">Altura: ${personaje.height}cm</p>
        <p class="masa-persona">Masa: ${personaje.mass}Kg</p>
        <p class=""></p>
      </article>  
      </section>
      `

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