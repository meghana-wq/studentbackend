const moongoose=require("mongoose")
const schema =mongoose.Schema(
    {
        "name":String,
        "rollno":String,
        "admno":String,
        "college":String
    }
)
mongoose.Model("students",schema);
module.exports={studentmodel} 
