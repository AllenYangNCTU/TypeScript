"use strict";
var Components;
(function (Components) {
    let SubComponents;
    (function (SubComponents) {
        class Test {
        }
        SubComponents.Test = Test;
    })(SubComponents = Components.SubComponents || (Components.SubComponents = {}));
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
//<reference path="./components.ts" />
var Home;
(function (Home) {
    class Page {
        constructor() {
            this.user = {
                name: "AllenYang",
            };
            new Components.Header();
            new Components.Content();
            new Components.Footer();
        }
    }
    Home.Page = Page;
})(Home || (Home = {}));
