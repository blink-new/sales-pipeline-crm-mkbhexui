import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { MainLayout } from './components/layout/MainLayout'
import { Dashboard } from './pages/Dashboard'
import { Contacts } from './pages/Contacts'
import { Deals } from './pages/Deals'

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="contacts" element={<Contacts />} />
          <Route path="deals" element={<Deals />} />
          <Route path="calendar" element={<div className="text-white">Calendar (Coming Soon)</div>} />
          <Route path="settings" element={<div className="text-white">Settings (Coming Soon)</div>} />
        </Route>
      </Routes>
    </Router>
  )
}