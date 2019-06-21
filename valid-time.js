function validTime(string) {
    let result = false
    let array = string.split(":")
    let firstInt = parseInt(array[0])
    let secondInt = parseInt(array[1])
    if (firstInt >= 0 && firstInt <= 24 && secondInt >= 0 && secondInt <= 60 ) {
        result = true
    }

    return result
}