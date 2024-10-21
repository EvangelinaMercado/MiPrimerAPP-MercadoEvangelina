//let menu= parseInt(prompt ("Bienvenido! Seleccione 1 para ver el listado de alumnos, 2 para cargar una nota, 3 para salir"))
//while(menu !=3){
   // switch (menu){
      //  case 1: 
        //    verAlumnos()
          //  break
        //case 2: 
          //  cargarNotas()
            //break
        //default: 
          //  alert ("OPCION INCORRECTA")     
            //break
      //}
//let menu= parseInt(prompt ("Bienvenido! Seleccione 1 para ver el listado de alumnos, 2 para cargar una nota, 3 para salir"))

//

let nota1= parseInt(prompt("Ingrese nota1 de Perez Manuel"));
let nota2= parseInt(prompt("Ingrese nota2 de Perez Manuel"));
let nota3= parseInt(prompt("Ingrese nota3 de Perez Manuel"));
let suma= nota1+nota2+nota3;
let a=nota1;
let b=nota2;
let c=nota3;
let promedio= suma/3;

const notas= [nota1,nota2,nota3]
console.table(notas)


if(nota1>=6){
    console.log ("APROBÓ PRIMER CUATRIMESTRE");
}
else{
    console.log ("NO APROBÓ PRIMER CUATRIMESTE")
}

for (let i=6; i<=10;i++){
    console.log("APROBO")
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
