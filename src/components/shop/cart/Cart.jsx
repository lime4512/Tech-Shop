import Header from '../header/Header'
import './Cart.css'
import { CustomContext } from '../../../utils/Context'
import { useContext } from 'react'
import img from './392517_close_delete_remove_icon 1.png'
const Cart = () => {
	const { cart, delCart } = useContext(CustomContext)

	console.log(cart)
	return (
		<div className='cart'>
			<Header />
			<div className='cart-content'>
				<h1 className='cart-title-content'>Корзина:</h1>
				<ul className='cart-list'>
					{cart.length === 0 ? (
						<h1 className='cart-title-content'>В корзине пусто</h1>
					) : (
						cart.map(item => (
							<li key={item.id} className='cart-item-list'>
								<div className='cart-item-name'>
									<img
										src={'./' + item.img}
										alt=''
										className='img-cart-item'
										width='160'
										height='80'
									/>
									<div className='cart-title'>
										<h3 className='cart-title-name'> {item.title}</h3>
										<h3 className='cart-subTitle-name'>{item.subTitle}</h3>
									</div>
								</div>
								<div className='cart-item-remove-price'>
									<h3 className='cart-price'>{item.price}₽</h3>
									<div className='cart-remove' onClick={() => delCart(item.id)}>
										<img src={img} alt='' />
									</div>
								</div>
							</li>
						))
					)}
				</ul>
				<div className='cart-total'>
					<h2 className='cart-total-price'>
						Общая цена заказа:
						<span> {cart.reduce((acc, rec) => acc + rec.price, 0)}</span>
					</h2>
					<button className='cart-btn'>Оплата</button>
				</div>
			</div>
		</div>
	)
}

export default Cart
