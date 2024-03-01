import { Link } from "react-router-dom";
import ContainerService from "../../Container/ContainerService";
import MiniContainer from "../../Container/MiniContainer";
import TextModel from "../../Text/Text";
import Button from "../../Button/Button";
import Heading from "../../Heading/Heading";






const Pix: React.FC = () => {




    const copyPasteInput =  <div className="flex items-center">

        <div className="relative w-full py-7">
        <input readOnly  value={"1221232323"} className="py-7"/>
        </div>

        <button id="copy-number" data-copy-to-clipboard-target="phone-numbers" data-tooltip-target="tooltip-phone" className="flex-shrink-0 z-10 inline-flex items-center py-7 px-4 text-sm font-medium text-center text-gray-500 dark:text-gray-400 hover:text-gray-900 bg-gray-100 border border-gray-300 rounded-e-lg hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700 dark:hover:text-white dark:border-gray-600" type="button">
            <svg id="copy-icon" className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 20">
                <path d="M16 1h-3.278A1.992 1.992 0 0 0 11 0H7a1.993 1.993 0 0 0-1.722 1H2a2 2 0 0 0-2 2v15a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2Zm-3 14H5a1 1 0 0 1 0-2h8a1 1 0 0 1 0 2Zm0-4H5a1 1 0 0 1 0-2h8a1 1 0 1 1 0 2Zm0-5H5a1 1 0 0 1 0-2h2V2h4v2h2a1 1 0 1 1 0 2Z"/>
            </svg>
            <svg id="copy-icon-success" className="w-4 h-4 hidden" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 20">
                <path d="M16 1h-3.278A1.992 1.992 0 0 0 11 0H7a1.993 1.993 0 0 0-1.722 1H2a2 2 0 0 0-2 2v15a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2ZM7 2h4v3H7V2Zm5.7 8.289-3.975 3.857a1 1 0 0 1-1.393 0L5.3 12.182a1.002 1.002 0 1 1 1.4-1.436l1.328 1.289 3.28-3.181a1 1 0 1 1 1.392 1.435Z"/>
            </svg>
        </button>

            <div id="tooltip-phone" role="tooltip" className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
                <span id="tooltip-text">Copy number</span>
                <span id="tooltip-text-success">Copied!</span>
                <div className="tooltip-arrow" data-popper-arrow></div>
            </div>

        </div>
    return (

        <ContainerService path="/Home" linkText="Dashboard">


                    <MiniContainer>
                            <Link to={'/Deposit'}>
                                <TextModel content = {

                                    <>
                                    <i className="mx-2 fa-regular fa-circle-left"></i>
                                    Voltar
                                    </>


                                } />
                            </Link>

                            <div className="w-full mb-5">

                                <div className="flex w-full md:flex-row flex-col
                                 items-center gap-8">
                
                                    <div className="flex flex-col text-start gap-12">
                                        <Heading size="text-3xl" content = "Escaneie  o QR code ou utilize a chave pix" />
                                        <TextModel content = "Em alguns segundos o seu saldo estará disponível." />
                                        <TextModel size="text-sm" content = "Confira nossa política de termos e serviços aqui Fique atento também à nossa política de Compliance, AML e CFT" />
        
                                    </div>

                                    <div className="flex flex-col items-center gap-5">
                                        <img src="/qrcode-frame.svg" alt="QR Code image" className="w-full"/>
                                        {copyPasteInput}

                                    </div>

                                    
                                </div>
    

                                <Button text = {<>
                                Concluir
                                <i className="mx-2 fa-solid fa-arrow-right"></i>
                                </>} />

                            </div>

                           


                    </MiniContainer>

            
        </ContainerService>
    )
}

export default Pix;