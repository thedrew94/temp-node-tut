'use strict';

const http = require('http');

//first paramater request, secondt parameter is the response
const server = http.createServer((req, res) => {
    if(req.url === '/'){
        res.end('welcome to our homepage')
    } else if(req.url === '/about'){
        res.end('heres our history')
    } else {
    res.end(`<h1>Oops</h1>
    <p>We cant seem to find the page that you are looking for</p>
    <a href="/">Back home</a>`)
    }
})
//http://localhost:5000
server.listen(5000);

//check if its running with this in the terminal netstat -aon | findstr :5000