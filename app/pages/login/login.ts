import {Page, Events, NavController} from "ionic-angular";
import {LoginService} from "../../services/loginservice";
import {Consts} from "../../consts";
import {HomePage} from "../home/home";

@Page({
  templateUrl: "build/pages/login/login.html"
})
export class LoginPage {

    constructor(private events: Events, private nav: NavController, private consts: Consts, private loginService: LoginService) {
        this.events.subscribe(this.consts.Events_UserLoggedIn, (user) => {
            this.nav.push(HomePage);
        });
     }

    doLogin(provider:string){
      this.loginService.login(provider);
    }
}
