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
app.use(express.static(path.join(__dirname, '../client')));
app.get("*", function(req, res) {
  res.sendFile(path.resolve(__dirname, "../client", "index.html"))
});


// Server Setup
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log("Listening on port: ", port);
});
