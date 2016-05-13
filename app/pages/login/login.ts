import {Page, Events, NavController} from "ionic-angular";
import {LoginService} from "../../providers/loginservice";
import {Consts} from "../../consts";
import {HomePage} from "../home/home";

@Page({
  templateUrl: "build/pages/login/login.html"
})
export class LoginPage {
    email: string;
    password: string;

    constructor(private events: Events, private nav: NavController, private consts: Consts, private loginService: LoginService) {
        events.subscribe(consts.Events_UserLoggedIn, (user) => {
            nav.push(HomePage);
        });
     }

    socialLogin(provider:string){
      this.loginService.login(provider);
    }

    login() {
        this.nav.push(HomePage);
    }
}
