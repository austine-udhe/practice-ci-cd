import { useContext } from 'react'
import { MainContextProvider } from '../context/MainContext'

export const useMainContext = () => useContext(MainContextProvider)
