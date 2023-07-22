var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
const app = express();
var Student = require('../model/schema')

app.use(bodyParser.json());
router.post('/insert', (req, res, next) => {
    //const { rollno, name } = req.body;
    //console.log("body",req.body)
    // Create a new student instance
    const newStudent = new Student({ rollno:req.body.rollno, name :req.body.name});
    
    // Save the new student to the database
   newStudent.save()
        .then(() => {
            res.status(200).json({ message: 'Student created successfully' });
        })
        .catch((error) => {
            res.status(500).json({ error: 'An error occurred while saving the student' });
        });
});


router.get('/students', (req, res) => {
    Student.find({})
        .then((students) => {
            res.status(200).json({msg:students});
        })
        .catch((error) => {
            res.status(500).json({ error: 'An error occurred while retrieving students' });
        });
});


router.put('/update', (req, res, next) => {
    return new Promise((resolve, reject) => {
        Student.findById(req.body._id)
            .then((student) => {
                if (!student) {
                    throw new Error('Student not found');
                }

                student.rollno = req.body.rollno;
                student.name = req.body.name;

                return student.save();
            })
            .then(() => {
                res.status(200).json({ message: 'Student created successfully' });
            })
            .catch((error) => {
                res.status(500).json({ error: 'An error occurred while retrieving students' });
            });
    });
});
router.delete('/delete/:id', (req, res, next) => {
    return new Promise((resolve, reject) => {
        Student.findOneAndRemove({_id:req.params.id})
            .then((deletedStudent) => {
                if (!deletedStudent) {
                    res.status(500).json({ error: 'An error occurred while retrieving students' });
                }

                res.status(200).json({ message: 'Student deleted successfully' });
            })
            .catch((error) => {
                reject(error);
            });
    });
});
module.exports = router;