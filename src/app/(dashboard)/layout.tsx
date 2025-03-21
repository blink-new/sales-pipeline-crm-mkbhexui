import { MainNav } from "@/components/main-nav"

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex min-h-screen">
      <div className="fixed inset-y-0 z-50 flex w-56 flex-col border-r bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="flex h-16 items-center border-b px-6">
          <span className="text-lg font-semibold">Pipeline CRM</span>
        </div>
        <div className="flex-1 overflow-auto p-4">
          <MainNav />
        </div>
      </div>
      <div className="flex-1 pl-56">
        <div className="h-16 border-b" />
        <main className="container py-6">{children}</main>
      </div>
    </div>
  )
}