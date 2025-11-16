import express from "express";
import path from "path";
import apiRouter from "./app_api/routes/index.js";
import indexRouter from "./app_server/routes/index.js";
import { fileURLToPath } from "url";

const app = express();

app.use(express.static("public"));
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use("/api", apiRouter);
app.use("/courses", indexRouter);

// view engine setup
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.set("view engine", "pug");
console.log(path.join(__dirname, "app_server", "views"));
app.set("views", path.join(__dirname, "app_server", "views"));

app.listen(3000, () => console.log("http://localhost:3000/courses"));
