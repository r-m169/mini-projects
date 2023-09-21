
const inputByInches = document.querySelector('.inches');
const calculateButton = document.querySelector('button');
const resultOutput = document.querySelector('.result');

function convertInchesToMeters(inches) {
    const meters = inches * 0.0254;
    return meters; 
}

function calculate() {
    const inches = inputByInches.value;

    if (!isNaN(inches)) {
        const meters = convertInchesToMeters(inches);
        resultOutput.value = meters + " meters";
    } else {
        resultOutput.value = "Please enter a valid number of inches.";
    }
}

calculateButton.addEventListener('click', calculate);


