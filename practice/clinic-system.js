function calculateBMI(weight, height) {
    return weight / (height * height);
}
let patientBMI = calculateBMI(70, 1.75);
console.log(patientBMI); 