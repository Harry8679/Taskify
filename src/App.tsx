import { useState } from 'react'
import './App.css'
import type { Task } from './types/Task';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';

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
      <TaskList tasks={tasks} onToggle={toggleTask} onDelete={deleteTask} />

    </div>
  )
}

export default App;
