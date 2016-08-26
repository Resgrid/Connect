import {Page, Events, NavController} from "ionic-angular";
import {LoginService} from "../../providers/loginservice";
import {UserService} from "../../providers/userService";
import {Consts} from "../../consts";
import {HomePage} from "../home/home";
import {RegistrationResult} from "../../models/registrationResult";
import {UserDataService} from "../../providers/userDataService";

@Page({
  templateUrl: "build/pages/login/login.html",
})
export class LoginPage {
    constructor(private events: Events, private nav: NavController, private consts: Consts, private loginService: LoginService,
                private userService: UserService, private userDataService: UserDataService) {
        events.subscribe(consts.Events_UserLoggedIn, (user) => {
            nav.push(HomePage);
        });
     }

    public socialLogin(provider: string): void {
      this.loginService.login(provider);
    }

    public login(): void {
        this.userService.register("TEST", "Test User", "test@resgrid.com").subscribe(result =>
            this.validateRegistration(result.json())
        );

        this.nav.push(HomePage);
    }

    public validateRegistration(result: RegistrationResult): void {
        if (result.UserId) {
            this.userDataService.setUserId(result.UserId);
            this.userDataService.isAuthenticated = true;
        }
    }
}
