const speech = new webkitSpeechRecognition();

speech.lang = 'en-US'

speech.onend = function() {
	console.log('Aloqa tugadi.')
}

speech.onerror = function() {
	console.log('Xatolik bor.')	
}

speech.onresult = function(event) {
	
	const order = event.results[0][0].transcript
	
	jsTask.value = order
	
	jsTask.focus()

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
}

window.onkeyup = function(e) {
	if(e.shiftKey && e.keyCode == 32) {
		speech.start();
	}
}

jsAddButton.onmousedown = function() {
	jsAddButton.classList.add("add-button-focus")

	if(jsTask.value.length > 0) {
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

jsAddButton.onmouseup = function() {
	jsAddButton.classList.remove("add-button-focus")
}

jsAlertButton.onclick = function() {
	jsAlert.classList.add("alert-off")
}




const rec = new webkitSpeechRecognition

rec.lang='uz-UZ'

rec.onresult = function (event) {
  const command = event.results[0][0].transcript
  console.log(command)
}

rec.onend = function () {
  console.log('Tugadi')
}

rec.onerror = function() {
  console.log('Xatolik')
}

addButton.onclick = function () {
  rec.start()
}