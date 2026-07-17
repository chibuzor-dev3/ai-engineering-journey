let patientname = "Sarah Johnson";
let patientage = 12;
let patientweight = 40;
let patientheight = 1.45;
let patienttemperature = 36.8;

console.log("Patient Name: " + patientname);
console.log("Patient Age: " + patientage);
console.log("Patient Weight: " + patientweight + " kg");
console.log("Patient Height: " + patientheight + " m");
console.log("Patient Temperature: " + patienttemperature + " °C");

function calculateBMI(weight, height) {
    return weight / (height * height);
}

let patientbmi = calculateBMI(patientweight, patientheight);
console.log("Patient BMI: " + patientbmi.toFixed(1));

if (patienttemperature >= 38) {
    console.log("High fever detected.");
} else {
    console.log("Temperature is normal.");
}

if (patientbmi < 18.5) {
    console.log("Patient is underweight.");
} else if (patientbmi < 25) {
    console.log("Patient has a healthy weight.");
} else if (patientbmi < 30) {
    console.log("Patient is overweight.");
} else {
    console.log("Patient is obese.");
}

if (patientage >= 18) {
    console.log("Adult patient.");
} else {
    console.log("Pediatric patient.");
}

if (patienttemperature >= 38 && patientbmi >= 25) {
    console.log("Overall Risk: High.");
    console.log("Immediate medical review recommended.");
} else {
    console.log("Overall Risk: low.");
    console.log("Continue routine monitoring.");
}