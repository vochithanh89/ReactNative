// Coding Challenge #1
// Mark and John are trying to compare their BMI (Body Mass Index), which is
// calculated using the formula:
// BMI = mass / height ** 2 = mass / (height * height) (mass in kg
// and height in meter).

let mark = {
	mass: 95,
	height: 1.88,
};

let john = {
	mass: 85,
	height: 1.76,
};

const calcBMI = ({mass, height}) => mass / height ** 2;

const markBMI = calcBMI(mark);
const johnBMI = calcBMI(john);

console.log(`Mark: ${markBMI}`);
console.log(`John: ${johnBMI}`);
