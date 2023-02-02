const http = require("http");

const server = http
  .createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/html; charset=utf-8 " });
    res.write("<h1>Hello World!</h1>");
    res.write("<p>Hello Node!</p>");
    res.end("<p>Hello Server!</p>");
  })
  .listen(8080);

server.on("listening", (error) => {
  console.log("8080 포트에서 서버 대기 중입니다!");
});
server.on("error", (error) => {
  console.error(error);
});

http
  .createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/html; charset=utf-8 " });
    res.write("<h1>Hello World!</h1>");
    res.write("<p>Hello Node!</p>");
    res.end("<p>Hello Server!</p>");
  })
  .listen(8081, () => {
    console.log("8081 포트에서 서버 대기 중입니다!");
  });
