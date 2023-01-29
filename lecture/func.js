const { odd, even } = require("./var");
console.time("JInsol");
function checkOddOrEven(number) {
  if (number % 2) {
    return odd;
  } else {
    return even;
  }
}
console.timeEnd("Jinsol");
module.exports = checkOddOrEven;

// 한가지만 넣고 싶을 떄
// module.exports = checkOddOrEven;
// module.exports에 함수를 넣으면 위와 같은 참조 관계가 끊김
// (module.exports !== exports) === {};
