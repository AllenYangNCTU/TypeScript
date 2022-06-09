// console.log("hello world");
//ts -> .d.ts transform -> js

import superagent from "superagent";
import cheerio from "cheerio";
interface Course {
  title: string;
  count123: number;
}
class Corwller {
  private secret = "secretKey";
  private url = `http://www.dell-lee.com/typescript/demo.html?secret=${this.secret}`;
  // private rawHtml = "";

  getCourseInfo(html: string) {
    const $ = cheerio.load(html);
    const courseItems = $(".course-item");
    const courseInfos: Course[] = [];
    // console.log(courseItems.length);
    courseItems.map((index, element) => {
      const descs = $(element).find(".course-desc");
      const title = descs.eq(0).text();
      // const count = "";
      const count123 = parseInt(descs.eq(1).text().split(": ")[1], 10);
      courseInfos.push({
        title,
        count123,
      });
      const result = {
        time: new Date().getTime(),
        data: courseInfos,
      };
      console.log(result);

      // console.log(title, count123);
    });
  }

  async getRawHtml() {
    const result = await superagent.get(this.url);
    // console.log(result.text);
    // this.rawHtml = result.text;
    this.getCourseInfo(result.text);
  }

  constructor() {
    // console.log("constructor");
    this.getRawHtml();
  }
}

const crowller = new Corwller();
