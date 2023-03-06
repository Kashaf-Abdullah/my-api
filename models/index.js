
const mongoose=require('mongoose')

var marksSchema=new mongoose.Schema({
    rollNum:String,
    englishMarks:Number,
    mathsMarks:Number,
    physicsMarks:Number,
    scienceMarks:Number,
    urduMarks:Number,   
    drawingMarks:Number,

})

marksSchema.methods.totalMarks=function(){
    console.log("total marks :"+ (this.englishMarks+this.englishMarks+this.mathsMarks+this.scienceMarks+this.drawingMarks))
}

var marksModel=mongoose.model('Marks',marksSchema)
var marks=new marksModel({
    
    rollNum:"20sw027",
    englishMarks:43,
    mathsMarks:34,
    physicsMarks:66,
    scienceMarks:26,
    urduMarks:48,
    drawingMarks:77,
    
})
console.log(marks)
console.log(marks.rollNum)
marks.totalMarks()