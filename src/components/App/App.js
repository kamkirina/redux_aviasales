import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Alert } from 'antd'

import TicketsFilters from '../TiketsFilters'
import TicketsList from '../TicketsList'
import logo from '../../images/Logo.svg'
import { offLineStatusAction, onLineStatusAction } from '../../store'

import cl from './App.module.scss'

const App = () => {
  const { onLineStatus } = useSelector((state) => state.app)
  const dispatch = useDispatch()

  useEffect(() => {
    const onLineStatus = () => {
      navigator.onLine ? dispatch(onLineStatusAction()) : dispatch(offLineStatusAction())
    }

    window.addEventListener('online', onLineStatus)
    window.addEventListener('offline', onLineStatus)

    return () => {
      window.removeEventListener('online', onLineStatus)
      window.removeEventListener('offline', onLineStatus)
    }
  }, [onLineStatus])

  return (
    <div className={cl.app}>
      {!onLineStatus ? (
        <Alert
          className={cl.error}
          message="Внимание, ошибка соединения!"
          description="- проверьте интернет соединение или перезагрузите страницу."
          type="error"
          closable
        />
      ) : null}
      <div className={cl['app-img']}>
        <img className={cl.logo} alt="logo-plane" src={logo} />
      </div>
      <div className={cl['app-list']}>
        <TicketsFilters />
        <TicketsList />
      </div>
    </div>
  )
}

export default App
