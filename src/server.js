import express from "express";
import { buildAIMockRouter } from "./router-builder.js";

export function startMockServer(port = 3000) {
  const app = express();

  app.use("/mock", buildAIMockRouter());

  app.listen(port, () =>
    console.log(`AI Mock API running at http://localhost:${port}/mock/generate`)
  );

  return app;
}
