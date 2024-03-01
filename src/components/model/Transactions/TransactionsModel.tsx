import ContainerStandart from "../Container/SuperContainer";
import TransactionsValues from "./TransactionsContainer"
import TransactionsManagement from "./TransactionsMenu/TransactionsManagement";


const Transactions: React.FC = () => {



    const linkContent = <>
    
        <i className="fa-solid fa-circle-arrow-left mx-2"></i>
        Voltar
    
     </>;
    

    return (

        <ContainerStandart>

            <TransactionsValues linkContent = {linkContent} headingColReverse = {true} linkIsEnable = {true}
            linkPath="/Home"
            >
                    <TransactionsManagement />

            </TransactionsValues>


        </ContainerStandart>

    );

}

export default Transactions;