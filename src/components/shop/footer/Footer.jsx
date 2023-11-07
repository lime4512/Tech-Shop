import './Footer.css'
import imgGitHub from './icons8-github-48.png'
import imgVK from './icons8-vk-50.png'
import imgTelegram from './icons8-telegram-50.png'

const Footer = () => {
	return (
		<footer>
			<a className='logo-name-footer' href='/'>
				<span>$</span>Shop
			</a>

			<p className='footer-text'>
				Разработано <span>Александром Кругловым</span>
			</p>

			<div className='footer-nav'>
				<ul className='footer-nav-list'>
					<li>
						<a href='https://t.me/lime4512'>
							<img src={imgGitHub} alt='' />
						</a>
					</li>
					<li>
						<a href='https://vk.com/lime4512'>
							<img src={imgVK} alt='' />
						</a>
					</li>
					<li>
						<a href='https://github.com/lime4512'>
							<img src={imgTelegram} alt='' />
						</a>
					</li>
				</ul>
			</div>
		</footer>
	)
}
export default Footer
