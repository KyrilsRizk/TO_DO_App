import { createContext, useEffect, useState } from 'react'
import { Todo } from '../lib/types'
import { useKindeAuth } from '@kinde-oss/kinde-auth-react'

export const TodosContext = createContext<TTodoContext | null>(null)

type TextProvideProps = {
	children: React.ReactNode
}
type TTodoContext = {
	todos: Todo[]
	handleAddTodo: (todoText: string) => void
	handleDeleteTodo: (id: number) => void
	handleToggleTodo: (todo: number) => void
	totalOfTodoNumber: number
	numberOfCompleteTodo: number
}

const getTodos = () => {
	const savedTodos = localStorage.getItem('todos')
	if (savedTodos) {
		return JSON.parse(savedTodos)
	} else {
		return []
	}
}

function TodoContextProvider({ children }: TextProvideProps) {
	// state
	const [todos, setTodos] = useState<Todo[]>(getTodos)
	const { isAuthenticated } = useKindeAuth()
	// derived state
	const totalOfTodoNumber = todos.length
	const numberOfCompleteTodo = todos.filter((t) => !t.isComplete).length
	// enents handlers / actions
	const handleAddTodo = (todoText: string) => {
		if (todoText === '') {
			alert('Please enter task')
			return
		} else if (todos.length >= 3 && !isAuthenticated) {
			alert('Log in first to add more todos')
			return
		} else {
			setTodos((prev) => [
				...prev,
				{
					id: prev.length + 1,
					text: todoText,
					isComplete: false,
				},
			])
		}
	}
	const handleToggleTodo = (todo: number) => {
		setTodos(
			todos.map((t) => {
				if (t.id === todo) {
					return { ...t, isComplete: !t.isComplete }
				}
				return t
			})
		)
	}
	const handleDeleteTodo = (id: number) => {
		setTodos((prev) => prev.filter((todos) => todos.id !== id))
	}

	useEffect(() => {
		localStorage.setItem('todos', JSON.stringify(todos))
	}, [todos])

	return (
		<TodosContext.Provider
			value={{
				todos,
				handleAddTodo,
				handleDeleteTodo,
				handleToggleTodo,
				totalOfTodoNumber,
				numberOfCompleteTodo,
			}}
		>
			{children}
		</TodosContext.Provider>
	)
}
export default TodoContextProvider
