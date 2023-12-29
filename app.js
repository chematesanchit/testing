const express = require('express');
const app = express();
const port = 8000;

app.use('/user', require('./routes/users')); // Mount the users router under /user

app.listen(port, () => {
    console.log(`App is listening at http://localhost:${port}`);
});
