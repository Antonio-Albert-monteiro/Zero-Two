const express = require('express');
const app = express();
app.get("/", (request, response) => {
  const ping = new Date();
  ping.setHours(ping.getHours() - 3);
  console.log(`Ping recebido às ${ping.getUTCHours()}:${ping.getUTCMinutes()}:${ping.getUTCSeconds()}`);
  response.sendStatus(200);
});
const port = normalizePort(process.env.Port || '3000');
app.set('port', port);
app.listen(port);

function normalizePort(val) {
    const port = parseInt(val, 10);
    
    if (isNaN(port)) {
        return val;
    }
    
    if (port >= 0) {
        return port;
    }
    
    return false;
}
console.log(`estou rodando na porta ${port}`)