import { KaliteObj, View } from '../types'

export const changeSearch = (payload: string) => {
  return {
    type: 'SEARCH',
    payload: payload

  }
}

export const setView = (payload: View) => {
  return {
    type: 'VIEW',
    payload
  }
}

export const setCategory = (payload: string) => {
  return {
    type: 'CATEGORY',
    payload
  }
}

export const setResults = (payload: KaliteObj[]) => {
  return {
    type: 'RESULTS',
    payload
  }
}
