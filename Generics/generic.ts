function join<T1, T2>(first: T1, second: T2) {
  return `${first}${second}`;
}

function join2<T>(first: T): T {
  return first;
}

function map<T>(params: Array<T>) {
  return params;
}

join<string, number>("1", 1);

join("1", 1);

map<string>(["1", "2", "3"]);
