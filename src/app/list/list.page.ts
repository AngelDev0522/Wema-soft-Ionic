import { Component } from '@angular/core';
import { Router } from '@angular/router'; 
import { GlobalService } from '../services/global/global.service';
@Component({
  selector: 'app-list',
  templateUrl: 'list.page.html',
  styleUrls: ['list.page.scss']
})
export class ListPage{
  requestsInfo: any;
  titles = ["ORDER", "TRAVEL", "EXPENSE"];
  constructor( private router: Router, public globalService: GlobalService ) {
    this.requestsInfo = this.globalService.getRequestsInfo();
  }
  public back() {
    this.router.navigateByUrl('/requests');
  }
  public showItem(id){
    this.globalService.setItemId(id);
    this.router.navigateByUrl('/item');
  }
}
