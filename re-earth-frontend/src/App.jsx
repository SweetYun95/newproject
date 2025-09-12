import { Provider } from 'react-redux'
import { store } from './app/store'
import AppRouter from './routes/AppRouter'
import './index.css'

function App() {
   return (
      <Provider store={store}>
         <AppRouter />
      </Provider>
   )
}

export default App
