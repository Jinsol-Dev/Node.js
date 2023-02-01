const fs = require("fs").promises;

fs.readFile("./readme1.txt")
  .then((data) => {
    console.log(data);
    console.log(data.toString());
  })
  .catch((err) => {
    console.error(err);
  });

// 동일한 결과 출력
// Buffer ea b8 80 ec 9d b4 20 ec 9e 85 eb a0 a5 eb 90 a9 eb 8b 88 eb 8b a4 2e
