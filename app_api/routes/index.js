import express from "express";
import {
  coursesReadAll,
  coursesCreateOne,
  coursesReadOne,
  coursesUpdateOne,
  coursesDeleteOne,
} from "../controllers/courses.js";
const router = express.Router();

router.route("/courses").get(coursesReadAll).post(coursesCreateOne);

router
  .route("/courses/:id")
  .get(coursesReadOne)
  .put(coursesUpdateOne)
  .delete(coursesDeleteOne);

export default router;
