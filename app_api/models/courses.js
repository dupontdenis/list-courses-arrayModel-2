export const courses = [
  { id: 1, name: "HTML", info: "cours de base sur HTML5" },
  { id: 2, name: "CSS", info: "Begin CSS4" },
];

// Get all courses, sorted by id descending
// find([fields]) returns all courses, optionally with only specified fields
export const find = (fields = null) => {
  const sorted = [...courses].sort((a, b) => b.id - a.id);
  if (!fields) return sorted;
  if (!Array.isArray(fields)) fields = [fields];
  return sorted.map((course) => {
    const filtered = {};
    for (const key of fields) {
      if (key in course) filtered[key] = course[key];
    }
    return filtered;
  });
};

// Find the first course matching a query object
// Example:
//   findOne({ instructor: "John Doe" })
//   => returns the first course with instructor 'John Doe'
export const findOne = (query = null) => {
  if (!query || Object.keys(query).length === 0) {
    return courses[0] || null;
  }
  return (
    courses.find((course) => {
      return Object.entries(query).every(
        ([key, value]) => course[key] === value
      );
    }) || null
  );
};

// Get a course by its id
export const findById = (id) => {
  return courses.find((course) => course.id === id);
};

// Remove a course by id
export const remove = (id) => {
  const idx = courses.findIndex((course) => course.id === id);
  if (idx !== -1) {
    const removed = courses[idx];
    courses.splice(idx, 1);
    return removed;
  }
  return null;
};

// Add a new course
export const create = (course) => {
  const newCourse = {
    id: courses.length ? courses[courses.length - 1].id + 1 : 1,
    ...course,
  };
  courses.push(newCourse);
  return newCourse;
};

// Update a course by id
export const update = (course) => {
  const idx = courses.findIndex((c) => c.id === course.id);
  if (idx !== -1) {
    courses[idx] = {
      ...courses[idx],
      ...course,
    };
    return courses[idx];
  }
  return null;
};
