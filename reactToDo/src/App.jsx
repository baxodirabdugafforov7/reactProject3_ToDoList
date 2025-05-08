import React, { useState, useEffect } from 'react'
import TaskHeader from './components/TaskHeader'
import TaskList from './components/TaskList'
import EditTaskModal from './components/EditTaskModal'

const App = () => {
  const getSavedTasks = () => {
    const saved = localStorage.getItem('tasks')
    return saved ? JSON.parse(saved) : []
  }

  const [taskList, setTaskList] = useState(getSavedTasks())
  const [showEditModal, setShowEditModal] = useState(false)
  const [taskToEdit, setTaskToEdit] = useState(null)

  const formatValue = (num) => new Intl.NumberFormat().format(num)

  const addTask = (title, duration, priority) => {
    const newTask = {
      id: Date.now(),
      title,
      duration,
      priority,
      score: parseFloat(duration) * parseFloat(priority),
      isChecked: false,
    }
    setTaskList([newTask, ...taskList])
  }

  const removeTask = (id) => {
    setTaskList(taskList.filter(task => task.id !== id))
  }

  const removeAllTasks = () => {
    setTaskList([])
  }

  const toggleTaskChecked = (id) => {
    setTaskList(taskList.map(task =>
      task.id === id ? { ...task, isChecked: !task.isChecked } : task
    ))
  }

  const editTask = (task) => {
    setShowEditModal(true)
    setTaskToEdit(task)
  }

  const saveTaskEdit = (updatedTask) => {
    updatedTask.score = parseFloat(updatedTask.duration) * parseFloat(updatedTask.priority)

    setTaskList(taskList.map(task =>
      task.id === updatedTask.id ? updatedTask : task
    ))
    setShowEditModal(false)
  }

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(taskList))
  }, [taskList])

  return (
    <div className="min-h-screen bg-green-50">
      <div className="max-w-[1200px] mx-auto px-4">
        <header className="bg-green-200 py-6 shadow">
          <TaskHeader onAddTask={addTask} onDeleteAll={removeAllTasks} />
        </header>

        <main className="mt-6">
          <TaskList
            tasks={taskList}
            onToggleChecked={toggleTaskChecked}
            onEdit={editTask}
            onDelete={removeTask}
            formatValue={formatValue}
          />
        </main>
      </div>

      {showEditModal && taskToEdit && (
        <EditTaskModal
          task={taskToEdit}
          onSave={saveTaskEdit}
          onClose={() => setShowEditModal(false)}
        />
      )}
    </div>
  )
}

export default App
