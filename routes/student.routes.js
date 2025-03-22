import express from 'express';
import studentController from '../controllers/student.controller.js';

export const studentRouter = express.Router();

studentRouter.route("/")
    .post(studentController.createStudent)
    .get(studentController.getAllStudents);

studentRouter.route("/:id")
    .get(studentController.getStudentById)
    .put(studentController.updateStudent)
    .delete(studentController.deleteStudent)

studentRouter.get("/fullname/:id", studentController.getStudentByIdAndReturnFullName)

studentRouter.post("/login", studentController.login)