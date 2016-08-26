
import {Component, ViewChild} from "@angular/core";
import {Platform, ionicBootstrap, Events, MenuController, Nav} from "ionic-angular";
import {StatusBar, Geolocation} from "ionic-native";

// Pages
import {HomePage} from "./pages/home/home";
import {WelcomePage} from "./pages/welcome/welcome";
import {OrganizationsPage} from "./pages/organizations/organizations";
import {LocationPage} from "./pages/location/location";

// Providers
import {Consts} from "./consts";
import {LoginService} from "./providers/loginservice";
import {UserDataService} from "./providers/userDataService";
import {OrganizationsService} from "./providers/organizationsService";
import {LocationService} from "./providers/locationService";
import {UserService} from "./providers/userService";

// Directives
//import {FallbackSrc} from "./directives/fallbacksrc.directive";

@Component({
  //prodMode: false,
  templateUrl: "build/app.html",
  providers: [Consts, LoginService, UserDataService],
  //directives: [FallbackSrc],
  //queries: {
  //  nav: new ViewChild('content')
  //}
  //config: {} // http://ionicframework.com/docs/v2/api/config/Config/
})
class ConnectApp {
  @ViewChild(Nav) nav: Nav;
  public rootPage: any = WelcomePage;
  public menuItems: Array<{title: string, description: string, icon: string, component: any}>;

  constructor(
    private platform: Platform,
    private events: Events,
    private consts: Consts,
    private menu: MenuController,
    private userDataService: UserDataService
  ) {
    this.initializeApp();

    this.menuItems = [
      { title: "Feed", description: "View your feed", icon: "ios-paper", component: HomePage },
      { title: "Organizations", description: "Find organizations to follow", icon: "cube", component: OrganizationsPage },
      //{ title: "Opportunities", description: "See what volunteer options there are", icon: "disc", component: OrganizationsPage },
      //{ title: "Alerts", description: "View alerts received", icon: "pulse", component: OrganizationsPage },
      { title: "Location", description: "View current location", icon: "compass", component: LocationPage },
      //{ title: "Profile", description: "View and edit your profile", icon: "contact", component: OrganizationsPage },
      { title: "About", description: "About resgrid connect", icon: "information-circle", component: OrganizationsPage },
    ];
  }

  public initializeApp(): void {
    let that: any = this;

    this.platform.ready().then(() => {
      StatusBar.styleDefault();
      this.userDataService.init().then(function() {
        that.events.publish(that.consts.Events_SystemReady);
       });
    });
  }

  public openPage(page: any): void {
    // close the menu when clicking a link from the menu
    this.menu.close();
    // navigate to the new page if it is not the current page
    this.nav.setRoot(page.component);
  }
}

ionicBootstrap(ConnectApp, [Consts, LoginService, UserDataService, OrganizationsService, Geolocation, LocationService, UserService]);