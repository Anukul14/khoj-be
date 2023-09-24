const testRouter = require("./test");
const candidateRouter = require("./candidates");
const registerRoutes = (app) => {
  app.get("/health", (req, res) => {
    res.status(200).json({
      status: "OK.",
    });
  });
  app.use("/test", testRouter);
  app.use("/candidate", candidateRouter);
};

module.exports = registerRoutes;
