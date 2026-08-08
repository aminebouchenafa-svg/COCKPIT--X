import { Route, Routes } from 'react-router-dom'
import BottomNav from './components/BottomNav'
import Home from './pages/Home'
import Calculators from './pages/Calculators'
import Knowledge from './pages/Knowledge'
import PressureAltitude from './pages/calculators/PressureAltitude'
import DensityAltitude from './pages/calculators/DensityAltitude'
import CloudBase from './pages/calculators/CloudBase'
import WindTriangle from './pages/calculators/WindTriangle'
import RunwayWind from './pages/calculators/RunwayWind'
import FogTypes from './pages/knowledge/FogTypes'
import VxVy from './pages/knowledge/VxVy'
import AtcLightSignals from './pages/knowledge/AtcLightSignals'
import Stalls from './pages/knowledge/Stalls'
import Hypoxia from './pages/knowledge/Hypoxia'
import MaydayPanPan from './pages/knowledge/MaydayPanPan'
import TransitionAltitudeLevel from './pages/knowledge/TransitionAltitudeLevel'

function App() {
  return (
    <div className="app-shell">
      <div className="app-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/calculateurs" element={<Calculators />} />
          <Route path="/calculateurs/altitude-pression" element={<PressureAltitude />} />
          <Route path="/calculateurs/altitude-densite" element={<DensityAltitude />} />
          <Route path="/calculateurs/plafond-nuageux" element={<CloudBase />} />
          <Route path="/calculateurs/triangle-vent" element={<WindTriangle />} />
          <Route path="/calculateurs/vent-piste" element={<RunwayWind />} />
          <Route path="/connaissances" element={<Knowledge />} />
          <Route path="/connaissances/types-brouillard" element={<FogTypes />} />
          <Route path="/connaissances/vx-vy" element={<VxVy />} />
          <Route path="/connaissances/signaux-lumineux-atc" element={<AtcLightSignals />} />
          <Route path="/connaissances/decrochages" element={<Stalls />} />
          <Route path="/connaissances/hypoxie" element={<Hypoxia />} />
          <Route path="/connaissances/mayday-pan-pan" element={<MaydayPanPan />} />
          <Route
            path="/connaissances/altitude-niveau-transition"
            element={<TransitionAltitudeLevel />}
          />
        </Routes>
      </div>
      <BottomNav />
    </div>
  )
}

export default App
