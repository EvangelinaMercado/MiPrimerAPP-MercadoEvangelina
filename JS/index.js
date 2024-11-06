let nombreAlumno= document.getElementById(nombreAlumno);
let nota1= document.getElementById(nota1);
let nota2= document.getElementById(nota2);
let nota3= document.getElementById(notaFinal);
inasistencias= document.getElementById(inasistencias);

let suma= nota1+nota2+nota3;
let a=nota1;
let b=nota2;
let c=nota3;
let promedio= suma/3;

const notas= [nota1,nota2,nota3]
console.table(notas)

let añadirNota=true
while(añadirNota){
    let nota4= document.getElementById(notaFinal);
    
        if(nota4 >=0 && nota4<=10) {
        notas.push (nota4);
        } 
        //let salir= prompt("escriba salir para terminar")
        if (salir =="salir"){
            añadirNota=false
            }
}
//console.table(notas)


if(nota1>=6){
            let resultado1= document.getElementById(resultado1)
            resultado1.innerHTML= "<h3> APROBO PRIMER CUATRIMESTRE </h3>"
    //console.log ("APROBÓ PRIMER CUATRIMESTRE");
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
