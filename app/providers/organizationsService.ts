import {Injectable} from "@angular/core";
import {Http, Response} from "@angular/http";
import {Observable} from "rxjs/Observable";
import {Consts} from "../consts";
import {UserDataService} from "../providers/userDataService";

@Injectable()
export class OrganizationsService {
   constructor(private http: Http, private consts: Consts, private userDataService: UserDataService) {

   }

   public getDepartments(latitude: string, longitude: string): Observable<Response> {
      return this.http.get(this.consts.ResgridApiUrl + "/ListDepartments");
   }

   public getDepartment(profileId: number): Observable<Response> {
      return this.http.get(this.consts.ResgridApiUrl + "/GetDepartment?profileId=" + profileId + "&userId=" + this.userDataService.getUserId());
   }
}