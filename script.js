function mainJsScript(newLocal= window) {
    const display = document.querySelector('main')
    let local = newLocal

    function objectToArray(object) {
        //Object.getOwnPropertyNames(Object.getPrototypeOf(document.__proto__))
        const objectProtoType = Object.getPrototypeOf(object.__proto__)
        const objectProtoTypePropertyNames = Object.getOwnPropertyNames(objectProtoType)

        return objectProtoTypePropertyNames.map(propertyName => {
            return [propertyName, object[propertyName]]
        })
    }
    
    function objectToHTML(object) {
        
        const objectArray = (object === window) ? Object.entries(object) : objectToArray(object)

        let lineNumber = 0
        const HTMLArray = objectArray.map(element => {
            const [property, value] = element
            lineNumber++


            const HTMLForValues = {
                object: 
                    [
                        `<p class="object" id="line${lineNumber}">`,
                            `<span>${property}: </span>`,
                            `<span class="value">${value}</span>`,
                        `</p>`
                    ].join(''),

                function:
                    [
                        `<p class="function" id="line${lineNumber}">`,
                            `${property}: `,
                            `<abbr title="${value}" style="color: yellow">function</abbr>`,
                        `</p>`
                    ].join(''),

                boolean:
                    [
                        `<p class="boolean" id="line${lineNumber}">`,
                            `${property}: `,
                            `<span>${value}</span>`,
                        `</p>`
                    ].join(''),

                number:
                    [
                        `<p class="number" id="line${lineNumber}">`,
                            `${property}: `,
                            `<span>${value}</span>`,
                        `</p>`
                    ].join(''),
            }

            return HTMLForValues[typeof (value)] ? 
                HTMLForValues[typeof (value)] : 
                `<p>${property}: ${value}</p>`
        })

        return HTMLArray.join('')
    }



    display.innerHTML =  objectToHTML(local)


    function buttons() {
        document.querySelectorAll('.object').forEach(element => {
            element.addEventListener('click', e => {
                mainJsScript(local[document.querySelector(`#${element.id} span`).innerText.replace(': ', '')])
            })
        })
    }
    buttons()
}
mainJsScript()