import * as basicLightbox from 'basiclightbox'

function initPopup({
	$popup,
	showCallback
}) {

	let $popupCloser = $popup.querySelector('.Popup__closer')

	let popupInstance = basicLightbox.create($popup, {
		onShow: popupInstance => {
			showCallback(popupInstance)
			document.body.classList.add('G-noScroll')
		},
		onClose: popupInstance => {
			document.body.classList.remove('G-noScroll')
		}
	})

	$popupCloser.addEventListener('click', e => {
		e.preventDefault()
		popupInstance.close()
	})

	popupInstance.id = $popup.id

	$popup.instance = popupInstance
	return $popup
}

export default initPopup
