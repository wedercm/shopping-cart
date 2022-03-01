import bodyParser = require("body-parser");
import cors = require("cors");
import express = require("express");
import path = require("node:path");
import { useExpressServer } from "routing-controllers";

export class ExpressConfig {
  app: express.Express;
  constructor() {
    this.app = express();
    this.app.use(cors());
    this.app.use(bodyParser.json());
    this.app.use(bodyParser.urlencoded({ extended: false }));
    this.setUpControllers();
  }
  setUpControllers() {
    const controllersPath = path.resolve('dist', 'service-layer', 'controllers');
    /*useExpressServer has lots of options, can be viewed at
   node_modules\routingcontrollers\RoutingControllersOptions.d.ts*/
    useExpressServer(this.app, {
      controllers: [controllersPath + "/*.js"]
    }
    );
  }
}
