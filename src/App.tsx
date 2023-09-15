import './App.scss'
import Header from './components/Header/Header'
import Main from './components/Main/Main'
import SideBar from './components/SideBar/SideBar'

function App() {
	return (
		<>
			<Header />

			<div className='flex gap-[100px]'>
				<SideBar />
				<Main />
			</div>
		</>
	)
}

export default App
