import {Page, NavController, ViewController} from "ionic-angular";
import {Geolocation} from "ionic-native";
import {OrganizationsService} from "../../providers/organizationsService";
import {Consts} from "../../consts";

// Directives
import {FallbackSrc} from "../../directives/fallbacksrc.directive";

// Pages
import {OrganizationPage} from "../organization/organization";

@Page({
  templateUrl: "build/pages/organizations/organizations.html",
  directives: [FallbackSrc],
})
export class OrganizationsPage {
    public departments: any;
    public departmentImageBaseUrl: string;
    public loading: boolean = true;
    public searchValue: string = "";
    private position: any;

    constructor(private organizationsService: OrganizationsService, private nav: NavController,
                private geolocation: Geolocation, private viewCtrl: ViewController, private consts: Consts) {
        Geolocation.getCurrentPosition().then(pos => {
            this.position = pos.coords;
            this.findDepartments();
            //console.log('lat: ' + pos.coords.latitude + ', lon: ' + pos.coords.longitude);
        });

        this.departmentImageBaseUrl = consts.BaseApiUrl + "/api/v3/Avatars/Get?id=";
     }


    public findDepartments(): void {
        let latitude: string;
        let longitude: string;

        if (this.position !== undefined) {
            latitude = this.position.latitude;
            longitude = this.position.longitude;
        }

        this.organizationsService.getDepartments(latitude, longitude).subscribe(response =>
            this.finishLoading(response.json())
        );
    }

    public finishLoading(departmentJson: any): void {
        this.departments = departmentJson;
        this.loading = false;
    }

    public getItems(ev: any): void {
        this.searchValue = ev.target.value;
    }

    public departmentSelected(department: any): void {
        this.nav.push(OrganizationPage, {
            profileId: department.ProfileId,
        });
    }

    public generateDepartmentImageUrl(departmentId: string): string {
        return this.departmentImageBaseUrl + departmentId + "&type=2";
    }
}
