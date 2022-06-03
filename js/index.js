const menuBars = document.getElementById('menu__bars')
const menuNav = document.getElementById('menu__nav')
const menuBack = document.getElementById('menu__back')
const menuItems = document.querySelectorAll('.menu__item')
const secciones = document.querySelectorAll('.seccion')

// menu nav interactions start
menuBars.addEventListener('click', () => {
  menuNav.classList.toggle('active')
  menuBack.classList.toggle('show')
})

menuItems.forEach((item) => {
  item.addEventListener('click', () => {
    menuNav.classList.remove('active')
    menuBack.classList.remove('show')
  })
})

// menu nav interactions end

// observer start
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const id = entry.target.id
        menuItems.forEach((item) => {
          if (item.classList.contains(id)) {
            item.classList.add('selected')
          } else {
            item.classList.remove('selected')
          }
        })
      }
    })
  },
  {
    rootMargin: '-80px 0px 0px 0px',
    threshold: 0.2,
  },
)

// asignacion de observador
secciones.forEach((seccion) => observer.observe(seccion))

// observer end
