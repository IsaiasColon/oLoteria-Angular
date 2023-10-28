import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent {
  
  constructor(
    public dialogRef: MatDialogRef<LoginFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: {}) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  cerrarDialog( nickName:any ){
    if (nickName != "") {
      // console.log(nickName);
      this.dialogRef.close(nickName);      
    } else{
      this.dialogRef.close();
    }
  }

}
