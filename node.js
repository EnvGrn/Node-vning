const http = require("http");
const path = require("path");

const requestListener = function (req,res){
    res.writeHead(200);
    res.end("din ip: "+req.connection.remoteAddress+"\n"+"serverns name: "+ path.basename(__filename) + "\n" + "porten din webläsare använde: "+ req.connection.remotePort+"\n"+"Metoden du använde:" +req.method+"\n");
}
const server = http.createServer(requestListener);
server.listen(3000);
