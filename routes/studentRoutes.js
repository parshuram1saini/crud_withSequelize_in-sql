const studentController = require("../controller/studentController");

///----import the express object -----///
const router = require("express").Router()

router.post("/addstudents",studentController.addStudents)  /// for adding 
router.get("/allstudents",studentController.getAllStudents)  /// for reading/getting 
router.get("/:id",studentController.getOneStudent)    ///getting one students 
router.put("/:id",studentController.updateStudent)   /// updating the student
router.delete("/:id",studentController.deleteStudent) /// delete the student

module.exports = router