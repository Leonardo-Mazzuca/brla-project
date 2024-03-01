
import ContainerStandart from "../Container/SuperContainer";
import Logo from "../Logo/Logo";
import Navbar from "../Navbar/Navbar";
import TransactionsValues from "../Transactions/TransactionsContainer";
import HomeHero from "./HomeHero/HomeHero";
import TransactionButtons from "../Transactions/TransactionsMenu/TransactionButtons";
import Charts from "../Charts/ChartsContainer";



const Home: React.FC = () => {

    const linkContent = <>
    Ver todas
    <i className="fa-solid fa-arrow-up-right-from-square ms-3"></i>
    </>;

    return (

        <ContainerStandart>

            <Navbar headerItem = {<Logo />}/>
            <HomeHero />
            <TransactionsValues linkContent = {linkContent} linkPath="/Transactions" linkIsEnable={true}>
                <TransactionButtons />
            </TransactionsValues>
            
            
            <Charts />

        </ContainerStandart>

    )


}

export default Home;