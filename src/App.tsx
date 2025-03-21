import { BrowserRouter as Router } from 'react-router-dom';
import { Sidebar } from './components/layout/sidebar';
import { Dashboard } from './pages/dashboard';

export default function App() {
  return (
    <Router>
      <div className="flex h-screen bg-zinc-50 dark:bg-zinc-900">
        <Sidebar />
        <main className="flex-1 overflow-y-auto p-8">
          <Dashboard />
        </main>
      </div>
    </Router>
  );
}