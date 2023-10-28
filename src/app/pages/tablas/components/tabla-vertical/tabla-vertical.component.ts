import { Component, Input, OnInit } from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-tabla-vertical',
  templateUrl: './tabla-vertical.component.html',
  styleUrls: ['./tabla-vertical.component.css']
})
export class TablaVerticalComponent implements OnInit {

  @Input() row0 = [];
  @Input() row1 = [];
  @Input() row2 = [];
  @Input() row3 = [];

  constructor() { }

  ngOnInit(): void {
  }

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      console.log(event.previousContainer);
      console.log(event.container);
      
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
      // console.log(event.container.data);
      // console.log(event.previousIndex);
      // console.log(event.currentIndex);
      
    } else {
      
      var dataPrevious:any = event.previousContainer.data;
      var dataNext:any = event.container.data;
      var indexPrevious:any = event.previousIndex;
      var indexNext:any = event.currentIndex;

      transferArrayItem(event.previousContainer.data,
                        event.container.data,
                        event.previousIndex,
                        event.currentIndex);

      transferArrayItem(dataNext,
                        dataPrevious,                        
                        indexNext,
                        indexPrevious);
    }
  }

}
