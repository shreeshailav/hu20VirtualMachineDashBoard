import { combineReducers } from 'redux'
import { connectRouter, RouterState } from 'connected-react-router'
import { History } from 'history'

import { all, fork } from 'redux-saga/effects'

import { VitualMachineState } from './virtualMachin/types'
import { virualMachineReducer } from './virtualMachin/reducer'
import virtualMachinSaga from './virtualMachin/sagas' 

// The top-level state object
export interface ApplicationState {
  virtualMachines: VitualMachineState
  router: RouterState
}
 
export const createRootReducer = (history: History) =>
  combineReducers({
    virtualMachines: virualMachineReducer,
    router: connectRouter(history)
  }) 

export function* rootSaga() {
  yield all([fork(virtualMachinSaga)])
}
