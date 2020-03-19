const express = require ('express');
const app = express();

app.use(express.json());

const courses = [
    { id: 1, name: "Javascript For Dummies"},
    { id: 2, name: "HTML Basics"},
    { id: 3, name: "Java Rules"}
]

app.get('/',(req,res) => {
    res.send('Welcome To Learn How Here');
});

app.get('/api/courses',(req,res) => {
    res.send(courses);
})

app.get('/api/courses/:id',(req,res) => {
    const course = courses.find(c => c.id === parseInt(req.params.id));
    if(!course) res.status(404).send('Course with given ID not found')
    else res.send(course);
})

app.post('/api/courses',(req, res) => {
    const course = {
        id: courses.length +1,
        name: req.body.name
    };
    courses.push(course);
    res.send(course);
})
const port = process.env.PORT || 4444; //checks 4 env. variable 'port'
app.listen(port, () => console.log(`Listening on port ${port}...`));

