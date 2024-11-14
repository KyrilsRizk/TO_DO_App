import { useContext } from 'react'
import { TodosContext } from '../contexts/TodoContextProvider'

export function useTodoContext() {
	const context = useContext(TodosContext)
	if (!context) {
		throw new Error('the context is empty')
	}
	return context
}
