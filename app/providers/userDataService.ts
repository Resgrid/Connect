import {Injectable, Inject} from "@angular/core";
import {Storage, LocalStorage} from "ionic-angular";

@Injectable()
export class UserDataService {
    private localStorage: Storage;

   constructor() {
       this.localStorage = new Storage(LocalStorage);
    }

   public getUserId(): Promise<string> {
       return this.localStorage.get("userId");
   }

   public setUserId(userId: string): void {
       this.localStorage.set("userId", userId);
   }

   public getAuthToken(): Promise<string> {
       return this.localStorage.get("authToken");
   }

   public setAuthToken(userId: string): void {
       this.localStorage.set("authToken", userId);
   }

   public getName(): Promise<string> {
       return this.localStorage.get("name");
   }

   public setName(userId: string): void {
       this.localStorage.set("name", userId);
   }

   public getEmail(): Promise<string> {
       return this.localStorage.get("email");
   }

   public setEmail(userId: string): void {
       this.localStorage.set("email", userId);
   }
}
