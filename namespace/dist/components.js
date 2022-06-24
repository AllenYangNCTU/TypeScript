"use strict";
var Components;
(function (Components) {
    class Header {
        constructor() {
            const elem = document.createElement("div");
            elem.innerText = "This is a Header";
            document.body.appendChild(elem);
        }
    }
    Components.Header = Header;
    class Content {
        constructor() {
            const elem = document.createElement("div");
            elem.innerText = "This is a Content";
            document.body.appendChild(elem);
        }
    }
    Components.Content = Content;
    class Footer {
        constructor() {
            const elem = document.createElement("div");
            elem.innerText = "This is a Footer";
            document.body.appendChild(elem);
        }
    }
    Components.Footer = Footer;
})(Components || (Components = {}));
