const { template } = require('@babel/core')

function calculateBMI(weight, height) {
    return weight/(height*height)
}
function getBMIMeaning(weight, height) {
    let BMI = calculateBMI(weight, height)
    if (BMI > 25)
        return "Overweight"      
    else if(BMI > 18.5)
        return "Normal weight"
    else 
        return  "Underweight" 
}

module.exports = getBMIMeaning
