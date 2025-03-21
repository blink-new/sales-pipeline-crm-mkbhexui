import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Header } from './components/ui/header'
import { Sidebar } from './components/ui/sidebar'

// Pages
function Dashboard() {
  return (
    <div className="p-6">
      <h1 className="mb-6 text-2xl font-semibold text-white">Dashboard</h1>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
        {[
          { title: 'Total Deals', value: '$124,400' },
          { title: 'Open Deals', value: '24' },
          { title: 'Closed Deals', value: '12' },
          { title: 'Win Rate', value: '64%' },
        ].map((stat, i) => (
          <div
            key={i}
            className="rounded-xl bg-gray-900 p-6 shadow-sm ring-1 ring-gray-800"
          >
            <p className="text-sm font-medium text-gray-400">{stat.title}</p>
            <p className="mt-2 text-3xl font-semibold text-white">{stat.value}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

function App() {
  return (
    <Router>
      <div className="flex h-screen bg-gray-950 text-gray-100">
        <Sidebar />
        <div className="flex flex-1 flex-col overflow-hidden">
          <Header />
          <main className="flex-1 overflow-auto">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/pipeline" element={<div className="p-6">Pipeline View (Coming Soon)</div>} />
              <Route path="/contacts" element={<div className="p-6">Contacts (Coming Soon)</div>} />
              <Route path="/analytics" element={<div className="p-6">Analytics (Coming Soon)</div>} />
              <Route path="/settings" element={<div className="p-6">Settings (Coming Soon)</div>} />
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  )
}

export default App