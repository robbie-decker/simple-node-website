const http = require("http");
const fs = require("fs");

const host = 'localhost';
const port = 8000;
const valid_urls = ['/', '/about', '/contact-me']

const requestListener = function (req, res) {
    // It is a good url!
    if(valid_urls.includes(req.url)){
        res.writeHead(200);
        switch(req.url){
            case '/':
                res.end(fs.readFileSync("./index.html", 'utf8'));
                break;
            case '/about':
                res.end(fs.readFileSync("./about.html", 'utf8'));
                break;
            case '/contact-me':
                res.end(fs.readFileSync("./contact-me.html", 'utf8'));
                break;
        }
        
    }
    // Bad url :(
    else{
        res.writeHead(404);
        res.end(fs.readFileSync("./404.html", 'utf8'));
    }
};

const server = http.createServer(requestListener);
server.listen(port, host, () => {
    console.log(`Server is running on http://${host}:${port}`);
});