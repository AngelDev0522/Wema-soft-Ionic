import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ListPage } from './list.page';
import { MenuController , NavController, AlertController} from '@ionic/angular';
@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild([{ path: '', component: ListPage }])
  ],
  declarations: [ListPage]
})
export class ListPageModule {
  constructor(public navCtrl: NavController, 
    private alertCtrl: AlertController,
    private menuCtrl: MenuController
  ) {
    this.menuCtrl.enable(true);
  }
}
