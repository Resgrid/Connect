import {Page, NavController, ViewController} from "ionic-angular";
import {Geolocation} from "ionic-native";
import {LocationService} from "../../providers/locationService";

@Page({
  templateUrl: "build/pages/location/location.html",
})
export class LocationPage {
    public latitude: string = "Unknown";
    public longitude: string = "Unknown";
    public altitude: string = "Unknown";
    public heading: string = "Unknown";
    public speed: string = "Unknown";
    public what3words: string = "Unknown";
    private position: any;

    constructor(private locationService: LocationService, private geolocation: Geolocation, private viewCtrl: ViewController) {
        Geolocation.getCurrentPosition().then(pos => {
            this.position = pos.coords;
            //console.log('lat: ' + pos.coords.latitude + ', lon: ' + pos.coords.longitude);

            if (this.position.latitude) {
                this.latitude = this.position.latitude;
            }

            if (this.position.longitude) {
                this.longitude = this.position.longitude;
            }

            if (this.position.altitude) {
                this.altitude = this.position.altitude;
            }

            if (this.position.heading) {
                this.heading = this.position.heading;
            }

            if (this.position.speed) {
                this.speed = this.position.speed;
            }

            if (this.position.latitude && this.position.longitude) {
                this.locationService.getWhat3WordsLocation(this.position.latitude, this.position.longitude).subscribe(response =>
                    this.what3words = response.json().words
                );
            }
        });
     }
}