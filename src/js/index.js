import '../scss/style.scss'
import { navigationLinksData } from './constants/navigationLinksData'
import { priceListData } from './constants/priceListData'
import { repairData } from './constants/repairData'
import { repairTechnicalData } from './constants/repairTechnicalData'
import { sidebarLinksData } from './constants/sidebarLinksData'
import {
  loadSliderPriceList,
  loadSliderRepairList,
  loadSliderRepairTechnicalList,
  sliderRepair
} from './sliderRepair'

const burgerMenuBtns = document.querySelectorAll('.burger-menu')
const sidebar = document.querySelector('.sidebar')
const sidebarNav = document.querySelector('.sidebar__links')
const mainContentNavigation = document.querySelector(
  '.main-content-navigation__links'
)
const repairList = document.querySelectorAll(
  '.main-content-slider__repair-list'
)
const viewMoreBtn = document.querySelectorAll('.view-more-btn')
const priceList = document.querySelector('.main-content-slider__price-list')

let contentNavigationLinks = null

let sidebarLinks = null

let isActiveBurgerMenuBtn = false

let isActiveViewMoreRepairItems = false

let isActiveViewMoreTechItems = false

const mediaQuery = window.matchMedia('(max-width: 992px)')

const handleBurgerMenu = () => {
  isActiveBurgerMenuBtn = !isActiveBurgerMenuBtn
  sidebar.classList.toggle('active-sidebar', isActiveBurgerMenuBtn)

  burgerMenuBtns.forEach((btn) => {
    btn.classList.toggle('active-burger-btn', isActiveBurgerMenuBtn)
  })
}

burgerMenuBtns.forEach((btn) => {
  btn.addEventListener('click', handleBurgerMenu)
})

const loadNavigationLinks = () => {
  navigationLinksData.map((el) => {
    mainContentNavigation.innerHTML += `
                <li>
                    <a class="content-navigation-link" href="#">
                        ${el.text}
                    </a>
                </li>`
  })
  contentNavigationLinks = document.querySelectorAll('.content-navigation-link')
  if (contentNavigationLinks.length > 0) {
    contentNavigationLinks[0].classList.add('active-content-nav-link')
  }
}

loadNavigationLinks()

contentNavigationLinks.forEach((el) => {
  el.addEventListener('click', () => {
    contentNavigationLinks.forEach((link) =>
      link.classList.remove('active-content-nav-link')
    )

    el.classList.add('active-content-nav-link')
  })
})

const loadSidebarLinks = () => {
  sidebarLinksData.map((el) => {
    sidebarNav.innerHTML += `
                  <li>
                      <a class="sidebar__link" href="#">
                          ${el.text}
                      </a>
                  </li>`
  })
  sidebarLinks = document.querySelectorAll('.sidebar__link')
  if (sidebarLinks.length > 0) {
    sidebarLinks[0].classList.add('active-link')
  }
}

loadSidebarLinks()

sidebarLinks.forEach((el) => {
  el.addEventListener('click', () => {
    sidebarLinks.forEach((link) => {
      link.classList.remove('active-link')
    })
    el.classList.add('active-link')
  })
})

const loadRepairList = (isBreakpoint) => {
  const repairItemsToRender = isActiveViewMoreRepairItems
    ? repairData
    : repairData.slice(0, isBreakpoint ? 6 : 8)

  repairList[0].innerHTML = ''

  repairItemsToRender.map((el) => {
    repairList[0].innerHTML += `
                  <li>
                    <div class="main-content-slider__repair-block">
                      <img src="${el.src}" alt="logo" />
                      <button>
                        <span></span>
                      </button> </div
                  ></li>`
  })
}

loadRepairList(mediaQuery.matches)

mediaQuery.addEventListener('change', (e) => {
  if (!isActiveViewMoreRepairItems) {
    loadRepairList(e.matches)
    loadRepairTechnicalList(e.matches)
  }
})

const handleViewMoreRepairItems = () => {
  isActiveViewMoreRepairItems = !isActiveViewMoreRepairItems
  viewMoreBtn[0].classList.toggle('active-view-more-btn')
  loadRepairList(mediaQuery.matches)
}

viewMoreBtn[0].addEventListener('click', () => {
  handleViewMoreRepairItems()
})

const loadRepairTechnicalList = (isBreakpoint) => {
  const repairItemsToRender = isActiveViewMoreTechItems
    ? repairTechnicalData
    : repairTechnicalData.slice(0, isBreakpoint ? 6 : 8)

  repairList[1].innerHTML = ''

  repairItemsToRender.map((el) => {
    repairList[1].innerHTML += `
                    <li>
                      <div class="main-content-slider__repair-block-technical">
                        <h4>${el.text}</h4>
                        <button>
                          <span></span>
                        </button> </div
                    ></li>`
  })
}

loadRepairTechnicalList(mediaQuery.matches)

const handleViewMoreRepairTechnicalItems = () => {
  isActiveViewMoreTechItems = !isActiveViewMoreTechItems
  viewMoreBtn[1].classList.toggle('active-view-more-btn')
  loadRepairTechnicalList(mediaQuery.matches)
}

viewMoreBtn[1].addEventListener('click', () => {
  handleViewMoreRepairTechnicalItems()
})

sliderRepair('.slider-repair')
loadSliderRepairList('(max-width: 768px)')
loadSliderRepairTechnicalList('(max-width: 768px)')
loadSliderPriceList('(max-width: 768px)')

const loadPriceList = () => {
  priceList.innerHTML = ''
  priceListData.map((el) => {
    priceList.innerHTML += `
                  <li>
                    <div class="main-content-slider__price-list-element">
                      <span>${el.title}</span>
                      <span>${el.price}</span>
                      <span>${el.term}</span>
                      <button class="order-btn">
                        <span>Заказать</span>
                        <span></span>
                      </button>
                    </div>
                  </li>`
  })
}

loadPriceList()
