const db = require("../model/index");
const joivalidation = require("../validation/validateSchema");

////-----crete main model----////
const Students = db.students;
console.log(Students)
///---main work for different-2 api request (create,read,update,delete)-----//
//------------------------------//
// 1 create students --//
const addStudents = async (req, res) => {
  //   const info  = req.body);
  const { error } = joivalidation.validate(req.body);
  if (error) {
    res.send(error.message);
  } else {
    const student = await Students.create(req.body);
    res.status(200).send(student);
    console.log(student);
  }
};

//--------------------------------------//
// 2. get all students

const getAllStudents = async (req, res) => {
  const students = await Students.findAll({
    // attributes:[
    //     firstName,
    //     lastName,
    //     city
    // ]
  });
  res.status(200).send(students);
};

///--------------------------------///
// 3 . get single student

const getOneStudent = async (req, res) => {
  let id = req.params.id;
  const student = await Students.findOne({ where: { id: id } });
  res.status(200).send(student);
};

///--------------------------------///
// 4 . update student

const updateStudent = async (req, res) => {
  let id = req.params.id;
  const { error } = joivalidation.validate(req.body);
  if (error) {
    res.status(404).send(error.message);
  }
   else {
    const student = await Students.update(req.body, { where: { id: id } });
    res.status(200).send(student);
  }
};

///--------------------------------///
// 5 . delete student

const deleteStudent = async (req, res) => {
  let id = req.params.id;
//   const { error } = joivalidation.validate(id);
//   if (error) {
  //     res.send(error.message);
  var index ;
  for(let values in Students){
      if(Students[values] ===id){
        index = Students[values];
        break;
      }
  }
  // let userid = Students.find((user)=>user.id===id)
  if (!index) {
    res.status(404).json({ 
      status: 0,
      message: "id not found" });
  } else {
    await Students.destroy({ where: { id: id } });
    res.status(201).json({
      status: 1,
      message: "deleted successfully",
    });
  }
};

module.exports = {
  addStudents,
  getAllStudents,
  getOneStudent,
  updateStudent,
  deleteStudent,
};
