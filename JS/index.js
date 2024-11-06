
const materias= [
    {       
        materia: "matematica",
        nota1:9,
        nota2:8,
        nota3:10,
    },
    {
        materia: "sic",
        nota1: 7,
        nota2: 9,
        nota3: 7,
    },
    {
        materia: "estadistica",
        nota1: 6,
        nota2: 8,
        nota3:4,
    },
    {
        materia:"economia",
        nota1: 9,
        nota2: 6,
        nota3:5,
    }

            
]

function informarNotas(materias){
    const contenedor=document.getElementById("libretaPerez")
    for(const materia of materias){
        const card=document.createElement("div")
        card.innerHTML=`<h2>${materia.materia}</h2>
                        <h3>${materia.nota1}</h3>
                        <h3>${materia.nota2}</h3>
                        <h3>${materia.nota3}</h3>`
        contenedor.appendChild(card)
    }
    
}
informarNotas(materias)

const aprobado=materias.filter((materia)=>materia.nota3 >5)

const economia=materias.map(materia=>materia.economia)
console.log(economia)

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
