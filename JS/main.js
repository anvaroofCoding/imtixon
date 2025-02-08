let inp_name = document.querySelector('#inp_name')
let inp_phone = document.querySelector('#inp_phone')
let inp_pass1 = document.querySelector('#inp_pass1')
let inp_pass2 = document.querySelector('#inp_pass2')
let inp_file = document.querySelector('#inp_file')
let loading = document.querySelector('#loading')

async function register() {
	try {
		if (
			!(inp_name.value && inp_phone.value && inp_pass1.value && inp_pass2.value)
		) {
			throw new Error('Inputlardan biri bosh qolib ketti iltimos toldiring')
		}
		if (inp_pass1.value !== inp_pass2.value)
			throw new Error('Parollar bir emas')

		loading.classList.replace('hidden', 'block')

		const form_data = new FormData()

		form_data.append('full_name', inp_name.value)
		form_data.append('phone_number', inp_phone.value)
		form_data.append('password', inp_pass1.value)
		form_data.append('password2', inp_pass2.value)
		form_data.append('avatar', inp_file.files[0])

		let res = await fetch(
			'https://asadbek6035.pythonanywhere.com/account/register/',
			{
				method: 'POST',
				body: form_data,
			}
		)

		res = await res.json()
		if (res.success) {
			loading.classList.replace('block', 'hidden')

			window.location.pathname = '../pages/login.html'
		}
		clearInp()
		console.log(res)
	} catch (err) {
		alert(err.message)
	}
}

function clearInp() {
	inp_name.value = null
	inp_phone.value = null
	inp_pass1.value = null
	inp_pass2.value = null
	inp_file.files[0] = null
}
