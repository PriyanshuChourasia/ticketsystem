import { AppSidebar } from "@/components/app-sidebar"
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider className="flex">
      <AppSidebar />
      <main className="w-full">
        <div className="py-3 bg-white w-full">
        <SidebarTrigger />
        </div>
        <div className="px-4 py-2">
        {children}
        </div>
      </main>
    </SidebarProvider>
  )
}
