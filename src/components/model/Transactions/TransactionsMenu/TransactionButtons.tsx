import { ReactNode } from "react";
import IconButton from "../../Button/IconButton";
import TextModel from "../../Text/Text";
import { useNavigate } from "react-router-dom";

interface TransactionItemProps {
    content: string;
    icon: ReactNode;
    link: string;
}


const transactionItems: TransactionItemProps[] = [

    {content: 'Depositar', icon: <i className="fa-solid fa-plus text-4xl"></i>, link: '/Deposit'},
    {content: 'Transferir', icon: <i className="fa-solid fa-arrow-up text-4xl"></i>, link: ''},
    {content: 'Converter', icon: <i className="fa-solid fa-arrow-right-arrow-left text-4xl"></i>, link: ''},

]

const TransactionButtons: React.FC = () => {


    const navigate = useNavigate();

    return (
        <section 
        className="flex items-center 
        gap-12 flex-wrap lg:w-auto w-full justify-between">
        

             {transactionItems.map((item,index)=> {

                return (
                <div className="flex flex-col items-center gap-2 flex-1" key={index}>

                    <IconButton classname="w-full md:w-auto" text = {item.icon}
                     onClick={() => navigate(item.link)} />

                    <TextModel color="gray-800" content = {item.content} />
                    
                </div>
                );

             })}
            


        </section>
    )
};

export default TransactionButtons;