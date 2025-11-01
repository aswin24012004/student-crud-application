const Student = require('../model/Student');

exports.getStudents = async(req,res)=> {
    try {
        const students = await Student.find();
        res.json(students);
    } catch (error) {
        res.status(404).json({message:error.message});
    }
}
exports.createStudent = async(req,res)=> {
    try {
        const {name, age, email} = req.body;
        const newstudent = await Student.create({name, age, email});
        res.status(201).json({message:"student created successfully"});
    } catch (error) {
        res.status(404).json({message:error.message});
    }
}
exports.updateStudent = async(req,res)=> {
    try {
        const updatestudent = await Student.findByIdAndUpdate(req.params.id, req.body);
        // , {new: true}
        if(!updatestudent) return res.status(404).json({message:"student not found"});
        res.status(201).json({message:"student updated successfully"});
    } catch (error) {
        res.status(404).json({message:error.message});
    }
}
exports.deleteStudent = async(req,res)=> {
    try {
        const deletestudent = await Student.findByIdAndDelete(req.params.id);
        if(!deletestudent) return res.status(404).json({message:"student not found"});
        res.status(201).json({message:"student deleted successfully"});
    } catch (error) {
        res.status(404).json({message:error.message});
    }
}

