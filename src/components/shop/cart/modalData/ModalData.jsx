import imgClose from './icon-close.svg'
import './ModalData.css'

const ModalData = props => {
	return (
		<>
			{props.IsOpen && (
				<div className='modal-date'>
					<div className='modal-wrapper'>
						<div className='modal-content'>
							<button
								className='modal-close-button'
								onClick={() => props.IsClose()}
							>
								<img src={imgClose} alt='' className='modal-close-img' />
							</button>
						</div>
					</div>
				</div>
			)}
		</>
	)
}
export default ModalData
