const express = require('express');
var path = require('path');
const app = express();


//Engine Setup-----------------------
app.set('views', path.join(__dirname, 'views')); 
app.set('view engine', 'ejs');


app.use(express.static('public'));

const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.render('home');
});


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});