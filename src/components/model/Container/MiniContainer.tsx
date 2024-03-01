import ContainerModel from "../../types/ContainerModel/ContainerModel";



const MiniContainer: React.FC<ContainerModel> = ({children}) => {
    return (
        <section className="mx-auto w-full xl:w-2/4 flex flex-col items-start gap-6 justify-center">
            {children}
        </section>
    );
}

export default MiniContainer;