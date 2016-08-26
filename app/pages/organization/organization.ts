import {Page, NavController, ViewController, NavParams} from "ionic-angular";
import {Geolocation} from "ionic-native";
import {OrganizationsService} from "../../providers/organizationsService";
import {Consts} from "../../consts";

// Directives
import {FallbackSrc} from "../../directives/fallbacksrc.directive";

// Pages
import {HomePage} from "../home/home";

@Page({
  templateUrl: "build/pages/organization/organization.html",
  directives: [FallbackSrc],
})
export class OrganizationPage {
    public profileId: number;
    public profile: any = {};
    public departmentImageBaseUrl: string;

    constructor(private nav: NavController, private viewCtrl: ViewController, private consts: Consts,
                params: NavParams, private organizationsService: OrganizationsService) {
        this.departmentImageBaseUrl = consts.BaseApiUrl + "/api/v3/Avatars/Get?id=";
        this.profileId = params.get("profileId");

        this.organizationsService.getDepartment(this.profileId).subscribe(response =>
            this.finishLoading(response.json())
        );
    }

    public finishLoading(department: any): void {
        this.profile = department;
    }

    public generateDepartmentImageUrl(departmentId: string): string {
        return this.departmentImageBaseUrl + departmentId + "&type=2";
    }
}