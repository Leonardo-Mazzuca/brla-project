import { BrowserRouter, Route, Routes } from "react-router-dom"
import LoginView from "../components/view/LoginView/LoginView";
import RegisterDataView from "../components/view/RegisterView/FormStep1View";
import RegisterAdressView from "../components/view/RegisterView/FormStep2View";
import ConfirmEmailView from "../components/view/RegisterView/FormStep3View";
import CreatePassView from "../components/view/RegisterView/FormStep4View";
import HomeView from "../components/view/HomeView/HomeView";
import TransactionsView from "../components/view/TransactionsView/TransactionsView";
import DepositView from "../components/view/DepositView/DepositView";
import PixView from "../components/view/DepositView/PixView";



const AppRoutes = () => {
    return (
        <BrowserRouter>

            <Routes>
                
                <Route path="/" element = {<LoginView />}/>
                <Route path="/step1" element = {<RegisterDataView />}/>
                <Route path="/step2" element = {<RegisterAdressView />}/>
                <Route path="/step3" element = {<ConfirmEmailView />}/>
                <Route path="/step4" element = {<CreatePassView />}/>
                <Route path="/Home" element = {<HomeView />}/>
                <Route path="/Transactions" element = {<TransactionsView />}/>
                <Route path="/Deposit" element = {<DepositView />}/>
                <Route path="/Pix" element = {<PixView />}/>

                
            </Routes>

        </BrowserRouter>
    )
}

export default AppRoutes;