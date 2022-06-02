class Person {
  Name = "allen";
  getName() {
    return this.Name;
  }
}
class Teacher1 extends Person {
  getTeacherName() {
    return "a-kai";
  }
  getName(): string {
    return super.getName() + " is very handsome";
  }
}
const person2 = new Person();
console.log(person2.getName());
const teacher1 = new Teacher1();
console.log(teacher1.getTeacherName());
console.log(teacher1.getName());
