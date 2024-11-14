import Button from './Button'
import { useTodoContext } from '../lib/hooks'
import { useState } from 'react'

function AddTodoForm() {
	const { handleAddTodo } = useTodoContext()
	const [todoText, setTodoText] = useState('')

	const handleOnSubmit = (e: any) => {
		e.preventDefault()
		handleAddTodo(todoText)
		setTodoText('')
	}
	return (
		<div>
			<form onSubmit={handleOnSubmit}>
				<h2 className='font-medium text-[#231d15] my-2 select-none '>
					Add todo
				</h2>
				<input
					className='h-11 border border-black/5 rounded-sm p-3 mb-3 text-lg block  w-full'
					type='text'
					value={todoText}
					onChange={(e) => {
						setTodoText(e.target.value)
					}}
				/>
				<Button>add todo list</Button>
			</form>
		</div>
	)
}

export default AddTodoForm
