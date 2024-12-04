export interface RouteListInterface{
    path:string;
    name:string;
    element: JSX.Element;
    errorElement?: JSX.Element;
    icon?: JSX.Element;
    isSideBarMenu:boolean;
    isPrivate:boolean;
    role?:string;
    children?:[ChildRouteListInterface]
}



export interface ChildRouteListInterface{
    path:string;
    name:string;
    element: JSX.Element;
    errorElement?: JSX.Element;
    icon?: JSX.Element;
    memberRoute?:number;
    isSideBarMenu:boolean;
    isPrivate:boolean;
    role?:string;
    children?:[ChildRouteListInterface]
}



export interface MemberRouteInterface{
    id:number;
    name:string;
    role?:Array<string>
}