import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'carta'
})
export class CartaPipe implements PipeTransform {

  transform(value: any): string {
    var ruta: string;
    if (value >= 1) {
      ruta = `assets/img/cartas/${value}.jpg`;      
    } else{
      ruta = `assets/img/no-imagen.png`;
    }
    // console.log(ruta);    
    return ruta;
  }

}
