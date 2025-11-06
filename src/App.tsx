import './App.css'

function App() {
  return (
    <div className="min-h-screen bg-gray-200 flex flex-col items-center p-4">
      <h1 className='text-3xl font-bold mb-4'>Taskify</h1>
      <form className='flex gap-2 mb-4'>
        <input className='border p-2 rounded w-64' type="text" placeholder='Ajouter une tâche' />
        <button className='bg-blue-500 text-white px-4 py-2 rounded'>Ajouter</button>
      </form>
    </div>
  )
}

export default App
