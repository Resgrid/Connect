import {Injectable, Inject} from "@angular/core";
import {Storage, LocalStorage, Events, Platform} from "ionic-angular";
import {Consts} from "../consts";
import {UserDataService} from "./userDataService";

@Injectable()
export class LoginService  {
    public userId: string = "";
    public loggedIn: boolean = false;
    private client: WindowsAzure.MobileServiceClient;
    private user: WindowsAzure.User;

    constructor(private events: Events, private consts: Consts, private userDataService: UserDataService) { }

    public login(provider: string) {
        this.client = new WindowsAzure.MobileServiceClient(this.consts.ServiceUrl);
        this.client.login(provider).done(this.loginResponse.bind(this));
    }

    public loginResponse(response: WindowsAzure.User): void {
        this.user = response;
        this.userId = response.userId;
        this.userDataService.setUserId(this.userId);
        this.loggedIn = true;

        this.events.publish(this.consts.Events_UserLoggedIn);
    }
}