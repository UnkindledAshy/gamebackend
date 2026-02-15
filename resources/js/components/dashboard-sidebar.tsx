import * as React from "react"
import { VersionSwitcher } from "@/components/settingoptions"
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar"
import { title } from "process"
import { url } from "inspector"

const data = {
  options: [
    {
    title: "settings",
    url: "/settings/appearance",
  }, 
   {
    title: "profile",
    url: "/settings/profile",
 }, 
  {
    title: "sign out",
    url: "/settings/logout",
  },
  ],
  navMain: [
    {
      title: "Dashboard",
      url: "/dashboard",
      items: [
        {
          title: "Posts",
          url: "/posts",
          isActive: true,
        },
        {
          title: "Users",
          url: "/users",
          isActive: false,
        },
        {
          title: "Analytics",
          url: "/users",
          isActive: false,
        },
      ],
    },
    
    
  ],
}

export default function DashboardSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar {...props}>
      <SidebarHeader>
        <VersionSwitcher
          options={data.options.map((option) => option.title)}
          defaultVersion={data.options[0].title
          }
        />
      </SidebarHeader>
      <SidebarContent>
        {/* We create a SidebarGroup for each parent. */}
        {data.navMain.map((item) => (
          <SidebarGroup key={item.title}>
            <SidebarGroupLabel>{item.title}</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {item.items.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild isActive={item.isActive}>
                      <a href={item.url}>{item.title}</a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        ))}
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  )
}
