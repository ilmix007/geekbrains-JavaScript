/*
1. Создать функцию, генерирующую галерею.
*/
let mainImg = document.querySelector ('#main')
let roulette = document.querySelector ('#roulette')
let wrapper = document.querySelector('#wrapper')
function gallery () {
    let number = 8
    let nodeStr = ''

    for (let i = 1; i <= number; i++) {
        nodeStr += `<img onclick="somefunc(${i})" src="gallery/${i}.jpg">`
    }
    roulette.innerHTML = nodeStr
} 

function somefunc (i) {
    imgimg = `<img src="gallery/${i}.jpg" alt="" id="main">`
    wrapper.innerHTML = imgimg
}

gallery ()