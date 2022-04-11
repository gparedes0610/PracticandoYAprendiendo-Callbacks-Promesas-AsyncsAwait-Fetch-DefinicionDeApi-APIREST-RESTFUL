const url = `https://jsonplaceholder.typicode.com/posts/`;

//el fetch siempre devuelve una promesa que es un response
// una ves q tengamos el response hay varios metodos disponibles para definir cual es el contenido del cuerpo y como se debe manejar
/* fetch(url)
  .then(
    (res) => res.json() // se tiene q formatear a json siempre y ahora se tiene q devolver en otro then
  )
  .then((data) => console.log(data)); // y ya se carga
 */
// con async await

const findPostById = async (id) => {
  try {
    const res = await fetch(url + id);
    const data = await res.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};

findPostById(4);
