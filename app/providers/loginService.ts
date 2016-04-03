import {Injectable, Inject} from "angular2/core";
import {Storage, LocalStorage, Events, Platform} from "ionic-angular";
import {Consts} from "../consts";

@Injectable()
export class LoginService  {
    client: WindowsAzure.MobileServiceClient;
    userid: string;
    loggedIn: boolean = false;

    constructor(private events: Events, private consts: Consts, private platform: Platform) { }

    login(provider: string) {

        if (this.platform.is("cordova")) {
            this.client = new WindowsAzure.MobileServiceClient(this.consts.ServiceUrl);
            this.client.login(provider).done(this.loginResponse.bind(this));
        } else {

        }
    }

    loginResponse(response: WindowsAzure.User) {
        this.userid = response.userId;
        this.loggedIn = true;
        this.events.publish(this.consts.Events_UserLoggedIn);
    }
}