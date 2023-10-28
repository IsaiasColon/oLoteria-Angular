import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TablasService } from 'src/app/services/tablas.service';
import { ITabla } from 'src/app/_models/tabla';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-tabla-horizontal',
  templateUrl: './tabla-horizontal.component.html',
  styleUrls: ['./tabla-horizontal.component.css']
})
export class TablaHorizontalComponent implements OnInit {

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
      transferArrayItem(event.previousContainer.data,
                        event.container.data,
                        event.previousIndex,
                        event.currentIndex);
    }
  }


}
