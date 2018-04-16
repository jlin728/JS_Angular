let express    	= require("express");
let app        	= express();
let bodyParser 	= require("body-parser");
let session		= require("express-session");
let bcrypt	    = require("bcrypt-nodejs");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(session({secret:"123456"}));
app.set("views",__dirname+"/client/views");
app.set("view engine","ejs");

require("./server/config/mongoose.js");
require("./server/config/routes.js")(app);






app.listen(8000,()=>{
	console.log("Server Running");
});