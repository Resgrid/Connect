import {Injectable} from "angular2/core";

@Injectable()
export class Consts {
    public ServiceUrl: string;

    // Events
    public Events_UserLoggedIn: string = "user:login";

    constructor() {
        this.ServiceUrl = "http://rgconnect.azurewebsites.net";
    }
}