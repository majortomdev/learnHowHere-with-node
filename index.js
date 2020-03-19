const express = require ('express');
const app = express();;

app.get('/',(req,res) => {
    res.send('Welcome To Learn How Here');
});

app.get('/api/courses',(req,res) => {
    res.send(["English","HTML","Java"]);
})

app.listen(5555, () => console.log('Listening on port 5555'));

