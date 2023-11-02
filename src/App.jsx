import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import AnalyticsPage from './components/AnalyticsPage'
import DataPage from './components/DataPage'
import Navbar from './components/Navbar'
import TopNavbar from './components/TopNavbar'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <div className=''>
            <TopNavbar />
            <div className='flex overflow-hidden'>
              <Navbar />
              <Route path="/" element={<AnalyticsPage />} />
              <Route path="/phsensordata" element={<DataPage pagename={"Ph Sensor Analytics"} value={"5.49"} />} />
              <Route path="/watersensordata" element={<DataPage pagename={"Water Level Sensor Analytics"} value={"20mm"} />} />
              <Route path="/Conductivitysensordata" element={<DataPage pagename={"Conductivity Sensor Analytics"} value={"0.28 mS/cm"} />} />
              <Route path="/Temperaturesensordata" element={<DataPage pagename={"Temperature Sensor Analytics"} value={"22°C"} />} />
              <Route path="/Lightsensordata" element={<DataPage pagename={"Light Sensor Analytics"} value={"ON"} />} />
            </div>
          </div >
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
