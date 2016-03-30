import {Page} from "ionic-angular";

@Page({
  templateUrl: "build/pages/messages/messages.html"
})
export class MessagesPage {
    items = [
        {
            code: "TD",
            name: "Test Departmnt",
            image: "",
            title: "Title 1",
            message: "Message 1"
        },
        {
            code: "TD",
            name: "Test Departmnt",
            image: "",
            title: "Title 3",
            message: "Message 3"
        },
        {
            code: "TD",
            name: "Test Departmnt",
            image: "",
            title: "Title 3",
            message: "Message 3"
        }
    ];
}
