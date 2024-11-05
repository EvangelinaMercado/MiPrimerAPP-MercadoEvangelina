alert("BIENVENIDOS A NUESTRA APP DE NOTAS")
let nombreAlumno= prompt ("Ingrese nombre del Alumno");
let nota1= parseInt(prompt("Ingrese nota del primer parcial"));
let nota2= parseInt(prompt("Ingrese nota del segundo parcial"));
let nota3= parseInt(prompt("Ingrese nota del recuperatorio"));
let inasistencias= parseInt(prompt("Cuántas faltas tuvo el alumno?"));

let suma= nota1+nota2+nota3;
let a=nota1;
let b=nota2;
let c=nota3;
let promedio= suma/3;

const notas= [nota1,nota2,nota3]
console.table(notas)

let añadirNota=true
while(añadirNota){
    let nota4= parseInt(prompt("Ingrese Nota Examen Final "));
    
        if(nota4 >=0 && nota4<=10) {
        notas.push (nota4);
        } 
        let salir= prompt("escriba salir para terminar")
        if (salir =="salir"){
            añadirNota=false
            alert ("gracias Profe")
            }
}
console.table(notas)


if(nota1>=6){
    console.log ("APROBÓ PRIMER CUATRIMESTRE");
}
else{
    console.log ("NO APROBÓ PRIMER CUATRIMESTE")
}

for (let nota4=6; nota4<=10; nota4++){
    console.log("APROBO EXAMEN FINAL")
}

function sumar(a,b,c){
    return a+b+c;
}
console.log (sumar(nota1,nota2,nota3))


function promediar(x,y){
        return x/y;
}
console.log ("su promedio es "+ promediar(suma,3));

if (promedio>= 7){
    console.log ("PROMOCIONO LA MATERIA")
}
else{
    console.log ("RINDE EXAMEN FINAL")
}


function informar (nombre, inasistencias){
    console.log ("El alumno "+ nombre +" tuvo en el año "+ inasistencias +" faltas");
}
informar (nombreAlumno,inasistencias)

switch(inasistencias){
    case 1:
        alert("INASISTENCIAS OK");
        break;
    case 2:
        alert(" INASISTENCIAS OK");
        break;    
    case 3:
        alert("INASISTENCIAS OK");
        break;
    case 4:
        alert(" INASISTENIAS OK");
        break;   
    default:
        alert("DEBE REINCORPORARSE");
        break;
    }   
