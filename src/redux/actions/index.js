import { QUOTE_USD, QUOTE_EUR, QUOTE_BRL} from '../types/index'

export const quoteUsd = (data) => {
    return {
        type: QUOTE_USD,
        payload: data
    }
}

export const quoteEur = (data) => {
    return {
        type: QUOTE_EUR,
        payload: data
    }
}

export const quoteBrl = (data) => {
    return {
        type: QUOTE_BRL,
        payload: data
    }
}