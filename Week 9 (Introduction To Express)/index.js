const express = require('express'); // This is importing the downloaded express package
const app = express(); // This is the function i am storing inside a variable called as app
const PORT = 3000;


// Middlewares
app.use(express.json()); // This middleware is used to accept data in the form of JSON


let studentList = [
    {
        id: 1,
        name: "Daniel",
        age: 28,
        college: "VCC"
    },
    {
        id: 2,
        name: "Mike",
        age: 24,
        college: "VCC"
    },
    {
        id: 3,
        name: "Judy",
        age: 18,
        college: "VCC"
    },
    {
        id: 4,
        name: "Stacy",
        age: 16,
        college: "VCC"
    }
];

// GET API STARTS **************************************************************

// What should happen if someone access , / page is handled here!
app.get('/', (req, res) => {
    res.send("Welcome to Home Page!");
})

app.get('/students', (req, res) => {
    res.send(studentList);
})

app.get('/students/above18', (req, res) => {
    // Here we are filtering students based on age, and returning those students whose age is above 18
    const studentsAbove18 = studentList.filter((student) => student.age > 18 ? true : false);
    res.send(studentsAbove18);
})

// GET API ENDS **************************************************************

// POST API STARTS **************************************************************

app.post('/students/create', (req, res) => {
    const newStudent = req.body; // So this is the place where some client will send data to be created on the server
    studentList.push(newStudent);
    res.send(studentList);
})

// POST API ENDS **************************************************************


// DELETE API ENDS **************************************************************

app.delete('/students/delete/:id', (req, res) => {  
    const studentID = req.params.id;

    console.log(studentID);

    // This filter method here filters only those items which are not having an ID similar to StudentID
    studentList = studentList.filter((student) => student.id != studentID ? true : false);

    // SPLICE METHOD

    res.send(studentList);

})

// DELETE API ENDS **************************************************************

// PUT API STARTS **************************************************************

app.put('/students/update/:id', (req, res) => {
    const studentID = req.params.id;
    const updatedStudentData = req.body;

    studentList = studentList.map((data) => {
        if (data.id == studentID) {
            data = updatedStudentData;
        }
        return data;
    })

    res.send(studentList);

})

// PUT API ENDS **************************************************************

// GET API FOR GETTING INDIVIDUAL STUDENT STARTS **************************************************************

app.get('/students/:id', (req, res) => {
    const studentID = req.params.id;

    let foundStudent = studentList.find((student) => {
        if (student.id == studentID) {
            return student;
        }
    })

    // What if the student ID was wrong
    if (foundStudent) {
        res.send(foundStudent);
    } else {
        res.send("Student doesn't exist");
    }
})

// GET API FOR GETTING INDIVIDUAL STUDENT ENDS **************************************************************


// Listening to server on this PORT - 3000
app.listen(PORT, () => {
    console.log("Server running on port : "  +PORT);
})
