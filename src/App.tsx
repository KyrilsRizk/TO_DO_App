import BackgroundHeading from './components/BackgroundHeading'
import Footer from './components/Footer'
import Header from './components/Header'
import SideBar from './components/SideBar'
import TodoList from './components/TodoList'

function App() {
	return (
		<div className=' flex flex-col justify-center items-center font-sans bg-[#f1d4b3] min-h-screen'>
			<BackgroundHeading />

			<main className='relative grid grid-cols-[7fr_4fr] grid-rows-[59px_1fr] w-[972px] h-[636px] bg-white rounded-md shadow-sm overflow-hidden border-b-2 border-black/5'>
				<Header />

				<TodoList />

				<SideBar />
			</main>

			<Footer />
		</div>
	)
}

export default App
