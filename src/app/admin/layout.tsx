
'use client';

import {
  SidebarProvider,
  Sidebar,
  SidebarHeader,
  SidebarContent,
  SidebarFooter,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarTrigger,
  useSidebar,
} from "@/components/ui/sidebar"
import {
  LayoutDashboard,
  Newspaper,
  Users,
  Settings,
  MoreHorizontal,
  PanelLeft,
} from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { usePathname } from "next/navigation";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { useIsMobile } from "@/components/hooks/use-mobile";

function AdminSidebarContent() {
  const pathname = usePathname();
  const { state } = useSidebar();

  const menuItems = [
    { href: "/admin", icon: <LayoutDashboard />, text: "Resumen", tooltip: "Resumen" },
    { href: "/admin/content", icon: <Newspaper />, text: "Contenido", tooltip: "Contenido" },
    { href: "/admin/users", icon: <Users />, text: "Usuarios", tooltip: "Usuarios" },
    { href: "/admin/settings", icon: <Settings />, text: "Configuración", tooltip: "Configuración" },
  ];
  
  return (
    <>
      <SidebarHeader>
        <SidebarTrigger>
          <PanelLeft className="h-5 w-5" />
          <span className="sr-only">Toggle navigation menu</span>
        </SidebarTrigger>
      </SidebarHeader>
      <SidebarContent>
        <SidebarMenu>
          {menuItems.map((item) => (
            <SidebarMenuItem key={item.href}>
              <Link href={item.href}>
                <SidebarMenuButton tooltip={item.tooltip} isActive={pathname === item.href}>
                  {item.icon}
                  {state === 'expanded' && <span>{item.text}</span>}
                </SidebarMenuButton>
              </Link>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarContent>
      <SidebarFooter>
        <div className={cn("flex items-center gap-2 p-2 rounded-lg", state === 'collapsed' ? 'justify-center' : 'justify-between')}>
          <div className="flex items-center gap-2">
            <Avatar className="h-8 w-8">
              <AvatarImage src="https://picsum.photos/seed/author/48/48" alt="Admin" />
              <AvatarFallback>A</AvatarFallback>
            </Avatar>
            {state === 'expanded' && (
              <div className="flex flex-col">
                <span className="text-sm font-medium">Admin</span>
                <span className="text-xs text-muted-foreground">admin@devblog.com</span>
              </div>
            )}
          </div>
          {state === 'expanded' && (
            <Button variant="ghost" size="icon" className="h-8 w-8">
              <MoreHorizontal className="h-5 w-5 text-muted-foreground" />
            </Button>
          )}
        </div>
      </SidebarFooter>
    </>
  );
}

function AdminLayoutContent({ children }: { children: React.ReactNode }) {
  const isMobile = useIsMobile();
  const { state } = useSidebar();

  return (
    <div className="flex min-h-screen bg-background text-foreground pt-20">
      {isMobile ? (
        <Sheet>
          <main className="flex-1 flex flex-col">
            <header className="flex h-14 items-center gap-4 border-b bg-background px-4 lg:h-[60px] lg:px-6 fixed top-20 left-0 w-full z-10">
              <SheetTrigger asChild>
                <Button variant="outline" size="icon" className="shrink-0">
                  <PanelLeft className="h-5 w-5" />
                  <span className="sr-only">Toggle navigation menu</span>
                </Button>
              </SheetTrigger>
            </header>
            <div className="flex-1 overflow-auto p-4 sm:p-6 lg:p-8 mt-14">
              {children}
            </div>
          </main>
          <SheetContent side="left" className="flex flex-col p-0">
             <Sidebar>
              <AdminSidebarContent />
             </Sidebar>
          </SheetContent>
        </Sheet>
      ) : (
        <>
          <Sidebar>
            <AdminSidebarContent />
          </Sidebar>
          <main className={cn("flex-1 flex flex-col transition-[padding-left] duration-300 ease-in-out", state === 'expanded' ? 'lg:pl-64' : 'lg:pl-12' )}>
             <div className="flex-1 overflow-auto p-4 sm:p-6 lg:p-8">
                {children}
            </div>
          </main>
        </>
      )}
    </div>
  );
}

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <SidebarProvider>
      <AdminLayoutContent>{children}</AdminLayoutContent>
    </SidebarProvider>
  )
}
