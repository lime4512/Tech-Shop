import { createContext, useEffect, useState } from 'react'
export const CustomContext = createContext()
export const Context = props => {
	const [user, setUser] = useState({
		email: '',
	})

	const [cart, setCart] = useState([])

	
	const addCart = product => {
		console.log(typeof product)
		setCart(item => [...item, product])
	}

	const delCart = id => {
		setCart(item => item.filter(item => item.cartId !== id))
	}

	const value = {
		user,
		setUser,
		addCart,
		cart,
		delCart,
	}

	useEffect(() => {
		if (localStorage.getItem('user') != null) {
			setUser(JSON.parse(localStorage.getItem('user')))
		}
	}, [])

	useEffect(() => {
		if (localStorage.getItem('cart') != null) {
			setCart(JSON.parse(localStorage.getItem('cart')))
		}
	}, [])

	useEffect(() => {
		localStorage.setItem('cart', JSON.stringify(cart))
	}, [cart])
	return (
		<CustomContext.Provider value={value}>
			{props.children}
		</CustomContext.Provider>
	)
}
