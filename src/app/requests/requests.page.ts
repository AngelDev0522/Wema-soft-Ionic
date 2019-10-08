import { Component } from '@angular/core';
import { Router } from '@angular/router'; 
import { GlobalService } from '../services/global/global.service';
@Component({
  selector: 'app-requests',
  templateUrl: 'requests.page.html',
  styleUrls: ['requests.page.scss']
})
export class RequestsPage{
  requestsStates: any;
  constructor(
    private router: Router,
    public globalService: GlobalService
  ) {
    this.requestsStates = this.globalService.getRequestsState();
  }
  public sendList(val) {
    this.globalService.setRequestsType(val);
    console.log(val);
    this.router.navigateByUrl('/list');
  }
}
