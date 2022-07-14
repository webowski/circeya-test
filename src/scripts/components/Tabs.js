const $tabsNavs = document.querySelectorAll('.TabsNav')

function initTabs(switchCallback) {
	let isSwitched = false

	$tabsNavs.forEach($tabsNav => {
		let $navItems = $tabsNav.querySelectorAll('.TabsNav__item')
		let $currentItem

		$navItems.forEach($navItem => {
			let $link = $navItem.querySelector('a')

			$link.addEventListener('click', event => {
				event.preventDefault()

				$currentItem = $navItem
				deselectTheRest($navItems)
				switchTab($navItem)

				if (!isSwitched) {
					setTimeout(() => {
						isSwitched = switchCallback()
					}, 15)
				}
			})
		})

		function switchTab($navItem) {
			$navItem.classList.add('is-current')
			getTabBody($navItem).classList.add('is-current')
			return $navItem
		}

		function deselectTheRest($navItems) {
			$navItems.forEach($navItem => {
				if ($navItem !== $currentItem) {
					$navItem.classList.remove('is-current')
					getTabBody($navItem).classList.remove('is-current')
				}
			})
		}

		function getTabBody($navItem) {
			let $link = $navItem.querySelector('a')
			let targetId = $link.getAttribute('href')
			let $tabBody = document.querySelector(targetId)
			return $tabBody
		}

	})
}

export default initTabs
