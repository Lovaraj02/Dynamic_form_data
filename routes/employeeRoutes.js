const express = require("express")
const route = express.Router()
const employeeController = require("../controllers/employeeController")


route.post('/add-emp',employeeController.createEmployee)
route.get('/get-emp',employeeController.getEmployee)
route.get('/gets-emp/:id',employeeController.singleEmployee)
route.put('/update/:id',employeeController.updateEmp)
route.delete('/delete/:id',employeeController.delEmployee)

module.exports = route