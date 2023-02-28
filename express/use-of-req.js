const express = require('express');
const app = express();

// req.query is the method that will return the query string from url like localhost:5000?name=example
app.get('/', (req, resp) => {
    resp.send(`hello ${req.query.name} `);
});

app.listen(5000);