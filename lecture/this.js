console.log(this);
// 전역 객체를 가리킴 === global이지 않을까? 응 아니야, anonymous 안에 들어있는 this는 global 아니야
// 전역 스코프의 this만 module.exports 이다
console.log(this === module.exports);
// console.log(this === exports);

function a() {
  // 함수 안에 들어있는 this가 global이야
  console.log(this === global);
}
a();
