import React from 'react';

function TaskList() {
  //  Create an array of task objects
  const tasks = [
    { taskName: 'Finish React project', completed: true },
    { taskName: 'Study for exams', completed: false },
    { taskName: 'Go for a run', completed: true },
    { taskName: 'Clean the house', completed: false },
  ];
  const completedCount = tasks.filter(task => task.completed).length;
  const incompleteCount = tasks.filter(task => !task.completed).length;

  //  Render each task using map
  return (
    <div>
      <h2>My Task List</h2>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}
              style={{color: task.completed ? 'green' : 'red',}}>
            {task.taskName} {task.completed ? '✅' : '❌ '}
          </li>
        ))}
      </ul>
      <h3>Completed Task count: {completedCount}</h3>
      <h3> Incomplete Task count: {incompleteCount}</h3>
    </div>
  );
}

export default TaskList;