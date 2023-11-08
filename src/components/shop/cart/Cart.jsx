import Header from '../header/Header'
import './Cart.css'
import { CustomContext } from '../../../utils/Context'
import { useContext, useEffect, useState } from 'react'
import img from './392517_close_delete_remove_icon 1.png'

const Cart = () => {
	const { cart, delCart } = useContext(CustomContext)
	const [message, setMessage] = useState('')

	const sendingCartHandler = () => {
		setMessage(
			`Список заказанных устройств: \n${cart
				.map(
					item => `${item.title} - \nцена ${item.price.split('.').join('')}, \n`
				)
				.join('')}\n Общая цена заказа ${cart.reduce(
				(acc, rec) => acc + Number(rec.price.split('.').join('')),
				0
			)}`
		)
	}

	useEffect(() => {
		if (message !== '') {
			const TOTAL_URL =
				'https://api.telegram.org/bot6846422910:AAHv577QfNTnh48nAUNzJQXV4C4JUWBlujY/sendMessage'
			const sendingCart = async () => {
				const response = await fetch(TOTAL_URL, {
					method: 'POST',
					headers: {
						'Content-Type': 'application/json',
					},
					body: JSON.stringify({
						chat_id: '-1002124516519&text',
						text: message,
						parse_mode: 'html',
					}),
				})
				await response.json()
			}
			sendingCart()
		}
	}, [message])

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
							<li key={item.cartId} className='cart-item-list'>
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
									<div
										className='cart-remove'
										onClick={() => delCart(item.cartId)}
									>
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
						<span>
							{' '}
							{cart.reduce(
								(acc, rec) => acc + Number(rec.price.split('.').join('')),
								0
							)}
						</span>
					</h2>
					<button className='cart-btn' onClick={sendingCartHandler}>
						Оформление заказа
					</button>
				</div>
			</div>
		</div>
	)
}

export default Cart
