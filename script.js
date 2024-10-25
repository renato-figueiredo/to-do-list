const input = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");
const clearTasksBtn = document.getElementById("clearTasksBtn");
let tarefas = [];

renderTasks()

addTaskBtn.addEventListener('click', (event) => {
  addTask()
})

input.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    addTask()
  }
})

clearTasksBtn.addEventListener('click', (event) => {
  tarefas = []
  localStorage.clear();
  renderTasks()
  showToastMessage('clear', 'Limpeza completa das tarefas concluída.')
})

function showToastMessage(tipo, mensagem) {
  const liveToast = document.getElementById("liveToast")
  let liveToastMessage = document.getElementById("liveToastMessage")
  switch (tipo) {
    case 'clear':
      liveToast.classList.remove('text-bg-danger')
      liveToast.classList.add('text-bg-primary')
      break;
      case 'error':
        liveToast.classList.remove('text-bg-primary')
        liveToast.classList.add('text-bg-danger')
      break;
  }
  liveToastMessage.innerText = mensagem
  const toast = bootstrap.Toast.getOrCreateInstance(liveToast)
  toast.show()
}
function renderTasks() {
  taskList.innerHTML = ''
  tarefas = JSON.parse(localStorage.getItem('tarefas')) || []
  console.log(tarefas)
  tarefas.forEach(task => {
    const li = document.createElement('li')
    li.classList.add('list-group-item')
    li.innerText = task
    taskList.appendChild(li)

    const deleteBtn = document.createElement('button')
    deleteBtn.classList.add('btn', 'btn-danger', 'btn-sm', 'float-end')
    deleteBtn.innerText = 'Deletar'
    deleteBtn.addEventListener('click', (event) => {
      tarefas = tarefas.filter(item => item !== task)
      setTaskLocation(tarefas)
      renderTasks()
    })
    li.appendChild(deleteBtn)
  });
}

function addTask() {
  let inputV = input.value
  if (inputV.length == 0 || inputV == '') {
    showToastMessage('error','[ERRO] Favor preencher campo de nova tarefa.')
    return
  } else if (tarefas.includes(inputV)) {
    showToastMessage('error','[ERRO] Tarefa ja existente.')
    return
  }
    setTask(inputV)
}

function setTask(item) {
  tarefas.push(item)
  setTaskLocation(tarefas)

  renderTasks()

  // Foca e limpa o input
  input.value = ''
  input.focus()
}
function setTaskLocation(tasks) {
  localStorage.setItem('tarefas', JSON.stringify(tasks))
}