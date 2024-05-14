document.addEventListener('DOMContentLoaded', function () {
	const ssaki = document.querySelector('.lewe')
	const praki = document.querySelector('.srodek')
	const ryby = document.querySelector('.prawe')

	ssaki.addEventListener('click', () => {
		window.location.href = 'Ssaki.html'
	})
	praki.addEventListener('click', () => {
		window.location.href = 'Ptaki.html'
	})
	ryby.addEventListener('click', () => {
		window.location.href = 'Ryby.html'
	})
})
