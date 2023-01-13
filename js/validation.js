function verifyGuess(guess) {
    const number = +guess
    if(validation(number)){
        elementGuess.innerHTML +='<div>Invalid value</div>'
        return
    }

    if(numberHighestorLower(number)){
        elementGuess.innerHTML +='<div>Invalid value: The number secret is out of range</div>'
        return
    }

    if(number === secretNumber){
        document.body.innerHTML = `
            <h2>You guess!</h2>
            <h3>The secret number was ${secretNumber}<h3>
        `
    } else if(number > secretNumber){
        elementGuess.innerHTML += `
        <div>The number secret is less than <i class="fa-solid fa-angle-down"></i></div>
        `
    } else {
        elementGuess.innerHTML += `
        <div>The number secret is bigger then <i class="fa-solid fa-angle-up"></i></div>
        `
    }
}

function validation(number){
    return Number.isNaN(number)
}

function numberHighestorLower(number){
    return number > highestValue || number < lowerValue;
}