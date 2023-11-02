import { createContext, useEffect, useState } from 'react'
export const CustomContext = createContext()
export const Context = props => {
	const [user, setUser] = useState({
		email: '',
	})

	useEffect(() => {
		if (localStorage.getItem('user') != null) {
			setUser(JSON.parse(localStorage.getItem('user')))
		}
	}, [])

	const [cart, setCart] = useState([])

	const addCart = product => {
		setCart(item => [...item, product])
	}

	const delCart = (id) =>{
		setCart(item => item.filter(item=>item.id !== id))
	}

	const value = {
		user,
		setUser,
		addCart,
		cart,
		delCart,
	}
	return (
		<CustomContext.Provider value={value}>
			{props.children}
		</CustomContext.Provider>
	)
}
