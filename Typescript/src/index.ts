// Generic

// interface User<G extends { rollNo: number }> {
//   name: string;
//   email: string;
//   data: G;
// }
// const user1: User<{ rollNo: number; dob: string }> = {
//   name: "Bilal",
//   email: "attari1235@gmail.com",
//   data: {
//     rollNo: 123,
//     dob: "19-2-1993",
//   },
// };

// function generateData<T extends { name: string }>(arg: T): T {
//   return arg;
// }
// // generateData(["1234"]);
// const data = generateData({ name: "avc", age: 123, abc: "12" });

//Enums

// enum TodoStatus {
//   ongoing = "ongoing",
//   pending = "pending",
//   complete = "complete",
//   stuck = "stuck",
// }

// const todos: { todo: string; status: string }[] = [
//   {
//     todo: "class",
//     status: TodoStatus.ongoing,
//   },
//   {
//     todo: "Mobile Reparing",
//     status: TodoStatus.stuck,
//   },
//   {
//     todo: "Lunch",
//     status: TodoStatus.complete,
//   },
// ];

// console.log(todos);

// ongoing = 0;
// pending = 1;
// complete = 2;
// stuck = 3;
