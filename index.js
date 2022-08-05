const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");
const contactRoutes = require("./contactRoutes");
const port = process.env.PORT || 5000;
const app = express();
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/contacts", contactRoutes);

// app.get("/", (req, res) => {
//     const test = new Test({
//         name: "Partho Halder",
//     });
//     test.save()
//         .then((t) => {
//             res.json(t);
//         })
//         .catch((e) => {
//             console.log(e);
//             res.status(500).json({
//                 message: "Error Occurred",
//             });
//         });
// });

app.get("*", (req, res) => {
    res.send(`<h1>Please input the right path!</h1>`);
});

mongoose
    .connect(
        `mongodb+srv://userContact:bMkddEI8yE0gomun@cluster0.lsn1nuf.mongodb.net/?retryWrites=true&w=majority`,
        {
            useNewUrlParser: true,
        }
    )
    .then(() => {
        app.listen(port, () => {
            console.log(`Server is running on PORT ${port}`);
        });
    })
    .catch((e) => {
        console.log(e);
    });
