import './Footer.css'

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
				<a href=''>Гид-хаб</a>
				<a href=''>ВК</a>
			</div>
		</footer>
	)
}
export default Footer
