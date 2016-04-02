import {App, IonicApp, Platform, MenuController} from "ionic-angular";
import {HomePage} from "./pages/home/home";
import {WelcomePage} from "./pages/welcome/welcome";

interface PageObj {
  title: string;
  component: any;
  icon: string;
  index?: number;
}

@App({
  templateUrl: "build/app.html",
  config: {} // http://ionicframework.com/docs/v2/api/config/Config/
})
class ConnectApp {
  // make HomePage the root (or first) page
  rootPage: any = WelcomePage;
  pages: Array<{title: string, component: any}>;
  
  appPages: PageObj[] = [
    { title: 'Schedule', component: HomePage, icon: 'calendar' },
    { title: 'Speakers', component: HomePage, index: 1, icon: 'contacts' },
    { title: 'Map', component: HomePage, index: 2, icon: 'map' },
    { title: 'About', component: HomePage, index: 3, icon: 'information-circle' },
  ];
  /*
  loggedInPages: PageObj[] = [
    { title: 'Logout', component: LogOutPage, icon: 'log-out' }
  ];
  loggedOutPages: PageObj[] = [
    { title: 'Login', component: LoginPage, icon: 'log-in' }
  ]*/
  loggedIn = false;


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
  
  openPage(page: PageObj) {
    // find the nav component and set what the root page should be
    // reset the nav to remove previous pages and only have this page
    // we wouldn't want the back button to show in this scenario
    let nav = this.app.getComponent('nav');

    if (page.index) {
      nav.setRoot(page.component, {tabIndex: page.index});
    } else {
      nav.setRoot(page.component);
    }
    
    if (page.title === 'Logout') {
      // Give the menu time to close before changing to logged out
      setTimeout(() => {
        //this.userData.logout();
      }, 1000);
    }
  }
}
