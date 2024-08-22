//data types
let userName: string = "Bilal Raza";
let userAge: number = 28;
let isMarried: boolean = true;
let favDishes: Array<string> = ["Chae", "Biryani", "Haleem"];
let favNums: Array<number | string> = [10, 30, 40, 39, "40 F"];

interface User {
  userName: string;
  userAge: number;
  userCNIC?: number;
  userEmail: string;
}

let userInfo: User = {
  userName: "Bilal",
  userAge: 10,
  userEmail: "attari1235@gmail.com",
};
console.log(userInfo);
