import { Provider } from 'react-redux'
import './App.css'
import ReduxApp from './with-redux/ReduxApp'
import store from './with-redux/store'

function App() {
  return (
    <Provider store={store}>
      <div className='App'>
        <h1>Carrito de Compras</h1>
        <ReduxApp />
      </div>
    </Provider>
  )
}

export default App
