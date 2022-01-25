import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import StateApp from '../usestate/StateApp'
import ReducerApp from '../usereducer/ReducerApp'
import ReduxApp from '../with-redux/ReduxApp'

const AppRoutes = () => (
  <>
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='use-state' element={<StateApp />} />
        <Route path='use-reducer' element={<ReducerApp />} />
        <Route path='redux' element={<ReduxApp />} />
      </Routes>
    </Router>
  </>
)

export default AppRoutes
