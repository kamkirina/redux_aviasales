import React from 'react'

import cl from './Ticket.module.scss'

const Ticket = ({
  price,
  logo,
  code1,
  code2,
  date,
  time,
  transfer,
  quant,
  code1Back,
  code2Back,
  dateBack,
  timeBack,
  transferBack,
  quantBack,
}) => {
  const logotip = `https://pics.avs.io/110/36/${logo}.png`

  let quant1 = false
  let quant2 = false
  let quant1Back = false
  let quant2Back = false

  if (quant === 1) quant1 = true
  if (quant > 1) quant2 = true
  if (quantBack === 1) quant1Back = true
  if (quantBack > 1) quant2Back = true

  const hours = Math.round(time / 60)
  const minutes = Math.round((time % 60) / 5) * 5
  const hoursBack = Math.round(timeBack / 60)
  const minutesBack = Math.round((timeBack % 60) / 5) * 5

  const hoursZero = [hours].map((item) => {
    return item < 10 ? '0' + item : item
  })

  const minutesZero = [minutes].map((item) => {
    return item < 10 ? '0' + item : item === 60 ? '00' : item
  })

  const hoursBackZero = [hoursBack].map((item) => {
    return item < 10 ? '0' + item : item
  })

  const minutesBackZero = [minutesBack].map((item) => {
    return item < 10 ? '0' + item : item === 60 ? '00' : item
  })

  const inWay = hoursZero + 'ч ' + minutesZero + 'м'
  const inWayBack = hoursBackZero + 'ч ' + minutesBackZero + 'м'

  const inDateStart = [date.getHours(), Math.round(date.getMinutes() / 5) * 5]
    .map((item) => {
      return item < 10 ? '0' + item : item === 60 ? '00' : item
    })
    .join(':')

  const inDateEnd = [
    date.getHours(date.setHours(date.getHours() + hours)),
    Math.round(date.getMinutes(date.setMinutes(date.getMinutes() + minutes)) / 5) * 5,
  ]
    .map((item) => {
      return item < 10 ? '0' + item : item === 60 ? '00' : item
    })
    .join(':')

  const inDateBackStart = [dateBack.getHours(), Math.round(dateBack.getMinutes() / 5) * 5]
    .map((item) => {
      return item < 10 ? '0' + item : item === 60 ? '00' : item
    })
    .join(':')

  const inDateBackEnd = [
    dateBack.getHours(dateBack.setHours(dateBack.getHours() + hoursBack)),
    Math.round(dateBack.getMinutes(dateBack.setMinutes(dateBack.getMinutes() + minutesBack)) / 5) * 5,
  ]
    .map((item) => {
      return item < 10 ? '0' + item : item === 60 ? '00' : item
    })
    .join(':')

  const inDate = inDateStart + ' - ' + inDateEnd
  const inDateBack = inDateBackStart + ' - ' + inDateBackEnd

  return (
    <ul className={cl.ticket}>
      <li className={cl['ticket-title']}>
        <span>{price} Р</span>
        <img src={logotip} />
      </li>
      <li className={cl['ticket-info']}>
        <div className={cl['ticket-info-title']}>
          <span>
            {code1} - {code2}
          </span>
          <span>В ПУТИ</span>

          <span>{quant1 ? `${quant} ПЕРЕСАДКА` : quant2 ? `${quant} ПЕРЕСАДКИ` : 'БЕЗ ПЕРЕСАДОК'}</span>
        </div>
        <div className={cl['ticket-info-values']}>
          <span>{inDate}</span>
          <span>{inWay}</span>
          <span>{transfer.join(', ')}</span>
        </div>
      </li>
      <li className={cl['ticket-info']}>
        <div className={cl['ticket-info-title']}>
          <span>
            {code1Back} - {code2Back}
          </span>
          <span>В ПУТИ</span>
          <span>{quant1Back ? `${quantBack} ПЕРЕСАДКА` : quant2Back ? `${quantBack} ПЕРЕСАДКИ` : 'БЕЗ ПЕРЕСАДОК'}</span>
        </div>
        <div className={cl['ticket-info-values']}>
          <span>{inDateBack}</span>
          <span>{inWayBack}</span>
          <span>{transferBack.join(', ')}</span>
        </div>
      </li>
    </ul>
  )
}

export default Ticket
