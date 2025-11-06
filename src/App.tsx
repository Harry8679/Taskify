import React, { useState } from 'react'
import './App.css'

interface Task {
  id: number;
  title: string;
  completed: boolean;
}

function App() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [title, setTitle] = useState("");

  const addTask = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim()) return;
    const newTask: Task = { id: Date.now(), title, completed: false };
    setTasks([...tasks, newTask]);
    setTitle("");
  };

  const deleteTask = (id: number) => {
    setTasks(tasks.filter((t) => t.id !== id));
  }
  return (
    <div className="min-h-screen bg-gray-200 flex flex-col items-center p-4">
      <h1 className='text-3xl font-bold mb-4'>Taskify</h1>
      <form className='flex gap-2 mb-4' onSubmit={addTask}>
        <input className='border p-2 rounded w-64' type="text" placeholder='Ajouter une tâche' 
          value={title} onChange={(e) => setTitle(e.target.value)}/>
        <button className='bg-blue-500 text-white px-4 py-2 rounded'>Ajouter</button>
      </form>

      {/* Liste des taches */}
      <ul className='w-72'>
        {tasks.length === 0 ? (
          <p className='text-gray-500 text-center italic'>Aucune tache pour le moment.</p>
        ): (
          tasks.map((t) => (
          <li key={t.id} className='flex justify-between bg-white p-2 mb-2 rounded shadow'>
            <span className={`cursor-pointer ${t.completed ? 'line-through text-gray-400': ''}`}>
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
