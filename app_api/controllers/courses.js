import { find, findById, remove, create, update } from "../models/courses.js";
import debugLib from "debug";
const debug = debugLib("app_api");

export const coursesReadAll = (req, res) => {
  res.json({ courses: find() });
};

export const coursesCreateOne = (req, res) => {
  debug("---- coursesCreateOne ---");
  const course = { ...req.body };
  const newCourse = create(course);
  res.json(newCourse);
};

export const coursesReadOne = (req, res) => {
  debug("---- coursesReadOne ---");
  const course = findById(Number(req.params.id));
  if (!course)
    return res
      .status(404)
      .send(`The course with id:${req.params.id} was not found`);
  res.send(course);
};

export const coursesUpdateOne = (req, res) => {
  debug("---- coursesUpdateOne ---");
  const updatedCourse = update({ id: Number(req.params.id), ...req.body });
  if (!updatedCourse)
    return res
      .status(404)
      .send(`The course with id:${req.params.id} was not found`);
  res.json(updatedCourse);
};

export const coursesDeleteOne = (req, res) => {
  debug("---- coursesDeleteOne ---");
  const removed = remove(Number(req.params.id));
  if (!removed)
    return res
      .status(404)
      .send(`The course with id:${req.params.id} was not found`);
  res.json(removed);
};
