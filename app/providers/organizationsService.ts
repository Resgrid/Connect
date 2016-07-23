import {Injectable, Inject} from "@angular/core";
import {Http, Response} from "@angular/http";
import {Observable} from "rxjs/Observable";
import {Consts} from "../consts";

@Injectable()
export class OrganizationsService {
    static get parameters() {
        return [[Http]];
    }

   constructor(@Inject(Http) private http: Http, private consts: Consts) {
      this.http = http;
   }

   public getDepartments(latitude: string, longitude: string): Observable<Response> {
      return this.http.get(this.consts.ResgridApiUrl + "/ListDepartments");
   }
}