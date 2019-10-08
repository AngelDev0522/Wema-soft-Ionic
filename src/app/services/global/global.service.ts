/**
 * @author    Ionic Bucket <ionicbucket@gmail.com>
 * @copyright Copyright (c) 2018
 * @license   Fulcrumy
 * 
 * This file represents a provider of Menu Items,
 * File path - '../../services/menu-items/menu-items.service'
 */

import { Injectable } from '@angular/core';

export interface state {
  Pending: number;
  Approved: number;
  Denied: number;
}

/**
 * Side Menu List
 */

@Injectable()

export class GlobalService {
  requestsState = [
    { Pending:1, Approved:2,Denied:3 },
    { Pending:11, Approved:22,Denied:33 },
    { Pending:111, Approved:222,Denied:333 }
  ];
  requestsInfo = [
    { id:"REQ1001", supplier: "Wemasoft1", date:"12-01-19",by:"David",dept:"Fina", status:"xx" ,title:"R4350"},
    { id:"REQ1002", supplier: "Wemasoft2", date:"12-01-19",by:"David",dept:"Fina", status:"xx" ,title:"R4350"},
    { id:"REQ1003", supplier: "Wemasoft3", date:"12-01-19",by:"David",dept:"Fina", status:"xx" ,title:"R4350"},
    { id:"REQ1004", supplier: "Wemasoft4", date:"12-01-19",by:"David",dept:"Fina", status:"xx" ,title:"R4350"},
    { id:"REQ1005", supplier: "Wemasoft5", date:"12-01-19",by:"David",dept:"Fina", status:"xx" ,title:"R4350"},
    { id:"REQ1006", supplier: "Wemasoft6", date:"12-01-19",by:"David",dept:"Fina", status:"xx" ,title:"R4350"}
  ];
  requestsType = 0;
  itemId = 0;
  constructor() { }
  getRequestsState(): state[] {
    return this.requestsState;
  }
  getRequestsType(){
    return this.requestsType;
  }
  setRequestsType(val) {
    this.requestsType = val;
  }
  getRequestsInfo(){
    return this.requestsInfo;
  }
  setItemId(val) {
    for(var i=0;i<this.requestsInfo.length;i++)
    {
      if(this.requestsInfo[i].id == val)
        this.itemId = i;
    }
    // console.log(this.itemId);
  }
  getItem(){
    return this.requestsInfo[this.itemId];
  }
}
