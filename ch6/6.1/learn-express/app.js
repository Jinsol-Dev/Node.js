const express = require("express");
const path = require("path");

// 앱 먼저 만들고
const app = express();

// 앱에 관한 설정
app.set("port", process.env.PORT || 3000); // 전역 변수 느낌

// 공통 미들웨어
app.use((req, res, next) => {
  console.log("1 요청에 실행하고 싶어요");
  next();
});

// routers -> wildcard처럼 범위가 넓은 애들은 뒤로 위치
app.get(
  "/",
  (req, res, next) => {
    res.sendFile(path.join(__dirname, "index.html"));
    next("route");
  },
  (req, res) => {
    console.log("실행되나요?"); // 실행되지 않고
  }
);

// app.get(
//   "/",
//   (req, res, next) => {
//     res.sendFile(path.join(__dirname, "index.html"));
//     if (true) {
//       next("route"); // if else를 이용한 next분기처리
//     } else {
//       next();
//     }
//   },
//   (req, res) => {
//     console.log("실행되나요?");
//   }
// );

app.get("/", (req, res) => {
  console.log("실행되지롱"); // 여기가 실행됨
});

app.post("/", (req, res) => {
  res.send(`hello express`);
});

app.get("/category/Javascript", (req, res) => {
  res.send(`hello Javascript`);
});

app.get("/category/:name", (req, res) => {
  res.send(`hello wildcard`);
});

app.get("/", (req, res) => {
  res.send("hello exprss");
});

// 404처리 미들웨어 (에러X) -> 브라우저에 status 상태 사기칠 수 있음
app.use((req, res, next) => {
  res.status.apply(404).send("404지롱");
});

// 에러 미들웨어 -> 반드시 next 포함해야 함 (매개변수 반드시 4개)
app.use((err, req, res, next) => {
  console.error(err);
  res.send("에러났지롱. 근데 안알려주지롱");
});

app.listen(app.get("port"), () => {
  console.log("익스프레스 서버 실행");
});
