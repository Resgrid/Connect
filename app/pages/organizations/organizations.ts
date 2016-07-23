import {Page, Events, NavController} from "ionic-angular";
import {LoginService} from "../../providers/loginservice";
import {Consts} from "../../consts";
import {HomePage} from "../home/home";

@Page({
  templateUrl: "build/pages/organizations/organizations.html",
})
export class OrganizationsPage {
    constructor(private events: Events, private nav: NavController, private consts: Consts, private loginService: LoginService) {
        events.subscribe(consts.Events_UserLoggedIn, (user) => {
            nav.push(HomePage);
        });
     }

    public socialLogin(provider: string): void {
      this.loginService.login(provider);
    }

    public login(): void {
        this.nav.push(HomePage);
    }
}
