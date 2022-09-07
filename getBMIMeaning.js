const { template } = require('@babel/core')
let BMI
function calculateBMI(weight, height) {
  return BMI = weight/(height*height)
}
function getBMIMeaning(weight, height) {
  if (BMI > 25)
        console.log("Overweight")
    else if(BMI > 18.5)
        console.log("Normal weight")
    else
        console.log("Underweight")
}
module.exports = getBMIMeaning
