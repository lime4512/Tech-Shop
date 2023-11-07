import { useContext, useState } from 'react'
import './Item.css'
import { CustomContext } from '../../../../utils/Context'

const Item = props => {
	const { addCart } = useContext(CustomContext)
	const [CartOpen, setCartOpen] = useState(false)

	const [obj, setObj] = useState(props.itemData)
	const cartOpenHandler = () => {
		setObj((obj['cartId'] = Math.random().toString()))
		addCart(obj)
		setCartOpen(true)
	}
	return (
		<li className='item-li'>
			<div className='item'>
				<img src={'./' + props.itemData.img} alt='' className='img-item' />
				<div className='name-item'>
					<h4 className='title-item'>{props.itemData.title}</h4>
					<p className='subtitle-item'>{props.itemData.subTitle}</p>
					<div className='price-item'>
						<div className='price'>
							<p className='total-price-item'>{props.itemData.price}₽</p>
							<p className='cross-price-item'>{props.itemData.crossPrice}₽</p>
						</div>
						{!CartOpen ? (
							<div type='button' onClick={cartOpenHandler}>
								<span className='material-icons card'>shopping_cart</span>
							</div>
						) : (
							<div></div>
						)}
					</div>
				</div>
			</div>
		</li>
	)
}
export default Item
