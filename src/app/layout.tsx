import { AppSidebar } from "@/components/app-sidebar"
import { SidebarProvider } from "@/components/ui/sidebar"
import Header from "@/global/components/Header/Header"

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider className="flex">
      <AppSidebar />
      <main className="w-full">
        <Header/>
        <div className="px-4 py-2">
        {children}
        </div>
      </main>
    </SidebarProvider>
  )
}
