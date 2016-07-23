import {Injectable} from "@angular/core";

@Injectable()
export class Consts {
    // Project Constants
    public ServiceUrl: string = "https://rgconnect.azurewebsites.net";
    //public ResgridApiUrl: string = "https://api.resgrid.com";
    public ResgridApiUrl: string = "http://resgridapi.local/api/v3/connect";
    public Version: string = "1.0.0";

    // Events
    public Events_UserLoggedIn: string = "user:login";
}