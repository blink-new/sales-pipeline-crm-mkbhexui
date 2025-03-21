export function Dashboard() {
  return (
    <div>
      <h1 className="text-2xl font-bold text-white mb-6">Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {['Total Customers', 'Active Deals', 'Revenue', 'Tasks'].map((title) => (
          <div
            key={title}
            className="bg-gray-900 rounded-xl p-6 border border-gray-800"
          >
            <h3 className="text-gray-400 text-sm font-medium">{title}</h3>
            <p className="text-2xl font-semibold text-white mt-2">0</p>
          </div>
        ))}
      </div>
    </div>
  )
}