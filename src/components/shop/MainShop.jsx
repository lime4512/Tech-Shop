import './MainShop.css'
import Banner from './banner/Banner'
import Header from './header/Header'
import Product from './product/Product'

import dataHits from './data/Data-hits.js'

const MainShop = () => {
	const { productHits } = dataHits
	return (
		<div>
			<Header />
			<Banner />
			<Product product={productHits} />
			<Product product={productHits} />
		</div>
	)
}
export default MainShop
