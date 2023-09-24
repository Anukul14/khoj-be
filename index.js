require("dotenv").config();
const express= require("express");
const registerRoutes = require("./routers");
const app= express();

// routes
registerRoutes(app);


app.get("/health", (req, res) => {
    res.status(200).json({
        status: "OK.",
    });
});

const port= 8000;
app.listen((port), () => {
    console.info(`app is runnning on port ${port}`);
});
