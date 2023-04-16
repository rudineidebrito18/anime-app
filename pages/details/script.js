function addElementData(obj) {
    const img = document.getElementById('imgCover')
    const title = document.getElementById('title')
    const note = document.getElementById('note')
    const description = document.getElementById('description')

    img.src = obj.cover
    title.innerHTML = obj.name
    note.innerHTML = "Note " + obj.note
    description.innerHTML = obj.description
}

const urlApi = 'http://localhost:3000/animes'
const id = location.search.slice(1).split('=')
const main = document.getElementById('animeInfo')

fetch(urlApi)
    .then(response => response.json())
    .then(data => {
        const element = data
        let isValid = false
        element.forEach(e => {
            if (e.id == parseInt(id[1])) {
                addElementData(e)
                isValid = true
            }
        })
        if (!isValid) {
            main.parentNode.removeChild(main)
        }
    })
    .catch(err => console.log(err))