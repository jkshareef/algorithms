function longestStrings(array) {
    let maximum = 0
    let newArray = []
    array.forEach((string) => {
        if(string.length > maximum) {
            maximum = string.length
        }
    })

    array.forEach((string) => {
        if(string.length === maximum) {
            newArray.push(string)
        }
    })
    return newArray
}