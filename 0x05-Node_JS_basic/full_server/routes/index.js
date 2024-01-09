import express from 'express';
import AppController from '../controllers/AppController';
import StudentController from '../controllers/StudentsController';

const router = express.Router();

router.get('/', AppController.getHomepage);

router.get('/students', StudentController.getAllStudents);
router.get('/students/:major', StudentController.getAllStudentsByMajor);

export default router;
