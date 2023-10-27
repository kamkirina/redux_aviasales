import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Alert, Button, FloatButton, Spin } from 'antd'
import classNames from 'classnames'

import Ticket from '../Ticket'
import AviaApiService from '../../service/AviaAPIService'
import { sortCheapAction, sortFastAction } from '../../store'
import {
  filtering,
  filteringOut,
  filteringSeveral,
  showAll,
  sortCheapest,
  sortFastest,
} from '../../utils/ticketsListUtil'

import cl from './TicketsList.module.scss'

const TicketsList = () => {
  const aviaApi = new AviaApiService()

  const dispatch = useDispatch()
  const { ticketsData, stopSearch, sortCheap, sortFast, searchId, onAlert } = useSelector((state) => state.ticketsList)
  const { allCheck, withoutCheck, oneCheck, twoCheck, threeCheck } = useSelector((state) => state.ticketsFilters)
  const { onLineStatus } = useSelector((state) => state.app)
  const [index, setIndex] = useState(0)

  useEffect(() => {
    dispatch(aviaApi.getSearchIdThunk(searchId, stopSearch, onLineStatus))
  }, [searchId])

  let partTicketsData = []
  let count = null
  let idx = []
  const arrFilter = [withoutCheck, oneCheck, twoCheck, threeCheck]

  arrFilter.forEach((item, index) => {
    if (item) count++, idx.push(index)
  })

  const arrNum = [0, 1, 2, 3]
  let idxOut = arrNum.filter((item) => !idx.includes(item))

  if (allCheck) partTicketsData = showAll(ticketsData, index)
  if (sortCheap) partTicketsData = sortCheapest(ticketsData, index)
  if (sortFast) partTicketsData = sortFastest(ticketsData, index)
  if (count === 1) partTicketsData = filtering(idx[0], ticketsData, index)
  if (count === 2) partTicketsData = filteringSeveral(idx[0], idx[1], ticketsData, index)
  if (count === 3) partTicketsData = filteringOut(idxOut[0], ticketsData, index)

  const sortingCheap = () => {
    dispatch(sortCheapAction())
  }

  const sortingFast = () => {
    dispatch(sortFastAction())
  }

  return (
    <div className={cl['tickets-list']}>
      <div className={cl['tickets-sort']}>
        {onAlert ? (
          <Alert
            className={cl.alert}
            message="Внимание, что-то пошло не так!"
            description="- перезагрузите страницу."
            type="error"
            closable
          />
        ) : null}
        <Button.Group>
          <Button
            disabled={!withoutCheck && !oneCheck && !twoCheck && !threeCheck ? true : false}
            type={sortCheap ? 'primary' : 'default'}
            style={{ width: 250, height: 50 }}
            onClick={sortingCheap}
          >
            САМЫЙ ДЕШЕВЫЙ
          </Button>
          <Button
            disabled={!withoutCheck && !oneCheck && !twoCheck && !threeCheck ? true : false}
            type={sortFast ? 'primary' : 'default'}
            style={{ width: 250, height: 50 }}
            onClick={sortingFast}
          >
            САМЫЙ БЫСТРЫЙ
          </Button>
        </Button.Group>
      </div>
      <Alert
        className={classNames(cl['tickets-alert'], {
          [cl.hidden]: withoutCheck || oneCheck || twoCheck || threeCheck,
        })}
        type="info"
        message="Рейсов, подходящих под заданные фильтры, не найдено"
      />
      <Spin spinning={!stopSearch} tip="Загрузка билетов">
        <div className={classNames(cl.spinner, { [cl.hidden]: stopSearch })}></div>
      </Spin>
      <div
        className={classNames(cl.tickets, {
          [cl.hidden]: !withoutCheck && !oneCheck && !twoCheck && !threeCheck,
        })}
      >
        {partTicketsData.map((item) => (
          <Ticket
            key={
              item.price +
              new Date(item.segments[1].date).getMilliseconds() -
              new Date(item.segments[0].date).getMilliseconds()
            }
            price={item.price}
            logo={item.carrier}
            code1={item.segments[0].origin}
            code2={item.segments[0].destination}
            date={new Date(item.segments[0].date)}
            time={item.segments[0].duration}
            transfer={item.segments[0].stops}
            quant={item.segments[0].stops.length}
            code1Back={item.segments[1].origin}
            code2Back={item.segments[1].destination}
            dateBack={new Date(item.segments[1].date)}
            timeBack={item.segments[1].duration}
            transferBack={item.segments[1].stops}
            quantBack={item.segments[1].stops.length}
          />
        ))}
      </div>
      <FloatButton.BackTop />
      <div className={cl['tickets-add']}>
        <Button
          style={{ width: 500, height: 50, backgroundColor: '#2196f3', color: 'white' }}
          onClick={() => setIndex((i) => i + 5)}
        >
          ПОКАЗАТЬ ЕЩЕ 5 БИЛЕТОВ!
        </Button>
      </div>
    </div>
  )
}

export default TicketsList
