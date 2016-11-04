import express from "express";
import path from "path";
import cors from "cors";
import bodyParser from "body-parser";
import routes from "./config/routes";

const app = express();

// Middleware Setup
app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json({ type: "*/*" }));

// DB and Route setup
routes(app);

// Static Files

// Server Setup
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log("Listening on port: ", port);
});
