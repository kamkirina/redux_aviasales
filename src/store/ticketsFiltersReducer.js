/* eslint-disable indent */

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
} from './types'

const defaultState = {
  allCheck: true,
  withoutCheck: true,
  oneCheck: true,
  twoCheck: true,
  threeCheck: true,
}

export const ticketsFiltersReducer = (state = defaultState, action) => {
  switch (action.type) {
    case CHECK_ALL:
      return {
        allCheck: true,
        withoutCheck: true,
        oneCheck: true,
        twoCheck: true,
        threeCheck: true,
      }

    case NO_CHECK_ALL:
      return {
        allCheck: false,
        withoutCheck: false,
        oneCheck: false,
        twoCheck: false,
        threeCheck: false,
      }

    case CHECK_WITHOUT:
      if (state.oneCheck && state.twoCheck && state.threeCheck && !state.allCheck) {
        return {
          ...state,
          allCheck: true,
          withoutCheck: true,
        }
      } else {
        return {
          ...state,
          withoutCheck: true,
        }
      }

    case NO_CHECK_WITHOUT:
      if (state.allCheck) {
        return {
          ...state,
          allCheck: false,
          withoutCheck: false,
        }
      } else {
        return {
          ...state,
          withoutCheck: false,
        }
      }

    case CHECK_ONE:
      if (state.withoutCheck && state.twoCheck && state.threeCheck && !state.allCheck) {
        return {
          ...state,
          allCheck: true,
          oneCheck: true,
        }
      } else {
        return {
          ...state,
          oneCheck: true,
        }
      }

    case NO_CHECK_ONE:
      if (state.allCheck) {
        return {
          ...state,
          allCheck: false,
          oneCheck: false,
        }
      } else {
        return {
          ...state,
          oneCheck: false,
        }
      }

    case CHECK_TWO:
      if (state.withoutCheck && state.oneCheck && state.threeCheck && !state.allCheck) {
        return {
          ...state,
          allCheck: true,
          twoCheck: true,
        }
      } else {
        return {
          ...state,
          twoCheck: true,
        }
      }

    case NO_CHECK_TWO:
      if (state.allCheck) {
        return {
          ...state,
          allCheck: false,
          twoCheck: false,
        }
      } else {
        return {
          ...state,
          twoCheck: false,
        }
      }

    case CHECK_THREE:
      if (state.withoutCheck && state.twoCheck && state.oneCheck && !state.allCheck) {
        return {
          ...state,
          allCheck: true,
          threeCheck: true,
        }
      } else {
        return {
          ...state,
          threeCheck: true,
        }
      }

    case NO_CHECK_THREE:
      if (state.allCheck) {
        return {
          ...state,
          allCheck: false,
          threeCheck: false,
        }
      } else {
        return {
          ...state,
          threeCheck: false,
        }
      }

    default:
      return state
  }
}
