import { Link } from "react-router-dom";
import {
  Users,
  BarChart3,
  DollarSign,
  Calendar,
  Settings,
  Home,
} from "lucide-react";

const navigation = [
  { name: "Dashboard", href: "/", icon: Home },
  { name: "Contacts", href: "/contacts", icon: Users },
  { name: "Deals", href: "/deals", icon: DollarSign },
  { name: "Calendar", href: "/calendar", icon: Calendar },
  { name: "Reports", href: "/reports", icon: BarChart3 },
  { name: "Settings", href: "/settings", icon: Settings },
];

export function Sidebar() {
  return (
    <div className="flex h-full w-64 flex-col bg-zinc-900">
      <div className="flex h-16 items-center px-6">
        <h1 className="text-xl font-bold text-white">Modern CRM</h1>
      </div>
      <nav className="flex-1 space-y-1 px-3 py-4">
        {navigation.map((item) => (
          <Link
            key={item.name}
            to={item.href}
            className="group flex items-center rounded-lg px-3 py-2 text-sm font-medium text-zinc-300 hover:bg-zinc-800 hover:text-white"
          >
            <item.icon className="mr-3 h-5 w-5" />
            {item.name}
          </Link>
        ))}
      </nav>
    </div>
  );
}