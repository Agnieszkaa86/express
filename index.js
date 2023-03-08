const express = require("express");
const { router } = require("./routes/routes.js");

const app = express();
app.use(express.urlencoded({ extended: false }));
app.use(router);

const port = 3000;


app.listen(port, () => {
    console.log(`Server is listeninig${port}`)
});