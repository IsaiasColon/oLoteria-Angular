import { Component, Inject, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { ISala } from 'src/app/_models/sala';

@Component({
  selector: 'app-entrar-sala-dialog',
  templateUrl: './entrar-sala-dialog.component.html',
  styleUrls: ['./entrar-sala-dialog.component.css']
})
export class EntrarSalaDialogComponent implements OnInit {

  sala: ISala = {} as any;

  constructor(
    public dialogRef: MatDialogRef<EntrarSalaDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data = {} as any) {}

  ngOnInit() {
      this.sala = this.data;
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  entrar() {
    this.dialogRef.close(true);
  }

}
