import {NavController, Events, Page} from "ionic-angular";
import {LoginPage} from "../login/login";
import {HomePage} from "../home/home";

import {Consts} from "../../consts";
import {UserDataService} from "../../providers/userDataService";

@Page({
  templateUrl: "build/pages/welcome/welcome.html",
})
export class WelcomePage {
    constructor(private nav: NavController,
                private events: Events,
                private consts: Consts,
                private userDataService: UserDataService) {

        this.events.subscribe(consts.Events_SystemReady,() => {
            if (userDataService.isAuthenticated) {
                nav.setRoot(HomePage);
            }
        });
    }

    public openLogin(): void {
        this.nav.push(LoginPage);
    }
}