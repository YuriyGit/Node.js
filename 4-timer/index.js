const hours = process.argv[2]
const minutes = process.argv[3]
const seconds = process.argv[4]

function timer(hours, minutes, seconds) {
    let secondsInEnteredHours = 0;
    let secondsInEnteredMinutes = 0;
    let enteredSeconds = 0;
    if (hours > 0) {
        secondsInEnteredHours = hours * 60 * 60;
    }
    if (minutes > 0) {
        secondsInEnteredMinutes = minutes * 60
    }
    if (seconds > 0) {
        enteredSeconds = Number(seconds)
    }
    return secondsInEnteredHours + secondsInEnteredMinutes + enteredSeconds;
}

console.log(`таймер сработает через ${timer(hours, minutes, seconds)} секунд`)

setTimeout(() => {
    console.log(`таймер сработал спустя ${timer(hours, minutes, seconds)} секунд`)
}, timer(hours, minutes, seconds) * 1000)

