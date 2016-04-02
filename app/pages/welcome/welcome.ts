import {NavController, Page} from "ionic-angular";
import {LoginPage} from "../login/login";

@Page({
  templateUrl: "build/pages/welcome/welcome.html"
})
export class WelcomePage {
    constructor(public nav: NavController){
        this.nav = nav;
    }
    
    openLogin() {
        this.nav.push(LoginPage);
    }
}
