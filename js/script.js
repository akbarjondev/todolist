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