document.addEventListener('DOMContentLoaded', () => {
  const menuBtn = document.getElementById('menu-btn')
  const closeBtn = document.getElementById('close-btn')
  const mobileMenu = document.getElementById('mobile-menu')
  const cartIconMobile = document.getElementById('cart-icon-mobile')
  const cartMenuMobile = document.getElementById('cart-menu-mobile')

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

  cartIconMobile.addEventListener('click', () => {
    cartMenuMobile.classList.toggle('max-h-96')
    cartMenuMobile.classList.toggle('max-h-0')
    // cartMenuMobile.classList.toggle('hidden') 
    console.log(cartMenuMobile);
  })
})