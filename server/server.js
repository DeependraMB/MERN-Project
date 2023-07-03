const port = 5000;
const mongoose = require('mongoose');

var express = require('express'),
    app = express(),
    server = require('http').createServer(app);
var bodyParser = require('body-parser');

app.use(express.static(__dirname + '/public'));

app.use(bodyParser.urlencoded({
   extended: true
}));

app.use(bodyParser.json());
const cors = require('cors');


mongoose.connect('mongodb://localhost:27017/mydatabase', { useNewUrlParser: true, useUnifiedTopology: true })
.then(() => {
  console.log('Connected to MongoDB');
})
.catch((error) => {
  console.error('Error connecting to MongoDB:', error);
});

app.get("/",cors(),(req,res)=>{

})


app.post('/myapi',function(req,res){
   const {title,content} = re.body;
   const postData ={
    title,
    content
   }
   res.send(postData)
});




server.listen(port);