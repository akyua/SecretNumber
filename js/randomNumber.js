const lowerValue = 1;
const highestValue = 1000;
const secretNumber = setSecretNumber();

function setSecretNumber(){
    return parseInt(Math.random() * highestValue + 1);
}

console.log(secretNumber)

const elementLowerValue = document.getElementById('lower-value')
elementLowerValue.innerHTML = lowerValue;

const elementHighestValue = document.getElementById('highest-value')
elementHighestValue.innerHTML = highestValue;

const result = document.querySelector('.box')
result.innerHTML = secretNumber;