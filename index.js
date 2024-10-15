
let nombreAlumno= prompt("Bienvenido PROFE, ingrese nombre del alumno");
let nota1= parseInt(prompt("Ingrese nota1 de Perez Manuel"));

let nota2= parseInt(prompt("Ingrese nota2 de Perez Manuel"));
let suma= nota1+nota2;
let promedio= suma/2;

if(nota1>=6){
    console.log ("APROBÓ");
}
else{
    console.log ("NO APROBÓ")
}

for (let i=0; i<=5;i++){
    console.log("NO APROBO")
}

function sumar(){
    let nota1=6;
    let nota2=8;
    let resultado= nota1+nota2;
    return resultado;
}
console.log (sumar());

function dividir(){
    let resultado= suma;
    let promedio= resultado/2;
    return promedio;
}
console.log (dividir());

if (promedio>= 7){
    console.log ("PROMOCIONO LA MATERIA")
}
else{
    console.log ("RINDE EXAMEN FINAL")
}

function informar (nombre, inasistencias){
    console.log ("El alumno "+ nombre +" tuvo en el año "+ inasistencias +" faltas");
}
informar ("Perez",5)

let inasistencias= parseInt(prompt("Cuántas faltas tuvo el alumno Perez?"))

switch(inasistencias){
    case 1:
        alert("OK");
        break;
    case 2:
        alert("OK");
        break;    
    case 3:
        alert("OK");
        break;
    case 4:
        alert("OK");
        break;   
    default:
        alert("DEBE REINCORPORARSE");
        break;
    }   