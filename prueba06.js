// function crearGato(nombre, edad) {
//     Debes crear un nuevo objeto con las propiedades "nombre" y "edad".
//     Ambas propiedades deben tener el valor correspondiente recibido por parámetro.
//     Además, agregar una propiedad con el nombre "meow".
//     La propiedad "meow" será una función que retorne el string: "Meow!".
//     Retornar el objeto.
// //      Tu código:
//     var gato = {nombre: "Lino y Chuni" , edad: 5 , tipo: ["bello", "amable", "pesado"] , cariñoso : true};
    
//     gato.tipo.push("bueno")
//   console.log(gato);
//  }
//  crearGato("Chuni", 6)
//  console.log(gato.meow);
 
// var objetoMuchosUsuarios = [{Usuario1: "a" , esPremium: true} ,{Usuario2: "b" , esPremium: false} ,{Usuario3: "c" , esPremium: true}] 

// for (i = 0; i<objetoMuchosUsuarios.length; i++) {
//   if (objetoMuchosUsuarios[i].esPremium == true) {
//     continue;
//   } 
//   else {
//     objetoMuchosUsuarios[i].esPremium = true;
//   }
// }

// console.log(objetoMuchosUsuarios);



// El parámetro "objetoUsuario" tiene una propiedad llamada "posts" que es un arreglo.
   // Este arreglo contiene objetos (post).
   // Cada post posee una propiedad llamada "likes". Esta propiedad es un número.
   // Debes sumar los likes de todos los post y retornar el resultado.
   // Tu código:

// var cantDeLikes = 0;
// var objetoUsuario = {Usuario: "juan", posts: [{post: 1 , likes: 24} , {post: 2 , likes: 51} , {post: 3 , likes: 20}]};


// for (i = 0; i <objetoUsuario.posts.length; i++) {
//   cantDeLikes = cantDeLikes + objetoUsuario.posts[i].likes;

// }
// console.log(cantDeLikes)

  // Agrega una propiedad al "objetoProducto" con el nombre "calcularPrecioDescuento".
  // Esta propiedad debe ser una función que multiplique el precio del producto por el porcentajeDeDescuento.
  // El "objetoProducto" posee una propiedad "precio" y una propiedad "porcentajeDeDescuento".
  // Luego debes restar del precio total del producto ese valor de descuento.
  // Retornar el precio final.
  // Ejemplo:
  // Precio ---> 10
  // PorcentajeDeDescuento ---> 0.2
  // Precio final ---> 8
  // Tu código:
  var precioParcial = 0 
  var precioFinal = 0;

  objetoProducto = {precio: 10 , porcentajeDeDescuento: 0.2}

  objetoProducto.calcularPrecioDescuento = function () {
    
    precioParcial = objetoProducto["precio"] * objetoProducto["porcentajeDeDescuento"];
    
precioFinal = objetoProducto["precio"] - precioParcial;
    console.log(precioFinal);
  }
  objetoProducto.calcularPrecioDescuento();