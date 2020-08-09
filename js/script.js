jsTask.onkeyup = function(event) {
	if(event.keyCode === 13 && jsTask.value.length > 0) {
		const newTasksItem = document.createElement('LI')
		
		newTasksItem.classList.add('tasks-item')

		const newTaskText = document.createElement('P')
		
		newTaskText.classList.add('task-text')
		
		newTaskText.textContent = jsTask.value

		newTasksItem.appendChild(newTaskText)

		const newButton = document.createElement('BUTTON')
		
		newButton.classList.add('done-button')

		newButton.onclick = function() {
			newTasksItem.remove()
		}

		newTasksItem.appendChild(newButton)

		jsTasks.appendChild(newTasksItem)

		jsTask.value = ''
	}
}

const speech = new webkitSpeechRecognition();

speech.lang = 'uz-UZ'

speech.onend = function() {
	console.log('Aloqa tugadi.')
}

speech.onerror = function() {
	console.log('Xatolik bor.')	
}

speech.onresult = function(event) {
	console.log(event.results[0][0].transcript)
}

// console.log(speech)
speech.start();