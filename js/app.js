function getPin() {
    const pin = Math.round(Math.random() * 10000);
    const pinString = pin + '';
    if (pinString.length == 4) {
        return pin;
    } else {
        return getPin;
    }
}

function generatePin() {
    const pin = getPin();
    console.log(pin);
    document.getElementById('display-pin').value = pin;

}
document.getElementById('key-pad').addEventListener('click', function(event) {
    const number = event.target.innerText;
    const calc = document.getElementById('typed-numbers');


    if (isNaN(number)) {
        if (number == 'C') {
            calc.value = '';
        }

    } else {

        const previousNumber = calc.value;
        const finalNumber = previousNumber + number;
        calc.value = finalNumber;

    }
});

function verifyPin() {
    const randompin = document.getElementById('display-pin').value;
    const typeNumber = document.getElementById('typed-numbers').value;
    const successMessage = document.getElementById('notify-success');
    const failError = document.getElementById('notify-faild');


    if (randompin == typeNumber) {
        successMessage.style.display = 'block';
        failError.style.display = 'none';

    } else {
        failError.style.display = 'block';
        successMessage.style.display = 'none';

    }

}