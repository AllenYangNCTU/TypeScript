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

const arr: (number | string)[] = [1, "2", 3];
const stringArr: string[] = ["a", "b", "c"];
const undefinedArr: undefined[] = [undefined];

//type alias

type User = { name: string; age: number };

class Teacher {
  name: string;
  age: number;
}

const objectArr: Teacher[] = [
  new Teacher(),
  {
    name: "Allen",
    age: 25,
  },
];

//tuple
const teacherInfo: [string, string, number] = ["allen", "male", 25];
//csv
const teacherList: [string, string, number][] = [
  ["allen", "male", 12],
  ["allen", "male", 12],
  ["allen", "male", 12],
];
