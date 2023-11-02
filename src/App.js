import Login from './components/login/Login'
import Reg from './components/reg/Reg'
import { Routes, Route } from 'react-router-dom'
import MainShop from './components/shop/MainShop'
import './index.css'
import Cart from './components/shop/cart/Cart'


function App() {

	return (
		<div className='App'>
			<div className='container'>
				<Routes>
					<Route path='/' element={<MainShop />} />
					<Route path='/login' element={<Login />} />
					<Route path='/registration' element={<Reg />} />
					<Route path='/cart' element={<Cart />} />
				</Routes>
			</div>
		</div>
	)
}

export default App
