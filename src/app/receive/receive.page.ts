import { Component } from '@angular/core';
import { Router } from '@angular/router'; 
import { GlobalService } from '../services/global/global.service';
@Component({
  selector: 'app-receive',
  templateUrl: 'receive.page.html',
  styleUrls: ['receive.page.scss']
})
export class ReceivePage {
  titles = ["ORDER", "TRAVEL", "EXPENSE"];
  constructor( private router: Router, public globalService: GlobalService ) {
  }
  public back() {
    this.router.navigateByUrl('/item');
  }
}
