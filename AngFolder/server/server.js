let express=require('express');
let bodyParser=require('body-parser');
let cors=require('cors');
let PORT=3000;
let app=express();
app.use(bodyParser.json());
app.use(cors());

app.get('/', function(req, res){
            res.send("Hello From Serve");
})

app.post('/enroll', function(req, res){
    console.log(req.body);
    res.status(200).send({'message':'Data - Recieved'});
})

app.listen(PORT, function(){
    console.log("Server Running on Localhost ;" + PORT);
})