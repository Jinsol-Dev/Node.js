const dep1 = require("./dep1");
const dep2 = require("./dep2");
dep1();
dep2();

// 순환참조 (circular dependency)
// 순환참조가 있을 경우, 순환참조 되는 대상을 빈 객체로 만든다.
// 이때 에러가 발생하지 않고 조용히 빈 객체로 변경되므로 예기치 못한 동작이 발생할 수 있다.
// 따라서 순환참조가 발생하지 않도록 구조를 잘 잡는 것이 중요하다.

// require dep1 {}
// require dep2 [Function (anonymous)]
// dep2 [Function (anonymous)]
// dep1 {}
// (node:10532) Warning: Accessing non-existent property 'Symbol(nodejs.util.inspect.custom)' of module exports inside circular dependency
// (Use `node --trace-warnings ...` to show where the warning was created)
// (node:10532) Warning: Accessing non-existent property 'constructor' of module exports inside circular dependency
// (node:10532) Warning: Accessing non-existent property 'Symbol(Symbol.toStringTag)' of module exports inside circular dependency
// (node:10532) Warning: Accessing non-existent property 'Symbol(nodejs.util.inspect.custom)' of module exports inside circular dependency
// (node:10532) Warning: Accessing non-existent property 'constructor' of module exports inside circular dependency
// (node:10532) Warning: Accessing non-existent property 'Symbol(Symbol.toStringTag)' of module exports inside circular dependency
