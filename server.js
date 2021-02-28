//this is just what i have so far
const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    console.log(req.url, req.method) ;

    //set header content type
   res.setHeader('Content-Type', 'text/html');

   //send html file
   fs.readFile('./views/JStestIndex.html', (err, data) => {
       if (err) {
           res.write('there was an error');
           console.log(err);
           res.end();
       }else{
           //note for tmr - I get the success message, but html not showing up?
           //see personal 
           res.write('success');
           res.write(data);
           res.end();
       }
    })
    });

