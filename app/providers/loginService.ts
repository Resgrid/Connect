import {Injectable, Inject} from "angular2/core";
import {Storage, LocalStorage, Events, Platform} from "ionic-angular";
import {Consts} from "../consts";
import {UserDataService} from "./userDataService";

@Injectable()
export class LoginService  {
    private client: WindowsAzure.MobileServiceClient;
    private user: WindowsAzure.User;
    public userId: string = "";
    public loggedIn: boolean = false;

    constructor(private events: Events, private consts: Consts, private userDataService: UserDataService) { }

    login(provider: string) {
        this.client = new WindowsAzure.MobileServiceClient(this.consts.ServiceUrl);
        this.client.login(provider).done(this.loginResponse.bind(this));
    }

    loginResponse(response: WindowsAzure.User) {
        this.user = response;
        this.userId = response.userId;
        this.userDataService.setUserId(this.userId);
        this.loggedIn = true;
        
        this.events.publish(this.consts.Events_UserLoggedIn);
    }
}