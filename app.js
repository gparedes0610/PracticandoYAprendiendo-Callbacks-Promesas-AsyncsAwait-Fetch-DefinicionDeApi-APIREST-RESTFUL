const posts = [
  {
    userId: 1,
    id: 1,
    title:
      "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
  },
  {
    userId: 1,
    id: 2,
    title: "qui est esse",
    body: "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla",
  },
  {
    userId: 1,
    id: 3,
    title: "ea molestias quasi exercitationem repellat qui ipsa sit aut",
    body: "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut",
  },
];
//ESTO ES UN CALLBACK
/* const findPostById = (id, callback) => {
  const post = posts.find((item) => item.id === id);

  if (post) {
    callback(null, post); // el primer parametro siempre va ser un error, y el segundo la respuesta de exito
  } else {
    //en el error
    callback("no se encontro el post con id " + id);
  }
};

findPostById(1, (err, post) => {
  if (err) {
    return console.log(err);
  }
  console.log(post);

  findPostById(2, (err, post) => {
    if (err) return console.log(err);
    console.log(post);

    findPostById(3, (err, post) => {
      if (err) return console.log(err);
      console.log(post);

      findPostById(4, (err, post) => {
        if (err) return console.log(err);
        console.log(post);
      });
    });
  });
}); */

// SE ARMA UN CALLBACK HELL , Y SE CREARON LAS PROMESAS

//PROMESAS

const findPostById = (id) => {
  return new Promise((resolve, reject) => {
    // el primer parametro siempre va ser un error, y el segundo la respuesta de exito
    setTimeout(() => {
      const post = posts.find((item) => item.id === id);
      if (post) {
        resolve(post);
      } else {
        reject("no se encontro el id " + id);
      }
    }, 2500);
  });
};
//SI ES UNA PROMESA SIEMPRE SE PONE THEN
/* findPostById(1)
  .then((post) => {
    console.log(post);
  })
  .catch((e) => console.log(e)); //ESTO ES ASINCRONO , SIGNIFICA QUE ESO SE VA A EMPEZAR A EJECUTAR, PERO NO QUIERE DECIR QUE NUESTRO CODIGO SE VA A DETENER , POR LO TANTO SE EJECUTA LO DE ABAJO */
//console.log("fin del codigo");
//TMB SE CREO LAS PROMESASS HELL, PERO LAS PROMESAS AUN SE SIGUEN USANDO

//POR LO DE PROMESAS HELL , SE CREO ASYNC AWAIT

//PARA USAR ASYNC AWAIT, LA REGLLA DE ORO  PARA AWAIT NECESITAMOS USAR UNA FUNCION ASYNC, ASYNC FUNCIONA SOLO, AWAIT FUNCIONA SIN UN ASYNC? NO 👀

const buscar = async (id) => {
  try {
    const post = await findPostById(id); //await solo en promesas
    console.log(post);
  } catch (error) {
    console.log(error);
  }
};

buscar(1);
console.log("fin del codigo");

//AHORA USAREMOS FETCH API
//el metodo fetch como primer argumento obligatorio una ruta de acceso(url)
//vamos al otro archivo de js para ponerlo en practica
