const progress = document.getElementById('progress')
const prev = document.getElementById('prev')
const next = document.getElementById('next')
const circles = document.querySelectorAll('.circle')

let currentactive = 1;

next.addEventListener('click', () => {
    currentactive++
    if (currentactive > circles.length) {
        currentactive = circles.length
    }
    update()
})

prev.addEventListener('click', () => {
    currentactive--;
    if (currentactive < 1) {
        currentactive = 1
    }
    update();
})

function update() {
    // add and remove active class
    circles.forEach((circle, idx) => {
        if (idx < currentactive) {
            circle.classList.add('active')
        } else {
            circle.classList.remove('active')
        }
    })

    const actives = document.querySelectorAll('.active')
    progress.style.width = (actives.length - 1) / (circles.length - 1) * 100 + '%'

    // next and prev disable logic
    if (currentactive === 1) {
        prev.disabled = true
    } else if (currentactive === circles.length) {
        next.disabled = true
    } else {
        prev.disabled = false
        next.disabled = false
    }

}