const express = require('express');

const router = express.Router();
const appController = require('../controllers/AppController');
const studentsController = require('../controllers/StudentsController');

router.get('/', appController.getHomepage);

router.get('/students', studentsController.getAllStudents);
router.get('/students/:major', studentsController.getAllStudentsByMajor);

module.exports = router;
