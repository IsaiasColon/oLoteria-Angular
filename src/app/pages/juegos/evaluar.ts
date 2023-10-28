import { Carta } from "src/app/_models/carta";
import { IC } from "../../_models/tabla";

export class Evaluar {

  evaluarFilas(tablero: Array<Array<IC>>): boolean | undefined{
    for (let i = 0; i < tablero.length; i++) {
      const fila = tablero[i];
      
      var valorFila = fila.filter(c=>c.conFicha == true).length;
      if (valorFila == 4) {
        // console.log(`Fila ${i+1}: ${valorFila}`);  
            
        this.hasGanado("en una fila");  
        return true;
      }
    }
  }

  evaluarColumnas(tablero: Array<Array<IC>>) :boolean | undefined {
    for (let i = 0; i < tablero.length; i++) {
      const columna = tablero.map(f => f[i]);

      var valorColumna = columna.filter(c=>c.conFicha == true).length;
      if (valorColumna == 4) {
        // console.log(`Columna ${i+1}: ${valorColumna}`);  
        this.hasGanado("en una columna");
        return true;
      }
    }
  }

  evaluarCruzado(tablero: Array<Array<IC>>): boolean | undefined {
    const diagonal = tablero.map((fila, pos) => (fila[pos]));
    var valorDiagonal = diagonal.filter( c => c.conFicha == true).length;
    // console.log(valorDiagonal);

    if (valorDiagonal == 4) {
      this.hasGanado("en diagonal");
      return true;
    }

    const diagonal2 = tablero.map((fila, pos) => (fila[(fila.length -1) - pos]));
    var valorDiagonal2 = diagonal2.filter( c => c.conFicha == true).length;
    // console.log(valorDiagonal2);

    if (valorDiagonal2 == 4) {
      this.hasGanado("en diagonal inversa");
      return true;
    }
  }

  evaluarCuadroChico(tablero: Array<Array<IC>>): boolean | undefined {
    const cuadroChico = tablero.slice(1,3);
    var valorCuadro = cuadroChico.map( c => c.slice(1,3).filter(c => c.conFicha == true).length).reduce((a, b) => a + b, 0);
    if (valorCuadro == 4) {
      this.hasGanado("en cuadro chico");
      return true;
    }
        
  }

  evaluarCuadroGrande(tablero: Array<Array<IC>>): boolean | undefined {

    // const cuadroGrande = tablero.filter((fila, pos) => (fila.filter((carta, pos, fila) => (pos == 0 || pos == 3) )));
    // const cuadroGrande = tablero.filter( (fila, pos, lista) => (pos == 0 || pos == 3) ).map( (carta, pos) => (carta) );
    const cuadroGrande = tablero.filter( (filas, pos, lista) => (pos == 0 || pos == 3) );
    var valorCuadro = cuadroGrande.map( c => c.filter( (fila, pos, lista) => (pos == 0 || pos == 3) ).filter(c => c.conFicha == true).length).reduce((a, b) => a + b, 0);
    if (valorCuadro == 4) {
      this.hasGanado("en cuadro Grande");
      return true;
    }
  }

  hasGanado(forma: string = "nada"){
    console.log(`has Ganado ${forma}`);
    
  }

}