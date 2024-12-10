import  { CreateUserType, UserTypeDashboard } from "../features/admin/features/UserType/UserType";
import { MemberRouteInterface, RouteListInterface } from "../interfaces/RouteListInterface/RouteListInterface";
import AppDashboard from "../views/app/dashboard/AppDashboard";
import Login from "../views/auth/Login";

export const MemberRoute: MemberRouteInterface[]=[
    {
        id:0,
        name:'Users',
        role:['admin']
    },
]




export const routeList:RouteListInterface[] = [
    {
        path: "/",
        element: <Login />,
        name: "",
        isSideBarMenu: false,
        isPrivate: false,
    },
    {
        path: "/",
        name: "App",
        element: <AppDashboard/>,
        isSideBarMenu: false,
        isPrivate: true,
        children:[
            {
                path:"user_types",
                name:"User Type",
                element: <UserTypeDashboard/>,
                memberRoute:0,
                isSideBarMenu:true,
                isPrivate:true,
                children:[
                    {
                        path: ":id",
                        name: "Create User Type",
                        element: <CreateUserType />,
                        isSideBarMenu: false,
                        isPrivate: true,
                    }
                ]
            }
        ]
    },
    {
        path: "*",
        name: "",
        element: <div>Error stack clear</div>,
        isSideBarMenu: false,
        isPrivate: false
    }
];