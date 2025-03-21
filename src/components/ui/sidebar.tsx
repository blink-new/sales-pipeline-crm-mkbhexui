import { Home, Users, PieChart, Settings, Briefcase } from 'lucide-react'
import { Link, useLocation } from 'react-router-dom'

const navigation = [
  { name: 'Dashboard', href: '/', icon: Home },
  { name: 'Pipeline', href: '/pipeline', icon: Briefcase },
  { name: 'Contacts', href: '/contacts', icon: Users },
  { name: 'Analytics', href: '/analytics', icon: PieChart },
  { name: 'Settings', href: '/settings', icon: Settings },
]

export function Sidebar() {
  const location = useLocation()

  return (
    <div className="flex h-full w-[240px] flex-col border-r border-gray-800 bg-gray-950">
      <div className="flex h-16 items-center px-6">
        <h1 className="text-xl font-semibold text-white">Sales CRM</h1>
      </div>
      <nav className="flex-1 space-y-1 px-3 py-4">
        {navigation.map((item) => {
          const isActive = location.pathname === item.href
          const Icon = item.icon
          return (
            <Link
              key={item.name}
              to={item.href}
              className={`group flex items-center rounded-lg px-3 py-2 text-sm font-medium ${
                isActive
                  ? 'bg-gray-800 text-white'
                  : 'text-gray-400 hover:bg-gray-800 hover:text-white'
              }`}
            >
              <Icon
                className={`mr-3 h-5 w-5 flex-shrink-0 ${
                  isActive ? 'text-white' : 'text-gray-400 group-hover:text-white'
                }`}
              />
              {item.name}
            </Link>
          )
        })}
      </nav>
    </div>
  )
}