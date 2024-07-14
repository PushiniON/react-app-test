import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

function App() {
	return (
		<>
			<div>
				<a href='https://vitejs.dev' target='_blank'>
					<img src={viteLogo} className='logo' alt='Vite logo' />
				</a>
				<a href='https://react.dev' target='_blank'>
					<img src={reactLogo} className='logo react' alt='React logo' />
				</a>
				<a href='https://react.dev' target='_blank'>
					<img
						src='https://pbs.twimg.com/profile_images/1372304699601285121/5yBS6_3F_400x400.jpg'
						className='logo react'
						alt='GitHub logo'
					/>
				</a>
			</div>
			<h1>Vite + React - Github</h1>
		</>
	);
}

export default App;
