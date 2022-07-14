import initSlider from './Slider'
import initPopup from './Popup'

let $sliderGallery = initSlider(
	document.querySelector('.Slider.-gallery')
)

const $popup = initPopup({
	$popup: document.querySelector('#popupFullscreen'),

	showCallback(instance) {
		let $sliderFullscreen = initSlider(
			instance.element().querySelector('.Slider.-fullscreen')
		)

		let $captions = $sliderFullscreen.querySelectorAll('.Slide__caption')
		$captions.forEach($caption => {
			$caption.addEventListener('mousedown', event => {
				$caption.classList.add('is-open')
				$sliderFullscreen.instance.updateAutoHeight()
			})
		})
	}
})


let $gallerySlides = $sliderGallery.instance.slides

$gallerySlides.forEach($slide => {
	$slide.addEventListener('click', event => {
		event.preventDefault()

		let slideIndex = parseInt($slide.dataset.swiperSlideIndex) + 1
		$popup.instance.show()

		let $sliderFullscreen = $popup.instance.element().querySelector('.Slider.-fullscreen')
		$sliderFullscreen.instance.slideTo(slideIndex)
	})
})
