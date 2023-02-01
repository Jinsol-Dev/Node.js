const zlib = require("zlib");
const fs = require("fs");

const readStream = fs.createReadStream("./readme4.txt");
const zlibStream = zlib.createGzip(); // 압축 stream
const writeStream = fs.createWriteStream("./readme4.txt");
readStream.pipe(zlibStream).pipe(writeStream);
