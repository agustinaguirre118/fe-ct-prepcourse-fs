function doWhile(num) {
    // Implementar una función que aumente el valor recibido en 5 hasta un límite de 8 veces.
    // Retornar el valor final.
    // Utilizar el bucle Do-While.
    // Tu código:
    var result = 0
    do {
        num = num + 5;
       console.log(num);
        result = result +1;
    }
    while(result < 8)
 }

 doWhile(1)