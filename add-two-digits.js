function addTwoDigits(num) {
    let n = num.toString()
    let numberItems = n.split('')
    numberItems.forEach((item, index) => {
        numberItems[index] = parseInt(item, 10)
    })
    return numberItems.reduce(function (accumulator, currentValue) {
        return accumulator + currentValue;
    }, 0)
}