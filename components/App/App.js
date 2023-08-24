"use client"

import Skeleton from '../Skeleton/Skeleton'
import { Provider } from 'react-redux'
import Store from '@/Store/Store'

const App = ({children}) => {
  return (
      <Provider store={Store}>
          <Skeleton>
            {children}
          </Skeleton>
      </Provider>
  )
}

export default App