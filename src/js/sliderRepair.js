import { repairData } from './constants/repairData'
import { repairTechnicalData } from './constants/repairTechnicalData'
import { priceSlidesData } from './constants/priceSlidesData'

const sliderWrapper = document.querySelectorAll('.swiper-wrapper')

export function sliderRepair(className) {
  new Swiper(className, {
    slidesPerView: 1.2,
    spaceBetween: 16,
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },
    breakpoints: {
      0: {
        enabled: true
      },
      768: {
        enabled: false
      }
    }
  })
}

export const loadSliderRepairList = (isBreakpoint) => {
  sliderWrapper[0].innerHTML = ''
  let sliderMediaQuery = window.matchMedia(isBreakpoint)

  if (sliderMediaQuery.matches) {
    repairData.map((el) => {
      sliderWrapper[0].innerHTML += `
                  <div class="swiper-slide">
                    <div class="main-content-slider__repair-block">
                      <img src="${el.src}" alt="logo" />
                      <button>
                        <span></span>
                      </button>
                    </div>
                  </div>`
    })
  }
}

export const loadSliderRepairTechnicalList = (isBreakpoint) => {
  sliderWrapper[1].innerHTML = ''
  let sliderMediaQuery = window.matchMedia(isBreakpoint)

  if (sliderMediaQuery.matches) {
    repairTechnicalData.map((el) => {
      sliderWrapper[1].innerHTML += `
                <div class="swiper-slide">
                    <div class="main-content-slider__repair-block-technical">
                      <h4>${el.text}</h4>
                      <button>
                        <span></span>
                      </button>
                    </div>
                  </div>
        `
    })
  }
}

export const loadSliderPriceList = (isBreakpoint) => {
  sliderWrapper[2].innerHTML = ''
  let sliderMediaQuery = window.matchMedia(isBreakpoint)

  if (sliderMediaQuery.matches) {
    priceSlidesData.map((el) => {
      sliderWrapper[2].innerHTML += `
              <div class="swiper-slide">
                    <div class="main-content-slider__repair-block-price-slide">
                      <div class="main-content-slider__repair-block-price-slide-info">
                        <h5>${el.title}</h5>
                        <p>${el.subtitle}</p>
                      </div>
                      <div class="main-content-slider__repair-block-price-slide-info">
                        <h5>${el.priceTitle}</h5>
                        <p>${el.price}</p>
                      </div>
                      <div
                        class="main-content-slider__repair-block-price-slide-tools"
                      >
                        <div>
                          <h5>${el.term}</h5>
                          <p>${el.termInfo}</p>
                        </div>
                        <button>
                          <span>Заказать </span>
                          <span></span>
                        </button>
                      </div>
                    </div>
                  </div>
        `
    })
  }
}
