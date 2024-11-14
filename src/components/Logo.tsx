import logo from '../images/logo.svg'
import stars from '../images/stars.svg'

function Logo() {
	return (
		<div className='flex flex-row'>
			<img
				className='w-10'
				src={logo}
				alt='the-logo'
			/>
			<img
				className='w-10'
				src={stars}
				alt='stars'
			/>
			<img
				className='w-10'
				src={stars}
				alt='stars'
			/>
		</div>
	)
}

export default Logo
