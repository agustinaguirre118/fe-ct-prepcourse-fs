function continueStatement(num) {
    // Iterar en un bucle aumentando en 2 el número recibido hasta un límite de 10 veces.
    // Guardar cada nuevo valor en un array y retornarlo.
    // Cuando el número de iteraciones alcance el valor 5, no se suma ese caso y
    // se continua con la siguiente iteración.
    // [PISTA]: utiliza el statement 'continue'.
    // Tu código:
    var newArray = []
    for (i=0; i < 10; i++) {
       num = num + 2;
       if (i !== 5) {
          newArray.push(num);
          console.log("Acá sumó" + newArray);
       }
       else {
        console.log("Acá no sumó"); 
        continue; 
         
        }
    }
        console.log(newArray);
 
 }
    
continueStatement(-5)



        
    