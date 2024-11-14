import Counter from './Counter'
import Logo from './Logo'

function Header() {
	return (
		<header className='flex  justify-between px-6 items-center col-[1/3] row-[1/2] bg-[#fbf5ed] select-none'>
			<Logo />
			<Counter />
		</header>
	)
}

export default Header
