import "zone.js";
import "reflect-metadata";
import "es6-shim/es6-shim.min";

import {App, IonicApp, Platform, Events, MenuController} from "ionic-angular";
import {HomePage} from "./pages/home/home";
import {WelcomePage} from "./pages/welcome/welcome";

// Providers
import {Consts} from "./consts";
import {LoginService} from "./providers/loginservice";

@App({
  prodMode: false,
  templateUrl: "build/app.html",
  providers: [Consts, LoginService],
  config: {} // http://ionicframework.com/docs/v2/api/config/Config/
})
class ConnectApp {
  // make HomePage the root (or first) page
  rootPage: any = WelcomePage;
  pages: Array<{title: string, component: any}>;

  constructor(
    private app: IonicApp,
    private platform: Platform,
    private menu: MenuController
  ) {
    this.initializeApp();

    // set our app's pages
    this.pages = [
      { title: "Home", component: HomePage }//,
      //{ title: "My First List", component: ListPage }
    ];
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // The platform is now ready. Note: if this callback fails to fire, follow
      // the Troubleshooting guide for a number of possible solutions:
      //
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      //
      // First, let's hide the keyboard accessory bar (only works natively) since
      // that's a better default:
      //
      // Keyboard.setAccessoryBarVisible(false);
      //
      // For example, we might change the StatusBar color. This one below is
      // good for dark backgrounds and light text:
      // StatusBar.setStyle(StatusBar.LIGHT_CONTENT)
    });
  }
}