const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();

const PORT = 4000;

const login = require('./routes/user');
const test = (req, res, next) => {
    next();
}
app.use(express.json());
app.use(cors());
app.use('/user',test, login);

// app.get('/data', (req, res)=> {
//     res.send({name:"shivam", age: 20});
// })

app.listen(PORT, () => console.log(`Server listening at ${PORT}...`));

mongoose.connect('mongodb://localhost:27017/CourseApp', { useNewUrlParser: true, useUnifiedTopology: true, dbName: "CourseApp" });
