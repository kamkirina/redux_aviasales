import {
  CHECK_ALL,
  NO_CHECK_ALL,
  CHECK_WITHOUT,
  NO_CHECK_WITHOUT,
  CHECK_ONE,
  NO_CHECK_ONE,
  CHECK_TWO,
  NO_CHECK_TWO,
  CHECK_THREE,
  NO_CHECK_THREE,
  GET_TICKETS,
  GET_SEARCH_ID,
  ON_ERROR,
  ON_ALERT,
  SORT_CHEAP,
  SORT_FAST,
  ONLINE,
  OFFLINE,
} from './types'

export const checkAllAction = (e) => {
  if (e.target.checked) return { type: CHECK_ALL }
  if (!e.target.checked) return { type: NO_CHECK_ALL }
}
export const checkWithoutAction = (e) => {
  if (e.target.checked) return { type: CHECK_WITHOUT }
  if (!e.target.checked) return { type: NO_CHECK_WITHOUT }
}
export const checkOneAction = (e) => {
  if (e.target.checked) return { type: CHECK_ONE }
  if (!e.target.checked) return { type: NO_CHECK_ONE }
}
export const checkTwoAction = (e) => {
  if (e.target.checked) return { type: CHECK_TWO }
  if (!e.target.checked) return { type: NO_CHECK_TWO }
}
export const checkThreeAction = (e) => {
  if (e.target.checked) return { type: CHECK_THREE }
  if (!e.target.checked) return { type: NO_CHECK_THREE }
}

export const getSearchIdAction = (payload) => ({ type: GET_SEARCH_ID, payload })
export const getTicketsAction = (payload) => ({ type: GET_TICKETS, payload })
export const onErrorAction = () => ({ type: ON_ERROR })
export const sortCheapAction = () => ({ type: SORT_CHEAP })
export const sortFastAction = () => ({ type: SORT_FAST })
export const onAlertAction = () => ({ type: ON_ALERT })

export const onLineStatusAction = () => ({ type: ONLINE })
export const offLineStatusAction = () => ({ type: OFFLINE })
