/* eslint-disable indent */

import { GET_SEARCH_ID, GET_TICKETS, SORT_CHEAP, SORT_FAST, ON_ERROR, ON_ALERT } from './types'

const defaultState = {
  ticketsData: [],
  searchId: null,
  stopSearch: false,
  sortCheap: false,
  sortFast: false,
  onError: false,
  onAlert: false,
}

export const ticketsListReducer = (state = defaultState, action) => {
  switch (action.type) {
    case GET_TICKETS:
      return {
        ...state,
        stopSearch: action.payload.stop,
        ticketsData: [...action.payload.tickets, ...state.ticketsData],
      }

    case GET_SEARCH_ID:
      return { ...state, searchId: action.payload.searchId }

    case ON_ERROR:
      if (state.stopSearch) {
        return { ...state, onError: true }
      } else {
        return {
          ...state,
        }
      }

    case SORT_CHEAP:
      return { ...state, sortCheap: true, sortFast: false }

    case SORT_FAST:
      return { ...state, sortFast: true, sortCheap: false }

    case ON_ALERT:
      return { ...state, onAlert: true }

    default:
      return state
  }
}
