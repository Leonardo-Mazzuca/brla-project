import { ReactNode } from "react";



type ButtonProps = {
    text: string | ReactNode;
    background? : string
    type?: "button" | "submit";
    textColor? : string
    hover? : string
    onClick? : () => void
    classname? : string;

}

export default ButtonProps;