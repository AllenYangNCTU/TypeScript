// //private, protected, public
// class Personclass {
//   public name: string;
//   public sayHi() {
//     this.name;
//     console.log("hi");
//   }
//   private sayABC() {
//     this.name;
//   }
// }

// class Teacherclass extends Personclass {
//   public sayBye() {
//     this.sayHi();
//   }
// }

// const personc = new Personclass();
// personc.name = "allen";
// console.log(personc.name);
// personc.sayHi();

// //constructor

class Personconstructor {
  // public name: string;
  // constructor(name: string) {
  //     this.name = name;
  // }
  constructor(public name: string) {}
}
const personconstructor = new Personconstructor("allen");
console.log(personconstructor.name);

class personsuper {
  constructor(public name: string) {}
}

class Teachersuper extends personsuper {
  constructor(public age: number) {
    super("AllenYang");
  }
}

const teachersuper = new Teachersuper(25);
console.log(teachersuper.age);
console.log(teachersuper.name);
