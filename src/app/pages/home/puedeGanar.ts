Horizontal(col1, col2, col3, col4){
    var encontradas = 0;
    col1.forEach(carta => {
      if (this.cartasLanzadas.includes(carta)) {
        encontradas ++;
      }
    });
    console.log('Se encontraron ' + encontradas + ' en la col1');
    if (encontradas >= 4) { this.Ganador = true;}
    encontradas = 0;
    col2.forEach(carta => {
      if (this.cartasLanzadas.includes(carta)) {
        encontradas ++;
      }
    });
    console.log('Se encontraron ' + encontradas + ' en la col2');
    if (encontradas >= 4) { this.Ganador = true;}
    encontradas = 0;
    col3.forEach(carta => {
      if (this.cartasLanzadas.includes(carta)) {
        encontradas ++;
      }
    });
    console.log('Se encontraron ' + encontradas + ' en la col3');
    if (encontradas >= 4) { this.Ganador = true;}
    encontradas = 0;
    col4.forEach(carta => {
      if (this.cartasLanzadas.includes(carta)) {
        encontradas ++;
      }
    });
    console.log('Se encontraron ' + encontradas + ' en la col4');
    if (encontradas >= 4) { this.Ganador = true;}
    encontradas = 0;
    if (this.Ganador) {
      Swal.fire('Hay Ganador!!!');
    }
  }