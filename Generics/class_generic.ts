interface Item {
  name: string;
}

class DataManager<T extends Item> {
  constructor(private data: T[]) {}
  getItem(index: number): string {
    return this.data[index].name;
  }
}

const data = new DataManager([
  {
    name: "allen",
  },
]);

function hello<T>(params: T) {
  return params;
}

const func: <T>(params: T) => T = hello;
