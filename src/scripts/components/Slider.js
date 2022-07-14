import Swiper, { Navigation } from 'swiper'

Swiper.use([Navigation])

function initSlider($slider) {
	let $container = $slider.querySelector('.swiper-container')

	let options = {
		speed: parseInt($slider.dataset.speed) || 300,
		loop: $slider.dataset.loop || true,
		slidesPerView: $slider.dataset.slides || 1,
		spaceBetween: 30,
		autoHeight: $slider.dataset.autoHeight || false,
		navigation: {
			prevEl: $slider.querySelector('.Slider__prev'),
			nextEl: $slider.querySelector('.Slider__next'),
		},
		breakpoints: {
			576: {
				slidesPerView: $slider.dataset.slidesSm || 1,
				spaceBetween: 36
			},
			992: {
				slidesPerView: $slider.dataset.slidesLg || 1,
				spaceBetween: 40
			}
		},
		on: {}
	}

	$slider.instance = new Swiper($container, options)

	return $slider
}

export default initSlider
