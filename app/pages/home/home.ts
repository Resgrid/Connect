import {Page} from "ionic-angular";
import {FeedPage} from '../feed/feed';
import {MessagesPage} from '../messages/messages';
import {MePage} from '../me/me';
import {SearchPage} from '../search/search';
import {SettingsPage} from '../settings/settings';

@Page({
  templateUrl: "build/pages/home/home.html"
})
export class HomePage {
    tab1Root = FeedPage;
    tab2Root = MePage;
    tab3Root = MessagesPage;
    tab4Root = SearchPage;
    tab5Root = SettingsPage;
}
