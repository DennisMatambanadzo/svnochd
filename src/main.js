const menuBtn = document.getElementById('menu-btn')
const closeBtn = document.getElementById('close-btn')
const mobileMenu = document.getElementById('mobile-menu')


menuBtn.addEventListener('click', () => {
  mobileMenu.classList.toggle('max-h-48')
  mobileMenu.classList.toggle('max-h-0')
  menuBtn.classList.toggle('hidden')
  closeBtn.classList.toggle('hidden')
})

closeBtn.addEventListener('click', () => {
  mobileMenu.classList.toggle('max-h-48')
  mobileMenu.classList.toggle('max-h-0')
  menuBtn.classList.toggle('hidden')
  closeBtn.classList.toggle('hidden')
})