import { useState } from 'react'
import { LucideIcon, Home, PieChart, Users, FolderKanban, Settings, Bell, Search } from 'lucide-react'

interface NavItem {
  icon: LucideIcon
  label: string
  href: string
}

const navItems: NavItem[] = [
  { icon: Home, label: 'Dashboard', href: '/' },
  { icon: FolderKanban, label: 'Pipeline', href: '/pipeline' },
  { icon: Users, label: 'Contacts', href: '/contacts' },
  { icon: PieChart, label: 'Analytics', href: '/analytics' },
  { icon: Settings, label: 'Settings', href: '/settings' },
]

function App() {
  const [activeNav, setActiveNav] = useState('/')

  return (
    <div className="min-h-screen bg-background">
      {/* Sidebar */}
      <aside className="fixed left-0 top-0 z-40 h-screen w-64 border-r bg-card">
        <div className="flex h-16 items-center border-b px-6">
          <h1 className="text-xl font-bold">Sales CRM</h1>
        </div>
        <nav className="space-y-1 p-4">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={(e) => {
                e.preventDefault()
                setActiveNav(item.href)
              }}
              className={`flex items-center space-x-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                activeNav === item.href
                  ? 'bg-secondary text-secondary-foreground'
                  : 'text-muted-foreground hover:bg-secondary/50'
              }`}
            >
              <item.icon className="h-4 w-4" />
              <span>{item.label}</span>
            </a>
          ))}
        </nav>
      </aside>

      {/* Main Content */}
      <div className="pl-64">
        {/* Header */}
        <header className="sticky top-0 z-30 flex h-16 items-center justify-between border-b bg-card px-6">
          <div className="flex items-center space-x-4">
            <div className="relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <input
                type="search"
                placeholder="Search..."
                className="h-9 rounded-md border bg-background pl-8 pr-3 text-sm focus:outline-none focus:ring-1"
              />
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <button className="relative rounded-full p-2 hover:bg-secondary">
              <Bell className="h-5 w-5" />
              <span className="absolute right-1 top-1 h-2 w-2 rounded-full bg-destructive" />
            </button>
            <div className="h-8 w-8 rounded-full bg-secondary" />
          </div>
        </header>

        {/* Dashboard Content */}
        <main className="p-6">
          <div className="grid gap-6">
            <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              {/* Metric Cards */}
              {['Total Deals', 'Active Deals', 'Won This Month', 'Pipeline Value'].map((metric) => (
                <div key={metric} className="rounded-lg border bg-card p-6">
                  <div className="text-sm font-medium text-muted-foreground">{metric}</div>
                  <div className="mt-2 text-2xl font-bold">
                    {metric.includes('Value') ? '$125,000' : '24'}
                  </div>
                  <div className="mt-1 text-xs text-muted-foreground">+12% from last month</div>
                </div>
              ))}
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}

export default App