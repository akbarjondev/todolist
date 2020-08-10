//Appending newTask to HTML
function appendNewTask() {
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

    if(jsTasks.childElementCount == 0) {
      jsGone.classList.remove("gone-off")
    }
  }

  newTasksItem.appendChild(newButton)

  jsTasks.appendChild(newTasksItem)

  jsTask.value = ''

  if(jsTasks.childElementCount > 0) {
    jsGone.classList.add("gone-off")
  }
}

//Speech Recognition section
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
      appendNewTask()
    }
	}
}

jsTask.onkeyup = function(event) {
  if(event.keyCode === 13 && jsTask.value.length > 0) {
    appendNewTask()
  }
}

window.onkeyup = function(e) {
	if(e.shiftKey && e.keyCode == 32) {
		speech.start();
	}
}

//Clicking Plus button
jsAddButton.onmousedown = function() {
	jsAddButton.classList.add("add-button-focus")

  if(jsTask.value.length > 0) {
		appendNewTask()
	}
}

jsAddButton.onmouseup = function() {
	jsAddButton.classList.remove("add-button-focus")
}

//Turn off Alert
jsAlertButton.onclick = function() {
	jsAlert.classList.add("alert-off")
}