import { useTodoContext } from '../lib/hooks'
import DeleteButton from './DeleteButton'

function TodoList() {
	const { todos, handleToggleTodo, handleDeleteTodo } = useTodoContext()
	return (
		<ul>
			{todos.length === 0 && (
				<li className='flex h-full  justify-center items-center text-2xl font-semibold select-none'>
					Start by adding todos <span className='text-4xl'>🧐‼️</span>
				</li>
			)}
			{todos.map((todo) => (
				<li
					key={todo.id}
					className='flex justify-between items-center text-xl px-4 py-3 border border-black/10  hover:bg-gray-100 cursor-pointer '
					onClick={() => handleToggleTodo(todo.id)}
				>
					<span
						className={` ${
							todo.isComplete ? 'line-through text-[#ccc]' : ''
						} select-none`}
					>
						{todo.text}
					</span>{' '}
					<DeleteButton
						handleDeleteTodo={handleDeleteTodo}
						id={todo.id}
					/>
				</li>
			))}
		</ul>
	)
}

export default TodoList
