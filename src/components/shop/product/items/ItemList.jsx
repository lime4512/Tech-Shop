import './ItemList.css'
import Item from './Item'

const ItemList = props => {
	return (
		<div className='item-list-content'>
			<h3 className='IL-title'>Хиты продаж</h3>

			<ul className='items-list'>
				{props.product.map(itemData => (
					<Item
						itemData={itemData}
						key={itemData.id}
						
					/>
				))}
			</ul>
		</div>
	)
}
export default ItemList
