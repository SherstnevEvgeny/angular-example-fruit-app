import { Component, Inject, OnInit } from '@angular/core';
import { from } from 'rxjs';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog"
import { inject } from '@angular/core/testing';


@Component({
  selector: 'app-create-fruit',
  templateUrl: './create-fruit.component.html',
  styleUrls: ['./create-fruit.component.css']
})
export class CreateFruitComponent implements OnInit {



    constructor(public dialogRef: MatDialogRef<CreateFruitComponent>,
      @Inject(MAT_DIALOG_DATA) public data: any) {

    }

    ngOnInit() {
    }

    close(){
      this.dialogRef.close();
    }

}
