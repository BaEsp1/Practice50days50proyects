//            1 day !!!!
const panels = document.querySelectorAll('.panel')

panels.forEach(panel => {
    panel.addEventListener('click', () => {
        removeActiveClasses()
        panel.classList.add('active')
    })
})

function removeActiveClasses() {
    panels.forEach(panel => {
        panel.classList.remove('active')
    })
}

// *-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-
                // DAY 2

                const progress = document.getElementById('progress')
                const prev = document.getElementById('prev')
                const next = document.getElementById('next')
                const circles = document.querySelectorAll('.circle')
                
                let currentActive = 1
                
                next.addEventListener('click', () => {
                    currentActive++
                
                    if(currentActive > circles.length) {
                        currentActive = circles.length
                    }
                
                    update()
                })
                
                prev.addEventListener('click', () => {
                    currentActive--
                
                    if(currentActive < 1) {
                        currentActive = 1
                    }
                
                    update()
                })
                
                function update() {
                    circles.forEach((circle, idx) => {
                        if(idx < currentActive) {
                            circle.classList.add('active')
                        } else {
                            circle.classList.remove('active')
                        }
                    })
                
                    const actives = document.querySelectorAll('.active')
                
                    progress.style.width = (actives.length - 1) / (circles.length - 1) * 100 + '%'
                
                    if(currentActive === 1) {
                        prev.disabled = true
                    } else if(currentActive === circles.length) {
                        next.disabled = true
                    } else {
                        prev.disabled = false
                        next.disabled = false
                    }
                }

// *-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-
        // DAY 3
    const open = document.getElementById('open')
    const close = document.getElementById('close')
    const container = document.querySelector('.container3')
                
    open.addEventListener('click', () => container.classList.add('show-nav'))
                
    close.addEventListener('click', () => container.classList.remove('show-nav'))

// *-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-
        // DAY 4
    const search = document.querySelector('.search4')
    const btn = document.querySelector('.btnd4')
    const input = document.querySelector('.inputd4')
    
    btn.addEventListener('click', () => {
        search.classList.toggle('active')
        input.focus()
    })