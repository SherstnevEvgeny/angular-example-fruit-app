import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import {  HttpClient, HttpHeaders } from '@angular/common/http';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { CreateFruitComponent } from '../create-fruit/create-fruit.component';
import { ViewFruitComponent } from '../view-fruit/view-fruit.component';
import { NumberValueAccessor } from '@angular/forms';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  products: any = [];
  curData: any = [];
  dialogRef: any;
  constructor(private apiService: ApiService, private dialog: MatDialog) { }

  ngOnInit() {
    this.apiService.get().subscribe((data) => {
      console.log(data);
      this.products = data;
    })
  }

  openDialog(id: number) {
    this.apiService.get_product(id).subscribe((data) => {
      console.log('QUERY RESULT')
      console.log(data);
      this.curData = data;
      this.dialogRef = this.dialog.open(ViewFruitComponent, {
        width: '450px',
        height: '600px',
        data: { name: this.curData.name, 
                image: this.curData.Image, 
                proteins: this.curData.Proteins, 
                fats: this.curData.Fats, 
                carbohydrates: this.curData.Carbohydrates}
      });
    })

    

  }

}
