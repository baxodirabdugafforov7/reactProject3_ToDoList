import React, { useState } from 'react'

const TaskHeader = ({ addTask, deleteAllTasks }) => {
  const [title, setTitle] = useState('')
  const [duration, setDuration] = useState('')
  const [priority, setPriority] = useState('')

  const handleAdd = () => {
    if (title && duration && priority) {
      addTask(title, duration, priority)
      setTitle('')
      setDuration('')
      setPriority('')
    }
  }

  return (
    <div className="flex justify-between items-center bg-blue-200 p-1 rounded-t-lg mx-14">
      <div className="flex flex-grow justify-around items-center">
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Task Title"
          className="p-2 border border-gray-300 rounded"
        />
        <input
          type="number"
          value={duration}
          onChange={(e) => setDuration(e.target.value)}
          placeholder="Duration (hours)"
          className="p-2 border border-gray-300 rounded"
        />
        <input
          type="number"
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
          placeholder="Priority (1-10)"
          className="p-2 border border-gray-300 rounded"
        />
      </div>

      <div className="flex flex-col gap-2 mx-4">
        <button
          onClick={handleAdd}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 w-40"
        >
          Add Task <i className="fa-solid fa-square-plus mx-1 text-1.4xl"></i>
        </button>
        <button
          onClick={deleteAllTasks}
          className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
        >
          Delete All <i className="fa-solid fa-trash mx-1 text-1.4xl"></i>
        </button>
      </div>
    </div>
  )
}

export default TaskHeader
