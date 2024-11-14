type DeleteButtonProps = {
	id: number
	handleDeleteTodo: (id: number) => void
}

function DeleteButton({ handleDeleteTodo, id }: DeleteButtonProps) {
	return (
		<button
			onClick={(e) => {
				e.stopPropagation()
				handleDeleteTodo(id)
			}}
			className='p-1.5 rounded-full hover:bg-red-200 select-none'
		>
			❌
		</button>
	)
}

export default DeleteButton
