/*2-  Crear un script que solicite al usuario mediante un prompt el nombre de ciudades y almacenarlas en un arreglo, cuando el usuario seleccione cancelar o ingrese el valor “0” se debe mostrar el arreglo generado, luego realizar las siguientes acciones:
Mostrar la longitud del arreglo.
Mostrar en el documento web los ítems de las posiciones primera, tercera y última.
Añade en última posición la ciudad de París.
Escribe por pantalla el elemento que ocupa la segunda posición.
Sustituye el elemento que ocupa la segunda posición por la ciudad de 'Barcelona'.
*/



let ciudad=0;
let lista = new Array();

lista.toString();

while(1)
{
    var pregunta = prompt("Introduce un pais y pulsa aceptar o pulsa cancelar para ver los paices introducidos","");
    if (pregunta == null) 
        break;
    else 
        lista[ciudad] = pregunta;
    ciudad++;
}  

// Mostrar la longitud del arreglo.

document.write("<h1> Cantidad de paises ingresados<h1/> " + lista.length);


document.write("<br/> <hr/>")


// Mostrar en el documento web los ítems de las posiciones primera, tercera y última.

for (i = 0; i < lista.length; i = i + 1)
{
document.write(lista[i] + "<br/>");
}

document.write(`primer item ${lista[0]} <br/> segundo item ${lista[2]} <br/> ultimo item ${lista[lista.length - 1]}`);



// Añade en última posición la ciudad de París.

lista.push("Paris");

// Escribe por pantalla el elemento que ocupa la segunda posición.

document.write(`Elemento 2da posicion: ${lista[1]}`);


// Sustituye el elemento que ocupa la segunda posición por la ciudad de 'Barcelona'.
lista.splice(1, 0, "Barcelona");



// muestro todo el arreglo
document.write(`<h1>Arreglo de ciudades</h1>`);
document.write(`<ul>`);
for (let i = 0; i < lista.length; i++) {
  document.write(`<li>Elemento: ${lista[i]} </li>`);
}
document.write(`</ul>`);

