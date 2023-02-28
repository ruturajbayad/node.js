const mongoose = require('mongoose');
    mongoose.set("strictQuery", false);
 mongoose.connect("mongodb://127.0.0.1:27017/collage");
    const studentSchema = new mongoose.Schema({
        name:String,
        dept:String
    });

const saveData =  async () => {
    const studentModel = mongoose.model('student', studentSchema);
    let data = new studentModel({name:"nikhil",dept:"IT"});
    let result = await data.save();
    console.log(result);
}
// saveData();

const update = async () => {
    const studentModel = mongoose.model('student', studentSchema);
    let data = await studentModel.updateOne({
        name:"nikhil"
    },
    {
        $set: {dept:"Civil",name:"jayesh"}
    });
}
// update();

const deleteData = async () => {
    const studentModel = mongoose.model('student',studentSchema);
    let data = await studentModel.deleteOne({name:"nikhil"});
    console.log(data);
}
// deleteData();

const finddata = async () => {
    const studentModel = mongoose.model('student',studentSchema);
    const data = await studentModel.find({});
    console.log(data);
}
// finddata();
