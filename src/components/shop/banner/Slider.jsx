import './Slider.css'
import { useState, useEffect, Children, cloneElement } from 'react'

const PAGE_WIDTH = 986

const Slider = ({ children }) => {
	const [pages, setPages] = useState([])
	const [offset, setOffset] = useState(0)
	useEffect(() => {
		setPages(
			Children.map(children, child => {
				return cloneElement(child, {
					style: {
						height: '100%',
						minWidth: `${PAGE_WIDTH}px`,
						maxWidth: `${PAGE_WIDTH}px`,
					},
				})
			})
		)
	}, [])

	const handlerClickLeft = () => {
		setOffset(currentOffset => {
			const newOffset = currentOffset + PAGE_WIDTH
			console.log(newOffset)
			return Math.min(newOffset, 0)
		})
	}

	const handlerClickRight = () => {
		setOffset(currentOffset => {
			const newOffset = currentOffset - PAGE_WIDTH
			const maxOffset = -(PAGE_WIDTH * (pages.length - 1))
			console.log(newOffset)
			return Math.max(newOffset, maxOffset)
		})
	}
	return (
		<div className='main-container-slider'>
			<div onClick={handlerClickLeft} className='arrow'>
				<span className='material-icons l'>arrow_forward_ios</span>
			</div>
			<div className='window'>
				<div
					className='all-pages-container'
					style={{
						transform: `translateX(${offset}px)`,
					}}
				>
					{children}
				</div>
			</div>
			<div onClick={handlerClickRight} className='arrow'>
				<span className='material-icons'>arrow_forward_ios</span>
			</div>
		</div>
	)
}

export default Slider
