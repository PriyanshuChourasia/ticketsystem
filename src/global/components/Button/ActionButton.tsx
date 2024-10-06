

interface ActionProps{
    onHandleClick?:() => void;
    type:"button" | "submit" | "reset";
    name?:string;
    icon?:JSX.Element;
    className?:string;
}



const ActionButton: React.FC<ActionProps> = ({
    onHandleClick,
    type,
    name,
    icon,
    className
}) =>{
    return(
        <button 
        onClick={onHandleClick} 
        type={type}
        className={className}
        >
            {
                name && icon ?
                <span>{icon}{' '}{name}</span>
                :
                name ?
                <span>{name}</span>
                :
                icon ?
                <span>{icon}</span>
                :
                <span>Button</span>
            }
        </button>
    )
}


export default ActionButton;