import { useState } from 'react'
import './App.css'

function App() {
  const [tasks, setTasks] = useState([
    { id: 1, title: 'Apprendre React', completed: false },
    { id: 2, title: 'Les 5 principes S.O.L.I.D', completed: false },
    { id: 3, title: 'Apprendre NodeJS', completed: true }
  ]);
  return (
    <div className="min-h-screen bg-gray-200 flex flex-col items-center p-4">
      <h1 className='text-3xl font-bold mb-4'>Taskify</h1>
      <form className='flex gap-2 mb-4'>
        <input className='border p-2 rounded w-64' type="text" placeholder='Ajouter une tâche' />
        <button className='bg-blue-500 text-white px-4 py-2 rounded'>Ajouter</button>
      </form>

      {/* Liste des taches */}
      <ul className='w-72'>
        {tasks.map((t) => (
          <li key={t.id} className='flex justify-between bg-white p-2 mb-2 rounded shadow'>
            <span className={`cursor-pointer ${t.completed ? 'line-through text-gray-400': ''}`}>
              {t.title}
            </span>
          </li>
        ))}
      </ul>

    </div>
  )
}

export default App
