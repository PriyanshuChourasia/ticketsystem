import {
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { DataTableColumnInterface } from "./interface/DataTableColumnInterface";

interface DataTableInterface {
  data: any[];
  columns: DataTableColumnInterface<any>[];
}

const ReactDataTable: React.FC<DataTableInterface> = ({ data, columns }) => {
  const table = useReactTable({
    data,
    columns: columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <>
      <div>
        <table>
          <thead>
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <th key={header.id} colSpan={header.colSpan}>
                      {header.isPlaceholder ? null : (
                        <div
                          {...{
                            className: header.column.getCanSort()
                              ? "cursor-pointer select-none"
                              : "",
                            onClick: header.column.getToggleGroupingHandler(),
                          }}
                        >
                          {flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                          {{
                            asc: "🔼",
                            desc: "🔽",
                          }[header.column.getIsSorted() as string] ?? null}
                          {header.column.getCanFilter() ? <div></div> : null}
                        </div>
                      )}
                    </th>
                  );
                })}
              </tr>
            ))}
          </thead>
          <tbody>
            {
              table.getRowModel().rows.map(row => {
                return(
                  <tr key={row.id}>
                    {
                      row.getVisibleCells().map(cell=> {
                        return(
                          <td key={cell.id}>
                            {
                              flexRender(cell.column.columnDef.cell,
                                cell.getContext()
                              )
                            }
                          </td>
                        )
                      })
                    }
                  </tr>
                )
              })
            }
          </tbody>
        </table>
      </div>
    </>
  );
};

export default ReactDataTable;
