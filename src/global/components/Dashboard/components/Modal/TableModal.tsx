import Icons from "../../../../icons/Icon";
import "./Modal.css";


interface TableModalProps{
    headerName:string;
    setCloseModal:(show:boolean)=> void;
    children?:any;
}




const TableModal: React.FC<TableModalProps> = ({headerName,setCloseModal,children}) => {
  return (
    <div className="container w-full">
      <div className="border-2 border-black">
        <div className="flex justify-between px-3 py-2 bg-gray-100 border-b-2 border-black">
            <h2>
                {headerName}
            </h2>
            <span className="cursor-pointer" onClick={()=> setCloseModal(false)}>
                {Icons.closeIcon}
            </span>
        </div>
        <div className="bg-white">
        {children}
        </div>
      </div>
    </div>
  )
}

export default TableModal
