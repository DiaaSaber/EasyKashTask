import { Component } from '@angular/core';
import { RandomUserService } from './services/random-user.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  data:Array<any>;
  pageItems:Number;
  totalRecords: String;
  page:Number=1;
  perPage:Number;
  seller_id:Number;

  constructor(private randomUser: RandomUserService){
    this.data = new Array<any>();
  }

  getUsers(){
    this.randomUser.getData(this.page).subscribe((data) =>{
      console.log(data)
      this.data = data.transaction.rows;
      this.totalRecords = data.transaction.count;
    })
  }

  pageChange($event) {
    this.page = $event;
    console.log(this.page);
    this.randomUser.getData(this.page).subscribe((data) =>{
      console.log(data)
      this.data = data.transaction.rows;
      this.totalRecords = data.transaction.count;
    })
  }


}
