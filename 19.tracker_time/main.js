const header_input = document.querySelector('.header__task input')
const add_task = document.querySelector('.fa-calendar-plus')
const main = document.querySelector('main')
const main_time = document.querySelector('.header__countdown h1')
const btn_start = document.querySelector('.header__start')
const btn_stop = document.querySelector('.header__stop')

add_task.addEventListener('click', (e) => {
	e.preventDefault()
	if (header_input.value) {
		header_input.classList.remove('red')

		let tasks = localStorage.getItem('task')

		if (tasks == null) {
			tasks_obj = []
		} else {
			tasks_obj = JSON.parse(tasks)
		}

		clear_time()

		let create_task_obj = {

			task: header_input.value,
			timer: main_time.textContent,
		}


		tasks_obj.push(create_task_obj)

		localStorage.setItem('task', JSON.stringify(tasks_obj))

		show_task()

	} else {
		header_input.classList.add('red')
	}
})


//show task all
const show_task = () => {
	let tasks = localStorage.getItem('task')

	if (tasks === null) {
		task_obj = []
	} else {
		task_obj = JSON.parse(tasks)
	}

	let html = ''

	task_obj.forEach((el, index) => {

		html += `
		
				<div class="main__job active">
				<h3 class="main__text"><span class="no">${index + 1}</span>${el.task}</h3>
				<div class="main__icon">
					<h3 class="main__time">${el.timer}</h3>
					<i class="fas fa-backspace"></i>
				</div>
			</div>
		
		`

	})


	main.innerHTML = html//key point kalau lupa ref

	const eachoneof_x = document.querySelectorAll('.fa-backspace')
	for (let i = 0; i < eachoneof_x.length; i++) {

		eachoneof_x[i].addEventListener('click', () => {

			delete_currenttask(i)
			// location.reload()
			show_task()
		})


	}
}

const delete_currenttask = (index) => {
	let confirm_del = confirm('Are you sure')
	if (confirm_del) {
		let tasks = localStorage.getItem('task')

		if (tasks == null) {

			task_obj = []
		} else {
			task_obj = JSON.parse(tasks)
		}

		task_obj.splice(index, 1)

		localStorage.setItem('task', JSON.stringify(task_obj))

	}
}




//timer up functionality

btn_start.addEventListener('click', () => {

	let tasks = localStorage.getItem('task')

	let task_obj = tasks === null ? tasks = [] : tasks = JSON.parse(tasks)

	if (task_obj.length != 0) {

		let total_seconds = 0

		let timercount = () => {
			++total_seconds
			let hour = Math.floor(total_seconds / 3600)
			let minute = Math.floor((total_seconds - hour * 3600) / 60)
			let seconds = total_seconds - (hour * 3600 + minute * 60)
			if (minute < 10)
				minute = `0${minute}`
			if (seconds < 10)
				seconds = `0${seconds}`


			main_time.innerHTML = `${minute}:${seconds}`


		}

		let timerup = setInterval(timercount, 1000)

		const myStopFunction = () => {
			clearInterval(timerup)
		}

		btn_stop.addEventListener('click', () => {

			myStopFunction()

			let tasks = localStorage.getItem('task')

			if (tasks === null) {
				task_obj = []
			} else {
				task_obj = JSON.parse(tasks)
			}

			let cur_task = task_obj[task_obj.length - 1]

			cur_task.timer = main_time.textContent

			localStorage.setItem('task', JSON.stringify(task_obj))
			show_task()
		})



	} else {
		alert('Please add your first task')
	}

})



const clear_time = () => {
	main_time.innerHTML = '00:00'
}


// clear all localStorage 

const clear_all = document.querySelector('.fa-sync')

clear_all.addEventListener('click', () => {
	localStorage.clear()
	show_task()
})

show_task()

