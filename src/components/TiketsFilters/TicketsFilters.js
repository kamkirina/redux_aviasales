import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Checkbox } from 'antd'

import { checkAllAction, checkOneAction, checkThreeAction, checkTwoAction, checkWithoutAction } from '../../store'

import cl from './TiketsFilters.module.scss'

const TicketsFilters = () => {
  const dispatch = useDispatch()
  const { allCheck, withoutCheck, oneCheck, twoCheck, threeCheck } = useSelector((state) => state.ticketsFilters)

  const checkAll = (e) => {
    dispatch(checkAllAction(e))
  }

  const checkWithout = (e) => {
    dispatch(checkWithoutAction(e))
  }

  const checkOne = (e) => {
    dispatch(checkOneAction(e))
  }

  const checkTwo = (e) => {
    dispatch(checkTwoAction(e))
  }

  const checkThree = (e) => {
    dispatch(checkThreeAction(e))
  }

  return (
    <div className={cl['tickets-filters']}>
      <span className={cl.span}>КОЛИЧЕСТВО ПЕРЕСАДОК</span>
      <Checkbox className={cl.checkbox} checked={allCheck} onClick={checkAll}>
        Все
      </Checkbox>
      <Checkbox className={cl.checkbox} checked={withoutCheck} onClick={checkWithout}>
        Без пересадок
      </Checkbox>
      <Checkbox className={cl.checkbox} checked={oneCheck} onClick={checkOne}>
        1 пересадка
      </Checkbox>
      <Checkbox className={cl.checkbox} checked={twoCheck} onClick={checkTwo}>
        2 пересадки
      </Checkbox>
      <Checkbox className={cl.checkbox} checked={threeCheck} onClick={checkThree}>
        3 пересадки
      </Checkbox>
    </div>
  )
}

export default TicketsFilters
