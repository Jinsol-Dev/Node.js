const fs = require("fs");

const readStream = fs.createReadStream("./readme3.txt", { highWaterMark: 16 });
const data = [];

readStream.on("data", (chunk) => {
  data.push(chunk);
  console.log("data:", chunk, chunk.length);
});
readStream.on("end", () => {
  console.log("end:", Buffer.concat(data).toString());
});
readStream.on("error", (err) => {
  console.log("error :", err);
});

// 출력 결과
// data: <Buffer ec a0 80 eb 8a 94 20 ec a1 b0 ea b8 88 ec 94 a9> 16
// data: <Buffer 20 ec a1 b0 ea b8 88 ec 94 a9 20 eb 82 98 eb 88> 16
// data: <Buffer a0 ec 84 9c 20 ec a0 84 eb 8b ac eb 90 a9 eb 8b> 16
// data: <Buffer 88 eb 8b a4 2e 20 eb 82 98 eb 88 a0 ec a7 84 20> 16
// data: <Buffer ec a1 b0 ea b0 81 ec 9d 84 20 63 68 75 6e 6b eb> 16
// data: <Buffer 9d bc ea b3 a0 20 eb b6 80 eb a6 85 eb 8b 88 eb> 16
// data: <Buffer 8b a4 2e 0d 0a ec 95 88 eb 85 95 ed 95 98 ec 84> 16
// data: <Buffer b8 ec 9a 94 2e 20 ed 97 ac eb a1 9c 20 eb 85 b8> 16
// data: <Buffer eb 93 9c 20 ed 97 ac eb a1 9c 20 ec 8a a4 ed 8a> 16
// data: <Buffer b8 eb a6 bc 20 ed 97 ac eb a1 9c 20 eb b2 84 ed> 16
// data: <Buffer 8d bc> 2
// end: 저는 조금씩 조금씩 나눠서 전달됩니다. 나눠진 조각을 chunk라고 부릅니다.
// 안녕하세요. 헬로 노드 헬로 스트림 헬로 버퍼

// 스트림의 장점 : 메모리 절약 가능
// 대용량 파일 서버 사용할 때 스트림 방식 사용이 필수
