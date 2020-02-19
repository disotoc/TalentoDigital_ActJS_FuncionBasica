/*Función Básica I
Objetivos:
Entender cómo un computador ejecuta cada línea de de código

Comprender cómo trabaja una función y cómo trabaja su declaración de resultado (return statement). 
Identificar algunos errores comunes que cometen los estudiantes y aprender cómo evitarlos.

Predice el output de los fragmentos de código a continuación. Por favor NO ejecutes ninguno de estos códigos directamente, 
sino que primero predice el output usando el diagrama T. Si aún no estás acostumbrado a usar el diagrama T para ejecutar el código, 
ahora es cuando (te ayudará en el futuro). Una vez que hayas predicho el output para todos los códigos, ejecútalos uno a uno y compara los resultados. 

Prepara un archivo de texto que incluya tu predicción para cada problema y el output real. 
En la parte superior del archivo, señala cuántas predijiste correctamente de un total de 15.
-------------------------------------------------------------------------------------------------------------------------------------------------------*/
function a(){
    return 35;
}
console.log(a());
/*Output

*/
//------------------------------------------------------------------------------------------------------------------------------------------------------
function a(){
    return 4;
}
console.log(a()+a());
/*Output

*/
//------------------------------------------------------------------------------------------------------------------------------------------------------
function a(b){
    return b;
}
console.log(a(2)+a(4));
/*Output

*/
//------------------------------------------------------------------------------------------------------------------------------------------------------
function a(b){
    console.log(b);
    return b*3;
}
console.log(a(3));
/*Output

*/
//------------------------------------------------------------------------------------------------------------------------------------------------------
function a(b){
   return b*4;
   console.log(b);
}
console.log(a(10));
/*Output

*/
//------------------------------------------------------------------------------------------------------------------------------------------------------
function a(b){
    if(b<10) {
        return 2;
    }
    else     {
        return 4;
    }
    console.log(b);
}
console.log(a(15));
/*Output

*/
//------------------------------------------------------------------------------------------------------------------------------------------------------
function a(b,c){
    return b*c;
}
console.log(10,3);
console.log( a(3,10) );
/*Output

*/
//------------------------------------------------------------------------------------------------------------------------------------------------------
function a(b){
    for(var i=0; i<10; i++){
        console.log(i);
    }
    return i;
}
console.log(3);
console.log(4);
/*Output

*/
//------------------------------------------------------------------------------------------------------------------------------------------------------
function a(){
    for(var i=0; i<10; i++){
        i = i +2;
        console.log(i);
    }
}
a();
/*Output

*/
//------------------------------------------------------------------------------------------------------------------------------------------------------
function a(b,c){
    for(var i=b; i<c; i++) {
       console.log(i);
   }
   return b*c;
}
a(0,10);
console.log(a(0,10));
/*Output

*/
//------------------------------------------------------------------------------------------------------------------------------------------------------
function a(){
    for(var i=0; i<10; i++){
       for(var j=0; j<10; j++){
           console.log(j);
       }
       console.log(i);
    }
}
/*Output

*/
//------------------------------------------------------------------------------------------------------------------------------------------------------
function a(){
    for(var i=0; i<10; i++){
        for(var j=0; j<10; j++){
            console.log(i,j);
        }
        console.log(j,i);
    }
}
/*Output

*/
//------------------------------------------------------------------------------------------------------------------------------------------------------
var z = 10;
function a(){
    var z = 15;
    console.log(z);
}
console.log(z);
/*Output

*/
//------------------------------------------------------------------------------------------------------------------------------------------------------
var z = 10;
function a(){
    var z = 15;
    console.log(z);
}
a();
console.log(z);
/*Output

*/
//------------------------------------------------------------------------------------------------------------------------------------------------------
var z = 10;
function a(){
    var z = 15;
    console.log(z);
    return z;
}
z = a();
console.log(z);
/*Output

*/