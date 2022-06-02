let count: number;
count = 123;

const func = (str: string) => {
  return parseInt(str, 10);
};

const func1: (str: string) => number = (str) => {
  return parseInt(str, 10);
};
const date = new Date();

interface Person {
  name: "string";
}
const rawdata = '{"name":"Allen"}';
const newdata: Person = JSON.parse(rawdata);

let temp: number | string = 123;
temp = "123";
