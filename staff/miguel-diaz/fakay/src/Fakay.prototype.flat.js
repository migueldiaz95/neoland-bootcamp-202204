Fakay.prototype.flat = function (deepth = 1) {
    
    const newArray = []    
    for (element of this) 
        newArray.push(element)
    
    for (let i = 0; i < newArray.length; i++) {
        for (let d = 1; d <= deepth; d++) {
            if (newArray[i] instanceof Fakay) {
                for (let k = newArray[i].length - 1; k >= 0; k--) {
                    newArray.splice(i + 1, 0, newArray[i][k])
                }
            } else {
                newArray.splice(i + 1, 0, newArray[i])
                j = deepth
            }
            newArray.splice(i, 1)
        }

    }
    return newArray
}