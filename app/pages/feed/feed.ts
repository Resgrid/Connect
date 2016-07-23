import {Page} from "ionic-angular";

@Page({
  templateUrl: "build/pages/feed/feed.html",
})
export class FeedPage {
   public items: any = [
        {
            code: "TD",
            name: "Test Departmnt",
            image: "",
            title: "Title 1",
            message: "Message 1",
        },
        {
            code: "TD",
            name: "Test Departmnt",
            image: "",
            title: "Title 3",
            message: "Message 3",
        },
        {
            code: "TD",
            name: "Test Departmnt",
            image: "",
            title: "Title 3",
            message: "Message 3",
        }
    ];
}
