const buffer = Buffer.from("저를 버퍼로 바꿔보세요");
console.log("from(:", buffer);
console.log("length:", buffer.length);
console.log("toString():", buffer.toString()); // 버퍼를 다시 문자열로 바꿈

const array = [
  // 스트리밍 할 때 버퍼 조각 냄
  Buffer.from("띄엄 "),
  Buffer.from("띄엄 "),
  Buffer.from("띄워쓰기"),
];
const buffer2 = Buffer.concat(array);
console.log(Buffer.concat(array).toString()); //Buffer.concat으로 조각난 buffer 합칠 수 있음

console.log(Buffer.alloc(5)); // 5 byte짜리 buffer 만들기
