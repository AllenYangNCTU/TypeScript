"use strict";
var Home;
(function (Home) {
    class Page {
        constructor() {
            new Components.Header();
            new Components.Content();
            new Components.Footer();
        }
    }
    Home.Page = Page;
})(Home || (Home = {}));
