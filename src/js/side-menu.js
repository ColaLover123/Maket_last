// side-menu

const menuBtn = document.querySelector('.header-navigation__btn')
const sideMenu = document.querySelector('.side-menu')
const navHeader = document.querySelector('.header-navigation')

const burger = document.getElementById('burger')

const settingsIcon = document.querySelector(
  '.header-nav__list .header-nav__item:nth-child(5)'
)
const settingsIcon2 = document.querySelector(
  '.header-nav__list .header-nav__item:nth-child(1)'
)
const settingsIcon3 = document.querySelector(
  '.header-nav__list .header-nav__item:nth-child(2)'
)
const settingsIcon4 = document.querySelector(
  '.header-nav__list .header-nav__item:nth-child(3)'
)

const headerBackground = document.querySelector('.header')
const headerMargin = document.querySelector('.header_wrapper')

const searchIcon = document.getElementById('search-icon')
let shadow = document.querySelector('.shadow')
const hideShadow = () => shadow.classList.add('hidden')
const showShadow = () => shadow.classList.remove('hidden')

let menuIsHidden = true

let showMenu = () => {
  sideMenu.classList.remove('hidden')
  menuIsHidden = false
  burger.src = './img/icon.x.svg'
  // settingsIcon.style = 'display: none'
  // settingsIcon2.style = 'display: none'
  // settingsIcon3.style = 'display: none'
  settingsIcon4.style = 'display: none'
  searchIcon.src = './img/icon.search.svg'
  headerBackground.style = 'background: white; z-index: 3;'
  headerMargin.style =
    'max-width: 340px; margin: 0; position: fixed; z-index: 3; border: none;'
  shadow.classList.remove('hidden')
  document.querySelector('.header-nav__list').classList.add('visible')
  document.querySelector('.header-nav__list').classList.remove('hidden')
}

let hideMenu = () => {
  sideMenu.classList.add('hidden')
  menuIsHidden = true
  burger.src = './img/icon1.svg'
  // settingsIcon.style = 'display: flex'
  // settingsIcon2.style = 'display: flex'
  // settingsIcon3.style = 'display: flex'
  // settingsIcon4.style = 'display: flex'
  searchIcon.src = './img/icon2.svg'
  navHeader.src = 'gap: 16px'
  headerBackground.style = 'background: #ffffff; z-index: 1;'
  headerMargin.style = 'max-width: 720px; margin: 0 auto; z-index: 1;'
  if (
    document.querySelector('.feedback').classList.contains('hidden') &&
    document.querySelector('.responsiveness').classList.contains('hidden')
  ) {
    shadow.classList.add('hidden')
  }
  document.querySelector('.header-nav__list').classList.remove('visible')
  document.querySelector('.header-nav__list').classList.add('hidden')
}

const toggleMenu = () => {
  if (menuIsHidden) {
    showMenu()
  } else {
    hideMenu()
  }
}

const hideAll = () => {
  if (!orderCallModal.classList.contains('hidden')) {
    orderCallModal.classList.add('hidden')
  }

  if (!sideMenu.classList.contains('hidden')) {
    hideMenu()
  }

  if (!responsivenessModal.classList.contains('hidden')) {
    responsivenessModal.classList.add('hidden')
  }

  if (!shadow.classList.contains('hidden')) {
    hideShadow()
  }
}

menuBtn.onclick = toggleMenu
shadow.onclick = hideAll

// order-call

let orderCallBtn = document.querySelector('#order-call')
let orderCallModal = document.querySelector('.feedback')
let closeBtn = document.querySelectorAll('.feedback-img')
const closeBtnFeedback = document.querySelector(
  '.feedback-wrapper .feedback-img'
)

closeBtnFeedback.onclick = () => {
  if (document.querySelector('.side-menu').classList.contains('hidden')) {
    hideShadow()
  }
  orderCallModal.classList.add('hidden')
}

orderCallBtn.addEventListener('click', () => {
  orderCallModal.classList.remove('hidden')
  showShadow()
  if (!document.querySelector('.side-menu').classList.contains('hidden')) {
    hideMenu()
  }
})

closeBtn[0].addEventListener('click', () => {
  if (document.querySelector('.side-menu').classList.contains('hidden')) {
    hideShadow()
  }
  orderCallModal.classList.add('hidden')
})

let responsivenessBtn = document.querySelector('#responsiveness')
let responsivenessModal = document.querySelector('.responsiveness')

responsivenessBtn.addEventListener('click', () => {
  responsivenessModal.classList.remove('hidden')
  showShadow()
  if (!document.querySelector('.side-menu').classList.contains('hidden')) {
    hideMenu()
  }
})
closeBtn[1].addEventListener('click', () => {
  responsivenessModal.classList.add('hidden')
  if (document.querySelector('.side-menu').classList.contains('hidden')) {
    hideShadow()
  }
})
