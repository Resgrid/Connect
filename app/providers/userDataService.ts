import {Injectable, Inject} from "angular2/core";
import {Storage, LocalStorage} from 'ionic-angular';

@Injectable()
export class UserDataService {
    private localStorage: Storage;
    
   constructor() {
       this.localStorage = new Storage(LocalStorage);
    }

   getUserId() : Promise<string> {
       return this.localStorage.get("userId");
   }

   setUserId(userId: string) : void {
       this.localStorage.set("userId", userId);
   }
}