const express = require("express");
const path = require("path");

const app = express();

app.set("port", process.env.PORT || 3000); // 전역 변수 느낌

app.use(
  (req, res, next) => {
    console.log("1 요청에 실행하고 싶어요");
    next();
  },
  (req, res, next) => {
    throw new Error("에러가 났어요");
  }
);

app.get("/category/Javascript", (req, res) => {
  res.send(`hello Javascript`);
});

app.get("/category/:name", (req, res) => {
  res.send(`hello wildcard`);
});

app.get("/about", (req, res) => {
  res.send("hello exprss");
});

app.listen(app.get("port"), () => {
  console.log("익스프레스 서버 실행");
});
