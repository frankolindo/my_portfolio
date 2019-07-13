const express = require('express');
const app = express();
const path = require('path');
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
app.use(express.static(path.join(__dirname, 'public')));



app.get('/', function(req, res){
    res.render('index');
});
app.listen(1212, function(){
    console.log('server started on port 1212')
});
