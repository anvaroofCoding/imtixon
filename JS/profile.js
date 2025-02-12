let name_inp = document.querySelector('#name_inp')
let num_inp = document.querySelector('#num_inp')
let email_inp = document.querySelector('#email_inp')
let pass_inp = document.querySelector('#pass_inp')
let accessToken = localStorage.getItem('authToken')
let edit_image = document.querySelector('#edit_image')
let avatarOne = document.querySelector('#img')
let editFile = document.querySelector('#editFile')
let input_image = document.querySelector('#input_image')
let saqlash = document.querySelector('#saqlash')
let tahrirlash = document.querySelector('#tahrirlash')

async function getEditBlog() {
	let res = await fetch('https://asadbek6035.pythonanywhere.com/account/me/', {
		headers: {
			Authorization: `Bearer ${accessToken}`,
		},
	})
	res = await res.json()
	name_inp.value = res.full_name
	num_inp.value = res.phone_number
	email_inp.value = res.email ? res.email : 'mavjud emas'

	pass_inp.value = res.password
}

getEditBlog()

async function getAvatar() {
	let res = await fetch('https://asadbek6035.pythonanywhere.com/account/me/', {
		headers: {
			Authorization: `Bearer ${accessToken}`,
		},
	})
	res = await res.json()
	avatarOne.src = res.avatar
	console.log(res)
}

getAvatar()

function chiquv() {
	editFile.classList.toggle('hidden')
}

async function addAvatar() {
	if (input_image.files.length === 0) return
	let formData = new FormData()
	formData.append('avatar', input_image.files[0])

	let res = await fetch('https://asadbek6035.pythonanywhere.com/account/me/', {
		method: 'PUT',
		headers: {
			Authorization: `Bearer ${accessToken}`,
		},
		body: formData,
	})

	res = await res.json()
	console.log(res)

	// if (!res.ok) {
	// 	console.error('Server xatosi:', res.status, res.statusText)
	// 	return
	// }
	editFile.classList.toggle('hidden')
	getAvatar()
}

// editFile.addEventListener('click', addAvatar)

// formData.append('full_name', inp_name.value)
// formData.append('email', email_inp.value)

async function addInpmo() {
	let formData = new FormData()
	formData.append('full_name', name_inp.value)
	formData.append('email', email_inp.value)

	let res = await fetch('https://asadbek6035.pythonanywhere.com/account/me/', {
		method: 'PUT',
		headers: {
			Authorization: `Bearer ${accessToken}`,
		},
		body: formData,
	})

	res = await res.json()
	console.log(res)

	// if (!res.ok) {
	// 	console.error('Server xatosi:', res.status, res.statusText)
	// 	return
	// }
	getAvatar()
	addts()
}

function eddsts() {
	saqlash.classList.remove('hidden')
	tahrirlash.classList.add('hidden')
	name_inp.classList.toggle('bg-gray-200')
	num_inp.classList.toggle('bg-gray-200')
	email_inp.classList.toggle('bg-gray-200')
	if (email_inp.hasAttribute('readonly')) {
		email_inp.removeAttribute('readonly')
	} else {
		email_inp.setAttribute('readonly', 'true')
	}

	if (name_inp.hasAttribute('readonly')) {
		name_inp.removeAttribute('readonly')
	} else {
		name_inp.setAttribute('readonly', 'true')
	}

	if (num_inp.hasAttribute('readonly')) {
		num_inp.removeAttribute('readonly')
	} else {
		num_inp.setAttribute('readonly', 'true')
	}
}
function addts() {
	saqlash.classList.add('hidden')
	tahrirlash.classList.remove('hidden')

	name_inp.classList.toggle('bg-gray-200')
	num_inp.classList.toggle('bg-gray-200')
	email_inp.classList.toggle('bg-gray-200')
	if (email_inp.hasAttribute('readonly')) {
		email_inp.removeAttribute('readonly')
	} else {
		email_inp.setAttribute('readonly', 'true')
	}

	if (name_inp.hasAttribute('readonly')) {
		name_inp.removeAttribute('readonly')
	} else {
		name_inp.setAttribute('readonly', 'true')
	}

	if (num_inp.hasAttribute('readonly')) {
		num_inp.removeAttribute('readonly')
	} else {
		num_inp.setAttribute('readonly', 'true')
	}
}
