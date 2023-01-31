setImmediate(() => {
  console.log("immediate");
});
process.nextTick(() => {
  console.log("nextTick");
});
setTimeout(() => {
  console.log("timeout");
}, 0);
Promise.resolve().then(() => console.log("promise"));

// 마이크로태스크(microtask) nextTick 과 promise가 먼저 호출되어 실행된다.
// 마이크로태스크 중에서 nextTick이 promise보다 호출 순서가 앞선다.
// 그 다음에 백그라운드에 있던 setTimeout이 호출되고 마지막으로 setImmediate가 호출되어 실행된다.
