// class Personabs {
//     public readonly name: string;
//     constructor(name: string){
//         this.name = name;
//     }
// }

// const personabs = new Personabs('allen');

// console.log(personabs.name);

// abstract class Geom{
//     width: number;
//     radius: number;
//     abstract getArea(): number;
//     getType(){
//         return 'Geom';
//     }
// }
// class Circle{
//    getArea(){
//        return 123;
//    }
// }

// class Square{

// }

// class Triangle{

// }
interface Personabs {
  name: string;
}

interface Teacher extends Personabs {
  // name: string,
  teachingAge: number;
}
interface Student extends Personabs {
  // name: string,
  age: number;
}

const teacher = {
  name: "allen",
  teachingAge: 3,
};

const student = {
  name: "tzutzu",
  age: 30,
};

const getUserInfo = (user: Personabs) => {
  console.log(user.name);
};

getUserInfo(teacher);
getUserInfo(student);
