// let inp_phone = document.querySelector('#inp_phone')
// let inp_pass1 = document.querySelector('#inp_pass1')
// let loading = document.querySelector('#loading')

// async function login() {
// 	try {
// 		if (!(inp_phone.value && inp_pass1.value)) {
// 			throw new Error('Inputlardan biri bosh qolib ketti iltimos toldiring')
// 		}

// 		loading.classList.replace('hidden', 'block')

// 		let body = {
// 			phone_number: inp_phone.value,
// 			password: inp_pass1.value,
// 		}

// 		let res = await fetch(
// 			'https://asadbek6035.pythonanywhere.com/account/login/',
// 			{
// 				method: 'POST',
// 				headers: {
// 					'Content-Type': 'application/json',
// 				},
// 				body: JSON.stringify(body),
// 			}
// 		)
// 		res = await res.json()
// 		// if (res.success) {
// 		// 	window.location.pathname = '../pages/blog.html'
// 		// }
// 		loading.classList.replace('block', 'hidden')
// 		clearInp()
// 		console.log(res)
// 	} catch (err) {
// 		alert(err.message)
// 	}
// }

// function clearInp() {
// 	inp_name.value = ''
// 	inp_phone.value = ''
// }

let inp_number = document.querySelector('#inp_phone')
let inp_pass1 = document.querySelector('#inp_pass1')
let loading = document.querySelector('#loading')

async function login() {
	try {
		if (!(inp_number.value && inp_pass1.value)) {
			throw new Error('Inputlardan biri bosh qolib ketti, iltimos, to‘ldiring!')
		}

		if (loading) {
			loading.classList.replace('hidden', 'block')
		}

		let body = {
			phone_number: inp_number.value,
			password: inp_pass1.value,
		}

		let res = await fetch(
			'https://asadbek6035.pythonanywhere.com/account/login/',
			{
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(body),
			}
		)

		res = await res.json()

		if (loading) {
			loading.classList.replace('block', 'hidden')
		}

		if (res.success) {
			localStorage.setItem('authToken', res.data.token.access)
			localStorage.setItem('user', JSON.stringify(res.data))
			window.location.href = '../pages/blog.html'
		} else {
			alert('Login failed: ' + data.message)
		}

		clearInp()
		console.log(res)
	} catch (err) {
		alert(err.message)
	}
}

function clearInp() {
	inp_number.value = ''
	inp_pass1.value = ''
}

// document.getElementById('loginForm').addEventListener('submit', async e => {
//   e.preventDefault()
