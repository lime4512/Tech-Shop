import { useState, useEffect } from 'react'

import imgClose from './icon-close.svg'
import './ModalData.css'
import Checkbox from '@mui/material/Checkbox'
import { deepPurple } from '@mui/material/colors'

const ModalData = props => {
	const [name, setName] = useState('')

	const nameHandler = event => {
		setName(event.target.value)
	}

	const [email, setEmail] = useState('')

	const emailHandler = event => {
		setEmail(event.target.value)
	}

	const [telephone, setTelephone] = useState('+7')

	const telephoneHandler = event => {
		setTelephone(event.target.value)
	}

	const [city, setCity] = useState('')

	const cityHandler = event => {
		setCity(event.target.value)
	}

	const [street, setStreet] = useState('')

	const streetHandler = event => {
		setStreet(event.target.value)
	}

	const [home, setHome] = useState('')

	const homeHandler = event => {
		setHome(event.target.value)
	}

	const [comment, setComment] = useState('-')

	const commentHandler = event => {
		setComment(event.target.value)
	}

	const [messageModal, setMessageModal] = useState('')

	const messageSendingHandler = () => {
		props.notification(true)
		const messagePersonalDate = `Имя заказчика: ${name} 
		Номер телефона: ${telephone}
		Почта: ${email} 
		Адрес доставки: ${city}, ${street}, ${home}
		Комментарий: ${comment}\n`
		const numberOrder = Math.floor(Math.random() * 10001)
		setMessageModal(
			`Уникальный номер заказа: ${numberOrder}\n${messagePersonalDate}\n${props.message}`
		)

		props.IsClose()
	}

	useEffect(() => {
		if (messageModal !== '') {
			const TOTAL_URL =
				'https://api.telegram.org/bot6846422910:AAHv577QfNTnh48nAUNzJQXV4C4JUWBlujY/sendMessage'
			const sendingCart = async () => {
				const response = await fetch(TOTAL_URL, {
					method: 'POST',
					headers: {
						'Content-Type': 'application/json',
					},
					body: JSON.stringify({
						chat_id: '-1002124516519&text',
						text: messageModal,
						parse_mode: 'html',
					}),
				})
				await response.json()
			}
			sendingCart()
		}
	}, [messageModal])

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
							<h1 className='modal-title'>Оформление заказа</h1>
							<div className='modal-contact-data'>
								<h3 className='modal-subtitle'>1. Контактные данные</h3>
								<input
									type='text'
									placeholder='Имя'
									className='modal-input'
									value={name}
									onChange={nameHandler}
								/>
								<input
									type='text'
									placeholder='Номер телефона'
									className='modal-input'
									value={telephone}
									onChange={telephoneHandler}
								/>
								<input
									type='text'
									placeholder='Почта'
									className='modal-input'
									value={email}
									onChange={emailHandler}
								/>
							</div>
							<div className='modal-delivery-data'>
								<h3 className='modal-subtitle'>2. Доставка</h3>
								<input
									type='text'
									placeholder='Город'
									className='modal-input'
									value={city}
									onChange={cityHandler}
								/>
								<input
									type='text'
									placeholder='Улица'
									className='modal-input'
									value={street}
									onChange={streetHandler}
								/>
								<input
									type='text'
									placeholder='Номер дома'
									className='modal-input'
									value={home}
									onChange={homeHandler}
								/>
							</div>
							<div className='modal-comment-data'>
								<h3 className='modal-subtitle'>3. Комментарий к доставке*</h3>
								<textarea
									type='text'
									placeholder='Комментарий'
									value={comment}
									onChange={commentHandler}
									className='modal-comment'
								/>
							</div>
							<div className='modal-treatment-data'>
								<p className='modal-subtitle'>
									Я согласен на обработку моих перс. данных
								</p>
								<Checkbox
									sx={{
										color: deepPurple[500],
										'&.Mui-checked': {
											color: deepPurple[600],
										},
									}}
								/>
							</div>
							{name && email && telephone && city && street && home && (
								<button onClick={messageSendingHandler} className='modal-btn'>
									Оформить заказ
								</button>
							)}
						</div>
					</div>
				</div>
			)}
		</>
	)
}
export default ModalData
