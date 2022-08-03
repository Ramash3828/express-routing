const express = require("express");
const morgan = require("morgan");
const contactRoutes = require("./contactRoutes");
const port = process.env.PORT || 5000;
const app = express();
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/contacts", contactRoutes);

app.get("*", (req, res) => {
    res.send(`<h1>Please input the right path!</h1>`);
});

app.listen(port, () => {
    console.log(`Server is running on PORT ${port}`);
});
