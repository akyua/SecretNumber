const elementGuess = document.getElementById('guess')

window.SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition;

const recognition = new SpeechRecognition();
recognition.lang ='pt-Br'
recognition.start()

recognition.addEventListener('result', onSpeak)

function onSpeak(e) {
    guess = e.results[0][0].transcript
    showGuess(guess)
    verifyGuess(guess)
}

function showGuess(guess){
    elementGuess.innerHTML = `
    <div>You said:</div>
    <span class="box">${guess}</span>
    `
}