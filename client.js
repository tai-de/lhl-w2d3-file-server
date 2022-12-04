const net = require("net");

const args = process.argv.slice(2);

const conn = net.createConnection({
  host: "localhost", // change to IP address of computer, more on that below
  port: 3000,
});

conn.on("data", (data) => {
  console.log(`Contents of: [${args}]`);
  console.log(`---`);
  console.log(data);
  console.log(`---`);
});

// conn.on("connect", () => {
//   console.log(`Sending request for the contents of: [${args}]`);
//   conn.write(`Request from client: [${args}]`);
// });

conn.on("connect", () => {
  conn.write(`${args}`);
});

conn.setEncoding("utf8"); // interpret data as text
