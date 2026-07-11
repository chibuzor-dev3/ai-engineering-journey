let patientName = "Sarah Johnson";
let age = 12;
let weight = 40;
let height = 1.45;
let temperature = 36.8;

function calculateBMI(weight, height) {
    return weight / (height * height);
}

let bmi = calculateBMI(weight, height);
console.log("Patient:", patientName);
console.log("Age:", age);
console.log("Temperature:", temperature);
console.log("BMI:", bmi);

if (temperature >= 38) {
    console.log("High fever detected.");
} else {
    console.log("Temperature is normal.");
}

if (bmi >= 25) {
    console.log("Patient is overweight.");
} else {
    console.log("BMI is within normal range.");
}
if (temperature >= 38 && bmi >= 25) {
    console.log("Medical review is recommended.");
} else {
    console.log("Continue routine monitoring.");
}
if (age >= 18) {
    console.log("Adult patient.");
} else {
    console.log("Pediatric patient.");
}