const { default: mongoose } = require("mongoose");
const bcrypt = require('bcryptjs');

const userModel = mongoose.Schema(
    {
        name:{
            type: String,
            required: true
        },
        email:{
            type: String,
            required: true,
            unique: true
        },
        password:{
            type: String,
            required: true
        },
        pic:{
            type: String,
            default:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRi9jO1ey8-tvqc5C5dHVNX2D4aAkoKipwjqg&usqp=CAU",
        },
        
    }, 
    {
        timestamps :true
    }
)

userModel.methods.matchPassword = async function(enterpassword){
    return await bcrypt.compare(enterpassword, this.password);
}

userModel.pre('save', async function (next){
    if(!this.isModified){
        next();
    }

    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
})

const User = mongoose.model("User", userModel);
module.exports = User;