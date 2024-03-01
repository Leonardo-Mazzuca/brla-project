import ContainerModel from "../../types/ContainerModel/ContainerModel";




const ContainerStandart: React.FC<ContainerModel> = ({children}) => {


    return (

        <section 
        style={{height: '100vh'}}
        className="flex flex-col w-full py-10 lg:px-52 p-5">

            {children}

        </section>

    );



}

export default ContainerStandart;