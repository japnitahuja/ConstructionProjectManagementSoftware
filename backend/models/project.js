const mongoose = require('mongoose')
const validator = require('validator')
const projectSchema = new mongoose.Schema({
    projectName:{
        type:String,
        required:[true, 'Please enter project name']
    },
    projectStatus:{
        type: String,
        enum:['ACTIVE', 'PLANNED', 'COMPLETED'],
    },
    projectOwner:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    tasks:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Task"
    }],
    purchaseOrders:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: "purchaseOrder"
    }],
    requestsToJoin:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }]
})
mongoose.model('Project', projectSchema)