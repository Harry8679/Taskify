import React, { useState } from 'react'

interface Props {
    onAdd: (title: string) => void;
}

const TaskForm = ({ onAdd }: Props) => {
  const [title, setTitle] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim()) return;
    onAdd(title);
    setTitle("");
  };
  return (
    <form className='flex gap-2 mb-4' onSubmit={handleSubmit}>
        <input className='border p-2 rounded w-64' type="text" placeholder='Ajouter une tâche' 
            value={title} onChange={(e) => setTitle(e.target.value)}/>
        <button className='bg-blue-500 text-white px-4 py-2 rounded'>Ajouter</button>
    </form>
  )
}

export default TaskForm;