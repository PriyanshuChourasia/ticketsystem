import { SiPaloaltosoftware } from "react-icons/si";
import { FaUserAlt } from "react-icons/fa";
import AppColor from "../color/AppColor";
import { TbPasswordUser } from "react-icons/tb";
import { IoTicketSharp } from "react-icons/io5";
import { IoClose } from "react-icons/io5";



const Icons = {
    softwareIcon:<SiPaloaltosoftware size={24} color="blue" />,
    userIcon:<FaUserAlt size={14} color={AppColor.black} />,
    passwordIcon:<TbPasswordUser size={16} color={AppColor.black} />,
    ticketIcon:<IoTicketSharp size={22} color={AppColor.black} />,
    closeIcon:<IoClose size={22} color={AppColor.black} />

}




export default Icons;