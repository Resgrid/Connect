import {Page, NavController, ViewController} from "ionic-angular";
import {OrganizationsPage} from "../organizations/organizations";

@Page({
  templateUrl: "build/pages/feed/feed.html",
})
export class FeedPage {
    public followsDepartments: Boolean;
    public items: any[];

    constructor(private nav: NavController, private viewCtrl: ViewController) {
        this.followsDepartments = false;
     }

     public goToOrganizations(): void {
         //this.nav.push(OrganizationsPage);
         this.nav.setRoot(OrganizationsPage);
     }
}