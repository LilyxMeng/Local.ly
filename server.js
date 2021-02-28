//this is just what i have so far 
//note to self = skip to 6, dw abt basics rn also download express/mongo
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
           //see personal node.js file for html
           res.write('success'); //note for tmr-got success message, but no html there?
           res.write(data); //potential problem area? not yielding data/html
           res.end();
       }
    })
    });

