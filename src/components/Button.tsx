type ButtonProps = {
	onClick?: () => Promise<void>
	buttonType?: 'primary' | 'secondary'
	children: React.ReactNode
}

function Button({ onClick, buttonType, children }: ButtonProps) {
	return (
		<button
			onClick={onClick}
			className={`w-full h-11 text-white text-lg rounded-md cursor-pointer bg-[#473a2b] hover:bg-[#322618] ${
				buttonType === 'secondary' ? 'opacity-[80%]' : ''
			} `}
		>
			{children}
		</button>
	)
}

export default Button
