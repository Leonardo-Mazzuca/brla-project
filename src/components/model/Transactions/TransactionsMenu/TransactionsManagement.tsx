import InputDate from "../../Input/InputDate";
import InputExport from "../../Input/InputExport";
import InputSearch from "../../Input/InputSearch";




const TransactionsManagement: React.FC = () => {
    return (

        <section className="flex flex-col md:flex-row 
         flex-wrap gap-5 items-end justify-between mt-5 w-full lg:w-auto">

                <div className="w-full xl:w-auto">

                    <InputSearch />     

                </div>

                <div className="flex flex-wrap gap-5 md:w-auto w-full flex-1">

                    
                    <InputDate />

                    <InputExport />

                </div>

             

                

        
             
        </section>
    )
}

export default TransactionsManagement;