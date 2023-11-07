import './MinBanner.css'
import img1 from './1_304882.jpg'
import img2 from './1_690814.jpg'
import img3 from './1_657766.jpg'

const MinBanner = () => {
	return (
		<div className='minBanner-container'>
			<div className='minBanner-total-img'>
				<img src={img1} alt='' className='minBanner-img img-large' />
			</div>
			<div className='minBanner-img-small'>
				<img src={img2} alt='' className='minBanner-img' />
				<img src={img3} alt='' className='minBanner-img' />
			</div>
		</div>
	)
}
export default MinBanner
