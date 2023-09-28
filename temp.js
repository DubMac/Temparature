function convertToCelsius(fahren) {
    return (parseFloat(fahren) - 32) * 5 / 9;
}

function createMessage(fahren, celc) {
    let feeling;
    if (fahren < 32) {
        feeling = 'very cold';
    } else if (fahren < 64) {
        feeling = 'cold';
    } else if (fahren < 86) {
        feeling = 'warm';
    } else {
        feeling = 'hot';
    }
    return `Fahrenheit: ${fahren}, Celsius: ${celc.toFixed(2)}. It feels ${feeling}!`;
}

function rand(limit) {
    return Math.floor(Math.random() * (limit + 1));
}

function processInput() {
    let fahren = document.getElementById('fahrenheit').value;
    let celc = convertToCelsius(fahren);
    let output = createMessage(fahren, celc);
    document.getElementById('message').textContent = output;
}
