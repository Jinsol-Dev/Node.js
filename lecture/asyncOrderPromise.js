const fs = require("fs").promises;

// fs.readFile("./readme2.txt")
//   .then((data) => {
//     console.log("1번", data.toString());
//     return fs.readFile("./readme2.txt");
//   })
//   .then((data) => {
//     console.log("2번", data.toString());
//     return fs.readFile("./readme2.txt");
//   })
//   .then((data) => {
//     console.log("3번", data.toString());
//     return fs.readFile("./readme2.txt");
//   })
//   .then((data) => {
//     console.log("4번", data.toString());
//     return fs.readFile("./readme2.txt");
//   })
//   .catch((err) => {
//     throw err;
//   });

// 실행 순서
// 1번 저를 여러 번 읽어보세요.
// 2번 저를 여러 번 읽어보세요.
// 3번 저를 여러 번 읽어보세요.
// 4번 저를 여러 번 읽어보세요.

async function main() {
  let data = await fs.readFile("./readme1.txt");
  console.log("1번", data.toString());
  data = await fs.readFile("./readme1.txt");
  console.log("2번", data.toString());
  data = await fs.readFile("./readme1.txt");
  console.log("3번", data.toString());
  data = await fs.readFile("./readme1.txt");
  console.log("4번", data.toString());
}
main();

// 실행 순서
// 1번 글이 입력됩니다.
// 2번 글이 입력됩니다.
// 3번 글이 입력됩니다.
// 4번 글이 입력됩니다.
