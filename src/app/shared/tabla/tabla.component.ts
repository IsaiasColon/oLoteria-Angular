import { Component, Input, OnInit } from '@angular/core';
import { ITabla } from 'src/app/_models/tabla';

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.css']
})
export class TablaComponent implements OnInit {

  @Input() tablas: ITabla[] = [];

  constructor() { }

  ngOnInit(): void {
    console.log(this.tablas);
    
  }
}
