let tamano = 11
let tablero = ""

for(filas = 0; filas < tamano; filas ++){
    for(columnas = 0; columnas < tamano; columnas ++){
        if((filas + columnas) % 2 === 0){
            tablero += " ";
        }   else {
            tablero += "#";            
        }
    }
    tablero += "\n";
}

console.log(tablero);

/*

1.- Definir una variable para el tamaño (dinámica)
2.- Definir una variable string vacía para el tablero
3.- Implementar for para el crecimiento de las filas respecto al tamaño
4.- Anidar un for para el crecimiento de las columnas respecto al tamaño
5.- Anidar un if para sumar fila + columna y modular a 0
6.- Si es par escribir " "
7.- Si no "#"
8.- Ejecutar salto de linea despues del if
9.- Imprimir tablero

*/
