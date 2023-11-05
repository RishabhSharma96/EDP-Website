import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import AnalyticsPage from './components/AnalyticsPage';
import DataPage from './components/DataPage';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<AnalyticsPage />} />
          <Route path="/phsensordata" element={<DataPage pagename={"Ph Sensor Analytics"} value={"5.49"} />} />
              <Route path="/watersensordata" element={<DataPage pagename={"Water Level Sensor Analytics"} value={"20mm"} />} />
              <Route path="/Conductivitysensordata" element={<DataPage pagename={"Conductivity Sensor Analytics"} value={"0.28 mS/cm"} />} />
              <Route path="/Temperaturesensordata" element={<DataPage pagename={"Temperature Sensor Analytics"} value={"22°C"} />} />
              <Route path="/Lightsensordata" element={<DataPage pagename={"Light Sensor Analytics"} value={"ON"} />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
