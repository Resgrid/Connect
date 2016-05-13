import {Injectable} from "angular2/core";

@Injectable()
export class Consts {
    // Project Constants
    public ServiceUrl: string = "https://rgconnect.azurewebsites.net";
    public ResgridApiUrl: string = "https://api.resgrid.com";
    public Version: string = "1.0.0";
    
    // Events
    public Events_UserLoggedIn: string = "user:login";
}