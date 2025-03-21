import { Bell, Search, User } from 'lucide-react'

export function Header() {
  return (
    <header className="bg-gray-900 border-b border-gray-800">
      <div className="flex items-center justify-between h-16 px-6">
        <div className="flex-1 flex items-center">
          <div className="flex items-center bg-gray-800 rounded-lg px-3 py-2 w-96">
            <Search className="h-5 w-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search..."
              className="ml-2 bg-transparent border-none focus:outline-none text-white w-full"
            />
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <button className="text-gray-400 hover:text-white">
            <Bell className="h-5 w-5" />
          </button>
          <button className="flex items-center text-sm text-white">
            <User className="h-8 w-8 rounded-full bg-gray-800 p-1" />
          </button>
        </div>
      </div>
    </header>
  )
}