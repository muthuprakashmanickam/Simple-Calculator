let lastActionWasCalculation = false;
// Function to append value to the display
function appendToDisplay(value) {
    const display = document.getElementById('display');
    if (lastActionWasCalculation && !isNaN(value)) {
        display.value = '';
    }
    display.value += value;
    lastActionWasCalculation = false;
}

// Function to clear the display
function clearDisplay() {
    const display = document.getElementById('display');
    display.value = '';
    lastActionWasCalculation = false;
}

// Function to calculate the result
function calculateResult() {
    const display = document.getElementById('display');
    try {
        display.value = eval(display.value);
        lastActionWasCalculation = true;
    } catch (error) {
        display.value = 'Error';
        lastActionWasCalculation = false;
    }
}
