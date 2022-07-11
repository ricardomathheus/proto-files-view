function mainJsScript() {
    const display = document.querySelector('main')

    let local = window
    function objectToHTML(object) {
        const objectProperty = Object.entries(object)
        
        return objectProperty.map(element => {
            const [property, value] = element

            if (typeof(value) === "object") {
                return `<p>${property}: <a href="${window.location + '?local=' + property}">${value}</a></p>`
            }

            return `<p>${property}: ${value}</p>`
        }).join('')
    }

    function load() {
        const NewURLSearchParams = new URLSearchParams(window.location.search)
        const URLParams = NewURLSearchParams.get('local')
        console.log(URLParams)

        local = local[URLParams] ? local[URLParams] : local
        display.innerHTML = `${objectToHTML(local)}`
        
    }
    load()
}
mainJsScript()