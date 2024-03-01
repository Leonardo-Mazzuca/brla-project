
import ValuesCard from "./ValuesCard";




const ValuesArrival: React.FC = () => {
    return (
        <section className="flex flex-col w-full items-center gap-10 py-5 overflow-y-scroll h-1/2 md:h-full">

            <ValuesCard type="receive" />
            <ValuesCard type="send"/>
            <ValuesCard type="convert"/>

        </section>
    );
}

export default ValuesArrival
