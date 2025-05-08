import React from 'react'
import TaskItem from './TaskItem'

const TaskList = ({ tasks, toggleChecked, editTask, deleteTask, formatDuration }) => {
  return (
    <div>
      {tasks.map(task => (
        <TaskItem
          key={task.id}
          task={task}
          toggleChecked={toggleChecked}
          editTask={editTask}
          deleteTask={deleteTask}
          formatDuration={formatDuration}
        />
      ))}
    </div>
  )
}

export default TaskList
