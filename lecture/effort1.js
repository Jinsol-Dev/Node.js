setInterval(() => {
  console.log("시작");
  try {
    throw new Error("서버를 고장내주마!");
  } catch (err) {
    console.error(err);
  }
}, 1000);

// 실행 결과
// 시작
// Error: 서버를 고장내주마!
//     at Timeout._onTimeout (C:\Users\jinso\바탕 화면\JInsol_Dev\node.js\lecture\effort1.js:4:11)
//     at listOnTimeout (node:internal/timers:564:17)
//     at process.processTimers (node:internal/timers:507:7)
// 시작
// Error: 서버를 고장내주마!
//     at Timeout._onTimeout (C:\Users\jinso\바탕 화면\JInsol_Dev\node.js\lecture\effort1.js:4:11)
//     at listOnTimeout (node:internal/timers:564:17)
//     at process.processTimers (node:internal/timers:507:7)

//     ... 계속 반복됨
