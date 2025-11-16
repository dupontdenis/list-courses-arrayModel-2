import express from "express";
import {
  coursesReadAll,
  coursesForm,
  coursesAddOne,
  coursesReadOne,
  coursesDeleteOne,
} from "../controllers/courses.js";
const router = express.Router();

router.route("/").get(coursesReadAll);

router.route("/new").get(coursesForm).post(coursesAddOne);

router.route("/:id").get(coursesReadOne);

router.route("/delete/:id").get(coursesDeleteOne);

export default router;
