const http = require("http");
const url = require("url");
const hostname = "127.0.0.1";
const port = 3000;

const server = http.createServer((req, res) => {
  const path = url.parse(req.url, true).pathname;
  const name = url.parse(req.url, true).query.name || "";
  if (req.method !== "GET") {
    res.statusCode = 404;
    res.end("Неверный метод запроса");
    return;
  }
  switch (path) {
    case "/hello":
      res.statusCode = 200;
      res.setHeader("Content-Type", "text/plain");
      res.end(`${name ? "Hello,": "Hello World,"} ${name && name + ', '}status code=${res.statusCode}`);
      break;
    case "/goodbye":
      res.statusCode = 200;
      res.setHeader("Content-Type", "text/plain");
      res.end(`Goodbye, ${name && name + ', '}status code=${res.statusCode}`);
      break;
    default:
      res.statusCode = 404;
      res.end("Запрашиваемый ресурс не найден");
  }
});
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
