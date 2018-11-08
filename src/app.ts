import * as express from "express";
import { StartRoute } from "./routes";

export class App {
  app: express.Application = express();
  port: any = process.env.PORT || 3000;

  constructor() {
    console.log("Hello World");

    this.app.use("/", StartRoute);

    this.app.listen(this.port, () => {
      console.log(`Listening at http://localhost:${this.port}/`);
    });
  }
}
