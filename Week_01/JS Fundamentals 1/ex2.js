/* Coding Challenge #2
Use the BMI example from Challenge #1, and the code you already wrote, and
improve it.
Your tasks:
1. Print a nice output to the console, saying who has the higher BMI. The message
is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
2. Use a template literal to include the BMI values in the outputs. Example: "Mark's
BMI (28.3) is higher than John's (23.9)!" */

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

if (markBMI > johnBMI) {
	console.log(`Mark's BMI (${markBMI}) is higher than John's (${johnBMI})!`);
} else {
	console.log(`John's BMI (${johnBMI}) is higher than Mark's (${markBMI})!`);
}
