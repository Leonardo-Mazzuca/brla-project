
import Heading from "../../Heading/Heading";
import TextModel from "../../Text/Text";
import CardContainer from "./CardContainer";



const HomeHero: React.FC = () => {

    return (

        <section className="mt-20 flex flex-col h-auto gap-3">

            <div className="flex flex-wrap itens-end gap-5">
                <TextModel addons="mt-4" content="Balanço total:" />
                <Heading content="R$ 3.460,46" />
            </div>

            <CardContainer />
        

        </section>

    );
}

export default HomeHero;