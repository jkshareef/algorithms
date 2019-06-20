function largestOfFour(array) {
    let newArray = []
    array.forEach((arrayElement) => {
        let maximum = -Infinity
        arrayElement.forEach((number) => {
            if(number > maximum) {
                maximum = number
            }

        })
        newArray.push(maximum)
    })
    return newArray
}