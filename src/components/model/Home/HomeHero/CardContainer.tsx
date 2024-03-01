import Heading from "../../Heading/Heading";
import TextModel from "../../Text/Text";


interface CardPattern {

    flag: string;
    countryMoney: string;
    text: string;
    balance: string;
    alt: string

}

const cardItems: CardPattern[] = [

    {flag: "brazil-flag.svg", alt: "Brazilian flag", countryMoney: "Brazillian Real", text: "BRL 1,00 = USDT 0,20", balance: "1.230,23"},
    {flag: "eua-flag.svg", alt: "E.U.A flag", countryMoney: "Dólar americano", text: "1.00 USDT = BRL 4,93", balance: "244,69"},
    {flag: "euro-flag.svg", alt: "Euro flag", countryMoney: "Euro", text: "1.00 USDT = BRL 4,93", balance: "162.23"},

]


const CardContainer: React.FC = () => {
    return (
        <section className="flex flex-wrap gap-5 w-full">

            
            {cardItems.map((item, index) => (
                
                <div
                    key={index}
                    className="
                    bg-gradient-to-br from-white via-slate-50 to-slate-100 rounded-xl px-7 
                    py-10 flex flex-col justify-between flex-1"
                >
                    <div className="flex items-center gap-3 mb-4">
                        <img src={item.flag} alt={item.alt} className="w-12" />
                        <TextModel size="text-3xl" addons="font-semibold" content={item.countryMoney} />
                    </div>
                    <div className="flex flex-col">
                        <TextModel color="gray-400" content={item.text} addons="mb-2" />
                        <Heading color="gray-600" content={item.balance} />
                    </div>
                </div>
            ))}
            
        </section>
    );
};


export default CardContainer;