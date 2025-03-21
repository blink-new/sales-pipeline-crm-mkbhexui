import { Bell, Search } from 'lucide-react'

export function Header() {
  return (
    <header className="flex h-16 items-center justify-between border-b border-gray-800 bg-gray-950 px-6">
      <div className="flex items-center gap-4">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search..."
            className="h-9 w-[300px] rounded-lg bg-gray-900 pl-9 pr-4 text-sm text-gray-300 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>
      <div className="flex items-center gap-4">
        <button className="rounded-lg p-2 text-gray-400 hover:bg-gray-800 hover:text-white">
          <Bell className="h-5 w-5" />
        </button>
        <div className="h-8 w-8 rounded-full bg-gray-800">
          <img
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            alt="User"
            className="h-full w-full rounded-full object-cover"
          />
        </div>
      </div>
    </header>
  )
}