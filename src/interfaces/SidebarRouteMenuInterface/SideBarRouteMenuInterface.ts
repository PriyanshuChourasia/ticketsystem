export interface SidebarRouteMenuInterface{
    id:number,
    groupLabel:string;
    path:string;
    icon?: JSX.Element;
    role?: Array<string>;
    children?:any[]
}