let accessToken = localStorage.getItem('authToken')

let title = document.querySelector('#title')
let disc = document.querySelector('#disc')
let select = document.querySelector('#select')
let file = document.querySelector('#file')

async function addBlog() {
	try {
		if (!(title.value || disc.value)) {
			throw new Error("Bo'sh qolib ketti")
		}
		let form_data = new FormData()
		form_data.append('title', title.value)
		form_data.append('description', disc.value)
		form_data.append('category', select.value)
		form_data.append('image', file.files[0])

		let res = await fetch(
			'https://asadbek6035.pythonanywhere.com/blog/create/',
			{
				method: 'POST',
				headers: {
					Authorization: `Bearer ${accessToken}`,
				},
				body: form_data,
			}
		)
		res = await res.json()
		console.log(res)
		if (res) {
			window.location.pathname = '../pages/blog.html'
		}
	} catch (error) {
		alert(error.message)
	}
}
