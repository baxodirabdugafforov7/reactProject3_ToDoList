import React from 'react'

const TaskItem = ({ task, onToggleChecked, onEdit, onDelete, formatValue }) => {
  return (
    <div className="flex justify-around items-center bg-white shadow p-4 rounded text-lg mb-4">
      <input
        type="checkbox"
        checked={task.isChecked}
        onChange={() => onToggleChecked(task.id)}
        className="w-5 h-5"
      />
      <span className={`${task.isChecked ? 'line-through text-gray-500' : ''} w-1/4`}>
        {task.title}
      </span>
      <span className="w-1/6">{formatValue(task.duration)} hrs</span>
      <span className="w-1/6">Priority: {formatValue(task.priority)}</span>
      <span className="w-1/6 font-semibold">Score: {formatValue(task.score.toFixed(2))}</span>
      {!task.isChecked && (
        <div className="flex gap-2">
          <button
            onClick={() => onEdit(task)}
            className="bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600"
          >
            Edit <i className="fa-solid fa-pen-to-square mx-1 text-1.4xl"></i>
          </button>
          <button
            onClick={() => onDelete(task.id)}
            className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
          >
            Delete <i className="fa-solid fa-xmark mx-1 text-1.4xl"></i>
          </button>
        </div>
      )}
    </div>
  )
}

export default TaskItem
