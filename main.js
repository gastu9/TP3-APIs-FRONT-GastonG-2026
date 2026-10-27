fetch ('https://www.swapi.tech/api/planets')
.then(response => response.json())
.then(data => {
    console.log('cositas cargadas')
    console.log(data);
    datos = data;
})
.catch(error => {
    console.error('error al leer la API',error);
})

let datos = []