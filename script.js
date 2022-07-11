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

            const inputName = 'line'
            const HTMLForValues = {
                object: 
                    [
                        `<div class="object line">`,
                            `<input type="radio" name="${inputName}" id="inp${lineNumber}">`,
                            `<label for="inp${lineNumber}" id="line${lineNumber}">`,
                                `<span>${property}: </span>`,
                                `<span class="value">${value}</span>`,
                            `</label>`,
                        `</div>`,
                    ].join(''),

                function:
                    [
                        `<div class="function line">`,
                            `<input type="radio" name="${inputName}" id="inp${lineNumber}">`,
                            `<label for="inp${lineNumber}" id="line${lineNumber}">`,
                                `${property}: `,
                                `<abbr title="${value}" style="color: yellow">function</abbr>`,
                            `</label>`,
                        `</div>`,
                    ].join(''),

                boolean:
                    [
                        `<div class="boolean line">`,
                            `<input type="radio" name="${inputName}" id="inp${lineNumber}">`,
                            `<label for="inp${lineNumber}" id="line${lineNumber}">`,
                                `${property}: `,
                                `<span>${value}</span>`,
                            `</label>`,
                        `</div>`,
                    ].join(''),

                number:
                    [
                        `<div class="number line">`,
                            `<input type="radio" name="${inputName}" id="inp${lineNumber}">`,
                            `<label for="inp${lineNumber}" id="line${lineNumber}">`,
                                `${property}: `,
                                `<span>${value}</span>`,
                            `</label>`,
                        `</div>`,
                    ].join(''),

                string:
                    [
                        `<div class="string line">`,
                            `<input type="radio" name="${inputName}" id="inp${lineNumber}">`,
                            `<label for="inp${lineNumber}" id="line${lineNumber}">`,
                                `${property}: `,
                                `<span>${value}</span>`,
                            `</label>`,
                        `</div>`,
                    ].join(''),
            }

            return HTMLForValues[typeof (value)] ? 
                HTMLForValues[typeof (value)] : 
                (                
                    [
                    `<div class="generic line">`,
                        `<input type="radio" name="${inputName} id="inp${lineNumber}">`,
                        `<label for="inp${lineNumber}" id="line${lineNumber}">`,
                            `${property}: `,
                            `<span>${value}</span>`,
                        `</label>`,
                    `</div>`,
                ].join(''))
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
    //buttons()
}
mainJsScript()