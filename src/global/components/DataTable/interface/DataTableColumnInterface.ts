import  { Column, ColumnMeta } from "@tanstack/react-table"



export interface DataTableColumnInterface<TData>{
    id?:string;
    accessorKey: string | keyof TData;
    // accessorFn?:(originalRow:TData, index:number) => any;
    header?: | string | ((props:{
        table: any,
        header: any,
        column: Column<TData>
    }) => unknown);
    cell?: | string | ((props:{
        table: any,
        row: any,
        column: Column<TData>,
        getValue:()=> any,
        renderValue:()=> any
    })=> unknown),
    meta?: ColumnMeta<TData,unknown>
}