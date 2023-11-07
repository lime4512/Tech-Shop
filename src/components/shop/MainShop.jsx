import './MainShop.css'
import Banner from './banner/Banner'
import Header from './header/Header'
import Product from './product/Product'

import data from './data/Data.js'
import MinBanner from './minBanner/MinBanner.jsx'
import Footer from './footer/Footer.jsx'

const MainShop = () => {
	const { productHits, productTelephone, productLaptop } = data
	return (
		<div>
			<Header />
			<Banner />
			<Product product={productHits} totalTitle='Хиты продаж' />
			<Product product={productTelephone} totalTitle='Смартфоны' />
			<MinBanner />
			<Product product={productLaptop} totalTitle='Ноутбуки' />
			<Footer />
		</div>
	)
}
export default MainShop
