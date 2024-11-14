import { useKindeAuth } from '@kinde-oss/kinde-auth-react'
import AddTodoForm from './AddTodoForm'
import Button from './Button'

function SideBar() {
	const { login, register, isAuthenticated, isLoading, user, logout } =
		useKindeAuth()
	return (
		<section className='flex flex-col col-[2/3] row-[2/3] bg-[#fffcf9] border-l-2 border-black/5 px-6 pt-4 pb-6'>
			<AddTodoForm />

			<div className='mt-auto space-y-3'>
				{isLoading ? null : isAuthenticated ? (
					<>
						<p>Welcome {user?.email} </p>
						<Button onClick={logout}>log out</Button>
					</>
				) : (
					<>
						<Button
							onClick={login}
							buttonType='secondary'
						>
							Log in
						</Button>
						<Button
							onClick={register}
							buttonType='secondary'
						>
							Register
						</Button>
					</>
				)}
			</div>
		</section>
	)
}

export default SideBar
