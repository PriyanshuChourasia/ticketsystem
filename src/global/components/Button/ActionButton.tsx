import { ColorRing } from "react-loader-spinner";

interface ActionProps{
    onHandleClick?:() => void;
    type:"button" | "submit" | "reset";
    name?:string;
    icon?:JSX.Element;
    className?:string;
    isLoading?:boolean;
    ringColor?:string;
}



const ActionButton: React.FC<ActionProps> = ({
    onHandleClick,
    type,
    name,
    icon,
    className,
    isLoading,
    ringColor
}) =>{
    return(
        <button
        onClick={onHandleClick} 
        type={type}
        className={className}
        disabled={isLoading}
        >
            {
                isLoading ?
                <ColorRing
                visible={true}
                height={26}
                width={26}
                ariaLabel="color-ring-loading"
                wrapperClass="color-ring-wrapper"
                colors={[`${ringColor}`, `${ringColor}`, `${ringColor}`, `${ringColor}`,`${ringColor}`]}
                />
                :
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