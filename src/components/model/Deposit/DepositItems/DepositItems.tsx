import { useNavigate } from "react-router-dom";
import MiniContainer from "../../Container/MiniContainer"
import Heading from "../../Heading/Heading";
import TextModel from "../../Text/Text";



interface CardComponents {

    text: string;
    image: string;
    title: string;
    path: string;

}



const cardLinks: CardComponents[] = [
    {text: 'Envie o valor que desejar', image: '/qrcode.svg', title: 'PIX',  path : '/Pix'},
    {text: 'BRLA E USDT apenas.', image: '/polligon.svg', title: 'Endereço Polygon', path : '/Polygon'},
];


const DepositItems: React.FC = () => {

    const navigate = useNavigate();

    const Card: React.FC<CardComponents> = ({text, image, title,path}) => {
        return (

            <div
             className="border border-gray-200 rounded-lg flex items-center justify-between gap-5 w-full p-5 py-10 group hover:shadow-xl hover:transition-all"
             onClick={() => navigate(path)}
             >

                <div className="text-start flex items-center">


                    <img src={image} alt="Icon image" className="mx-2 w-16" />
                    <div>
                        <Heading size="text-3xl" content={title} />
                        <TextModel content={text} />
                    </div>

                </div>
                <div className="group-hover:opacity-100 opacity-0 transition-opacity">
                    <i className="fa-solid fa-arrow-right text-4xl hover:rotate-45"></i>
                </div>
            </div>

        );
        
    }


    return (

        <MiniContainer>
            <Heading size="text-4xl" content = "Saldo na sua conta em instântes!" />
            
            <TextModel content = "Selecione uma das opções e leia as instruções.  O seu saldo ficará disponível segundos após o envio" />

            {cardLinks.map((item, index) => {
                return (
                   <Card {...item} key={index} />
                )
            })}

        </MiniContainer>
    );
}

export default DepositItems;