import {Injectable} from "@angular/core";
import {Http, Response} from "@angular/http";
import {Observable} from "rxjs/Observable";
import {Consts} from "../consts";

@Injectable()
export class LocationService {
   constructor(private http: Http, private consts: Consts) {

   }

   public getWhat3WordsLocation(latitude: string, longitude: string): Observable<Response> {
      return this.http.get("https://api.what3words.com/v2/reverse?coords=" + latitude + "," + longitude + "&display=full&format=json&key=" + this.consts.What3WordsKey);
   }

}