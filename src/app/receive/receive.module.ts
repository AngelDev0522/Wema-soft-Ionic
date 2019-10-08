import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReceivePage } from './receive.page';
import { MenuController , NavController, AlertController} from '@ionic/angular';
@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild([{ path: '', component: ReceivePage }])
  ],
  declarations: [ReceivePage]
})
export class ReceivePageModule {
  constructor(public navCtrl: NavController, 
    private alertCtrl: AlertController,
    private menuCtrl: MenuController
  ) {
    this.menuCtrl.enable(true);
  }
}
