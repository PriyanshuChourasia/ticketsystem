import ReactDataTable from "@/global/components/DataTable/DataTable";
import { useGetAllUserType } from "../hooks/get-user-type-hooks";
import { DataTableColumnInterface } from "@/global/components/DataTable/interface/DataTableColumnInterface";
import { IUserTypeInterface } from "../interface/UserTypeInterface";

const DataTable = () =>{
    const {data} = useGetAllUserType();

    const columns:DataTableColumnInterface<IUserTypeInterface>[]=[
        {
            accessorKey:"",
            header:"ID",
            cell:(props) => <>{props.row.index +1}</>
        },
        {
            accessorKey:"name",
            header:"User Type",
            cell:(props)=><>{props.getValue()}</>
        }
    ]


    return(
        <>
            <ReactDataTable columns={columns} data={data ? data.data.data : []} />
        </>
    )
}


export default DataTable;