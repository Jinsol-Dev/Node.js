const fs = require("fs").promises;

fs.writeFile("./writeme.txt", "글이 입력됩니다.")
  .then(() => {
    return fs.readFile("./writeme.txt"); //파일 생성
  })
  .then((data) => {
    console.log(data.toString()); //파일 읽기
  })
  .catch((err) => {
    console.error(err);
  });
