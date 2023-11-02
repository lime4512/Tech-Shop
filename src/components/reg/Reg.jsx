import axios from 'axios'
import './Reg.css'
import { useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import { CustomContext } from '../../utils/Context'

const Reg = () => {
	const navigate = useNavigate()

	const { user, setUser } = useContext(CustomContext)

	const createUser = e => {
		e.preventDefault()

		let newUser = {
			email: e.target[0].value,
			name: e.target[1].value,
			password: e.target[2].value,
		}

		axios
			.post('http://localhost:3004/register', newUser)
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
		<div className='registration'>
			<div className='reg-container'>
				<form action='' onSubmit={createUser}>
					<h2 className='reg-title'>Регистрация</h2>
					<input type='text' className='reg-inp' placeholder='Почта' />
					<input
						type='text'
						className='reg-inp'
						placeholder='Имя пользователя'
					/>
					<input type='password' className='reg-inp' placeholder='Пароль' />
					<button className='reg-btn'>Зарегистрироваться</button>
					<a href='/' className='auth-link'>
						Магазин
					</a>
					<span> / </span>
					<a href='/Login' className='auth-link'>
						Вход
					</a>
				</form>
			</div>
		</div>
	)
}
export default Reg
