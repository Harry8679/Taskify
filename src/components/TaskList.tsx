import type { Task } from '../types/Task';

interface Props {
    tasks: Task[];
    onToggle: (id: number) => void;
    onDelete: (id: number) => void;
}

const TaskList = ({ tasks, onToggle, onDelete }: Props) => {
  return (
    <ul className='w-72'>
        {tasks.length === 0 ? (
          <p className='text-gray-500 text-center italic'>Aucune tache pour le moment.</p>
        ): (
          tasks.map((t) => (
          <li key={t.id} className='flex justify-between bg-white p-2 mb-2 rounded shadow'>
            <span onClick={() => onToggle(t.id)} className={`cursor-pointer ${t.completed ? 'line-through text-gray-400': ''}`}>
              {t.title}
            </span>
            <button onClick={() => onDelete(t.id)} 
            className='bg-red-500 hover:bg-red-700 text-white font-bold w-6 h-6 rounded items-center shadow-sm'>
              x
            </button>
          </li>
        ))
        )}
      </ul>
  )
}

export default TaskList;