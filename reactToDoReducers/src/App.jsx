import React, { useReducer, useEffect } from 'react'
import TaskHeader from './components/TaskHeader'
import TaskList from './components/TaskList'
import EditTaskModal from './components/EditTaskModal'

const taskReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TASK':
      return [{ ...action.payload, id: Date.now() }, ...state]
    case 'DELETE_TASK':
      return state.filter(task => task.id !== action.payload)
    case 'DELETE_ALL_TASKS':
      return []
    case 'TOGGLE_CHECKED':
      return state.map(task =>
        task.id === action.payload ? { ...task, isChecked: !task.isChecked } : task
      )
    case 'EDIT_TASK':
      return state.map(task =>
        task.id === action.payload.id ? { ...action.payload } : task
      )
    default:
      return state
  }
}

const App = () => {
  const [taskList, dispatch] = useReducer(taskReducer, [], () => {
    const saved = localStorage.getItem('tasks')
    return saved ? JSON.parse(saved) : []
  })

  const [showEditModal, setShowEditModal] = React.useState(false)
  const [taskToEdit, setTaskToEdit] = React.useState(null)

  const formatDuration = (num) => new Intl.NumberFormat().format(num)

  const addTask = (title, duration, priority) => {
    dispatch({
      type: 'ADD_TASK',
      payload: {
        title,
        duration,
        priority,
        score: duration * priority,
        isChecked: false,
      }
    })
  }

  const deleteTask = (id) => {
    dispatch({ type: 'DELETE_TASK', payload: id })
  }

  const deleteAllTasks = () => {
    dispatch({ type: 'DELETE_ALL_TASKS' })
  }

  const toggleChecked = (id) => {
    dispatch({ type: 'TOGGLE_CHECKED', payload: id })
  }

  const editTask = (task) => {
    setShowEditModal(true)
    setTaskToEdit(task)
  }

  const saveTaskEdit = (updatedTask) => {
    dispatch({ type: 'EDIT_TASK', payload: updatedTask })
    setShowEditModal(false)
  }

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(taskList))
  }, [taskList])

  return (
    <div className="min-h-screen bg-green-50">
      <div className="max-w-[1200px] mx-auto px-4">
        <header className="bg-green-200 py-6 shadow">
          <TaskHeader addTask={addTask} deleteAllTasks={deleteAllTasks} />
        </header>

        <main className="mt-6">
          <TaskList
            tasks={taskList}
            toggleChecked={toggleChecked}
            editTask={editTask}
            deleteTask={deleteTask}
            formatDuration={formatDuration}
          />
        </main>
      </div>

      {showEditModal && taskToEdit && (
        <EditTaskModal
          task={taskToEdit}
          saveEdit={saveTaskEdit}
          closeModal={() => setShowEditModal(false)}
        />
      )}
    </div>
  )
}

export default App
