import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
  } from "@/components/ui/sidebar"
import { SidebarRouteMenuInterface } from "@/interfaces/SidebarRouteMenuInterface/SideBarRouteMenuInterface";
import { MemberRoute, routeList } from "@/routes/RouteList";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
  
  export function AppSidebar() {

    const [sidebarCurrentMenu, setSidebarCurrentMenu] = useState<SidebarRouteMenuInterface[]>([]);

    useEffect(() => {
      const SidebarRouteMenu: SidebarRouteMenuInterface[] = [];
      MemberRoute.map((item) => {
        const routeListName = routeList.filter((element) =>
          element.children?.filter((ele) => ele.memberRoute === item.id)
        );
        routeListName.map((rou) => {
          SidebarRouteMenu.push({
            id: item.id,
            icon: item?.icon,
            role: item?.role,
            groupLabel: item.name,
            path: rou.path,
            children: rou?.children || [],
          });
        });
      });
  
      setSidebarCurrentMenu(SidebarRouteMenu);
    }, []);

    return (
      <Sidebar className="px-2">
        <SidebarHeader />
        <SidebarContent>
          <SidebarGroup />
          {sidebarCurrentMenu.map((item, index) => (
              <div key={index}>
                <SidebarGroupLabel>{item.groupLabel}</SidebarGroupLabel>
                <SidebarGroupContent>
                  <SidebarMenu>
                    {item.children &&
                      item.children?.map((childRou, i) => (
                        <SidebarMenuItem key={i}>
                          <SidebarMenuButton asChild isActive>
                            <NavLink to={childRou.path}>
                              {childRou.icon}
                              <span>{childRou.name}</span>
                            </NavLink>
                          </SidebarMenuButton>
                        </SidebarMenuItem>
                      ))}
                  </SidebarMenu>
                </SidebarGroupContent>
              </div>
            ))}
          <SidebarGroup />
        </SidebarContent>
        <SidebarFooter />
      </Sidebar>
    )
  }
  