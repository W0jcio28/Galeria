document.addEventListener('DOMContentLoaded', function () {
	let zdjecie = document.getElementById('zdjecie')
	const nastepne = document.getElementById('nastepne')
	const poprzednie = document.getElementById('poprzednie')
	let nazwa = document.getElementById('nazwa')
	let wszysykieZdjecia = document.querySelector('.wszystkieZdjecia')
	const powort = document.querySelector('h2')

	const ssakINazwa = [
		['Ptaki/wrobel.jpg', 'wrobel'],
		['Ptaki/bocian.jpg', 'bocian'],
		['Ptaki/jaskolka.jpg', 'jaskolka'],
		['Ptaki/jastrzab.jpg', 'jastrzab'],
		['Ptaki/skowronek.jpg', 'skowronek'],
	]

	let index = 0

	zdjecie.innerHTML = `<img src="${ssakINazwa[index][0]}" alt="zwierze" class="pokazane">`
	nazwa.innerHTML = ssakINazwa[index][1]

	for (let i = 0; i < ssakINazwa.length; i++) {
		if (i !== ssakINazwa.length) {
			wszysykieZdjecia.innerHTML += `<img src="${ssakINazwa[i][0]}" alt="${ssakINazwa[i][1]}">`
		}
	}

	let miniaturka = document.querySelectorAll('img')
	function pokazZdjecie(indexSsakow) {
		zdjecie.innerHTML = `<img src="${ssakINazwa[index][0]}" alt="zwierze" class="pokazane">`
		nazwa.innerHTML = ssakINazwa[index][1]
	}

	nastepne.addEventListener('click', () => {
		index++
		if (index < ssakINazwa.length) {
			pokazZdjecie(index)
		} else {
			index = 0
			pokazZdjecie(index)
		}
	})
	poprzednie.addEventListener('click', () => {
		index--
		if (index >= 0) {
			pokazZdjecie(index)
		} else {
			index = ssakINazwa.length - 1
			pokazZdjecie(index)
		}
	})

	zdjecie.addEventListener('click', () => {})

	miniaturka.forEach((miniaturka, idx) => {
		miniaturka.addEventListener('click', () => {
			index = idx - 1
			pokazZdjecie(index)
		})
	})
	powort.addEventListener('click', () => {
		window.location.href = 'index.html'
	})
})
