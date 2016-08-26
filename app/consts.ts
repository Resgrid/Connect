import {Injectable} from "@angular/core";

@Injectable()
export class Consts {
    // Project Constants
    public ServiceUrl: string = "https://rgconnect.azurewebsites.net";
    //public ResgridApiUrl: string = "https://api.resgrid.com";
    public BaseApiUrl: string = "http://resgridapi.local";
    public ResgridApiUrl: string = this.BaseApiUrl + "/api/v3/connect";
    public Version: string = "1.0.0";

    // Events
    public Events_UserLoggedIn: string = "user:login";
    public Events_SystemReady: string = "system:ready";

    // API Key
    public What3WordsKey = "TEST";
}