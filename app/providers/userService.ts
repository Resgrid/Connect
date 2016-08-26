import {Injectable} from "@angular/core";
import {Http, Response} from "@angular/http";
import {Observable} from "rxjs/Observable";
import {Consts} from "../consts";

@Injectable()
export class UserService {
   constructor(private http: Http, private consts: Consts) {

   }

   public register(id: string, name: string, email: string): Observable<Response> {
      return this.http.post(this.consts.ResgridApiUrl + "/Register", {Id: id, Name: name, Email: email});
   }
}