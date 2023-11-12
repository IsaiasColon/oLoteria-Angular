import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ficha'
})
export class FichaPipe implements PipeTransform {

  transform(value: boolean): string {
    var ruta: string;
    var resRandom = Math.floor(Math.random() * 5);
    console.log(resRandom);
    
    switch (resRandom) {
      case 0: ruta = "../../assets/img/fichas/azul.png";
        break;      
      case 1: ruta = "../../assets/img/fichas/azul2.png";
        break;
      case 2: ruta = "../../assets/img/fichas/rojo.png";
        break;
      case 3: ruta = "../../assets/img/fichas/verde.png";
        break; 
      case 4: ruta = "../../assets/img/fichas/zelda.png";
        break;    
      default: ruta = "../../assets/img/fichas/verde.png";
        break;
    }  
    return ruta;
  }

}
