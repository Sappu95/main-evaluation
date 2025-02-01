const mongoose = require("mongoose")
const UserSchema = new mongoose.Schema({
    name: String,
    email:{type:String, require:true, unique: true},
    password:{type:String, require:true}
    })

    const UserModel = mongoose.model("user", UserSchema);
    module.export = UserModel;