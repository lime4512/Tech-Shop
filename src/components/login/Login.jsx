import './Login.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import { CustomContext } from '../../utils/Context'
const Login = () => {
	const navigate = useNavigate()

	const { user, setUser } = useContext(CustomContext)

	const loginUser = e => {
		e.preventDefault()

		let newUser = {
			email: e.target[0].value,
			password: e.target[1].value,
		}

		axios
			.post('http://localhost:3004/login', newUser)
			.then(({ data }) => {
				setUser({
					token: data.accessToken,
					...data.user,
				})

				localStorage.setItem(
					'user',
					JSON.stringify({
						token: data.accessToken,
						...data.user,
					})
				)

				navigate('/')
			})
			.catch(err => console.log(err.message))
	}
	return (
		<div className='authorization'>
			<div className='auth-container'>
				<form action='' onSubmit={loginUser}>
					<h2 className='auth-title'>Авторизация</h2>

					<input type='text' className='auth-inp' placeholder='Почта' />

					<input type='password' className='auth-inp' placeholder='Пароль' />
					<button className='auth-btn'>Авторизоваться</button>
					<a className='auth-link' href='/'>
						Магазин
					</a>
					<span> / </span>
					<a href='/registration' className='auth-link'>
						Регистрация
					</a>
				</form>
			</div>
		</div>
	)
}
export default Login
