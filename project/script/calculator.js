let calculation = localStorage.getItem('calcul') || '';

calculation !== '' && displayResult();

function updateCalculation(char){
  if (char === 'clear'){
    calculation='';
    console.log('Cleared.');
  } else if (char === '='){
    calculation = eval(calculation);
    console.log(calculation);
  } else {
    calculation += char;
    console.log(calculation);
  }
  localStorage.setItem('calcul', calculation);
  displayResult();
}
function displayResult(){
  const textCalcul = document.querySelector('.js-display-calcul').innerText = calculation;
}