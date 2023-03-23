const express = require('express');
const app = express();

app.use(express.json());
app.use('/', require('./route/postsRoute'));
console.log('Server is listening on port 3000');

app.listen(3000);