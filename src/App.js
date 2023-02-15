import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import EmotionPackage from './pages/EmotionPackage'
import MUI from './pages/MUI'
import ChartjsPackage from './pages/ChartjsPackage'
import Sweetalert2 from './pages/Sweetalert2'
import ReactToastify from './pages/ReactToastify'
import ReactDatepicker from './pages/ReactDatepicker'
import Moment from './pages/Moment'
import NotFound from './pages/NotFound'

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/emotion' element={<EmotionPackage />} />
        <Route path='/material-ui' element={<MUI />} />
        <Route path='/chart-js' element={<ChartjsPackage />} />
        <Route path='/Sweetalert2' element={<Sweetalert2 />} />
        <Route path='/react-toastify' element={<ReactToastify />} />
        <Route path='/moment' element={<Moment />} />
        <Route path='/react-datepicker' element={<ReactDatepicker />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </Router>
  )
}

export default App
// import Info from '../components/Info'

// <Info
// name=''
// npm=''
// doce=''
// />
