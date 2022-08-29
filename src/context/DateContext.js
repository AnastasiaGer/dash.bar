import { createContext } from 'react'
import Moment from 'moment';

export const DateContext = createContext()
export const DateConsumer = DateContext.Consumer;
export const DateContextProvider = ({children}) => {
  const formatDate = Moment().format("Do MMM YYYY");
  const formatTime = Moment().format('hh:mm A');
  
console.log(formatTime)
  return (
    <DateContext.Provider value={{ formatDate, formatTime }}>
      { children }
    </DateContext.Provider>
  )
}