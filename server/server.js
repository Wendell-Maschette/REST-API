const express = require('express');
const app = express();


app.listen(3000, () =>
{
    app.use('/', require('./route/postsRoute'));
    console.log('Server is listening on port 3000');
});
