const checkOddOrEven = require("./func");

const odd = "홀수 입니다";
const even = "짝수 입니다.";

module.exports = { odd, even };
// (module.exports === exports) === {};
// module.exports와 exports는 본래 같고, 빈 객체로 되어있음

// 두 가지 이상을 모듈로 만들고 싶을 떄
// module.exports = {} -> module.exports !== exports
// module.exports에 객체를 넣어도 참조관계가 끊김
// exports.odd = odd를 사용하면 이것만 계속 사용해야 함
// module.exports를 하는 순간 위의 코드가 무시됨 -> 참조 관계가 끊겨서
