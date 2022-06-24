//<reference path="./components.ts" />
namespace Home {
  export class Page {
    user: Components.User = {
      name: "AllenYang",
    };
    constructor() {
      new Components.Header();
      new Components.Content();
      new Components.Footer();
    }
  }
}
