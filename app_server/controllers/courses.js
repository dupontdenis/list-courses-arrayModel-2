import debugLib from "debug";
const debug = debugLib("app_server");

// Use native fetch in Node.js 18+

export const coursesReadAll = async (req, res) => {
  debug("-------------- READ ALL-------------------------------");
  try {
    const response = await fetch("http://localhost:3000/api/courses");
    const data = await response.json();
    console.log(data.courses);
    res.render("courses-list", {
      courses: data.courses,
    });
  } catch (error) {
    debug(error);
  }
};

export const coursesReadOne = async (req, res) => {
  debug("-------------- READ ONE-------------------------------");
  try {
    const response = await fetch(
      `http://localhost:3000/api/courses/${Number(req.params.id)}`
    );
    const data = await response.json();
    res.render("course-info", {
      course: data,
    });
  } catch (error) {
    debug(error);
  }
};

export const coursesDeleteOne = async (req, res) => {
  debug("-------------- DELETE ONE-------------------------------");
  try {
    const response = await fetch(
      `http://localhost:3000/api/courses/${Number(req.params.id)}`,
      {
        method: "DELETE",
      }
    );
    debug(await response.text());
    res.redirect(`/courses/`);
  } catch (error) {
    debug(error);
  }
};

const renderForm = (req, res) => {
  res.render("course-form", {
    title: `New Course`,
    error: req.query.err,
  });
};

export const coursesForm = (req, res) => {
  debug("----------------   FORM  -----------------------");
  renderForm(req, res);
};

export const coursesAddOne = async (req, res) => {
  debug("----------------   ADD ONE  -----------------------");
  if (!req.body.info || !req.body.name) {
    res.redirect(`/courses/new?err=val`);
  } else {
    try {
      const response = await fetch("http://localhost:3000/api/courses/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(req.body),
      });
      debug(await response.text());
      res.redirect("/courses");
    } catch (error) {
      debug(error);
    }
  }
};
