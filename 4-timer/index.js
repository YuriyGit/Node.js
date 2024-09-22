const hours = process.argv[2]
const minutes = process.argv[3]
const seconds = process.argv[4]

function timer(hours, minutes, seconds) {
    if (isNaN(hours)) {
        console.log('Часы введенены не верно! Введите число!')
        return
    }
    if (isNaN(minutes)) {
        console.log('Минуты введенены не верно! Введите число!')
        return
    }
    if (isNaN(seconds)) {
        console.log('Секунды введенены не верно! Введите число!')
        return
    }

    let secondsInEnteredHours = Number(hours) * 60 * 60;
    let secondsInEnteredMinutes = Number(minutes) * 60;
    let enteredSeconds = Number(seconds);

    const time = secondsInEnteredHours + secondsInEnteredMinutes + enteredSeconds;

    console.log(`Таймер сработает через ${time} секунд`)

    setTimeout(() => {
        console.log(`Таймер сработал спустя ${time} секунд`)
    }, time * 1000)
}

timer(hours, minutes, seconds);
