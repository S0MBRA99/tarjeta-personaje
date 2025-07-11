import "bootstrap";
import { Button } from "bootstrap";

let listOfSentence = [
"Gyomei es ciego desde pequeño, pero percibe todo con increíble precisión.",
"Es el más fuerte físicamente de todos los Pilares.",
"Siempre lleva cuentas budistas y reza incluso en batalla.",
"A pesar de su aspecto, es muy sensible y llora fácilmente.",
"Usa una enorme hacha con una bola de hierro unida por cadena.",
"Se entrenó en un templo cuidando huérfanos antes de ser cazador.",
"Puede activar la Marca del Cazador de forma consciente.",
"Su respiración es la del Pilar de Piedra, una de las más poderosas.",
]

let contador = 0

document.getElementById("buttton-curiosidades").addEventListener("click",funcionJS)
  
function funcionJS(){
  const parrafo = document.getElementById("respuesta-funcion")
  
  if(contador >= listOfSentence.length){
    location.reload()
    return
  }
  
  parrafo.textContent = listOfSentence[contador]
  contador += 1 
}

