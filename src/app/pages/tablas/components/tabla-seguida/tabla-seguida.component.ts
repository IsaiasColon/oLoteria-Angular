import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem, copyArrayItem} from '@angular/cdk/drag-drop';
import { Cartas } from 'src/app/_models/carta';

@Component({
  selector: 'app-tabla-seguida',
  templateUrl: './tabla-seguida.component.html',
  styleUrls: ['./tabla-seguida.component.css']
})
export class TablaSeguidaComponent implements OnInit, AfterViewInit {

  @Input() Cartas: any[] = [];

  // @Input() row0: any[] = [1,2,3,4];
  // @Input() row1: any[] = [5,6,7,8];
  // @Input() row2: any[] = [9,10,11,12];
  // @Input() row3: any[] = [13,14,15,16];
  @Input() row0: any[] = [];
  @Input() row1: any[] = [];
  @Input() row2: any[] = [];
  @Input() row3: any[] = [];

  movies = [
    'Episode I - The Phantom Menace',
    'Episode II - Attack of the Clones',
    'Episode III - Revenge of the Sith',
    'Episode IV - A New Hope',
    'Episode V - The Empire Strikes Back',
    'Episode VI - Return of the Jedi',
    'Episode VII - The Force Awakens',
    'Episode VIII - The Last Jedi',
    'Episode IX – The Rise of Skywalker'
  ];

  constructor() { }

  ngOnInit(): void {
    console.log(this.Cartas);
  }

  ngAfterViewInit(){
    // this.row0.push(this.Cartas.slice(0,4));
    // this.row1.push(this.Cartas.slice(4,8));
    // this.row2.push(this.Cartas.slice(8,12));
    // this.row3.push(this.Cartas.slice(12,16));
  }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.movies, event.previousIndex, event.currentIndex);
  }

  drop2(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.row1, event.previousIndex, event.currentIndex);
  }

  dropGroup(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      console.log(event);
      this.Cartas.splice(event.previousIndex, 1, event.container.data);
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      console.log(event);
      // console.log(event.container.data);
      if (event.currentIndex > 3) {
        event.currentIndex = 3;
      }
      var afect = event.container.data[event.currentIndex];
      console.log(afect);
      event.container.data.splice(event.currentIndex, 1);
      console.log(event.container.data);

      transferArrayItem(event.previousContainer.data,
                        event.container.data,
                        event.previousIndex,
                        event.currentIndex);

      console.log(event.container.data);

      // transferArrayItem(event.container.data,
      //                   event.previousContainer.data,
      //                   event.currentIndex,
      //                   event.previousIndex);

      event.previousContainer.data.splice(event.previousIndex, 0, afect);
    }
  }

  valor(valor: any){
    console.log(valor);
    
  }
}
