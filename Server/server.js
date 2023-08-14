const express = require('express');
const app = express();
const PORT = 4000;

app.get('/data', (req, res)=> {
    res.send({name:"shivam", age: 20});
})

app.listen(PORT, () => console.log(`Server listening at ${PORT}...`));

mongoose.connect('mongodb://localhost:27017/Local', { useNewUrlParser: true, useUnifiedTopology: true, dbName: "coursecrafter" });
