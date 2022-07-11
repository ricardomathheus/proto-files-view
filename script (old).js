const display = document.querySelector('main')

function getPropertyAndValuesOfAProtoTypeObject(object) {
    const objectProto = Object.getPrototypeOf(object.__proto__)
    const objectKeys = Object.getOwnPropertyNames(objectProto)

    return objectKeys.map(element => {
        const property = element
        const propertyValue = object[element]
        return [property, propertyValue]
    })
}

function objectToSring(object) {
    const propertyAndValue = getPropertyAndValuesOfAProtoTypeObject(object)

    let string = ''
    propertyAndValue.forEach(element => {
        const property = element[0]
        const propertyValue = element[1]
        string += `${property}: ${propertyValue}\n`
    })

    return string
}

display.innerHTML = `<pre>${objectToSring(document)}</pre>`