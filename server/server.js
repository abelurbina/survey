var express = require ("express");
var app = express();
var mongoose = require ("mongoose");
var bodyParser = require ('body-parser');
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
var path = require ("path");
app.use (express.static(path.join(__dirname,'../client/dist')));

//******* Models */
mongoose.connect('mongodb://localhost/survey');
var PollSchema = new mongoose.Schema({
    user_name: {type: String},
    question: {type: String},
    option1: {type: String},
    option2: {type: String},
    option3: {type: String},
    option4: {type: String},
    vote1 : {type: Number},
    vote2 : {type: Number},
    vote3 : {type: Number},
    vote4 : {type: Number}
}, {timestamps: true})
var Poll = mongoose.model('Poll', PollSchema);

//***********Get and Post Routes */

// creates a new poll
app.post('/new', function(req, res){
    Poll.create(req.body, function(err, results){
        if(err){
            console.log(err);
            res.json({message: 'YOU GOT AN ERRORRRR'});
        }else{
            res.json(results);
        }
    })
})

// get results of all the polls
app.get('/all', function(req, res){
    Poll.find({}, function(err, results){
        if(err){
            console.log(err);
            res.json({message: 'YOU GOT AN ERRORRRR'});
        }else{
            res.json(results);
        }
    })
})

//find a poll by its ID 
app.get('/poll/:id', function(req, res){
    Poll.find({_id:req.params.id}, function(err, results){
        if(err){
            console.log(err);
            res.json({message: 'YOU GOT AN ERRORRRR'});
        }else{
            res.json(results);
        }
    })
})

//delete a poll by its ID
app.delete('/destroy/:id', function(req, res){
    Poll.remove({_id:req.params.id}, function(err, result){
        if(err){
            console.log(err);
            res.json({message: 'YOU GOT AN ERRORRRR'});
        }else{
            res.json(result);
        }
    })
})



app.all("*", (req, res) => {
    res.sendFile(path.resolve("../client/dist/index.html"));
});

app.listen(8000,function(){
    console.log("listenging on port 8000");
})