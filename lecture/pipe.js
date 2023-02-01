const fs = require("fs");

const readStream = fs.createReadStream("./readme3.txt");
const writeStream = fs.createWriteStream("./writeme4.txt");
readStream.pipe(writeStream);

// readmd3의 글을 복사해서 writeme4에 옮기기
