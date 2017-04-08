var mangoose = require("mongoose");

mangoose.connect("mongodb://localhost/cat_app");

var catSchema = new mangoose.Schema({
    name: String,
    age : Number,
    temperment: String
});


var Cat = mangoose.model("Cat",catSchema);

var george = new Cat({
    name: "heny",
    age : 2,
    temperment: "happy"
    
});

george.save(function(err,cat){
    if (err) {
        console.log("Something went wrong");
    } else{
        console.log("we just saved a cat");
        console.log(cat);
    }
    
    
});