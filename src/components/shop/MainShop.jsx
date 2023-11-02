import './MainShop.css'
import Banner from './banner/Banner'
import Header from './header/Header'
import Product from './product/Product'

import data from './data/Data.js'

const MainShop = () => {
	const { productHits, productTelephone } = data
	return (
		<div>
			<Header />
			<Banner />
			<Product product={productHits} totalTitle='Хиты продаж' />
			<Product product={productTelephone} totalTitle='Смартфоны' />
		</div>
	)
}
export default MainShop
