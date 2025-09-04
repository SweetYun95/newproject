import { Provider } from 'react-redux'
import { store } from './app/store'
import AppRouter from './routes/AppRouter'
import './styles/main.scss'

function App() {
   return (
      <Provider store={store}>
         <AppRouter />
      </Provider>
   )
}
