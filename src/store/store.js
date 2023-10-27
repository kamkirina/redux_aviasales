import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

import { ticketsListReducer } from './ticketsListReducer'
import { ticketsFiltersReducer } from './ticketsFiltersReducer'
import { appReducer } from './appReducer'

const rootReducer = combineReducers({
  app: appReducer,
  ticketsFilters: ticketsFiltersReducer,
  ticketsList: ticketsListReducer,
})

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))
