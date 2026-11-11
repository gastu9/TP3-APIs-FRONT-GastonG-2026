fetch ('https://www.swapi.tech/api/planets/')
.then(response => response.json())
.then(data => {
    console.log('cositas cargadas')
    console.log(data);
    planetas = data;
    mostrarPlanetasConForEach(planetas)
})
.catch(error => {
    console.error('error al leer la API',error);
})

let planetas = []


function mostrarPlanetasConForEach(lista){

    const container = document.getElementById('infoContainer');
  
    container.innerHTML = "" ;
  
    lista.forEach( planeta => {
      container.innerHTML +=
      `
      <article class="card">
        <h2  class="titulo">${planeta.name}</h2>
      </article>  
      `
    })
  
  
  }