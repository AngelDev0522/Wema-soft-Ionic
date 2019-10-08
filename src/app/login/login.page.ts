import { MenuController , NavController, AlertController} from '@ionic/angular';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { RequestsPage } from '../requests/requests.page';
import { Router } from '@angular/router'; 
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit, OnDestroy {

  email: String = "";
  password: String = "";

  constructor(public navCtrl: NavController, 
    private alertCtrl: AlertController,
    private menuCtrl: MenuController,
    private router: Router
  ) {}
  public login() {
      // console.log("asdasd");
      // let { email, password } = this.registerCredentials;
      // this.httpClient.get('http://dev1.wema.co.za', {})
      //     .subscribe(data => {
      //         console.log(data);
      //     }, error => {
      //     });
      this.router.navigateByUrl('/requests');
      // this.navCtrl.push('home');
      // this.navCtrl.setRoot(StudentHome);
  }

  public showAlert(text, title) {
      let alert = this.alertCtrl.create({
          header: title,
          subHeader: text,
          buttons: ['OK']
      });
      // alert.present();
  }
  ngOnInit() {
    this.menuCtrl.enable(false);
  }

  ngOnDestroy() {
    this.menuCtrl.enable(true);
  }
}
