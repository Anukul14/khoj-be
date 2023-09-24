const testRouter = require("./test")
const registerRoutes =  (app) => {
    app.use("/test",testRouter);
}

module.exports= registerRoutes;