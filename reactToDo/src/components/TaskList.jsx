import React from 'react'
import TaskItem from './TaskItem'

const TaskList = ({ tasks, onToggleChecked, onEdit, onDelete, formatValue }) => {
  return (
    <div>
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          onToggleChecked={onToggleChecked}
          onEdit={onEdit}
          onDelete={onDelete}
          formatValue={formatValue}
        />
      ))}
    </div>
  )
}

export default TaskList
