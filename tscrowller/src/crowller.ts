// console.log("hello world");
//ts -> .d.ts transform -> js

import superagent from "superagent";

class Corwller {
  private secret = "secretKey";
  private url = `http://www.dell-lee.com/typescript/demo.html?secret=${this.secret}`;
  private rawHtml = "";

  async getRawHtml() {
    const result = await superagent.get(this.url);
    // console.log(result.text);
    this.rawHtml = result.text;
  }

  constructor() {
    // console.log("constructor");
    this.getRawHtml();
  }
}

const crowller = new Corwller();
