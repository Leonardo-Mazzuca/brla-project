import { ReactNode } from "react";
import { Link } from "react-router-dom";
import TextModel from "../Text/Text";
import IconButton from "../Button/IconButton";


interface NavbarProps {

    classname?: string;
    headerItem? : ReactNode

}

interface ButtonItem {
    icon: ReactNode;
    onClick?: () => void
}

const buttonItems: ButtonItem[] = [
    { icon: <i className="fa-solid fa-gear text-lg md:text-2xl"></i>},
    { icon: <i className="fa-solid fa-user-large text-lg md:text-2xl"></i>},
];

const Navbar: React.FC<NavbarProps> = ({classname, headerItem}) => {



    return (
 
        <nav className={`bg-white border-gray-200 dark:bg-gray-900 ${classname}`}>
            
            <div className='flex 
            flex-wrap items-center justify-between mx-auto py-4
            
            '>


            <Link to="/Home">
                {headerItem}
            </Link>


              <div className='flex flex-wrap gap-10 items-center'>

                     <div className="md:flex md:items-center gap-3 hidden">

                        <TextModel content="Cotação hoje" />
                        
                        <TextModel color="gray-400 mt-1" size="text-1xl" content="1 BRL = 0.198220 USD"/>
                      
                    </div>  

                    <div className="flex flex-wrap flex-col sm:flex-row gap-3">

                        {buttonItems.map((item, index) => (

                            <IconButton text = {item.icon} key={index}/>

                        ))}


                    </div>

                    </div>

                    <div className="flex items-center flex-wrap gap-3 my-3 md:hidden">

                    <TextModel content="Cotação hoje" />

                    <TextModel color="gray-400 mt-1" size="text-lg" content="1 BRL = 0.198220 USD"/>

                    </div>  

                </div>
  
                <hr className="mt-10" />

        </nav>

    );

    
}

export default Navbar


