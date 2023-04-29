const card = document.getElementById('cardsContainer')
const detailsUrl = './pages/details/index.html'

function createNode(element, className) {
    const result = document.createElement(element)
    if (className) {
        result.setAttribute('class', className)
    }

    return result
}

function append(parent, el) {
    return parent.appendChild(el)
}

function createCard(obj) {
    const li = createNode('li', 'card')
    const img = createNode('img')
    const title = createNode('h1', 'title')
    const description = createNode('p', 'description')
    const a = createNode('a', 'link')

    img.src = obj.cover
    title.innerHTML = obj.name
    description.innerHTML = obj.description
    a.href = `${detailsUrl}?id=${obj.id}`
    
    append(a, img)
    append(a, title)
    append(a, description)
    append(li, a)
    append(card, li)
}

// const urlApi = 'http://localhost:3000/animes'
const urlApi = 'db.json'

fetch(urlApi)
    .then(response => response.json())
    .then(data => {
        data.animes.forEach(e => {
            createCard(e)
        })
    })
    .catch(err => console.log(err))