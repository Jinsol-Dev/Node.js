const fs = require("fs");

console.log("시작");
fs.readFile("./readme2.txt", (err, data) => {
  if (err) {
    throw err;
  }
  console.log("1번", data.toString());
  fs.readFile("./readme2.txt", (err, data) => {
    if (err) {
      throw err;
    }
    console.log("2번", data.toString());
    fs.readFile("./readme2.txt", (err, data) => {
      if (err) {
        throw err;
      }
      console.log("3번", data.toString());
      console.log("끝");
    });
  });
});

// 실행 순서
// 시작
// 1번 저를 여러 번 읽어보세요.
// 2번 저를 여러 번 읽어보세요.
// 3번 저를 여러 번 읽어보세요.
// 끝

// 동기와의 차이는?
// asyncOrder 파일을 여러개 실행할 떄는, 다 같이 백그라운드로 넘어가서 파일이 동시에 실행됨
// 순서를 지키면서 동시에 실행되는데, 다 같이 백그라운드로 넘어감
// 동시성을 살릴 수 있으나 콜백 헬을 만들어냄
