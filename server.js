const request = require('request');
const net = require("net");
const fs = require('fs');

const server = net.createServer();

server.on("connection", (client) => {
  console.log("New client connected!");
  client.setEncoding("utf8"); // interpret data as text
  client.on("data", (data) => {
    let location = data;
    console.log(`Request from client: [${location}]`);
    request(location, (error, response, body) => {
      console.log(`Attempting to download ${location}...`);
      fs.readFile(location, 'utf8', (err, data) => {
        client.write(data);
      });
    });
  });

});

server.listen(3000, () => {
  console.log("Server listening on port 3000!");
});

const requestFile = (fileName) => {
  fs.readFile(fileName, 'utf8', (err, data) => {
    console.log(data);
    // return 'ok';
    // return data;
  });
};