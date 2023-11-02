import img1 from './1_685541.jpg'
import img2 from './1_686067.jpg'
import img3 from './1_68840.jpg'
import imgT from './1_690235.jpg'
import Slider from './Slider'

import './Banner.css'
const Banner = () => {
	return (
		<div className='banner'>
			<div className='banner-content'>
				<div className='img-slider'>
					<Slider>
						<img src={img1} alt='' className='img' />
						<img src={img2} alt='' className='img' />
						<img src={img3} alt='' className='img' />
					</Slider>
				</div>
				<div className='img-static'>
					<img src={imgT} alt='' className='img-2' />
				</div>
			</div>
		</div>
	)
}

export default Banner
