'"use strict"';
let massInput = document.getElementById('mass');
let heightInput = document.getElementById('height');
let bmiButton = document.getElementById('bmi-button');
let bmiClear = document.getElementById('bmi-clear');
let bmiResult = document.getElementById('bmi-result');
let bmiStats = document.getElementById('bmi-stats');

bmiButton.addEventListener('click', () => {
  let newBMI = new BMI(massInput.value, heightInput.value);

  let result = newBMI.calculateBMI();

  if ((massInput.value !== '') & (heightInput.value !== '')) {
    // let siUnit = 'kg / m2';
    bmiResult.textContent = `${result} kg/m2`;
    massInput.value = '';
    heightInput.value = '';
  }
  if (result <= 18.4) {
    bmiStats.textContent = 'you are underweight 😞';
    bmiStats.style.color = 'red';
  } else if (result > 18.5 && result <= 24.9) {
    bmiStats.textContent = 'your weight is normal 🙂';
    bmiStats.style.color = 'green';
  } else if (result >= 25 && result <= 29.9) {
    bmiStats.textContent = 'you are overweight 😞';
    bmiStats.style.color = 'red';
  } else if (result >= 30 && result <= 39.9) {
    bmiStats.textContent = 'you are in the obese range 😢';
    bmiStats.style.color = 'red';
  } else {
    bmiStats.innerHTML =
      '<span class="blinking">you are extremely overweight 😭</span>';
  }
});

bmiClear.addEventListener('click', () => {
  bmiResult.textContent = '';
  bmiStats.textContent = '';
});
