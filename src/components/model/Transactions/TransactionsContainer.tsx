import TransactionProps from "../../types/Transactions/TransactionsProps";
import MiniMenu from "./MiniMenu/MiniMenu";
import ValuesArrival from "./ValuesArrival/ValuesArrival";





const TransactionsValues: React.FC<TransactionProps> = 
    ({linkIsEnable, children, linkPath, headingColReverse,linkContent}) => {


    return (

        <section className="my-16">

            <MiniMenu 
            linkPath={linkPath} 
            headingColReverse ={headingColReverse} 
            linkIsEnable={linkIsEnable}
            children = {children} 
            linkContent = {linkContent}
            />
            


            <ValuesArrival />

        </section>

    )
}

export default TransactionsValues;