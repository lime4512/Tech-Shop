import './Product.css'
import ItemList from './items/ItemList'

const Product = props => {
	return (
		<div className='main-container'>
			<ItemList
				product={props.product}
				
			/>
		</div>
	)
}

export default Product
