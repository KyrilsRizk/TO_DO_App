import { useTodoContext } from '../lib/hooks'

function Counter() {
	const { numberOfCompleteTodo, totalOfTodoNumber } = useTodoContext()
	return (
		<div>
			<span className='font-bold'>{numberOfCompleteTodo}</span> /{' '}
			{totalOfTodoNumber} todos completed
		</div>
	)
}

export default Counter
