const Employee = require('../models/Employee')

// posting data into Db
const createEmployee = async  (req,res)=>{
    try{
        const {name,email,phone,city} = req.body
        const employee = new Employee({
            name,
            email,
            phone,
            city
        })
        await employee.save()
        res.status(201).json(employee)
    }
    catch(error){
        console.log("error is ",error)
        res.status(500).json({message:'server error'})
    }
}


// Getting all emp from Db
const getEmployee = async(req,res)=>{
    try{
        const emp = await Employee.find()
        res.status(200).json(emp)
    }catch(err){
        console.log("error is",err)
        res.status(502).json({message:'server error'})
    }
}

// Getting single emp from Db
const singleEmployee = async (req,res)=>{
    try{
        const empId = await Employee.findById(req.params.id)
        if (!empId) {
        return res.status(404).json({ message: "Employee not found" });
        }
        res.status(200).json(empId)
    }
    catch(error){
        console.log("error is",error)
        res.status(500).json({message:'server error'})
    }
}


// updating db data

const updateEmp = async(req,res)=>{
    try{
        const {name,email,phone,city} = req.body
        const upemp = await Employee.findByIdAndUpdate(req.params.id,{name,email,phone,city})
        if(!upemp){
            console.log("record not found to update")
        }
        res.status(200).json(upemp)
    }
    catch(err){
        console.log("error is",err)
        res.status(500).json({message:'server error'})
    }
}

//Delete emp

const delEmployee = async(req,res)=>{
    try{
        const delEmp = await Employee.findByIdAndDelete(req.params.id)
        res.status(200).json(delEmp)
    }
    catch(err){
            console.log("error is",err)
            res.status(500).json({message:"server error"})
    }
}

module.exports = { createEmployee, getEmployee, singleEmployee, updateEmp, delEmployee}