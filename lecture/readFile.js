const fs = require("fs");

fs.readFile("./readme1.txt", (err, data) => {
  if (err) {
    throw err;
  }
  console.log(data);
  console.log(data.toString());
});

// 2진법을 16진법으로 바꾼 것
/* <Buffer ea b8 80 ec 9d b4 20 ec 9e 85 eb a0 a5 eb 90 a9 eb 8b 88 eb 8b a4 2e> */

// 버퍼 방식
