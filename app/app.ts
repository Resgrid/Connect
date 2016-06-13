
import {Component} from '@angular/core';
import {Platform, ionicBootstrap, Events, MenuController} from 'ionic-angular';
import {StatusBar} from 'ionic-native';
import {HomePage} from "./pages/home/home";
import {WelcomePage} from "./pages/welcome/welcome";

// Providers
import {Consts} from "./consts";
import {LoginService} from "./providers/loginservice";
import {UserDataService} from "./providers/userDataService";

@Component({
  //prodMode: false,
  templateUrl: "build/app.html",
  providers: [Consts, LoginService, UserDataService],
  //config: {} // http://ionicframework.com/docs/v2/api/config/Config/
})
class ConnectApp {
  // make HomePage the root (or first) page
  rootPage: any = WelcomePage;
  // pages: Array<{title: string, component: any}>;

  constructor(
    private platform: Platform,
    private menu: MenuController
  ) {
    this.initializeApp();

    // set our app's pages
    // this.pages = [
    //  { title: "Home", component: HomePage }// ,
      // { title: "My First List", component: ListPage }
    // ];
  }

  initializeApp() {
    this.platform.ready().then(() => {
      StatusBar.styleDefault();
    });
  }
}

ionicBootstrap(ConnectApp, [Consts, LoginService, UserDataService])