import './App.css';
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import Cozinha from './Components/Cozinha';
import { Routes, Route, BrowserRouter } from 'react-router-dom';

function App() {
	return (
		<BrowserRouter>
			<Navbar />
			<Routes>
				<Route path='/' element={<Hero />} />
				<Route path='/cozinha' element={<Cozinha />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
