// let body = document.querySelector('body')
// let modeIcon = document.getElementById('modeIcon')

// if (localStorage.getItem('darkMode') === 'enabled') {
// 	body.classList.add('bg-greenlines')
// 	modeIcon.classList.replace('fa-moon', 'fa-sun')
// }

let accessToken = localStorage.getItem('authToken')
let navbar = document.querySelector('#navbar')

let body = document.body
let modeIcon = document.getElementById('modeIcon')
let html = document.documentElement
let blogs = document.querySelector('#blogs')

function loadTheme() {
	let theme = localStorage.getItem('theme')
	if (theme === 'dark') {
		html.setAttribute('data-theme', 'dark')
		body.classList.add('bg-greenlines')
		modeIcon.classList.replace('fa-moon', 'fa-sun')
	} else {
		html.setAttribute('data-theme', 'light')
		body.classList.remove('bg-greenlines')
		modeIcon.classList.replace('fa-sun', 'fa-moon')
	}
}

function toggleTheme() {
	let currentTheme = localStorage.getItem('theme')
	let newTheme = currentTheme === 'dark' ? 'light' : 'dark'

	localStorage.setItem('theme', newTheme)
	loadTheme()
}
;(function tokenAuther() {
	if (!accessToken) {
		window.location.pathname = '/'
	}
})()

loadTheme()

document.getElementById('theme-toggle').addEventListener('click', toggleTheme)

async function renderBlog() {
	let res = await fetch('https://asadbek6035.pythonanywhere.com/blog/list/')
	res = await res.json()

	res.forEach(element => {
		let div = document.createElement('div')
		div.innerHTML = `
				<div class="h-[50%]">
					<img
						src="${element.image}"
						alt="${element.title}" class="w-full h-full object-cover rounded-lg ">
				</div>
				<div class="h-[50%] w-full flex justify-top gap-[10px] flex-col items-center text-center">
					<h2 class="text-white mt-[10px] dark:text-black">${element.title}</h2>
					<p class="text-white dark:text-black">${element.date_created}</p>
					<a href="../pages/batafsil.html?blog_id=${element.id}">
					<button class="bg-white dark:bg-greenlines dark:text-white px-3 py-1 rounded-lg text-greenlines font-bold">Batafsil</button>
					</a>
				</div>
				<div></div>`
		div.classList.add(
			'bg-greenlines',
			'dark:bg-white',
			'h-[300px]',
			'rounded-lg',
			'p-3'
		)
		blogs.appendChild(div)
	})

	console.log(res)
}
renderBlog()

function navs() {
	navbar.classList.toggle('left-[-11000px]')
}
function yop() {
	navbar.classList.toggle('left-[-11000px]')
}
