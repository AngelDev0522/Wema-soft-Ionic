import { Component } from '@angular/core';
import { Router } from '@angular/router'; 
import { GlobalService } from '../services/global/global.service';
@Component({
  selector: 'app-item',
  templateUrl: 'item.page.html',
  styleUrls: ['item.page.scss']
})
export class ItemPage {
  titles = ["ORDER", "TRAVEL", "EXPENSE"];
  constructor( private router: Router, public globalService: GlobalService ) {
  }
  public back() {
    this.router.navigateByUrl('/list');
  }
  public receive() {
    this.router.navigateByUrl('/receive');
  }
}
