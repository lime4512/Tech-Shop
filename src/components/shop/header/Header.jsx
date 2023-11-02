import './Header.css'
import icons from './20544442431551942822 1.png'
import { useContext } from 'react'
import { CustomContext } from '../../../utils/Context'
import { useNavigate } from 'react-router-dom'
const Header = () => {
	const navigate = useNavigate()
	const { user, setUser } = useContext(CustomContext)
	console.log(user)
	const logOutUser = () => {
		setUser({
			email: '',
		})
		localStorage.removeItem('user')
	}
	return (
		<header>
			<div className='content'>
				<div className='logo'>
					<a className='logo-name' href='/'>
						<span>$</span>Shop
					</a>
				</div>
				<div className='nav'>
					{user.email.length ? (
						<div className='user-content'>
							<div className='user'>
								<div className='icon'>
									<img src={icons} alt='img error' />
								</div>
								<p className='user-name'>{user.name}</p>
							</div>
							<div className='nav-item'>
								<a href='/' className='exit' onClick={logOutUser}>
									Выход
								</a>
								<div
									className='material-icons card'
									onClick={() => {
										navigate('/cart')
									}}
								>
									<span href='/cart'>shopping_cart</span>
								</div>
							</div>
						</div>
					) : (
						<div>
							<div className='user-content'>
								<div className='user'>
									<div className='icon'>
										<span className='material-icons-user'>perm_identity</span>
									</div>
									<a className='user-name user-login' href='/login'>
										Вход
									</a>
								</div>
								<div className='nav-item'>
									<a href='/registration' className='exit'>
										Регистрация
									</a>
								</div>
							</div>
						</div>
					)}
				</div>
			</div>
		</header>
	)
}

export default Header
