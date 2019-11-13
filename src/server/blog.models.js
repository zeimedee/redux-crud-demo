const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Post = new Schema({
    title:{
        type: String,
        required: true
    },
    body:{
        type: String,
        required: true
    }

});


module.exports = mongoose.model("Post", Post);