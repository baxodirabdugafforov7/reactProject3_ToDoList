import React, { useState } from 'react'

const EditTaskModal = ({ task, onSave, onClose }) => {
  const [title, setTitle] = useState(task.title)
  const [duration, setDuration] = useState(task.duration)
  const [priority, setPriority] = useState(task.priority)

  const handleSubmit = (e) => {
    e.preventDefault()

    const updatedTask = {
      ...task,
      title,
      duration,
      priority,
      score: parseFloat(duration) * parseFloat(priority), // if you want to show a 'calculated' field
    }

    onSave(updatedTask)
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-700 bg-opacity-50">
      <div className="bg-white p-6 rounded shadow-lg max-w-sm w-full">
        <h2 className="text-xl font-semibold mb-4">Edit Task</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block mb-2">Task Title</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2">Duration (hrs)</label>
            <input
              type="number"
              value={duration}
              onChange={(e) => setDuration(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2">Priority (1-5)</label>
            <input
              type="number"
              value={priority}
              onChange={(e) => setPriority(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded"
              required
            />
          </div>
          <div className="flex justify-between items-center">
            <button
              type="button"
              onClick={onClose}
              className="bg-red-500 px-4 py-2 rounded hover:bg-red-400 text-white"
            >
              Cancel <i className="fa-solid fa-ban mx-1 text-1.4xl"></i>
            </button>
            <button
              type="submit"
              className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
            >
              Save <i className="fa-solid fa-floppy-disk mx-1 text-1.4xl"></i>
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default EditTaskModal
