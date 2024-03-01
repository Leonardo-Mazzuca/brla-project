import { ReactNode } from "react";
import ValuesProps from "../../../types/Values/Values";
import TextModel from "../../Text/Text";


const transactionMap: Record<ValuesProps["type"], { icon: string; text: ReactNode }> = {

    receive: { icon: 'fa-solid fa-plus', text: <p className="bg-green-400/50 rounded-xl p-2">+ R$ 123,22</p> },

    send: { icon: 'fa-solid fa-arrow-up', text: "- R$ 123,22" },

    convert: { icon: 'fa-solid fa-arrow-right-arrow-left', text: <p>R$ 12,33 <i className="mx-2 fa-solid fa-arrow-right"></i> $2,11</p> }
};

const ValuesCard: React.FC<ValuesProps> = ({ type }) => {
    const { icon, text } = transactionMap[type]; 

    return (

        <div className="w-full flex flex-col">

            <article className="flex justify-between items-center flex-col md:flex-row">

                <div className="flex items-center justify-between md:justify-normal w-full gap-5">

                    <div className="border border-black rounded-full py-5 px-6">
                        <i className={`${icon} text-3xl`}></i>
                    </div>

                    <div className="text-start">
                        <TextModel color="gray-700" content="Mazzuca" />
                        <TextModel color="gray-400" content="30/02/2024" />
                    </div>

                </div>

                <div className="flex items-center md:items-end md:flex-col w-full 
                 flex-row justify-between md:justify-normal flex-wrap">

                    <TextModel size="text-3xl" weight="font-bold" 
                    addons="w-auto my-3 text-green-700" 
                    content={text} />

                    <TextModel content="Transferencia feita para 0975482" />
                    
                </div>

            </article>

            <hr className="mt-10" />

        </div>

    );
}

export default ValuesCard;
