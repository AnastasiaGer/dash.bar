import { createContext, useEffect, useState } from 'react'
import Moment from 'moment';

export const DateContext = createContext()
export const DateConsumer = DateContext.Consumer;
export const DateContextProvider = ({children}) => {
  const formatDate = Moment().format("Do MMM YYYY");

  const [time, setTime] = useState('')
  
  useEffect(() => {
    setInterval(() => setTime(Moment().format('hh:mm A')), 1000);
  }, []);

  return (
    <DateContext.Provider value={{ formatDate, time }}>
      { children }
    </DateContext.Provider>
  )
}