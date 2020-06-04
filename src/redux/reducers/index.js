import { combineReducers } from 'redux';
import { QUOTE_USD, QUOTE_EUR, QUOTE_BRL} from '../types/index'

const stateInitial = {
    dataUsd: {},
    dataEur: {},
    dataBrl: {},
}

function centerReducer (state = stateInitial, action) {
    switch (action.type) {
        case QUOTE_USD:
            return {...state, dataUsd: action.payload}
        case QUOTE_EUR:
            return {...state, dataEur: action.payload}
        case QUOTE_BRL:
            return {...state, dataBrl: action.payload}
        default:
            return {...state}
    }
}

export default combineReducers({
    centerReducer,
})