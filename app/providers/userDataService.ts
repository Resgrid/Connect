import {Injectable} from "@angular/core";
import {Storage, LocalStorage} from "ionic-angular";

import {Observable} from "rxjs/Observable";

@Injectable()
export class UserDataService {
    public isAuthenticated: boolean = false;
    private localStorage: Storage;
    private userId: string;
    private name: string;
    private email: string;
    private token: string;

    constructor() {
        this.localStorage = new Storage(LocalStorage);
    }

    public init(): Promise<boolean> {
        let that: any = this;

        return new Promise((resolve, reject) => {
            that.localStorage.get("userId").then(function result(userId)
            {
                if (userId) {
                    that.setAuthenticated(true);
                    that.userId = userId;
                }

                that.localStorage.get("name").then(function result(name)
                {
                    if (name) {
                        that.name = name;
                    }

                    that.localStorage.get("email").then(function result(email)
                    {
                        if (email) {
                            that.email = email;
                        }

                        that.localStorage.get("authToken").then(function result(token)
                        {
                            if (token) {
                                that.token = token;
                            }

                            resolve(true);
                        });
                    });
                });
            });
        });
    }

   public getUserId(): string {
       return this.userId;
   }

   public setUserId(userId: string): void {
       this.localStorage.set("userId", userId);
   }

   public getAuthToken(): string {
       return this.token;
   }

   public setAuthToken(userId: string): void {
       this.localStorage.set("authToken", userId);
   }

   public getName(): string {
       return this.name;
   }

   public setName(userId: string): void {
       this.localStorage.set("name", userId);
   }

   public getEmail(): string {
       return this.email;
   }

   public setEmail(userId: string): void {
       this.localStorage.set("email", userId);
   }

   public setAuthenticated(authenticated: boolean): void {
       this.isAuthenticated = authenticated;
   }
}
