import {Injectable} from "angular2/core";

@Injectable()
export class Consts {
    // Project Constants
    public ServiceUrl: string = "http://rgconnect.azurewebsites.net";

    // Events
    public Events_UserLoggedIn: string = "user:login";
}