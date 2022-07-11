function mainJsScript(newLocal= window) {
    const display = document.querySelector('main')
    let local = newLocal

    function objectToHTML(object) {
        const objectArray = Object.entries(object)

        let lineNumber = 0
        const HTMLArray = objectArray.map(element => {
            const [property, value] = element
            lineNumber++

            const HTMLForValues = {
                object: 
                    [
                        `<p class="object" id="line${lineNumber}">`,
                            `<span>${property}: </span>`,
                            `<button value="${property}">${value}</button>`,
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
                `${property}: ${value}`
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