const express = require('express');
const path = require('path');
const fs = require('fs');
const bodyParser = require('body-parser');

let app = express();

// // Steps 3-4
// app.get('/', (request, response) => {
//     // response.send('Hello from the server side...');
//     response.sendFile(path.join(__dirname,'../public/index.html'));

// });

// // Step 5 Middleware Setup
// app.use((request,response,next) => {
//     console.log(request.originalUrl);r
//     next();
// });


// Advanced Section
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

app.post('/signup-form', (request,response) => {
    console.log(request.body.name);
    console.log(request.body.email);
    fs.writeFileSync('data.json', `${request.body.name}\n ${request.body.email}`);
    response.send('Thank you, you have been signed up')

})

// Part of Step 5
app.use(express.static(path.join(__dirname, '../public')));

// part of Step 3
app.listen(3000);