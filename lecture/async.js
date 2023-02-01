const fs = require("fs");

console.log("시작");
fs.readFile("./readme2.txt", (err, data) => {
  if (err) {
    throw err;
  }
  console.log("1번", data.toString());
});
fs.readFile("./readme2.txt", (err, data) => {
  if (err) {
    throw err;
  }
  console.log("2번", data.toString());
});
fs.readFile("./readme2.txt", (err, data) => {
  if (err) {
    throw err;
  }
  console.log("3번", data.toString());
});
console.log("끝");

// 비동기라서 순서대로 실행되지 않음
// 비동기 함수는 콜백들을 백그라운드로 보냄
// 백그라운드로 넘어가면 동시에 실행됨
// 동시에 실행되면 누가 먼저 끝날지는 운영체제만 알고 순서 보장되지 않음
