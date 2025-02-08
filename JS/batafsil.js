let accessToken = localStorage.getItem('authToken')
let batafsil_blog = document.querySelector('#batafsil_blog')
let blog_img = document.querySelector('#blog_img')
let titles = document.querySelector('#titles')
let created_at = document.querySelector('#created_at')
let disc = document.querySelector('#disc')
let comment_div = document.querySelector('#comment-div')
let textarea = document.querySelector('#textarea')
let id = new URLSearchParams(window.location.search)
console.log(id.get('blog_id'))
;(function tokenAuther() {
	if (!accessToken) {
		window.location.pathname = '/'
	}
})()

async function getByid() {
	let res = await fetch(
		`https://asadbek6035.pythonanywhere.com/blog/retrieve/${id.get('blog_id')}`,
		{
			method: 'GET',
			headers: {
				Authorization: `Bearer ${accessToken}`,
				'Content-type': 'application/json',
			},
		}
	)
	res = await res.json()

	if (res.code == 'token_not_valid') {
		window.location.pathname = '/'
	}
	console.log(res)

	blog_img.src = res.image
	titles.textContent = res.title
	created_at.textContent = res.date_created
	disc.textContent = res.description
	blog_img.alt = res.title
}

getByid()

async function renderComment() {
	let res = await fetch(
		`https://asadbek6035.pythonanywhere.com/blog/comment/list/?blog_id=${id.get(
			'blog_id'
		)}`,
		{
			method: 'GET',
			headers: {
				Authorization: `Bearer ${accessToken}`,
				'Content-type': 'application/json',
			},
			// body: JSON.stringify(),
		}
	)
	res = await res.json()

	RendersComment(res)
	console.log(res)
}
renderComment()

function RendersComment(res) {
	// dr_dives.innerHTML = ''
	// res.forEach(element => {
	// 	let dr_dives = document.createElement('div')
	// 	let dives = `<div class=" h-[100px] overflow-scroll bg-gray-300 rounded-lg p-3
	// 			">
	// 				<p>${element.description}</p>
	// 				<p>${element.date_created}</p>
	// 			</div>`
	// 	dr_dives.innerHTML = dives
	// 	comment_div.appendChild(dr_dives)
	// })
	comment_div.innerHTML = ''
	if (!Array.isArray(res)) {
		console.error('Xatolik! Kommentlar array emas:', res)
		return // Xatolikni oldini olamiz
	}

	res.forEach(element => {
		let dr_dives = document.createElement('div')
		let dives = `<div class=" h-[100px] overflow-scroll bg-gray-300 rounded-lg p-3">
			<p>${element.description}</p>
			<p>${element.date_created}</p>
		</div>`
		dr_dives.innerHTML = dives
		comment_div.appendChild(dr_dives)
	})
	console.log(res)
}

async function addComment() {
	let body = {
		blog: +id.get('blog_id'),
		description: textarea.value,
	}
	let res = await fetch(
		'https://asadbek6035.pythonanywhere.com/blog/comment/post/',
		{
			method: 'POST',
			headers: {
				Authorization: `Bearer ${accessToken}`,
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(body),
		}
	)
	res = await res.json()
	if (res) {
		renderComment()
	} else {
		console.error('Xatolik yuz berdi:', res)
	}
	textarea.value = null
	console.log(res)
}
