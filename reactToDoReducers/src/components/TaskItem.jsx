import React from 'react'

const TaskItem = ({ task, toggleChecked, editTask, deleteTask, formatDuration }) => {
  return (
    <div className="flex justify-around items-center bg-white shadow p-4 rounded text-lg mb-4">
      <input
        type="checkbox"
        checked={task.isChecked}
        onChange={() => toggleChecked(task.id)}
        className="w-5 h-5"
      />
      <span className={`${task.isChecked ? 'line-through text-gray-500' : ''} w-0.4`}>
        {task.title}
      </span>
      <span className="w-1/6">{task.duration} hours</span>
      <span className="w-1/6">Priority {task.priority}</span>
      <span className="w-1/6 font-semibold">Priority Score: {task.duration * task.priority}</span>
      {!task.isChecked && (
        <div className="flex gap-2">
          <button onClick={() => editTask(task)} className="bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600">
            Edit <i className="fa-solid fa-pen-to-square mx-1 text-1.4xl"></i>
          </button>
          <button onClick={() => deleteTask(task.id)} className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600">
            Delete <i className="fa-solid fa-xmark mx-1 text-1.4xl"></i>
          </button>
        </div>
      )}
    </div>
  )
}

export default TaskItem
