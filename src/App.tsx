import React, { useState } from 'react'
import './App.css'
import type { Task } from './types/Task';
import TaskForm from './components/TaskForm';

function App() {
  const [tasks, setTasks] = useState<Task[]>([]);

  const addTask = (title: string) => {
    if (!title.trim()) return;
    const newTask: Task = { id: Date.now(), title, completed: false };
    setTasks([...tasks, newTask]);
  };

  const deleteTask = (id: number) => {
    setTasks(tasks.filter((t) => t.id !== id));
  }

  const toggleTask = (id: number) => {
    setTasks(tasks.map((t) => (
      t.id === id ? { ...t, completed: !t.completed } : t
    )));
  };
  return (
    <div className="min-h-screen bg-gray-200 flex flex-col items-center p-4">
      <h1 className='text-3xl font-bold mb-4'>Taskify</h1>
      <TaskForm onAdd={addTask} />
      {/* Liste des taches */}
      <ul className='w-72'>
        {tasks.length === 0 ? (
          <p className='text-gray-500 text-center italic'>Aucune tache pour le moment.</p>
        ): (
          tasks.map((t) => (
          <li key={t.id} className='flex justify-between bg-white p-2 mb-2 rounded shadow'>
            <span onClick={() => toggleTask(t.id)} className={`cursor-pointer ${t.completed ? 'line-through text-gray-400': ''}`}>
              {t.title}
            </span>
            <button onClick={() => deleteTask(t.id)} 
            className='bg-red-500 hover:bg-red-700 text-white font-bold w-6 h-6 rounded items-center shadow-sm'>
              x
            </button>
          </li>
        ))
        )}
      </ul>

    </div>
  )
}

export default App
