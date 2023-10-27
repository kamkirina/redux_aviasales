/* eslint-disable indent */

import { ONLINE, OFFLINE } from './types'

const defaultState = {
  onLineStatus: true,
}

export const appReducer = (state = defaultState, action) => {
  switch (action.type) {
    case ONLINE:
      return { ...state, onLineStatus: true }

    case OFFLINE:
      return { ...state, onLineStatus: false }

    default:
      return state
  }
}
