var express     = require("express"),           // Require the Express Module
    app         = express(),                    // Create an Express App
    path        = require("path"),              // Require path
    bodyParser  = require("body-parser"),       // Require body-parser (to receive post data from clients)
    mongoose    = require("mongoose"),          // Require mongoose. Define after the app variable.
    port        = 8000,
    root        = __dirname;
    

app.use(express.static( root + '/angularApp/dist' ));     // points to dist folder   
app.use(bodyParser.json());     // step 1 - configure to use json
app.use(express.static(path.join(root, './static')));
app.set('views', path.join(root, './views'));

// CONNECT Mongoose to MongoDB
// "restful" is the name of our db in mongodb -- this should match the name of the db you are going to use for your project. If db does not exist, this will make one for you.
mongoose.connect("mongodb://localhost/restful");

// CREATE Mongoose schemas -- put below connect

var Schema = mongoose.Schema;           // required: define Schema variable

// define User Schema (collection)
var TaskSchema = new mongoose.Schema({
    title: {type: String, required: true, minlength: 2, maxlength: 256 },
    description: {type: String, required: true, minlength: 2, maxlength: 256 },
    completed: {type: String, default: false },

}, {timestamps: true });

// set our models by passing them their respective Schemas
mongoose.model('Task', TaskSchema);

// store our models in variables
var Task = mongoose.model('Task');

// ROUTES
// Root Request

// Respond with json data
app.get('/tasks', function(req, res){
    Task.find({}, function(err, tasks){
        if(err){
           console.log("Returned error", err);
            // respond with JSON
           res.json({message: "Error show all", error: err})
        }
        else {
            // respond with JSON
           res.json({message: "Success show all", data: tasks})
        }
     })
})

app.get('/new/:id/', function(req, res){
    let task = new Task({_id: req.params._id});
    task.save({}, function(err, tasks){
        if(err){
           //console.log("Returned error", err);
            // respond with JSON
           res.json({message: "Error save", error: err})
        }
        else {
            // respond with JSON
           res.json({message: "Success save", data: tasks})
        }
     })
})

app.get('/remove/:id', function(req, res){
    Task.remove({_id: req.params._id}, function(err, tasks){
        if(err){
           console.log("Returned error", err);
            // respond with JSON
           res.json({message: "Error remove", error: err})
        }
        else {
            // respond with JSON
           res.json({message: "Success remove", data: tasks})
        }
     })
})

app.get('/:id', function(req, res){
    Task.findOne({name: req.params.name}, function(err, tasks){
        
        if(err){
           console.log("Returned error", err);
            // respond with JSON
           res.json({message: "Error findOne", error: err})
        }
        else {
            // respond with JSON
           res.json({message: "Success findOne", data: tasks})
        }
     })
})




// Setting our Server to Listen on Port: 8000
app.listen(port, function() {
    console.log(`server running on port ${ port }`);
    });
