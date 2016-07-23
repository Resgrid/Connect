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
    public tab1Root = FeedPage;
    public tab2Root = MePage;
    public tab3Root = MessagesPage;
    public tab4Root = SearchPage;
    public tab5Root = SettingsPage;
}
