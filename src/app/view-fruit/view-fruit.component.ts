import { Component, OnInit, Inject } from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";


@Component({
  selector: 'app-view-fruit',
  templateUrl: './view-fruit.component.html',
  styleUrls: ['./view-fruit.component.css']
})
export class ViewFruitComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<ViewFruitComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
     }

  ngOnInit(): void {
    console.log('CHOOSEN');
    console.log(this.data);
  }

  close(){
    this.dialogRef.close();
  }
}
