require("dotenv").config();
async function main() {
  const DatabaseContext = require("./database");
  const db = await DatabaseContext.connect();
  const express = require("express");
  const app = express();
  const morgan = require("morgan");
  app.use(
    morgan("combined", {
      stream: {
        write: (message) => console.info(message.trim()),
      },
    }),
  );
  const registerRoutes = require("./routers");
  registerRoutes(app);
  return app;
}

main().then((app) => {
  const port = process.env.PORT || 8000;
  app.listen(port, () => {
    console.info(`app is runnning on port ${port}`);
  });
});
