import { Component } from '@angular/core';

const synth = window.speechSynthesis;
// utterThis.lang = 'es-ES';

@Component({
  selector: 'app-pruebas',
  templateUrl: './pruebas.component.html',
  styleUrls: ['./pruebas.component.css']
})
export class PruebasComponent {

  texto:string = "El diablo";

  constructor(){
  }
  
  reproducir(texto: string){
    console.log(texto);
    
    const utterThis = new SpeechSynthesisUtterance(texto);
    synth.speak(utterThis);    
  }

  voces(){
    let voces = synth.getVoices();
    console.log(voces);
  }

}
