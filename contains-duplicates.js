function containsDuplicates(array) {
    let result = false
    
    for (let i = 0; i < array.length; i++) {
        let j = i + 1
        while (j < array.length) {
            if (array[i] === array[j]) {
                result = true
                return result
            } else {
                j++
            }
        }
        
    }
        
    return result
}
