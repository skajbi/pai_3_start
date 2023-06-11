const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain')
    res.send("Hello World!");
});

app.listen(port, () => {
   console.log(`Example app listening on port ${port}!`);
});
