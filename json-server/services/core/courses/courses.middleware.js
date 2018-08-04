const express = require('express');
const router = express.Router();
const url = require('url');

module.exports = (server) => {

  router
  .get('/courses', (req, res, next) => {
		let url_parts = url.parse(req.originalUrl, true),
    query = url_parts.query,
    from = query.start || 0,
    to = +query.start + +query.count,
    sort = query.sort,
    queryStr = query.query,
    courses = server.db.getState().courses;

    if (!!query.textFragment) {
      courses = courses.filter((course) => course.name.concat(course.description).toUpperCase().indexOf(query.textFragment.toUpperCase()) >= 0);
    }
    if (!!query.id) {
      courses = courses.filter(course => course.id === +query.id);
    }

		if (courses.length < to || !to) {
			to = courses.length;
    }

		courses = courses.slice(from, to);

		res.json(courses);
	})


	.delete('/courses', (req, res, next) => {
    console.log('del')
		let url_parts = url.parse(req.originalUrl, true),
    query = url_parts.query,
    from = query.start || 0,
    to = +query.start + +query.count,
    sort = query.sort,
    queryStr = query.query,
    courses = server.db.getState().courses;

    if (!!query.textFragment) {
      courses = courses.filter((course) => course.name.concat(course.description).toUpperCase().indexOf(query.textFragment.toUpperCase()) >= 0);
    }
    if (!!query.id) {
      courses = courses.filter(course => course.id !== +query.id);
    }

		if (courses.length < to || !to) {
			to = courses.length;
    }

		courses = courses.slice(from, to);

		res.json(courses);
  })

	.put('/courses', (req, res, next) => {
    console.log('put')
		let url_parts = url.parse(req.originalUrl, true),
    query = url_parts.query,
    from = query.start || 0,
    to = +query.start + +query.count,
    sort = query.sort,
    queryStr = query.query,
    courses = server.db.getState().courses;

    let currentCourse;
    if (!!query.id) {
      currentCourse = courses.find(course => course.id === +query.id);
      Object.keys(req.body).map(prop => {
        if (currentCourse.hasOwnProperty(prop) ) {
          currentCourse[prop] = req.body[prop];
        }
      });
    }

		if (courses.length < to || !to) {
			to = courses.length;
    }

    res.json(currentCourse);
  })

	.post('/courses', (req, res, next) => {
    console.log('post')
		let url_parts = url.parse(req.originalUrl, true),
    query = url_parts.query,
    from = query.start || 0,
    to = +query.start + +query.count,
    sort = query.sort,
    queryStr = query.query,
    courses = server.db.getState().courses;

    let newCourse = req.body;
    const createNewId = () => {
      const highestId = Math.max(...courses.map(item => item.id));
      return highestId + 1;
    }
    newCourse.id = createNewId();

		if (courses.length < to || !to) {
			to = courses.length;
    }
    courses.push(newCourse);

    res.json(newCourse);
	});

	return router;
};
