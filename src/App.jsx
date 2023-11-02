import './App.css'
import AnalyticsPage from './components/AnalyticsPage'
import DataPage from './components/DataPage'
import Navbar from './components/Navbar'
import TopNavbar from './components/TopNavbar'

function App() {

  const pathname = window.location.pathname

  return (
    <div className=''>
      <TopNavbar />
      <div className='flex overflow-hidden'>
        <Navbar />
        {pathname == '/' ? <AnalyticsPage /> :<></>}
        {pathname == '/phsensordata' ? <DataPage pagename={"Ph Sensor Analytics"} value={"5.49"}/> :<></>}
        {pathname == '/watersensordata' ? <DataPage pagename={"Water Level Sensor Analytics"} value={"20mm"}/> :<></>}
        {pathname == '/Conductivitysensordata' ? <DataPage pagename={"Conductivity Sensor Analytics"} value={"0.28 mS/cm"}/> :<></>}
        {pathname == '/Temperaturesensordata' ? <DataPage pagename={"Temperature Sensor Analytics"} value={"22°C"}/> :<></>}
        {pathname == '/Lightsensordata' ? <DataPage pagename={"Light Sensor Analytics"} value={"ON"}/> :<></>}
      </div>
    </div>
  )
}

export default App
